# Statystyki odwiedzin / Visit analytics

Asystent używa [GoatCounter](https://www.goatcounter.com/) — **darmowej**, prywatnej analityki (bez cookies, open source).

## Jednorazowa konfiguracja (ok. 2 min)

1. Załóż konto: https://www.goatcounter.com/signup (darmowe, bez karty).
2. Konto / strona: **`flovman`** → dashboard: https://flovman.goatcounter.com  
   (skrypt w `analytics.js` wskazuje na `flovman.goatcounter.com/count`).
3. Wejdź na https://flovman.github.io/wttg3-assistant/ — po chwili w dashboardzie powinny pojawić się odsłony.

Skrypt jest już w projekcie. Po utworzeniu strony w GoatCounter dane zbierają się automatycznie.

## Co zobaczysz

- odsłony i unikalni odwiedzający (dzień / tydzień / miesiąc)
- skąd przychodzą (referrer)
- popularne podstrony / ścieżki
- **Live** — kto jest teraz na stronie (przybliżenie)

## Czego nie ma

- cookies ani banerów RODO od analityki
- listy nicków / danych osobowych
- statystyk z `localhost` (loader się nie włącza)

## Koszt

GoatCounter jest **bezpłatny** dla projektów osobistych / fanowskich (non-commercial). Nie ma 30-dniowego trialu jak u Plausible.

## Prywatność

Krótki disclaimer jest w zakładce **Credits** (PL/EN).
