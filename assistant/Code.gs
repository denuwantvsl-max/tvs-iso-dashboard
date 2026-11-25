/**
 * TVS ISO Dashboard - Assistant (Apps Script web app, standalone).
 * The public dashboard (GitHub Pages) POSTs {q, history} here; this script answers with the FREE Gemini API using:
 *   1. the text and links of every dashboard page (read from the live site), and
 *   2. the list of files in the "ISO DASHBOARD" Drive folder (names, folder path, links).
 * Since 2026-11-23 the site has a username + PIN login (see "login + access log"): every call except login needs a
 * token, and logins, page views and questions are written to the Access sheet. Daily / per-minute limits stay.
 * Script Properties: GEMINI_API_KEY (typed by Denuwan), SHEET_ID (set by setupAccess), optional GEMINI_MODEL, DAILY_LIMIT.
 * Nothing secret lives in this file.
 */

var SITE = 'https://denuwantvsl-max.github.io/tvs-iso-dashboard/';
var PAGES = ['index.html', 'statutory-certificates.html', 'factory-engineer-certifications.html', 'ncr-register.html',
  'mrm.html', 'calibration.html', 'clauses.html', 'audit-history.html', 'department-objectives.html'];
var DRIVE_ROOT = '1fI8lnC75AIHqGL_A47RscJQQVcNP-9Ax';   // ISO DASHBOARD
var KNOW_VER = '20261125';   // change to make the assistant re-read the site and Drive at once
var CACHE_SECONDS = 21600;                              // 6 h (CacheService maximum)

var GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/';
var GEMINI_MODEL = 'gemini-3-flash-preview';
var GEMINI_BACKUPS = ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-3.5-flash'];

var DAILY_LIMIT = 300;        // questions per day for everyone together (Script Property DAILY_LIMIT overrides)
var PER_MINUTE_LIMIT = 12;    // questions per minute for everyone together
var MAX_Q = 600, MAX_HISTORY = 6;

var PERSONA = [
  'You are the ISO assistant on the TVS Lanka ISO 9001:2015 Dashboard (TVS Lanka (Pvt) Ltd, Vehicle Assembly Complex,',
  'Poruwadanda, Horana, Sri Lanka). Management Representative: Denuwan Chamara, Manager - Plant Operations.',
  'Certification: Bureau Veritas, contract CBO/9418, scope "Assembling of Motorcycles", exclusions 8.3 and 8.5.1(f).',
  'MRM (Clause 9.3) here means ONLY the yearly ISO management review held with the ISO consultants Halcyon (Pvt) Ltd,',
  'one meeting a year (2024, 2025 on 08-Oct-2025, 2026 on 13-Oct-2026). Monthly plant meetings are not the ISO MRM and are kept in the CMMS.',
  '',
  'Your job: help staff and auditors quickly find ISO records and understand the status of the QMS.',
  'Rules:',
  '- Answer ONLY from the DASHBOARD PAGES and DRIVE FILES given below. Never invent dates, figures, names or documents.',
  '- If the answer is not there, say so plainly and suggest where it is likely to be (which page or Drive folder).',
  '- Always give the link: dashboard pages as [Page name](https://denuwantvsl-max.github.io/tvs-iso-dashboard/<page>)',
  '  and documents as [file name](drive link). Use markdown links exactly in that form.',
  '- For a Word (.docx) file, prefer the PDF copy if one exists ("View"), and mention the .docx as the download.',
  '- Mention the ISO 9001:2015 clause when it helps.',
  '- Be short and direct: a few lines or a short list. No long introductions.',
  '- Reply in the language of the question (English or Sinhala).',
  '- Drive links open only for people who have access to the Drive folder; you may say so if someone cannot open one.'
].join('\n');

/* ------------------------------------------------------------------ web app */

function doGet() {
  return json_({ ok: true, service: 'TVS ISO Dashboard Assistant' });
}

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (body.action === 'login') return json_(login_(body.user, body.pin));
    var who = session_(body.token);
    if (!who) return json_({ ok: false, auth: false, error: 'Please log in again.' });
    if (body.action === 'view') { log_(who, 'View', String(body.page || '').slice(0, 200), ''); return json_({ ok: true, name: who.name }); }
    if (body.action === 'logout') { CacheService.getScriptCache().remove('tok_' + body.token); log_(who, 'Logout', '', ''); return json_({ ok: true }); }
    var q = String(body.q || '').trim();
    if (q) log_(who, 'Question', q.slice(0, 500), '');
    if (!q) return json_({ ok: false, error: 'Please type a question.' });
    if (q.length > MAX_Q) q = q.slice(0, MAX_Q);
    var limitMsg = checkLimits_();
    if (limitMsg) return json_({ ok: false, error: limitMsg });
    var history = (Array.isArray(body.history) ? body.history : []).slice(-MAX_HISTORY).map(function (h) {
      return { role: h.role === 'model' ? 'model' : 'user', parts: [{ text: String(h.text || '').slice(0, 2000) }] };
    });
    var answer = ask_(body.lang === 'si' ? q + '\n\n(Please answer in Sinhala; keep document names, codes and links as they are.)' : q, history);
    return json_({ ok: true, answer: answer });
  } catch (err) {
    console.error(err && err.stack || err);
    return json_({ ok: false, error: err.userError ? err.message : 'Sorry, something went wrong. Please try again.' });
  }
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function userError_(msg) { var e = new Error(msg); e.userError = true; return e; }

/** Shared limits for everyone (the page is public). */
function checkLimits_() {
  var lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    var props = PropertiesService.getScriptProperties();
    var day = Utilities.formatDate(new Date(), 'Asia/Colombo', 'yyyy-MM-dd');
    var used = JSON.parse(props.getProperty('USAGE') || '{}');
    if (used.day !== day) used = { day: day, n: 0 };
    var limit = Number(props.getProperty('DAILY_LIMIT')) || DAILY_LIMIT;
    if (used.n >= limit) return 'The assistant has answered its ' + limit + ' questions for today. Please try again tomorrow.';
    var cache = CacheService.getScriptCache();
    var minuteKey = 'min_' + Math.floor(Date.now() / 60000);
    var perMin = Number(cache.get(minuteKey) || 0);
    if (perMin >= PER_MINUTE_LIMIT) return 'Many questions right now. Please wait a minute and try again.';
    cache.put(minuteKey, String(perMin + 1), 120);
    used.n++;
    props.setProperty('USAGE', JSON.stringify(used));
    return '';
  } finally { lock.releaseLock(); }
}

/* ------------------------------------------------------------------ login + access log */
/*
 * "TVS ISO Dashboard - Access" Google Sheet (made by setupAccess, id in Script Property SHEET_ID):
 *   Users: Username | PIN | Full name | Company / Department | Active (Yes/No) | Valid until (optional date) | Notes
 *   Log:   Time | Username | Full name | Company / Department | Action | Page / Question | Detail
 * Denuwan types the usernames and PINs into the Users tab himself. A login lasts 6 hours (CacheService maximum).
 * Simple gate: the HTML is still public on GitHub; this keeps casual visitors out and records who used the site.
 */

var SESSION_SECONDS = 21600;
var MAX_FAILS = 5, LOCK_SECONDS = 900;

function login_(user, pin) {
  user = String(user || '').trim().toLowerCase();
  pin = String(pin || '').trim();
  if (!user || !pin) return { ok: false, error: 'Enter your username and PIN.' };
  var cache = CacheService.getScriptCache(), failKey = 'fail_' + user;
  var fails = Number(cache.get(failKey) || 0);
  if (fails >= MAX_FAILS) return { ok: false, error: 'Too many wrong tries. Wait 15 minutes, or ask Denuwan.' };
  var rows = sheet_('Users').getDataRange().getDisplayValues().slice(1);
  var today = Utilities.formatDate(new Date(), 'Asia/Colombo', 'yyyy-MM-dd');
  var found = null;
  for (var i = 0; i < rows.length; i++) {
    var norm = function (s) { return String(s).trim().toLowerCase().replace(/\s+/g, ' '); };
    if (norm(rows[i][0]) === norm(user) || (rows[i][2] && norm(rows[i][2]) === norm(user))) { found = rows[i]; break; }   // username or full name
  }
  var who = { u: found ? String(found[0]).trim().toLowerCase() : user, name: found ? String(found[2] || user) : '', org: found ? String(found[3] || '') : '' };
  var problem = '';
  if (!found || !String(found[1]).trim() || String(found[1]).trim() !== pin) problem = 'Wrong username or PIN.';
  else if (!/^y/i.test(String(found[4] || 'Yes').trim())) problem = 'This login is switched off. Ask Denuwan.';
  else if (found[5] && parseDate_(found[5]) && parseDate_(found[5]) < today) problem = 'This login has expired. Ask Denuwan.';
  if (problem) {
    if (problem.indexOf('Wrong') === 0) cache.put(failKey, String(fails + 1), LOCK_SECONDS);
    log_(who, 'Login failed', '', problem);
    return { ok: false, error: problem };
  }
  cache.remove(failKey);
  var token = Utilities.getUuid() + Utilities.getUuid().slice(0, 8);
  cache.put('tok_' + token, JSON.stringify(who), SESSION_SECONDS);
  log_(who, 'Login', '', '');
  return { ok: true, token: token, name: who.name, hours: SESSION_SECONDS / 3600 };
}

function session_(token) {
  if (!token || typeof token !== 'string') return null;
  var s = CacheService.getScriptCache().get('tok_' + token);
  return s ? JSON.parse(s) : null;
}

/** "2026-12-31", "31/12/2026", "31-Dec-2026" -> "yyyy-MM-dd" (or '' if unreadable). */
function parseDate_(v) {
  var s = String(v).trim(), m;
  if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))) return m[1] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[3]).slice(-2);
  if ((m = s.match(/^(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/))) return m[3] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[1]).slice(-2);
  var d = new Date(s);
  return isNaN(d) ? '' : Utilities.formatDate(d, 'Asia/Colombo', 'yyyy-MM-dd');
}

function log_(who, action, what, detail) {
  try {
    sheet_('Log').appendRow([Utilities.formatDate(new Date(), 'Asia/Colombo', 'yyyy-MM-dd HH:mm:ss'),
      who.u, who.name, who.org, action, what, detail]);
  } catch (err) { console.error('log failed: ' + err); }
}

var ACCESS_SHEET_ID = '1ggr-0vQwckjfeK7Sels4QJvSYpYHyUMKELLo7xgw3qc';   // made 2026-11-23

/** Repairs Script Properties if an API key was pasted into SHEET_ID (moves it to GEMINI_API_KEY). */
function fixProps_() {
  var props = PropertiesService.getScriptProperties();
  var sid = props.getProperty('SHEET_ID') || '';
  if (/^(AIza|AQ\.)/.test(sid)) {
    if (!props.getProperty('GEMINI_API_KEY')) props.setProperty('GEMINI_API_KEY', sid);
    props.setProperty('SHEET_ID', ACCESS_SHEET_ID);
  }
  if (!props.getProperty('SHEET_ID')) props.setProperty('SHEET_ID', ACCESS_SHEET_ID);
}

function sheet_(name) {
  var props = PropertiesService.getScriptProperties();
  fixProps_();
  if (!props.getProperty('SHEET_ID')) {           // first use: make the Access sheet
    var lock = LockService.getScriptLock(); lock.waitLock(20000);
    try { if (!props.getProperty('SHEET_ID')) setupAccess(); } finally { lock.releaseLock(); }
  }
  return SpreadsheetApp.openById(props.getProperty('SHEET_ID')).getSheetByName(name);
}

/** Run once (testAssistant also runs it): makes the Access sheet if it is not there, and logs its link. */
function setupAccess() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('SHEET_ID');
  if (id) { console.log('Access sheet: ' + SpreadsheetApp.openById(id).getUrl()); return; }
  var ss = SpreadsheetApp.create('TVS ISO Dashboard - Access');
  var users = ss.getSheets()[0].setName('Users');
  users.getRange(1, 1, 1, 7).setValues([['Username', 'PIN', 'Full name', 'Company / Department', 'Active (Yes/No)', 'Valid until (optional)', 'Notes']]);
  users.getRange('B:B').setNumberFormat('@');   // keep leading zeros in PINs
  users.getRange('F2:F').setNumberFormat('yyyy-mm-dd');
  users.getRange(2, 1, 1, 7).setValues([['denuwan', '', 'Denuwan Chamara', 'TVS Lanka - Plant Operations', 'Yes', '', 'Type your own PIN in column B']]);
  var log = ss.insertSheet('Log');
  log.getRange(1, 1, 1, 7).setValues([['Time', 'Username', 'Full name', 'Company / Department', 'Action', 'Page / Question', 'Detail']]);
  [users, log].forEach(function (s) { s.setFrozenRows(1); s.getRange('1:1').setFontWeight('bold'); });
  props.setProperty('SHEET_ID', ss.getId());
  console.log('Access sheet made: ' + ss.getUrl());
}

/* ------------------------------------------------------------------ knowledge */

function knowledge_() {
  return '=== DASHBOARD PAGES ===\n' + cached_('site' + KNOW_VER, siteText_) + '\n\n=== DRIVE FILES (ISO DASHBOARD folder) ===\n' + cached_('drive' + KNOW_VER, driveList_);
}

/** Stores long text in 90 KB pieces (CacheService limit is 100 KB per value). */
function cached_(name, builder) {
  var cache = CacheService.getScriptCache();
  var n = Number(cache.get(name + '_n') || 0);
  if (n) {
    var keys = []; for (var i = 0; i < n; i++) keys.push(name + '_' + i);
    var got = cache.getAll(keys);
    if (Object.keys(got).length === n) return keys.map(function (k) { return got[k]; }).join('');
  }
  var text = builder();
  var parts = {}, size = 90000, count = Math.ceil(text.length / size) || 1;
  for (var j = 0; j < count; j++) parts[name + '_' + j] = text.slice(j * size, (j + 1) * size);
  parts[name + '_n'] = String(count);
  cache.putAll(parts, CACHE_SECONDS);
  return text;
}

/** Text of each live dashboard page, keeping links as [text](url). */
function siteText_() {
  var reqs = PAGES.map(function (p) { return { url: SITE + p + '?v=' + Date.now(), muteHttpExceptions: true }; });
  var res = UrlFetchApp.fetchAll(reqs);
  return PAGES.map(function (p, i) {
    var html = res[i].getResponseCode() === 200 ? res[i].getContentText() : '';
    var title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || p;
    var main = html.indexOf('<main') >= 0 ? html.slice(html.indexOf('<main')) : html;
    return '--- PAGE: ' + title.replace(/ — TVS Lanka ISO Dashboard/, '') + ' (' + SITE + p + ') ---\n' + htmlToText_(main);
  }).join('\n\n');
}

function htmlToText_(h) {
  h = h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  h = h.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, function (m, href, inner) {
    var t = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!/^https?:/.test(href)) href = SITE + href;
    return ' [' + t + '](' + href + ') ';
  });
  h = h.replace(/<\/(tr|div|li|h\d|p|table)>/gi, '\n').replace(/<br\s*\/?>/gi, '\n').replace(/<\/t[dh]>/gi, ' | ');
  h = h.replace(/<[^>]+>/g, ' ');
  h = h.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&middot;/g, '·').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  return h.split('\n').map(function (l) { return l.replace(/\s+/g, ' ').trim(); }).filter(String).join('\n');
}

/** Every file in the ISO DASHBOARD folder tree: "Folder path / file name | link". */
function driveList_() {
  var out = [], queue = [{ f: DriveApp.getFolderById(DRIVE_ROOT), path: 'ISO DASHBOARD' }], t0 = Date.now();
  while (queue.length && Date.now() - t0 < 120000 && out.length < 3000) {
    var cur = queue.shift();
    out.push('[FOLDER] ' + cur.path + ' | ' + cur.f.getUrl());
    var files = cur.f.getFiles();
    while (files.hasNext()) {
      var file = files.next();
      out.push(cur.path + ' / ' + file.getName() + ' | ' + file.getUrl());
    }
    var subs = cur.f.getFolders();
    while (subs.hasNext()) { var s = subs.next(); queue.push({ f: s, path: cur.path + ' / ' + s.getName().trim() }); }
  }
  return out.join('\n');
}

/* ------------------------------------------------------------------ Gemini */

function ask_(q, history) {
  var props = PropertiesService.getScriptProperties();
  var key = props.getProperty('GEMINI_API_KEY');
  if (!key) throw userError_('The assistant is not set up yet (no AI key).');
  var today = Utilities.formatDate(new Date(), 'Asia/Colombo', 'EEEE, dd MMMM yyyy');
  var body = {
    systemInstruction: { parts: [{ text: PERSONA + '\n\nToday is ' + today + ' (Sri Lanka).\n\n' + knowledge_() }] },
    contents: history.concat([{ role: 'user', parts: [{ text: q }] }]),
    generationConfig: { temperature: 0.2, maxOutputTokens: 1500 }
  };
  var models = [props.getProperty('GEMINI_MODEL') || GEMINI_MODEL].concat(GEMINI_BACKUPS);
  var codes = [];
  for (var m = 0; m < models.length; m++) {
    for (var tryNo = 0; tryNo < 2; tryNo++) {
      if (tryNo) Utilities.sleep(1200);
      try {
        var out = gemini_(key, models[m], body);
        var parts = (((out.candidates || [])[0] || {}).content || {}).parts || [];
        var text = parts.filter(function (p) { return p.text && !p.thought; }).map(function (p) { return p.text; }).join('').trim();
        if (text) return text;
        codes.push(models[m] + ':empty');
        break;
      } catch (err) {
        if (err.userError) throw err;
        codes.push(models[m] + ':' + err.code);
        if (err.code === 429 || err.code === 404) break;
        if ([500, 502, 503, 504].indexOf(err.code) < 0) throw err;
      }
    }
  }
  console.log('All Gemini models failed: ' + codes.join(', '));
  if (codes.every(function (c) { return /:429$/.test(c); })) throw userError_('Today\'s free AI limit is used up. It resets tomorrow.');
  throw userError_('The free AI servers are busy right now. Please try again in a minute.');
}

function gemini_(key, model, body) {
  var res = UrlFetchApp.fetch(GEMINI_URL + encodeURIComponent(model) + ':generateContent', {
    method: 'post', contentType: 'application/json', headers: { 'x-goog-api-key': key },
    payload: JSON.stringify(body), muteHttpExceptions: true
  });
  var code = res.getResponseCode(), txt = res.getContentText();
  console.log('Gemini ' + model + ' ' + code);
  if (code === 400 && /API key/i.test(txt)) throw userError_('The AI key was rejected. The dashboard owner needs to check it.');
  if (code !== 200) { var err = new Error('Gemini ' + code + ': ' + txt.slice(0, 300)); err.code = code; throw err; }
  return JSON.parse(txt);
}

/* ------------------------------------------------------------------ editor helpers */

/** Run once from the editor after setting GEMINI_API_KEY: authorises the script and checks everything works. */
function testAssistant() {
  setupAccess();
  clearCache();
  var k = knowledge_();
  console.log('Knowledge: ' + k.length + ' characters; Drive lines: ' + (k.split('=== DRIVE FILES')[1] || '').split('\n').length);
  console.log(ask_('When is the next Bureau Veritas audit and which processes should we focus on?', []));
}

/** Forget the cached pages and Drive list (they refresh by themselves every 6 hours). */
function clearCache() {
  var c = CacheService.getScriptCache();
  ['site' + KNOW_VER, 'drive' + KNOW_VER].forEach(function (n) {
    var keys = [n + '_n']; for (var i = 0; i < 20; i++) keys.push(n + '_' + i);
    c.removeAll(keys);
  });
}
