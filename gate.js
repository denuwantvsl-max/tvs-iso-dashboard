/*
 * Login gate for the TVS ISO Dashboard (username + PIN), loaded in the <head> of every page.
 * The check is done by the Apps Script web app against the "TVS ISO Dashboard - Access" sheet, which also logs
 * every login, page view and assistant question. A login lasts 6 hours on this browser.
 * Simple gate only: the page HTML is still public on GitHub.
 */
(function () {
  var API = 'https://script.google.com/macros/s/AKfycbxqYe1v3W4KRSIdolJx6gSwl8X5efK9eaK_THWYL55H6sTrdy7Cd-HVAk3pGG1rTebzKg/exec';
  var KEY = 'isoGateSession';
  var root = document.documentElement;

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      return s && s.token && s.exp > Date.now() ? s : null;
    } catch (e) { return null; }
  }
  var session = load();
  if (!session) root.classList.add('gate-locked');

  var css = document.createElement('style');
  css.textContent =
    'html.gate-locked body>:not(#isoGate):not(#isoLang){display:none!important}' +
    '#isoGate{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;' +
    'background:radial-gradient(circle at 30% 20%,#123247,#070d1a 70%);font-family:Inter,system-ui,sans-serif}' +
    '#isoGate form{width:min(380px,100%);padding:30px 28px;border-radius:22px;border:1px solid rgba(255,255,255,.14);' +
    'background:rgba(14,22,40,.88);box-shadow:0 18px 60px rgba(0,0,0,.6);color:#fff;display:flex;flex-direction:column;gap:12px}' +
    '#isoGate img{width:64px;height:64px;border-radius:14px;background:#fff;padding:5px;object-fit:contain;align-self:center}' +
    '#isoGate h1{margin:4px 0 0;font-size:19px;text-align:center;font-weight:800}' +
    '#isoGate p{margin:0 0 6px;font-size:12.5px;color:#aab6cc;text-align:center;line-height:1.5}' +
    '#isoGate label{font-size:12px;color:#aab6cc;font-weight:600}' +
    '#isoGate input{width:100%;box-sizing:border-box;margin-top:5px;padding:11px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.16);' +
    'background:rgba(255,255,255,.06);color:#fff;font:14px Inter,system-ui,sans-serif;outline:none}' +
    '#isoGate input:focus{border-color:rgba(94,230,207,.7)}' +
    '#isoGate button{margin-top:6px;padding:12px;border-radius:12px;border:0;background:#5ee6cf;color:#06222a;font-weight:800;font-size:14px;cursor:pointer}' +
    '#isoGate button:disabled{opacity:.55;cursor:default}' +
    '#isoGate .err{min-height:18px;font-size:12.5px;color:#ffc267;text-align:center}' +
    '#isoGate small{font-size:11px;color:#71809a;text-align:center;line-height:1.5}' +
    '.gate-user{margin:18px 8px 0;padding-top:14px;border-top:1px solid rgba(255,255,255,.08);font-size:11.5px;color:#8d9ab3;line-height:1.6}' +
    '.gate-user b{color:#dfe6f3;font-weight:600}' +
    '.gate-user a{color:#5ee6cf;cursor:pointer;text-decoration:none}' +
    '@media print{#isoGate,.gate-user{display:none!important}}';
  document.head.appendChild(css);

  function post(body) {
    return fetch(API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) })
      .then(function (r) { return r.text(); })
      .then(function (t) { try { return JSON.parse(t); } catch (e) { return { ok: false, error: 'The login server is not available right now.' }; } });
  }

  function pageName() {
    var f = location.pathname.split('/').pop() || 'index.html';
    return f + ' — ' + document.title.replace(/ — TVS Lanka ISO Dashboard$/, '');
  }

  function logView() {
    post({ action: 'view', token: session.token, page: pageName() }).then(function (r) {
      if (r && r.auth === false) logout(true);
    }).catch(function () {});
  }

  function showGate(msg) {
    root.classList.add('gate-locked');
    if (document.getElementById('isoGate')) return;
    var g = document.createElement('div');
    g.id = 'isoGate';
    g.innerHTML =
      '<form autocomplete="on">' +
      '<img src="tvs-logo.jpg" alt="TVS Lanka logo"/>' +
      '<h1>TVS Lanka ISO 9001 Dashboard</h1>' +
      '<p>Vehicle Assembly Complex, Horana.<br/>Log in with the username and PIN you were given.</p>' +
      '<label>Username<input name="user" autocomplete="username" autocapitalize="none" spellcheck="false" required/></label>' +
      '<label>PIN<input name="pin" type="password" inputmode="numeric" autocomplete="current-password" required/></label>' +
      '<div class="err"></div>' +
      '<button type="submit">Log in</button>' +
      '<small>Access is recorded. For a login, contact Denuwan Chamara, Manager - Plant Operations.</small>' +
      '</form>';
    document.body.appendChild(g);
    var form = g.querySelector('form'), err = g.querySelector('.err'), btn = g.querySelector('button');
    err.textContent = msg || '';
    form.user.focus();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      err.textContent = ''; btn.disabled = true; btn.textContent = 'Checking…';
      post({ action: 'login', user: form.user.value, pin: form.pin.value }).then(function (r) {
        if (!r.ok) { err.textContent = r.error || 'Login failed.'; form.pin.value = ''; form.pin.focus(); return; }
        session = { token: r.token, name: r.name, exp: Date.now() + (r.hours || 6) * 3600000 - 60000 };
        localStorage.setItem(KEY, JSON.stringify(session));
        g.remove(); root.classList.remove('gate-locked');
        showUser(); logView();
      }).catch(function () {
        err.textContent = 'Could not reach the login server. Check the internet connection.';
      }).then(function () { btn.disabled = false; btn.textContent = 'Log in'; });
    });
  }

  function showUser() {
    var side = document.querySelector('.sidebar');
    if (!side || !session) return;
    var old = side.querySelector('.gate-user'); if (old) old.remove();
    var d = document.createElement('div');
    d.className = 'gate-user';
    d.innerHTML = 'Logged in as <b></b><br/><a>Log out</a>';
    d.querySelector('b').textContent = session.name || '';
    d.querySelector('a').addEventListener('click', function () { logout(false); });
    side.appendChild(d);
  }

  function logout(expired) {
    if (session && !expired) post({ action: 'logout', token: session.token }).catch(function () {});
    session = null;
    localStorage.removeItem(KEY);
    try { sessionStorage.removeItem('isoAiChat'); } catch (e) {}
    var u = document.querySelector('.gate-user'); if (u) u.remove();
    showGate(expired ? 'Your login has ended. Please log in again.' : '');
  }

  // Used by the ISO assistant panel.
  window.isoGate = {
    token: function () { return session ? session.token : ''; },
    expired: function () { logout(true); }
  };

  function start() {
    if (session) { showUser(); logView(); } else showGate('');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
