/**
 * Privacy-friendly analytics (Plausible) — loaded only on the public GitHub Pages build.
 * Dashboard setup: see ANALYTICS.md
 */
(function () {
  const host = location.hostname;
  if (host !== "flovman.github.io") return;
  if (!location.pathname.startsWith("/wttg3-assistant")) return;

  const s = document.createElement("script");
  s.defer = true;
  s.dataset.domain = "flovman.github.io";
  s.src = "https://plausible.io/js/script.js";
  document.head.appendChild(s);
})();
