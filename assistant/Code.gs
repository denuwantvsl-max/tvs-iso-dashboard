/**
 * TVS ISO Dashboard - Assistant (Apps Script web app, standalone).
 * The public dashboard (GitHub Pages) POSTs {q, history} here; this script answers with the FREE Gemini API using:
 *   1. the text and links of every dashboard page (read from the live site), and
 *   2. the list of files in the "ISO DASHBOARD" Drive folder (names, folder path, links).
 * Open to anyone with the link (Denuwan's choice, 2026-11-16), so there are daily / per-minute limits.
 * Script Properties: GEMINI_API_KEY (typed by Denuwan), optional GEMINI_MODEL, DAILY_LIMIT.
 * Nothing secret lives in this file.
 */

var SITE = 'https://denuwantvsl-max.github.io/tvs-iso-dashboard/';
var PAGES = ['index.html', 'statutory-certificates.html', 'factory-engineer-certifications.html', 'ncr-register.html',
  'mrm.html', 'calibration.html', 'clauses.html', 'audit-history.html', 'department-objectives.html'];
var DRIVE_ROOT = '1fI8lnC75AIHqGL_A47RscJQQVcNP-9Ax';   // ISO DASHBOARD
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
    var q = String(body.q || '').trim();
    if (!q) return json_({ ok: false, error: 'Please type a question.' });
    if (q.length > MAX_Q) q = q.slice(0, MAX_Q);
    var limitMsg = checkLimits_();
    if (limitMsg) return json_({ ok: false, error: limitMsg });
    var history = (Array.isArray(body.history) ? body.history : []).slice(-MAX_HISTORY).map(function (h) {
      return { role: h.role === 'model' ? 'model' : 'user', parts: [{ text: String(h.text || '').slice(0, 2000) }] };
    });
    var answer = ask_(q, history);
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

/* ------------------------------------------------------------------ knowledge */

function knowledge_() {
  return '=== DASHBOARD PAGES ===\n' + cached_('site', siteText_) + '\n\n=== DRIVE FILES (ISO DASHBOARD folder) ===\n' + cached_('drive', driveList_);
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
  clearCache();
  var k = knowledge_();
  console.log('Knowledge: ' + k.length + ' characters; Drive lines: ' + (k.split('=== DRIVE FILES')[1] || '').split('\n').length);
  console.log(ask_('When is the next Bureau Veritas audit and which processes should we focus on?', []));
}

/** Forget the cached pages and Drive list (they refresh by themselves every 6 hours). */
function clearCache() {
  var c = CacheService.getScriptCache();
  ['site', 'drive'].forEach(function (n) {
    var keys = [n + '_n']; for (var i = 0; i < 20; i++) keys.push(n + '_' + i);
    c.removeAll(keys);
  });
}
