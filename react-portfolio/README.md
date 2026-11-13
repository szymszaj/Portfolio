# react-portfolio

Portfolio (Vite + React 19 + Tailwind 4 + Framer Motion). Treść pochodzi z
Sanity CMS, z pełnym fallbackiem do `src/constants/translations.js`.

## Skrypty

| Komenda                | Co robi                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| `npm run dev`          | serwer deweloperski (SPA, treść z Sanity pobierana w przeglądarce)   |
| `npm run build`        | pełny build: klient → bundle SSR → prerender                        |
| `npm run build:client` | sam build klienta (bez prerenderingu)                                |
| `npm run build:ssr`    | bundle `src/entry-server.jsx` dla Node (`dist-ssr/`)                 |
| `npm run prerender`    | wstrzyknięcie wyrenderowanego HTML-a do `dist/index.html`             |
| `npm run images`       | generuje warianty zdjęcia profilowego do `public/profile/`            |
| `npm run fonts`        | pobiera subsety fontów i generuje `src/fonts.css`                     |
| `npm run check:fonts`  | sprawdza, czy subset pokrywa tekst w `dist/index.html`                |
| `npm run preview`      | podgląd zbudowanego `dist/`                                          |
| `npm run lint`         | ESLint (0 warningów)                                                 |

## Prerendering

`npm run build` generuje statyczny HTML z pełną treścią strony, więc crawlery i
podglądy linków nie dostają pustego `<div id="root">`.

Przebieg:

1. `vite build` – zwykły build klienta.
2. `vite build --ssr src/entry-server.jsx` – ten sam kod spakowany dla Node.
3. `node scripts/prerender.mjs`:
   - pobiera treść z Sanity (po stronie Node, bez CORS, z pominięciem CDN,
     żeby rebuild dostał świeżo opublikowane dane),
   - renderuje aplikację przez `prerenderToNodeStream` (React 19) – czeka na
     wszystkie granice `Suspense`, więc leniwe sekcje też trafiają do HTML-a,
   - wstrzykuje HTML do `dist/index.html` oraz snapshot treści jako
     `window.__CMS_CONTENT__`,
   - odświeża `<lastmod>` w `dist/sitemap.xml`.

W przeglądarce `src/main.jsx` robi `hydrateRoot`, jeśli `#root` ma już dzieci
(build), albo `createRoot` w dev. Pierwszy render klienta startuje z tego samego
snapshotu treści, co prerender, więc hydracja nie zgłasza niezgodności.

Gdy Sanity jest nieosiągalne w czasie builda, prerender leci dalej na danych z
`src/constants/translations.js` – fallback działa tak samo jak w przeglądarce.

## Fonty

Inter i Archivo są self-hostowane w `public/fonts/` (`@font-face` w
wygenerowanym `src/fonts.css`, `font-display: swap`, preload w `index.html`).

`npm run fonts` pobiera z Google Fonts zmienne woff2 zawężone do znaków
wymienionych w `CHARSET` (`scripts/fetch-fonts.mjs`): ASCII, Latin-1, polskie,
czeskie/słowackie diakrytyki i typografia. Daje to ~75 kB zamiast ~201 kB
pełnych subsetów latin + latin-ext.

Znak spoza subsetu wyrenderuje się fontem systemowym. Po dodaniu treści z
nietypowymi znakami:

```bash
npm run build && npm run check:fonts   # wypisze brakujące znaki
# dopisz je do CHARSET w scripts/fetch-fonts.mjs
npm run fonts                          # i zacommituj public/fonts/ + src/fonts.css
```

## Obrazy

- Zdjęcie profilowe: `npm run images` generuje AVIF/WebP/JPEG w 4 szerokościach
  do `public/profile/` (stałe nazwy, bez hasha, żeby działały w prerenderze).
  Komponent `src/components/ProfileImage.jsx` serwuje je przez `<picture>`
  + `srcset`/`sizes`. Wyniki są w repo, więc build nie potrzebuje `sharp`.
- Obrazy z Sanity: `src/lib/sanityImage.js` buduje URL-e przez
  `@sanity/image-url` z `auto=format` i `w=`, plus `srcset`. Gdy dokument nie
  ma `imageId` (lokalny fallback z `translations.js`), używany jest import
  assetu bez zmian.

## Konfiguracja: Sanity → Vercel (rebuild po publikacji)

Treść jest wstrzykiwana w czasie builda, więc publikacja w Studio musi wyzwalać
nowy deploy. Do zrobienia ręcznie, raz:

### 1. Vercel – utwórz Deploy Hook

1. Vercel → projekt `portfolio-szymon` → **Settings** → **Git** →
   sekcja **Deploy Hooks**.
2. **Create Hook**: nazwa `sanity-publish`, branch `main` → **Create Hook**.
3. Skopiuj wygenerowany URL
   (`https://api.vercel.com/v1/integrations/deploy/prj_xxx/yyy`) – pokazuje się
   tylko tutaj, więc zapisz go od razu.

### 2. Sanity – podepnij webhook

1. [sanity.io/manage](https://www.sanity.io/manage) → projekt `z5td8f6b` →
   **API** → **Webhooks** → **Create webhook**.
2. Ustaw:
   - **Name**: `Vercel rebuild`
   - **URL**: skopiowany Deploy Hook z Vercela
   - **Dataset**: `production`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: `_type in ["siteContent", "project", "course", "experience", "education"]`
   - **Projection**: zostaw puste
   - **HTTP method**: `POST`
   - **HTTP headers**: brak
   - **API version**: `v2025-01-01`
   - **Enabled**: tak
3. **Save**.

### 3. Sprawdzenie

1. Opublikuj dowolną zmianę w Studio.
2. Sanity → **API** → **Webhooks** → `Vercel rebuild` → **Attempts log** –
   powinno być `200`.
3. Vercel → **Deployments** – nowy deploy ze źródłem `Deploy Hook`.
4. Po deployu: `curl -s https://portfolio-szymon.vercel.app/ | grep "nowa treść"`
   – tekst musi być w surowym HTML-u, nie dopiero po uruchomieniu JS.

> Webhook wyzwala pełny rebuild. Zanim nie przejdzie, opublikowana treść i tak
> pojawi się na żywo po stronie klienta (fetch z Sanity po hydracji) – rebuild
> dba o to, żeby widziały ją też crawlery i podglądy linków.

### 4. CORS (jeśli dodajesz nową domenę / port)

Fetch po stronie klienta wymaga domeny na liście CORS:
sanity.io/manage → **API** → **CORS origins**. `http://localhost:5173` i domena
produkcyjna powinny tam być. Bez wpisu strona nadal działa – wraca do treści
wbudowanej w HTML (prerender) i do `translations.js`.

## Zmienne środowiskowe

Patrz `.env.example`. Bez nich kod używa wartości domyślnych
(`z5td8f6b` / `production`).
