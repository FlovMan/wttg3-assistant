/**
 * Privacy-friendly analytics (GoatCounter) — free, no cookies.
 * Loaded only on the public GitHub Pages build. Setup: see ANALYTICS.md
 */
(function () {
  const host = location.hostname;
  if (host !== "flovman.github.io") return;
  if (!location.pathname.startsWith("/wttg3-assistant")) return;

  const s = document.createElement("script");
  s.async = true;
  s.dataset.goatcounter = "https://flovman.goatcounter.com/count";
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
})();
