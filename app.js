(function () {
  var ITEMS = (window.RELEASES || []).slice();
  var GENRES = ["All", "Action", "Fantasy", "Sci-Fi", "Adventure"];
  var KINDS = [["all", "All"], ["movie", "Movies"], ["tv", "TV shows"]];
  var state = { kind: "all", genre: "All", q: "" };
  var DAY = 86400000;
  var IN_CINEMAS_DAYS = 70; // a movie counts as "in cinemas" for this long after release

  ITEMS.forEach(function (it) {
    var p = it.d.split("-");
    it.ts = new Date(+p[0], +p[1] - 1, +p[2], 0, 0, 0).getTime();
    it.date = new Date(it.ts);
  });
  ITEMS.sort(function (a, b) { return a.ts - b.ts || a.t.localeCompare(b.t); });

  function $(id) { return document.getElementById(id); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function fmt(d, o) { return d.toLocaleDateString("en-GB", o); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function startOfToday() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime(); }
  function parts(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
  }

  function chips(host, list, key) {
    list.forEach(function (x) {
      var val = Array.isArray(x) ? x[0] : x, label = Array.isArray(x) ? x[1] : x;
      var b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = label; b.dataset.val = val;
      b.addEventListener("click", function () { state[key] = val; render(); });
      host.appendChild(b);
    });
  }
  chips($("kindChips"), KINDS, "kind");
  chips($("genreChips"), GENRES, "genre");

  $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

  function match(it) {
    return (state.kind === "all" || it.k === state.kind) &&
           (state.genre === "All" || it.g.indexOf(state.genre) !== -1) &&
           (!state.q || it.t.toLowerCase().indexOf(state.q) !== -1);
  }

  function tagsHtml(it) {
    var h = it.g.map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
    if (it.k === "tv") h = '<span class="tag tv">TV</span>' + h;
    if (it.clash) h += '<span class="tag clash">Same day as ' + esc(it.clash) + "</span>";
    return h;
  }

  function rowHtml(it, cinema) {
    var stub = '<div class="stub"><b>' + it.date.getDate() + "</b><span>" + fmt(it.date, { month: "short" }) + "</span></div>";
    var right;
    if (cinema) {
      var day = Math.floor((startOfToday() - it.ts) / DAY) + 1;
      right = '<div class="cd now">Day ' + day + "<small>in cinemas</small></div>";
    } else {
      right = '<div class="cd" data-ts="' + it.ts + '"></div>';
    }
    return '<li class="row">' + stub +
      '<div class="info"><h3>' + esc(it.t) + '</h3><p class="by">' + esc(it.by) + '</p><div class="tags">' + tagsHtml(it) + "</div></div>" +
      right + "</li>";
  }

  var nextTs = 0;

  function render() {
    var now = Date.now();
    var list = ITEMS.filter(match);
    var cinema = list.filter(function (it) { return it.k === "movie" && it.ts <= now && it.ts > now - IN_CINEMAS_DAYS * DAY; });
    var soon = list.filter(function (it) { return it.ts > now; });

    Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (b) {
      var key = b.parentNode.id === "kindChips" ? "kind" : "genre";
      b.setAttribute("aria-pressed", String(state[key] === b.dataset.val));
    });

    $("asof").textContent = "Today is " + fmt(new Date(), { weekday: "long", day: "numeric", month: "long", year: "numeric" }) + ". Dates last checked " + (window.UPDATED || "") + ".";
    $("count").textContent = cinema.length + " in cinemas, " + soon.length + " coming up";

    var hero = $("hero");
    if (soon.length) {
      var n = soon[0]; nextTs = n.ts;
      hero.hidden = false;
      hero.innerHTML =
        '<div class="eyebrow">Next up</div>' +
        "<h2>" + esc(n.t) + "</h2>" +
        '<p class="sub">' + fmt(n.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" }) + " · " + esc(n.by) + "</p>" +
        '<div class="digits" role="timer" aria-label="Time until release">' +
        '<div class="cell"><b id="hD">0</b><span>Days</span></div>' +
        '<div class="cell"><b id="hH">00</b><span>Hours</span></div>' +
        '<div class="cell"><b id="hM">00</b><span>Min</span></div>' +
        '<div class="cell"><b id="hS">00</b><span>Sec</span></div></div>';
    } else { hero.hidden = true; nextTs = 0; hero.innerHTML = ""; }

    $("nowSec").hidden = !cinema.length;
    $("nowN").textContent = cinema.length + (cinema.length === 1 ? " film" : " films");
    $("nowRows").innerHTML = cinema.map(function (it) { return rowHtml(it, true); }).join("");

    var html = "", lastKey = "";
    soon.forEach(function (it) {
      var key = it.date.getFullYear() + "-" + it.date.getMonth();
      if (key !== lastKey) {
        if (lastKey) html += "</ul>";
        html += '<div class="month">' + fmt(it.date, { month: "long", year: "numeric" }) + '</div><ul class="rows">';
        lastKey = key;
      }
      html += rowHtml(it, false);
    });
    if (lastKey) html += "</ul>";
    $("soonBody").innerHTML = html || '<p class="empty">Nothing upcoming matches these filters. Try another genre or clear the search.</p>';

    tick();
  }

  function tick() {
    var now = Date.now();
    if (nextTs && nextTs <= now) { render(); return; }
    if (nextTs) {
      var p = parts(nextTs - now);
      $("hD").textContent = p.d; $("hH").textContent = pad(p.h);
      $("hM").textContent = pad(p.m); $("hS").textContent = pad(p.s);
    }
    Array.prototype.forEach.call(document.querySelectorAll(".cd[data-ts]"), function (el) {
      var q = parts(+el.dataset.ts - now);
      el.innerHTML = q.d + "d " + pad(q.h) + ":" + pad(q.m) + ":" + pad(q.s) + "<small>until release</small>";
    });
  }

  render();
  setInterval(tick, 1000);
})();
