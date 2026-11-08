// Begleitseite: kleine Hilfsfunktionen ohne externe Abhängigkeiten.
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // Mobile Navigation
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // "Alle aufklappen / zuklappen" auf Seiten mit Aufklappbereichen
  var holder = document.querySelector(".acc-controls");
  var items = document.querySelectorAll("details.acc");
  if (holder && items.length > 1) {
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "link-btn";
    toggle.textContent = "Alle aufklappen";
    var expanded = false;
    toggle.addEventListener("click", function () {
      expanded = !expanded;
      items.forEach(function (d) { d.open = expanded; });
      toggle.textContent = expanded ? "Alle zuklappen" : "Alle aufklappen";
    });
    holder.appendChild(toggle);
  }

  // Beim Drucken alles aufklappen, danach Zustand wiederherstellen
  var saved = [];
  window.addEventListener("beforeprint", function () {
    saved = Array.prototype.map.call(items, function (d) { return d.open; });
    items.forEach(function (d) { d.open = true; });
  });
  window.addEventListener("afterprint", function () {
    items.forEach(function (d, i) { d.open = saved[i]; });
  });

  // Ein Link auf einen Aufklappbereich (#id) öffnet ihn
  function openFromHash() {
    var id = location.hash.slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (el && el.tagName === "DETAILS") el.open = true;
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
