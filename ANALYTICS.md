# Statystyki odwiedzin / Visit analytics

Asystent używa [Plausible](https://plausible.io/) — lekkiej analityki bez cookies i bez śledzenia użytkowników po innych stronach.

## Jednorazowa konfiguracja (2–3 min)

1. Załóż konto: https://plausible.io/register  
   (jest trial; potem płatny plan albo [self-hosted Community Edition](https://plausible.io/self-hosted-web-analytics) za darmo).
2. **Add website** → domena: `flovman.github.io`
3. W dashboardzie filtruj ścieżkę **`/wttg3-assistant`** (Pages → Filter → Path contains).

Skrypt jest już w projekcie (`analytics.js` + `index.html`). Po dodaniu domeny w Plausible dane zaczną wpadać automatycznie.

## Co zobaczysz

- unikalni odwiedzający (dzień / tydzień / miesiąc)
- odsłony strony asystenta
- skąd przychodzą (referrer: Steam, Discord, Reddit…)
- **Realtime** — ile osób jest teraz na stronie (szacunek)

## Czego nie ma

- listy nicków ani danych osobowych
- śledzenia poza `flovman.github.io/wttg3-assistant`
- statystyk z lokalnego `localhost` (loader się nie włącza)

## Prywatność

Krótki disclaimer jest też w zakładce **Credits** w aplikacji (PL/EN).
