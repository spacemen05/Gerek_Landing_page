/* Gerek landing page renderer.
   Reads window.GEREK_CONFIG (config.js) and fills the page.
   You shouldn't need to edit this file to change content. */
(function () {
  "use strict";

  var C = window.GEREK_CONFIG;
  if (!C || !C.copy) {
    // Most likely a typo in config.js (a missing comma or quote).
    console.error("[Gerek] config.js did not load. Check it for a missing comma or quote.");
    return;
  }

  var LANGS = ["bm", "en"];
  var HTML_LANG = { bm: "ms", en: "en" };
  var STORE_KEY = "gerek-lang";
  var lang = pickLang();

  /* ---------- helpers ---------- */

  function pickLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
    try {
      var saved = window.localStorage.getItem(STORE_KEY);
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) {}
    return LANGS.indexOf(C.defaultLang) > -1 ? C.defaultLang : "bm";
  }

  // Resolve a { bm, en } pair to the active language, falling back to
  // the other language so a missing translation never leaves a blank.
  function t(pair) {
    if (pair == null) return "";
    if (typeof pair === "string") return pair;
    return pair[lang] || pair.en || pair.bm || "";
  }

  function copy(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj == null ? undefined : obj[key];
    }, C.copy);
  }

  // Only allow web links (and mailto where asked). Anything else is dropped.
  function safeUrl(value, allowMailto) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      var url = new URL(value.trim(), window.location.href);
      if (url.protocol === "https:" || url.protocol === "http:") return url.href;
      if (allowMailto && url.protocol === "mailto:") return url.href;
    } catch (e) {}
    return null;
  }

  function safeImage(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    if (/^\s*(javascript|vbscript):/i.test(value)) return null;
    return value.trim();
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function newTabNote() {
    return el("span", "sr-only", " " + t(copy("ui.newTab")));
  }

  function initials(name) {
    return String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) { return w.charAt(0).toUpperCase(); })
      .join("");
  }

  function $(sel) { return document.querySelector(sel); }

  /* ---------- static copy ---------- */

  function renderCopy() {
    document.querySelectorAll("[data-copy]").forEach(function (node) {
      node.textContent = t(copy(node.getAttribute("data-copy")));
    });
    document.querySelectorAll("[data-copy-label]").forEach(function (node) {
      node.setAttribute("aria-label", t(copy(node.getAttribute("data-copy-label"))));
    });

    document.documentElement.lang = HTML_LANG[lang];
    document.title = t(copy("meta.title"));
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(copy("meta.description")));

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    var year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- contact ---------- */

  function renderContact() {
    var contact = C.contact || {};
    var email = String(contact.email || "").trim();
    var emailLink = $("#email-link");
    if (emailLink) {
      if (email) {
        emailLink.href = "mailto:" + email;
        emailLink.textContent = email;
      } else {
        emailLink.parentElement.hidden = true;
      }
    }

    var handle = String(contact.instagram || "").replace(/^@/, "").trim();
    document.querySelectorAll("[data-ig-link]").forEach(function (a) {
      if (!handle) { a.parentElement.hidden = true; return; }
      a.href = "https://www.instagram.com/" + encodeURIComponent(handle) + "/";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "@" + handle;
      a.appendChild(newTabNote());
    });
  }

  /* ---------- surveys ---------- */

  function renderSurveys() {
    var list = $("#survey-list");
    var waiting = $("#survey-waiting");
    var surveys = Array.isArray(C.surveys) ? C.surveys : [];
    var anyLive = false;

    list.replaceChildren();
    list.hidden = surveys.length === 0;

    surveys.forEach(function (s) {
      var url = safeUrl(s.url);
      var item = el("li", "survey");
      var title = t(s.title);

      item.appendChild(el("h3", "survey__title", title));
      if (t(s.description)) item.appendChild(el("p", "survey__desc", t(s.description)));
      if (s.minutes) {
        item.appendChild(el("p", "survey__meta", t(copy("survey.minutes")).replace("{n}", s.minutes)));
      }

      if (url) {
        anyLive = true;
        var a = el("a", "button survey__action", t(copy("survey.open")));
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        // Several cards share the button text, so name the survey for screen readers.
        a.appendChild(el("span", "sr-only", ": " + title));
        a.appendChild(newTabNote());
        item.appendChild(a);
      } else {
        item.appendChild(el("p", "status", t(copy("survey.comingSoon"))));
      }

      list.appendChild(item);
    });

    // Point people somewhere useful while nothing is open yet.
    if (waiting) waiting.hidden = anyLive;
  }

  /* ---------- stats ---------- */

  function renderStats() {
    var stats = C.stats || {};
    var items = Array.isArray(stats.items) ? stats.items : [];
    var block = $("#stats-block");
    var list = $("#stats-list");

    list.replaceChildren();
    block.hidden = items.length === 0;
    $("#stats-sample").hidden = !stats.sample;
    $("#stats-source").textContent = t(stats.source);

    items.forEach(function (s) {
      var total = Math.max(0, Math.round(Number(s.total) || 0));
      var count = Math.min(total, Math.max(0, Math.round(Number(s.count) || 0)));
      if (!total) return;

      var item = el("li", "stat");
      var text = el("p", "stat__text");
      text.appendChild(el("strong", "stat__num", count + " " + t(copy("ui.of")) + " " + total));
      text.appendChild(document.createTextNode(" " + t(s.label)));
      item.appendChild(text);

      // One seat per respondent. Large samples are scaled to 50 seats.
      var seats = total <= 60 ? total : 50;
      var filled = total <= 60 ? count : Math.round((count / total) * seats);
      var grid = el("div", "seats");
      grid.setAttribute("aria-hidden", "true");
      for (var i = 0; i < seats; i++) {
        grid.appendChild(el("span", i < filled ? "seat" : "seat seat--empty"));
      }
      item.appendChild(grid);
      list.appendChild(item);
    });
  }

  /* ---------- objectives ---------- */

  function renderObjectives() {
    var obj = C.copy.objectives || {};
    var apps = $("#apps");
    var support = $("#support");

    apps.replaceChildren();
    (obj.apps || []).forEach(function (app) {
      var panel = el("article", "app");
      panel.appendChild(el("h3", "app__name", t(app.name)));
      if (t(app.summary)) panel.appendChild(el("p", "app__summary", t(app.summary)));
      var ul = el("ul", "app__features");
      (app.features || []).forEach(function (f) { ul.appendChild(el("li", null, t(f))); });
      panel.appendChild(ul);
      apps.appendChild(panel);
    });

    support.replaceChildren();
    (obj.support || []).forEach(function (s) {
      var row = el("div");
      row.appendChild(el("dt", null, t(s.short)));
      row.appendChild(el("dd", null, t(s.name)));
      support.appendChild(row);
    });
    support.hidden = support.children.length === 0;
    support.previousElementSibling.hidden = support.hidden;
  }

  /* ---------- team ---------- */

  function renderTeam() {
    var team = Array.isArray(C.team) ? C.team : [];
    var section = $("#team");
    var list = $("#team-list");

    list.replaceChildren();
    section.hidden = team.length === 0;

    team.forEach(function (m) {
      var name = String(m.name || "").trim();
      var item = el("li", "member");

      var photo = safeImage(m.photo);
      var avatar;
      if (photo) {
        avatar = el("img", "avatar");
        avatar.src = photo;
        avatar.alt = "";
        avatar.width = 88;
        avatar.height = 88;
        avatar.loading = "lazy";
        avatar.decoding = "async";
      } else {
        avatar = el("span", "avatar avatar--initials", initials(name));
        avatar.setAttribute("aria-hidden", "true");
      }
      item.appendChild(avatar);

      var info = el("div");
      info.appendChild(el("h3", "member__name", name));
      if (t(m.role)) info.appendChild(el("p", "member__role", t(m.role)));
      (Array.isArray(m.bio) ? m.bio : []).forEach(function (line) {
        if (t(line)) info.appendChild(el("p", "member__bio", t(line)));
      });

      var linkedin = safeUrl(m.linkedin);
      if (linkedin) {
        var a = el("a", "link member__link", t(copy("team.linkedin")));
        a.href = linkedin;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.appendChild(el("span", "sr-only", ": " + name));
        a.appendChild(newTabNote());
        info.appendChild(a);
      }

      item.appendChild(info);
      list.appendChild(item);
    });
  }

  /* ---------- dark mode ---------- */

  var THEME_KEY = "gerek-theme";
  var themeBtn = $("#theme-btn");
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  // No saved choice means "follow the system setting".
  function isDark() {
    var chosen = document.documentElement.getAttribute("data-theme");
    if (chosen) return chosen === "dark";
    return !!(darkQuery && darkQuery.matches);
  }

  function syncTheme() {
    var dark = isDark();
    if (themeBtn) themeBtn.setAttribute("aria-pressed", String(dark));
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0E6094" : "#1591DC");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { window.localStorage.setItem(THEME_KEY, next); } catch (e) {}
      syncTheme();
    });
  }
  if (darkQuery) {
    var onSystemChange = syncTheme;
    if (darkQuery.addEventListener) darkQuery.addEventListener("change", onSystemChange);
    else if (darkQuery.addListener) darkQuery.addListener(onSystemChange);
  }
  syncTheme();

  /* ---------- language switch ---------- */

  function render() {
    renderCopy();
    renderContact();
    renderSurveys();
    renderStats();
    renderObjectives();
    renderTeam();
  }

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-lang");
      if (next === lang || LANGS.indexOf(next) === -1) return;
      lang = next;
      try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) {}
      render();
    });
  });

  render();
})();
