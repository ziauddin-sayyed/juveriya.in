# Juveriya Interiors — Build Notes

## Update Oct 2026 (round 26) — portfolio CTA fix, contact email card, and scope gallery reordering

1. **Portfolio CTA banner matched to homepage**:
   - Fixed unclosed container `<div>` in `portfolio.html` that caused `.cta-banner` to break out and expand full-screen.
   - Wrapped `.cta-banner` in its own `<section class="section" aria-labelledby="cta-heading"><div class="container">` matching `index.html`.
   - Verified pixel-perfect identical dimensions (1180px on desktop) across all viewports.
2. **Contact Email card restored**:
   - Fixed missing `<li>` tag on Email contact item in `contact.html` so it properly inherits `.info-list li` card container styling matching adjacent cards.
3. **Scope galleries visual reordering**:
   - Reordered images within each of the 17 site/city panels in `scope.html` so finished, high-appeal hero shots appear first in both the scroll strip and lightbox sequence.

## Update Oct 2026 (round 25) — portfolio CTA matches home

1. Portfolio's old single-button CTA ("Want results like these…") replaced
   with the homepage banner verbatim: "Have a warehouse, office or building
   that needs work?" + floor-plan text + all three actions (Get a Free Quote
   / Call 9923 365 642 / WhatsApp Enquiry). Screenshot-verified identical
   layout (button wrap included).

## Update Oct 2026 (round 24, UNPUSHED) — strip boxes made structural

1. Strip thumbnails now size from `aspect-ratio: 4/3` on the button with the
   image absolutely filling it — equal boxes are structural, independent of
   file dimensions, load state, or cascade order. Measured 283×212 on all 6,
   screenshot-confirmed. CSS version bumped to `?v=20261015d` on all pages so
   the new rule cannot be shadowed by a cached stylesheet.

## Update Oct 2026 (round 23, UNPUSHED) — asset versioning kills stale cache

1. **Root cause of persistent "still the same" reports** — I kept overwriting
   image files while keeping their URLs identical (1200×900 rebuilds, MSC
   re-crops), so browsers kept serving the OLD pixels from cache. No CSS fix
   can change that.
2. **Fix: versioned all 265 local asset URLs** (`?v=20261015d` on every img
   src/data-src, svg, favicon, preload, og-image across all 6 pages) —
   caches treat them as new files and must re-fetch. Verified every
   versioned URL resolves (265/265, zero 404s) and the full 21/21 suite
   stays green. Bump the letter whenever assets change.

## Update Oct 2026 (round 22, UNPUSHED) — strip uniformity + cache-busting

1. **All 6 BA strip files rebuilt to exactly 1200×900** (attrs synced);
   rendered boxes measured identical (283×150). Mixed source aspects can no
   longer produce uneven strip heights.
2. **Cache-busting query strings** — `css/styles.css?v=20261015c` and
   `js/main.js?v=20261015c` on all 6 pages (bump the letter whenever CSS/JS
   changes), so stale cached styles/scripts can never render again. Verified
   the versioned URLs serve correctly.

## Update Oct 2026 (round 21, UNPUSHED) — uniform scope image dimensions

1. **All 96 `scope-*.jpg` files rebuilt to exactly 1200×900** (already-4:3
   files downscaled; portrait/odd-ratio files center-cropped then scaled;
   markup width/height attrs synced to 1200×900 for all 96). Rendered boxes
   measured identical (298×230 across the strip) and screenshots confirm
   aligned cards. Mixed source aspects can no longer produce uneven crops.

## Update Oct 2026 (round 20, UNPUSHED) — scope image fill + section titles

1. **Scope strip images hardened** — reported narrow/centred images could not
   be reproduced (measured 298px full-bleed in headless Chrome); added
   higher-specificity `.scope-fig .ba-zoom` rules so the fill cannot lose a
   cascade battle, verified all 8 CEVA images at full card width. If the
   reporter still sees narrow images it is a stale cached stylesheet — hard
   refresh (Ctrl/Cmd+Shift+R) the Live Server tab.
2. **Trade section titles redesigned** — gold eyebrow bar + gold count pill,
   matching the site's eyebrow/tag language, replacing the plain "Name (n)"
   text. Screenshots inspected.

## Update Oct 2026 (round 19, UNPUSHED) — scoped photo viewer + location order

1. **Scope images expand per project** — all 96 strip figures are now buttons
   opening the viewer, which scopes prev/next to the clicked photo's own
   project panel ("Photo X of 6", wraps inside the panel; verified 7×next
   never leaves MSC). BA section keeps its global 14-frame scope. Viewer
   overlay duplicated onto scope.html. Captions reuse the figure's own
   alt/site text — no new copy.
2. **Work locations in fixed order** — all "key locations" lists now read
   Bhiwandi · Pune · Mumbai · Delhi NCR · Pan India (hero chip, index
   og:desc + CTA section, services hero + service list, about facts).
   Prose uses ("pan-India turnkey", "across India", per-city examples) and
   project-specific lines ("Bhiwandi & Pan-India" card) intentionally
   untouched.
   Verified static + headless, 0 errors, screenshots inspected. `/DATA`
   untouched.

## Update Oct 2026 (round 18, UNPUSHED) — portfolio trade sections + scope strip fix

1. **Portfolio: one flat grid → 7 trade sections** — Mezzanine (2),
   Fabrication & Welding (5), Electrical & Networking (1), Fencing (2),
   Interior Works (15), Waterproofing & Painting (2), Racking (1); each with
   a counted h3. Same 28 items, same 3 filters; filter JS now also hides
   sections with zero visible matches (verified: Waterproofing filter shows
   only its section; All restores 28/7). Lightbox order follows section
   order, counts unchanged. Unused `id="portfolio-grid"` dropped in the
   split (nothing referenced it).
2. **Scope strip UI fixed (my round-17 bug)** — the 15 appended panels had
   landed OUTSIDE `.container` (full-bleed + native scrollbar). Moved all 17
   panels inside (verified by parse); native strip scrollbars hidden
   (`scrollbar-width:none` + webkit rule) since arrow buttons own scrolling.
   Verified contained L/R, tabs/arrows work, screenshots inspected.
   Full 21/21 suite green, 0 errors. `/DATA` untouched.

## Update Oct 2026 (round 17, UNPUSHED) — portfolio trade coverage + all-project Scope tabs

1. **Portfolio 21 → 28 items** (existing 3 filters unchanged; counts auto-sync:
   warehouse 6→11, offices 13→15). New, from `DATA/specific job folders`
   (today's mazzanine + racks photos): Mezzanine Staircase & Railings,
   Epoxy-Coated Mezzanine Deck, On-Site Welding & Fabrication, Loading-Dock
   Pit Civil Work, Storage Racking Installation (all Warehouse & Industrial);
   plus Electrical Panels & Network Racks and Corporate Reception with
   Signage (Offices & Interiors; reuse scope Dachser files — same facility /
   generic titles). No new filter categories. Lightbox auto-counts 28.
2. **Scope: 2 → 17 site tabs, 18 → 96 photos.** Every project folder in
   `DATA/Commercial` is now a tab (Cabin, EXPO JNPT, Furlenco Bhiwandi,
   Guwahati, B2X/Bhopal/Goa/Mahindra/Nasik FedEx, Pit, Jodhpur, Karjat, MSC,
   Panchkula, Vijaywada) with 4–6 curated photos each (78 new files;
   sharpness/size shortlist + visual review of every folder; dupes, videos,
   toilets, children, blurry shots excluded; captions describe visible
   content with folder-derived site labels — no invented scope details).
   Skipped: googleads/meta (ad creatives), Business/business (mixed promo),
   website-portfolio (lives in Before/After), Civil (elevator lobbies only).
   Tab/strip JS is generic — no code changes needed.
   Verified: static audit clean, 21/21 headless checks, all 96 scope images
   decode, lightbox 28, filters correct, screenshots inspected (tabs, MSC
   tab, new items, mobile). `/DATA` untouched.

## Update Oct 2026 (round 16, UNPUSHED) — freshness pass: latest images throughout

1. **Audit** — surveyed all pools by EXIF date (Commercial newest 2025-12,
   DATA-images newest 2022-10, Project_Images undated): Commercial wins, so
   all upgrades come from there. Rule enforced: client-named items keep
   their own photos; generic-titled items take the newest fitting shot.
2. **Hero (16 frames)** — dropped the two weakest (gate close-up, staff
   photo); added Oct-2025 dock cabin (Cabin 135812, verified full-size) and
   the Dachser office floor (verified; first tried the Dachser reception but
   its half-visible wall signage clashed with the headline — rejected on the
   screenshot). First frame still eager; counts unchanged.
3. **Portfolio** — "Corporate Workstation Hall" → Oct-2025 Vijaywada white
   room (verified full-size, matches its partition-bay desc); "PEB Shed
   Frame" 581px → 1920px roof structure (title matches photo better than the
   old erection shot). Kept deliberately: Dachser pedestals (desc-specific
   match — the newer storage-wall shot would mismatch), cold-cabin (about
   action shot), wood-frame glazing (matches its desc), terrace/facade/
   panels/steel/Pune/FedEx/APM/cartridge (client-attributed or no better
   alternative — the user's "old photos where required" exception).
   Deleted the 4 replaced files.
   Verified 19/19, 0 errors, screenshots inspected. `/DATA` untouched.

## Update Oct 2026 (round 15, UNPUSHED) — Residential section removed

1. **Scope page is commercial-only** — the entire Residential section
   (placeholder card + TODO) deleted from `scope.html`, plus all copy
   mentions (hero text, title, meta/OG descriptions). Zero "residential"
   references remain anywhere in site code. Commercial galleries untouched.

## Update Oct 2026 (round 14, UNPUSHED) — Scope page (Commercial + Residential)

1. **New page `scope.html`** — "Scope of Work" with two sections. Built on the
   services skeleton (same head/header/footer/page-hero/visit-CTA patterns).
   Title/metas/OG are unique; sitemap updated. Header + footer nav on all
   pages now read Home About Services Portfolio **Scope** Contact (6 items;
   `aria-current` moves per page; mobile drawer inherits automatically).
2. **Commercial** (`#commercial`) — 18 photos from
   `Creative/DATA-images/Latest_commercial_residential_images/
   Commercial_for_website` (9 CEVA Chennai + 9 Dachser Pune, selected for
   variety across bursts, compressed to ~1400px) in captioned `.scope-fig`
   cards (new CSS) grouped under site subheads, with a typical-scope summary
   built only from existing service names. Captions use client/site names
   from the source folders — no invented scope details.
3. **Residential** (`#residential`, soft section) — placeholder only:
   "portfolio being compiled" + visible `[TODO: add residential project
   photos]` + contact link. No residential content invented (standing rule).

## Update Oct 2026 (round 13, UNPUSHED) — people, names, privacy, MSC, before/after fixes

1. **Sayed Imran removed entirely** — about meta, management paragraph
   (now "owned and managed by Mukhtar Gulsher Khan and Sufiyan Khan"), team
   card deleted (grid now 2 cards), Sufiyan's card bumped to "Co-owner ·
   Sales & Business Development" per the client's ownership framing.
   Mukhtar stays Proprietor. Zero mentions remain in site code; historical
   note lines redacted with markers.
2. **"Fabrication", not "Steel Fabrication"** — service renamed to
   "Fabrication & Fencing" in block h2, carousel card (was the inconsistent
   "Fabrication & Steel"), all footer links, contact select option, metas
   and body copy ("steel fabrication" → "fabrication" everywhere as the
   term). Kept deliberately: "structural steelwork" / "steel structures"
   (accurate material descriptions, not the service name). Anchor
   `#fabrication` unchanged.
3. **Flooring card** — "Vinyl & Epoxy Flooring" → "Flooring" (carousel h3,
   services h2 → "Heavy-Duty Flooring", all footer links, contact select);
   description now "Heavy-duty floor finishes — vinyl and epoxy." Material
   mentions elsewhere kept as descriptive copy.
4. **GSTIN/PAN removed** — footer-bottom line on all 5 pages now reads
   "ISO 9001:2015 certified · Est. 1990, Mumbai"; about credentials facts
   list lost its GSTIN/PAN item ("GST-registered firm" status claim kept —
   no numbers). Numbers scrubbed from PROJECT_CONTEXT + redacted in these
   notes. They were ID numbers, never needed on a marketing site.
5. **Hero frame 1 removed** — `hero-warehouse-office-setup.jpg` deleted;
   `hero-partition-office-01.jpg` promoted to the eager first frame.
6. **MSC watermarks removed by cropping** — the "Shot on OnePlus" band sits
   in the bottom ~13%, so all 5 used WA-Nov-2025 files were re-cropped at
   85% height (1600×1020) and visually verified clean, incl. re-copying the
   live `ba-msc-after.jpg` which had shipped WITH the watermark. IMG-series
   files never had watermarks.
7. **MSC integrated + before/after fixed and expanded** — full-folder review
   (27 files) showed the old MSC pair mixed two different structures, so the
   MSC card is now a verified 3-stage trio: concrete shell Mar 2023 →
   deck/planter works Apr 2023 (`IMG20230417150952`) → finished lit deck Nov
   2025. Added: 2 pool-deck hero frames (16 total) + 2 finished-deck frames
   to the BA strip (6 total). Viewer count 11 → 14. Karjat + EXPO trio
   re-verified and kept. Deleted `hero-warehouse-office-setup.jpg`.
   Verified full suite + screenshots (below). `/DATA` untouched.

## Update Oct 2026 (round 12, UNPUSHED) — search-result logo/favicon groundwork

1. **Diagnosis** — Google result showed the OLD title ("…Decorator…") + a
   generic globe icon: proof Google hasn't recrawled since the rename push,
   and it never fetched a favicon. Nothing updates until it recrawls.
2. **Added for recrawl/discovery** — `Organization`/`GeneralContractor`
   JSON-LD on all 5 pages (name, logo `https://juveriya.in/svg/logo-full.svg`
   — copied the light full lockup to root `svg/` for this — image, phone,
   email, Galaxy address, est. 1990, India, GBP sameAs); new `sitemap.xml`
   (5 URLs) + `robots.txt` (allow-all + sitemap ref). Favicon set already
   meets Google's size rules (48px ICO + PNGs + SVG + manifest, all
   crawlable). JSON-LD validates; pages serve 200 with 0 page errors (sole
   headless request-fail is the Maps embed blocking headless Chrome — renders
   fine in real browsers, verified earlier by screenshot).
3. **Needs the site owner in Search Console** — URL Inspection → Request
   Indexing for juveriya.in (+ About/Contact); favicon/title refresh follows
   within days. Cannot be forced from here.

## History rewrite Oct 2026 — commit attribution (one-off, user-approved)

1. Past commits were authored `opencode <opencode@local>`, which GitHub
   cannot link to any account — so none of the pushes counted on the
   contribution graph. Rewrote all 8 opencode-authored commits to
   `NARS77 <56463325+NARS77@users.noreply.github.com>` (repo-local git
   identity now set to the same — all future commits attribute correctly).
   The repo owner's `Create CNAME` commit was deliberately left untouched.
   Verified byte-identical trees before force-pushing (`--force-with-lease`);
   GitHub API confirms 8 commit contributions on `ziauddin-sayyed/juveriya.in`.
   NOTE: every commit hash below changed in the rewrite (e.g. HEAD
   `7bb92be` → `8c3a0f6`); treat old hashes as superseded.

## Update Oct 2026 (round 11, UNPUSHED) — renamed to Juveriya Interiors

1. **"Interior Decorator" dropped everywhere** — 31 occurrences across all 5
   pages + JS/CSS file headers now read "Juveriya Interiors" (titles, metas,
   OG tags, aria-labels, body copy, map title, image alt, copyright —
   restored the period: "© 2026 Juveriya Interiors. All rights reserved.").
   Titles stay unique; grammar verified ("is/was established", "Contact …
   in Santacruz"). Zero "Decorator" remains in site code. The two surviving
   mentions in these notes are verbatim quotes of source documents (BOQ /
   project-report legal name) and stay as evidence. The registered legal
   name in /DATA records is unchanged — this rename is website branding only.

## Update Oct 2026 (round 10, UNPUSHED) — kit 2.0, hero rotator, portfolio refresh, before/after, contact updates

1. **Brand kit 2.0** — client added `assets/juveriya-brand-kit2.0/` (redesigned
   mark geometry, wider single-line wordmark, same palette family; every file
   diffed vs old kit + live files, zero identical). Live `svg/` (icon×2,
   wordmark×2 464×52, full-dark), `favicons/` (new names incl.
   `android-chrome-192x192/512x512`, `maskable-icon-512x512`,
   `favicon-16x16/32x32`; manifest points at the new names), and
   `social/og-image.png` overwritten/replaced. HTML dims + favicon links
   updated on all 5 pages; JS swap paths unchanged (same names).
   **Deleted as superseded:** `assets/Juveriya_Interior_logo/` (whole dir),
   old `svg/logo-mark(-dark).svg`, stale favicon PNGs, and unreferenced logo
   drafts (`Draft_JI_logo.png`, `Juveriya_interiors_logo_draft.png`,
   `download`, `draft3.png`). Kept: `Companies_Logo_PNG/` (partner-logo
   source, still referenced by nothing in code but retained as client source).
2. **Hero rotator (index)** — static `hero-warehouse-fitout.jpg` replaced by
   15 real site photos crossfading every 2.6s (`hero-*.jpg`, 1920px,
   ~200–420KB each, 67MB of sources → ~4MB): warehouse setups, partition
   offices, racking, roof structure, lounge, gate, shutter frame, cabins.
   First frame eager + `is-active` (no-JS = static frame); rest `data-src`
   lazy-preloaded one ahead; pauses when tab hidden; fully static under
   `prefers-reduced-motion`. Old hero file deleted.
3. **Portfolio upgrades (generic titles only; client-named items untouched)** —
   "Warehouse Fencing" → `pf-mesh-fencing.jpg` (Furlenco mesh corridor;
   also used on the index featured card); "Turnkey Warehouse Office" →
   `pf-blue-office.jpg` (Cabin blue office; also the index split image, whose
   alt already described it); "Partitioned Cabins" → `pf-glass-cabin.jpg`
   (glazed cabin). Titles/descs kept (photos illustrate work types).
   Replaced files deleted (`warehouse-office-interior.jpg`;
   `cold-cabin-cladding-work.jpg` and `office-glass-partitions.jpg` RETAINED —
   still referenced by about.html and the Glazed Partitions item).
4. **Before / After section (portfolio)** — deep-scanned ~826 Commercial
   images (quant sharpness/size/orientation pass + visual verification of
   date sequences): 2 verified same-project pairs (Karjat pool Feb22→Jun22;
   MSC pool shell Mar23→finished deck Nov25) + a 3-stage EXPO office timeline
   (in use Feb25 → stripped Mar25 → fitted out Apr25) with Before/During/
   After tags, + a 4-thumb "More from the job files" strip — 11 frames total,
   all from `website-portfolio` + same-project sequences (no same-room claims
   beyond what dates + visuals support). Every frame is a button opening a
   dedicated viewer (own overlay reusing lightbox styles, full-size photo,
   stage title + caption, "Photo X of 11", prev/next/Escape/arrows/swipe,
   focus return). Portfolio lightbox untouched (still counts exactly 21).
   New `.ba-zoom`/`.ba-trio`/`.tag--during` CSS.
5. **Contact updates** — G No 26 line removed everywhere (footers + contact
   "Also at"); email is now **info@juveriya.com** everywhere incl. the form
   recipient, native action, and meta description (⚠ enquiries now route to
   the new address); Flaticon credit removed from all footers and the 4 chip
   PNGs replaced by license-free inline SVGs (files deleted); new
   "Google Business Profile" entries (contact card + all footers →
   `https://share.google/2F6Hk8PfobSHnmGoR`); new "WhatsApp Business" card
   with `[TODO: add WhatsApp Business link]` placeholder.
   Verified 13/13 headless checks, 0 console/page/request errors;
   screenshots inspected (hero + chips, before/after, contact cards,
   portfolio grid, mobile). `/DATA` untouched (0 recent mods).

## Update Oct 2026 (round 9, UNPUSHED) — brand kit v2 (new logo + palette)

1. **New kit** — client added `assets/juveriya-website-brand-kit/` (new mark
   geometry, single-line wordmark, new palette: graphite `#33383C`,
   secondary graphite `#5B6166`, gold `#F0B429`, light neutral `#F5F5F5`,
   dark-mode lights `#E7E9EB`/`#AEB4B9`, `theme-color #33383C`). Kit folder
   kept as source, never edited. Genuinely new artwork everywhere (diffed
   file-by-file against old kit + live files — zero identical).
2. **Files** — runtime copies at site root overwritten/renamed to the new
   kit's naming: `svg/` now holds `logo-icon(-dark).svg`, `logo-wordmark
   (-dark).svg` (760×120), `logo-full-dark.svg` (760×525); old
   `logo-mark(-dark).svg` deleted as superseded. `favicons/` fully replaced
   (now `android-chrome-192/512.png`, manifest points at those +
   `theme_color #33383C`/`background #F5F5F5`); stale `icon-192/512.png`,
   `icon-maskable-512.png`, `favicon-48.png` deleted.
   `social/og-image.png` overwritten (new dark version, still 1200×630).
3. **Theme retokened** — `--brand-gold #F0B429`, `--brand-graphite #33383C`,
   `--brand-graphite-light #5B6166`, `--brand-bg #F5F5F5`,
   `--brand-graphite-on-dark #E7E9EB`,
   `--brand-graphite-light-on-dark #AEB4B9`, `--graphite-600 #5B6166`;
   `--brand-gold-text` token deleted (no deeper gold in v2). Primary-button
   hover is now secondary-graphite bg + white text (6.2:1, verified). All
   gold action roles follow the token automatically. `theme-color` meta →
   `#33383C` on all 5 pages.
4. **HTML/JS (5 pages)** — header mark → `logo-icon-dark.svg` (400×290),
   wordmark dims → 760×120, preloads renamed, JS swap constants renamed.
   Footer `logo-full-dark.svg` file replaced (same path). Fluid wordmark
   height unchanged: 139px desktop, ~101px at 360px, 168px lockup fits.
5. **Bigger header lockup** (client: logos looked too small on landing) —
   mark 40→48px, wordmark `clamp(15px,4.5vw,22px)`→`clamp(16px,5vw,28px)`:
   254px lockup on desktop (was 205px), 191px at 360px, both fit the 68px
   header beside nav/CTA/hamburger with room to spare. Verified 1280/768/360,
   0 errors, screenshots inspected.
5. Verified: static audit clean (sole hit: pre-existing `#fff` shorthand),
   8/9 headless checks (1 "failure" was a wrong test expectation — hover is
   #5B6166 by design, 6.2:1), 0 console/page/request errors; screenshots
   inspected (dark/solid header, CTA hover, mobile, footer). `/DATA`
   untouched. Old kit folder retained untouched as source history.

## Update Oct 2026 (round 8, UNPUSHED) — brand theme + header wordmark

1. **Theme from `hex-codes.md`** (client design system — *supersedes* the
   graphite-only rule). `:root` now carries the exact spec block
   (`--brand-gold #F4B31F`, `--brand-gold-text #E3A51A`,
   `--brand-graphite #5B6068`, `--brand-graphite-light #767B83`,
   `--brand-bg #F4F4F4`, `--brand-graphite-on-dark #D9DCE1`,
   `--brand-graphite-light-on-dark #A9AEB6`) plus kept neutrals
   (`#000000` photo overlays/deepest stages, `#303030` dark stages/controls,
   `#FFFFFF`). Remap: `--accent` → gold; `--bg-soft` → `#F4F4F4`;
   `--muted` → brand graphite; `--line`/`--on-dark` → `#D9DCE1`;
   `--graphite-600` corrected to spec `#5B6068`; `--graphite-200` token
   deleted (all direct uses repointed, zero stale refs).
2. **Gold action roles** (black text on gold ≈ 9:1): primary buttons
   (incl. nav CTA) with deeper-gold hover; hero accent line; stat numbers;
   service icon chips; project tags; step rails + number chips; active
   portfolio filter; carousel arrow hovers; eyebrow bars; gold ambient
   glows in page-hero + CTA banner. Kept dark: secondary buttons, footer,
   hero overlay, stats/CTA surfaces, form focus borders, focus rings
   (contrast-critical, functional). Red/green form states untouched.
3. **Header wordmark** — kit `logo-wordmark(-dark).svg` (transparent, verified
   on both backgrounds) added beside the mark at 22px; JS swaps mark AND
   wordmark with the header state; both light assets preloaded; 113px total
   lockup fits 360px beside the hamburger. Footer keeps the full-dark lockup.
4. Verified: static audit clean (only бенign hits: `theme-color` meta hex,
   `#000` shorthand on gold), 10/10 headless checks, 0 console/page/request
   errors, screenshots inspected (dark/solid/mobile header, portfolio,
   footer). `/DATA` untouched.

## Update Oct 2026 (round 7, UNPUSHED) — client logo lockup in header + footer

1. **Logo** — client-supplied `assets/Juveriya_Interior_logo/
   juveriya_interiors_logo.svg` (isometric amber `#F4B31F` + grey `#5B6068`
   mark, "JUVERIYA" amber + "INTERIORS" grey wordmark paths, baked `#F4F4F4`
   background; file used byte-identical). Replaced the "J" tile + text
   wordmark in all 10 brand slots (header + footer × 5 pages) with
   `<img class="brand__logo">`; link `aria-label` kept, img `alt=""`
   (labelled link pattern). Footer logo lazy-loads; header logo eager.
2. **Badge treatment** — `.brand__logo` sits on an `#F4F4F4` badge (seamless
   with the SVG's own background): header 48px tall, footer 64px tall.
   Obsolete `.brand__mark/.brand__text/.brand__name/.brand__sub` rules (and
   the `.is-solid` + `.footer-brand` overrides) removed — zero references
   remain in HTML/CSS/JS. Amber/grey kept as-is under the client-brand
   exemption (same precedent as partner logos); graphite palette otherwise
   untouched. Favicon stays the graphite "J" (text lockup illegible at 16px).
3. **PENDING — header legibility.** Full lockup at header size renders ~78px
   wide; the mark reads but the wordmark text is unreadable. Client chose to
   supply a mark-only/icon file for the header — full lockup stays in header
   until those files arrive. Do NOT derive a cropped mark unilaterally.
   Verified 12/12 headless checks, 0 console errors (1280 + 360, dark +
   solid-white header, footer decode on all 5 pages, no overflow).

## Update Oct 2026 (round 7b, UNPUSHED) — logo kit wired in (resolves #3 above)

1. **Kit** — client added `assets/Juveriya_Interior_logo/juveriya-logo-kit/`
   (SVG mark/full/wordmark in light/dark, PNGs, full favicon set + manifest,
   OG image, README, head-snippet, test page) + the zip. Kit folder left
   untouched as source. Runtime files copied to site root per the kit's own
   "upload to root" instruction: `svg/` (mark, mark-dark, full-dark),
   `favicons/` (10 files), `social/og-image.png` — 116 KB total.
2. **Header** — mark only (the kit's own rule: full lockup illegible under
   ~48px). `svg/logo-mark-dark.svg` by default (all heroes are dark);
   `main.js` `onScroll()` swaps to `svg/logo-mark.svg` with the `.is-solid`
   state, synced on init too. 40px tall, no badge. Light mark preloaded in
   `<head>` so the first scroll doesn't flash. No-JS fallback is correct by
   default (header stays transparent over the dark hero).
3. **Footer** (dark) — `svg/logo-full-dark.svg`, no badge, 72px tall.
4. **Head (all 5 pages)** — kit favicon block (SVG + ICO + 32px PNG +
   apple-touch-icon + manifest + `theme-color #F4B31F`); every page's relative
   `og:image` (which was broken for scrapers) replaced with absolute
   `https://juveriya.in/social/og-image.png` + 1200×630 dimensions +
   `twitter:card`. Per-page og:title/descriptions kept untouched.
5. **Cleanup** — deleted orphan `assets/images/favicon.svg` (round-1 graphite
   "J", superseded by the kit); the original `juveriya_interiors_logo.svg`
   stays on disk unreferenced. Zero references to either remain in code.
   Verified 6/6 headless checks, 0 console/page/request errors, screenshots
   for dark header / solid header / footer / mobile all inspected.
6. **New single-line wordmark** (client replaced the kit's stacked wordmark
   artwork at 12:10 — only `logo-wordmark(-dark).svg` changed; mark, full
   lockup, favicons untouched). Synced the site `svg/` copies; header img
   dims updated to the true 441×38 intrinsic ratio; `.brand__wordmark`
   height is now fluid `clamp(15px, 4.5vw, 22px)` so the 253px desktop
   wordmark shrinks to 186px at 360px (236px total lockup, fits beside the
   hamburger). Verified decode + dark/light swap + fit at 1280/768/360,
   0 errors.
7. **Working hours confirmed** (client) — contact info card now reads
   "Mon – Sat: 9:00 AM – 7:00 PM / Sunday: By Appointment". Last `[TODO:]`
   in the site resolved; zero TODOs remain.

## Update Oct 2026 (round 6) — Manrope typeface, hero + stats copy

1. **Typography** — Archivo + Inter replaced by **Manrope** everywhere.
   All 5 pages now load a single variable font file
   (`css2?family=Manrope:wght@400..800&display=swap`, weights 400–800 cover
   every weight the site uses) and `styles.css` sets both `--font-head` and
   `--font-body` to `"Manrope", "Segoe UI", system-ui, -apple-system,
   sans-serif`. System-font fallback chain unchanged, so nothing breaks if
   Google Fonts is blocked. The SVG favicon keeps `Arial` — favicons cannot
   load web fonts.
2. **Hero headline** (client-edited copy, tidied) — "Commercial &amp;
   Industrial Solutions" then a hard `<br>` so "— delivered across India."
   sits on its own line; removed a stray `. ` after "Solutions" and a
   duplicated full stop in the standfirst.
3. **Track-record stats** (client-directed figures) — the two area figures
   were replaced: "7,000 sq ft / Gate-shed build, APM Terminals Panvel" →
   **"3,000+ / Challenges tackled"**, and "3,850 sq ft / Turnkey office,
   Mahindra Logistics Bhiwandi" → **"25+ MNCs / Problems solved"**. Real
   project descriptions that quote 7,000 sq ft (portfolio card, services
   list, featured project) were left intact — only the achievement tiles
   changed.

## Update Oct 2026 (round 5) — expanded partner logo wall

1. **Heading** — "Logistics, industrial & institutional clients across India"
   → **"Our partners / people we have worked with"** (client wording).
2. **All supplied logos in the carousel** — `#clients-carousel` grew from 12 to
   **34 tiles**; the client dropped ~22 new files directly into
   `assets/images/logos/` and replaced some earlier ones with bigger
   versions (APM 900×500, Rhenus wordmark, Mahindra wordmark) — all wired in
   as-is. New brands: APL Logistics, Allcargo, Birdview Global, Crane
   Worldwide, DP World, Emiza, FEI Cargo, Flyjac, Flyjack, Furlenco, K11,
   KSH, Mantra, MOL, New Breed, PSIPL, SAR Transport, Samsara Shipping,
   TechNova, plus second marks for Mahindra Logistics, MSC and TVS
   (variants shown as separate tiles, same-brand tiles placed next to each
   other). Alt text names every brand; tiles unchanged (white card,
   contained, no stretching; lazy-loaded).
3. **Cleaned derivatives (originals kept untouched)** —
   `APl_logistics.png` and `TVS.jpeg` had a checkerboard "transparency"
   pattern baked into their pixels (export artifact); saved cleaned copies
   `apl-logistics.png` and `tvs.png` (greys → white, logo colours intact)
   and the carousel uses those. `samsara.jpg` was PNG data with partial
   alpha in a .jpg container → flattened onto white as `samsara.png`.
   **Open with client:** Flyjac vs Flyjack, MSC ×2, TVS ×2, Mahindra ×2 are
   two logos of (apparently) the same brand each — kept per instruction;
   say the word to drop any variant.
4. **Wrong-logo tiles removed** (client decision) — the duplicate MSC
   wordmark (`msc.jpg`) and the Mahindra chevron mark
   (`mahindra-logistics2.png`) were dropped; the client deleted both files,
   so the dead commented-out `<li>` lines were removed from the markup too
   and the surviving MSC tile's alt was simplified from "MSC (brandmark)"
   to "MSC". Carousel: 34 → **32 tiles**.
5. **Two more tiles removed** (client decision) — the orange-horse TVS mark
   (`tvs.png`; the blue-circle TVS Supply Chain Solutions tile stays) and
   the green Flyjac logo with the "Integrating Value Chains" tagline
   (`Flyjac.png`; the red/green Flyjack tile stays). Carousel: 32 →
   **30 tiles**. Both files left in `assets/images/logos/` (unreferenced);
   delete them if they shouldn't ship with the site.

## Update Oct 2026 (round 4) — chip icons, rotating client logos, mailto form, office address

1. **Hero chip icons (Flaticon)** — the 4 hero meta items now show real
   Flaticon PNGs, self-hosted in `assets/images/icons/`:
   `chip-calendar.png` (icon 747310 · since 1990), `chip-iso.png`
   (icon 5759691 · ISO badge), `chip-location.png` (icon 8257474 ·
   Santacruz), `chip-india.png` (icon 1455822 · India map = pan-India, as
   instructed). Rendered inside white circular chips so the dark glyphs read
   on the photo hero. Licence credit added to every footer:
   "Icons by Flaticon" → https://www.flaticon.com/.
   Source: `https://cdn-icons-png.flaticon.com/512/{floor(id/1000)}/{id}.png`.
2. **Client logos → rotating strip** — the "On site for" chips list was
   replaced by `#clients-carousel` (second OwlCarousel2 instance, same CDN
   assets already loaded for the services carousel): loop + autoplay 2.4 s,
   autoplayHoverPause, smartSpeed 700, margin 24, labelled ‹ › nav, no dots,
   responsive 2/3/4/5/6 items, autoplay disabled under
   `prefers-reduced-motion`; static grid fallback if the CDN is down.
   The 12 logos were **copied** from `Companies_Logo_PNG/` (client-supplied
   folder, kept untouched) into `assets/images/logos/` — original brand
   colours/backgrounds preserved, contained in white tiles (no stretching).
   MSC kept as .jpg; Marriott came from the client's zip (extracted, the two
   variants were byte-identical so `jw-marriott.png` uses one).
3. **Mail contact form** — kept the mailto approach (client's choice) and
   hardened it: native `<form action="mailto:…"> method/post` fallback for
   no-JS visitors; JS body now includes service, page URL and timestamp with
   `encodeURIComponent`; success box gained a **"Copy enquiry text"** button
   (clipboard API with graceful message) for visitors without a mail app,
   alongside the existing email/tel/WhatsApp fallbacks.
4. **Office address + map** — client-provided office address added
   everywhere without removing the existing line: footers (all 5 pages) show
   "**Office:** Galaxy no. 2, Santoshi Nagar, Western Express Hwy, Golibar,
   Santacruz East, Mumbai – 400 055" above the G No 26 line; the contact
   "Office address" block shows Galaxy No. 2 with "Also at: G No 26…".
   **Map** — Google has no Places entry for "Galaxy no. 2" (a text query
   falls back to a list of nearby *Galaxy*-named hotels with no marker,
   which is what made the old embed look vague). Google's geocoder does snap
   the full address string to street level (17 z) at **19.0824306,
   72.8477001** — just east of NH-48 / W.E. Highway in Santoshi Nagar — so
   the embed now pins exactly there (`?q=19.0824306,72.8477001&z=17`,
   verified to render a red marker) and the "Open in Google Maps" link points
   to the same coordinates. Verified candidates side-by-side first (address
   string → hotel list/no marker; "Golibar" → locality card; coordinates →
   clean pin). **Open with client:** if the pin isn't exactly on the
   building, share a dropped-pin Google Maps link and only these two URLs
   need swapping.

## Update Oct 2026 (round 3) — client feedback: graphite theme, services, contact

### 1. Global theme → graphite grey (client design system)
- All navy/orange replaced site-wide by the mandated palette, defined as CSS
  custom properties at the top of `css/styles.css`:
  `--black #000000`, `--graphite-900 #303030`, `--graphite-600 #5C5C5C`,
  `--graphite-200 #D1D1D1`, `--white #FFFFFF`, plus semantic aliases
  (`--ink`, `--muted`, `--line`, `--bg`, `--bg-soft`, `--bg-dark`,
  `--accent`, `--on-dark`).
- Applied to every page/component: header + mobile drawer, hero, page
  heroes, cards, tags, buttons, stats, steps, chips, CTA banners, Owl
  carousel nav/dots, portfolio filters, lightbox, forms and footer.
  Focus outlines auto-switch to white on dark surfaces (contrast-safe).
  `favicon.svg` recoloured to the same palette (mark structure unchanged).
- Retained colours are functional states only: `#b42318` (field errors) and
  `#2e9e5b`/`#146c3c`/`#e9f7ef` (form success). Verified by grep: no other
  hex/rgba colours remain in CSS; HTML pages contain no raw colour values.

### 2. Company information (per client, round 3)
- **Established 1990** applied site-wide (client instruction). ⚠ Every copy
  of the company profile PDF in /DATA states "FORMATION OF COMPANY: 1998" —
  the 1990 date is a client directive that overrides the documents; logged
  as an open question.
- **ISO 9001:2015 certified** — verified in /DATA: 19 of 20 Juveriya
  project-report cover pages (`2018-2019/Fedex/Cover Page/*.docx`) carry the
  line "Juveriya Interior Decorator, Santa Cruz East, Mumbai … An ISO
  9001:2015 Certified Company". No standalone certificate scan exists, so
  the wording used is exactly "ISO 9001:2015 certified" (no other ISO
  standards claimed).
- **Pan-India turnkey project execution** stated in hero, services intro,
  about credentials and CTA banner; **key locations: Bhiwandi, Delhi NCR,
  across India** (client-provided).

### 3. Services — added / removed (round 3)
- REMOVED per client: restoration & structural repair, residential
  furniture/woodwork, modular kitchens & vanities, concrete-block content.
  Taken out of: home carousel cards, `services.html` blocks (`#restoration`,
  `#residential`, `#kitchens`), footer service links, portfolio filter +
  items, contact form options, meta titles/descriptions, alt text, team
  bios and intro copy. `concrete-blockwork-terminal.jpg` removed from the
  gallery and deleted from `assets/images/` (git-tracked, recoverable).
- ADDED: `#mezzanine` (mezzanine floors), `#shutters-gates` (rolling
  shutters, heavy-duty gates & trolleys, loading-dock fabrication),
  `#flooring` (heavy-duty vinyl & epoxy). Steel fabrication & fencing kept
  and renamed (`#fabrication`); plumbing & cladding kept (`#finishing`);
  electrical renamed "Electrical Materials, Works, CCTV & Networking".
  `services.html` still has 10 numbered blocks and the home carousel 10
  cards, so "Ten services, one contractor" remains accurate.
- Renamed asset: `building-facade-restoration.jpg` →
  `facade-painting-commercial.jpg` (item now filed under Waterproofing &
  Painting; wording no longer implies the removed restoration line).

### 4. Contact (round 3)
- Primary number site-wide: **9923365642** → `tel:+919923365642`, shown as
  "9923 365 642" (headings, CTAs, footer, meta descriptions).
- **9967438155 removed everywhere.** 9820 249 758 retained as a secondary
  line on the contact page only (client removed only the 8155 number).
- WhatsApp: `https://wa.me/919923365642` added in the footer of all 5
  pages, the home CTA banner, the contact info list and the form success
  message (`target="_blank" rel="noopener"`).

### 5. Logos (round 3)
- Inspected `assets/images/`: the only logo asset is `favicon.svg` (the
  "J" tile). /DATA contains no reusable company/client logo files — only a
  UIDAI logo embedded in a BOQ spreadsheet and MSC "brand wall"
  fabrication PDFs (client-side drawings), so none were added (no invented
  relationships). Favicon recoloured to graphite; text wordmark unchanged.

## Positioning (from documents, not assumed)
- **Size/scale:** Small, proprietor-led execution firm. Founded 1998 by
  Mukhtar Gulsher Khan; day-to-day run by Sufiyan Khan (sales & business
  development) [second name redacted Oct 2026 — person removed from the site
  per client instruction]. Disclosed
  turnover in the low-crore range (figures intentionally not published on
  the site — no money/prices policy, Oct 2026). Site teams + own carpenters.
- **Customers:** Primarily B2B — logistics, warehousing & industrial clients
  (FedEx TSCS, Mahindra Logistics, APM Terminals, Rhenus, CEVA, TVS Supply
  Chain, MSC, Dachser, Avvashya CCI, EFL, UIDAI), plus building repair /
  painting / waterproofing for hotels (The Lalit, JW Marriott, Ramee),
  clubs (The Club, Goregaon Sports Club), institutions (MHADA, SVKM),
  clinics and private residences.
- **Price:** Mid-market, value/budget focused ("finishing work in budgeted
  fund", itemised BOQ billing, GST extra).
- **Tone:** Practical, straightforward contractor. Design is therefore
  confident/clean/structured: strong headings, service blocks, credentials,
  project cards with category tags, practical CTA ("Get a Free Quote").
  Palette: deep navy (trust) + industrial orange accent, light neutrals.
  *(superseded round 3 → graphite-grey palette, see top of this file)*

## Company facts (source: 2020-2021/Juveriya profile for prodata.pdf, BOQ footers)
- Full name: Juveriya Interior Decorator Co. ("Juveriya Interior Decorator")
- Address: G No 26, Santoshi Nagar, Near Western Express Highway Service
  Road, Santacruz (East), Mumbai – 400 055
- Email: juveriyainterior@yahoo.com, Info@juveriya.com / info@juveriya.in,
  sufiyan.khan@yjuveriya.in (profile p48, spelling as printed)
- Phone: 9820 249 758 (consistent across all BOQ footers 2007–2024);
  profile also lists 9967438155 / 9923365642
  *(round 3: site primary is now 9923365642; 9967438155 removed)*
- Est. 1998 (as printed in the profile). *(round 3: client instructs 1990 —
  1990 used on the site, discrepancy flagged)*
- Proprietor: Mukhtar Gulsher Khan (45 yrs exp).
  Sales/BD: Sufiyan Khan. [Former project-head line redacted Oct 2026.]
- GSTIN/PAN numbers redacted Oct 2026 (private documents — never on the site). Bankers: New India Co-op Bank / ICICI.
- About-us, mission/vision, core values (quality / precision / customer
  satisfaction) paraphrased from profile pp. 3–5.

## Services (profile p6 + scope seen across BOQs)
1. Turnkey office & warehouse interiors (aluminium partitions, modular
   ceiling, workstations, cabins, cold cabins e.g. 3,500 sq ft FedEx Bhiwandi)
2. Building restoration & structural repair (hotels, clubs, hospitals, housing)
3. Exterior waterproofing without breaking (membrane application)
4. Warehouse racking — heavy-duty & slotted-angle; dismantling / shifting
5. Fabrication & steel structures (TCT-sheet & wire-mesh fencing, PEB sheds,
   7,000 sq ft gate shed APM Panvel, weighbridge civil work)
6. Electrical, lighting & networking (LED high-bay/panels, DBs, cabling,
   CCTV — e.g. CEVA Kalher, TVS, Rhenus)
7. Painting (interior/exterior, floor polishing — e.g. Crystal Enclave)
8. Plumbing, cladding, home automation, anti-slip treatment (profile-listed)
9. Dismantling / relocation of offices, racks & warehouses

## Projects / clients used on site (all from profile pp. 9–15)
- APM Terminals Panvel — 7,000 sq ft gate shed (photo-verified signage)
- Mahindra Logistics Bhiwandi — 3,850 sq ft turnkey office; fencing/cold cabin
- FedEx TSCS — Bhiwandi cold cabin 3,500 sq ft; facilities at Tauru, Bengaluru,
  Ahmedabad, Bhopal, Kochi, Jamnagar, Guwahati; warehouse shifting
- Rhenus Logistics (Hasbro) Bhiwandi; CEVA Kalher; TVS; Avvashya CCI Bhiwandi;
  MSC Gandhidham/Surat; UIDAI Colaba cabins; Dachser; EFL
- Hospitality/institutional: The Lalit (Mumbai & Jaipur), JW Marriott Juhu,
  Ramee Guestline Khar/Juhu, The Club Andheri, Goregaon Sports Club, MHADA,
  Mahatma Gandhi Hospital Parel, ACME Group, SVKM, Kaya Skin Clinic,
  residences (incl. Juhu/Bandra/Lonavala clients named in profile)
## Update Oct 2026 (round 2) — Creative reference, gallery audit, carousel, mailto

### Creative/Reference.jpeg — IMPORTANT attribution note
- The file at /Creative/Reference.jpeg is an advertisement for a DIFFERENT
  business, "BESIM DESIGN" (headline "GET YOUR DREAM HOME INTERIOR DONE IN
  60 DAYS!", contact 9892699850 / 7903038750, besimdesigne@gmail.com,
  Asalpha, Mumbai). It is NOT a Juveriya document.
- Full service list read from the image ("OUR SERVICE INCLUDES"):
  1. bedroom beds and wardrobes · 2. modular kitchen with 3 tandem
  (cabinet & storage) · 3. dressing table · 4. TV unit · 5. 2-coat paint ·
  6. mandir · 7. shoe rack · 8. laminate work · 9. wash basin storage ·
  10. false ceiling · 11. study table · 12. safety door · 13. electrical
  work, wiring and switch board · 14. wall molding design ·
  15. free consultation (2D drawings, 3D view, site visit).
- Also listed in the image but DELIBERATELY NOT used on the site:
  package prices (1BHK 8.45 / 2BHK 10.75 / 3BHK 13.75 Lacs), "60 days"
  promise, "10 year warranty", material specs (18mm semi-Marine ply,
  1mm laminate, Hettich/Hafele hinges, Asian Royal paint) and all Besim
  contact details — these are Besim Design's commercial claims and would be
  invented claims if attributed to Juveriya (per the no-invention rule).
- Merged into services.html as 3 new sections (no duplicates): #residential
  (Residential Furniture & Woodwork — supported by Borivali wardrobe/dining
  PDFs, bed quotation, Juhu/Bandra/Lonavala residence projects),
  #kitchens (Modular Kitchens & Vanities — supported by kitchen-platform PO,
  pantry photos), #doors-paneling (Safety Doors, Paneling & Molding —
  supported by UIDAI wooden-partition/door work orders, paneling bills).
  Overlapping items merged into existing sections: false ceilings
  (turnkey), wiring & switchboards (electrical), multi-coat emulsion
  (painting), free site visit (contact CTA).
- Home page: old 4-card overview replaced by an OwlCarousel2 carousel with
  one card per service (10 cards) directly below the hero; the old section
  slot now holds a client strip (no duplication).

### Image audit (Oct 2026)
- DATA holds 433 image files. Added 12 verified site photos to the
  portfolio (now 22 items, same 3 filter categories; lightbox counts and
  prev/next update automatically from visible items):
  fedex-jamnagar-carpentry, fedex-jamnagar-workstations,
  fedex-jamnagar-counter, pune-afl-service-centre, pune-pantry-cabinets,
  pune-workstations-storage, cartridge-world-storefront,
  cartridge-world-display-wall, office-glass-partitions,
  corporate-workstation-hall, dachser-workstation-pedestals (offices);
  apm-concrete-barrier-fencing (warehouse).
- Skipped: document scans (POs, invoices, measurement sheets, work orders,
  BOQ/notebook screenshots, ID cards, bank docs), CAD layouts/drawings,
  phone UI screenshots, dark/tiny/blurry snaps, near-duplicate alternate
  angles, supplier catalogue images, the Besim third-party ad, and the
  2014-2015 mirror copies of 2017-2018 files. Full per-file table is in the
  delivery report; spot-checks were done via contact sheets.
### Project_Images curated pool (Oct 2026, second pass)
- New folder Creative/Project_Images/ holds 28 curated COPIES (3.2 MB,
  cleaned/resized to max 1600px, lowercase-hyphenated location-based names).
  DATA was only read from, never modified.
- Included (project/site/location photos only): 3 FedEx Jamnagar site-work
  shots; 3 Pune office shots (AFL service centre, pantry, workstations);
  2 Cartridge World Sakinaka (storefront + display wall); 2 corporate
  office shots (glass partitions, workstation hall); 1 Dachser
  workstation/pedestals; 1 APM terminal barrier/fencing; 8 CEVA Chennai
  (workstations, desk+storage, pantry, conference, DB board, closeup,
  warehouse cabins, cabin corridor); 8 Dachser Pune (workstation hall,
  server cabling, cafeteria, reception, closeup, bay, conference, corridor).
- Excluded: ALL documentation (POs, invoices, bills, challans, work
  orders, BOQ/estimate screenshots, measurement sheets, GST returns,
  bank/cheque/ID/Aadhaar/PAN/licence scans, letters, notebooks, drawings,
  layouts, sketches, lux reports, test certificates); phone-UI screenshots;
  3D renders; memes/doodles; supplier catalogue images; dark/tiny/blurry
  shots (Cotton-green before-set, cable close-up, Rhenus thumb); and all
  near-duplicate alternate angles (89-file Pictur sets, 30 Jamnagar,
  29 Ceva, 33 Dachser-Pune reduced to distinct representatives).
- Site photos on juveriya.in itself: 10 images extracted from the company's
  own profile PDF (pp. 23–47) + 12 from DATA folders = 22 portfolio items.

## Numbers shown (all documented, no money figures)
- Operating since 1990 (client directive; DATA says 1998) • Founder 45 yrs
  experience • Project head (civil
  engineer) 10 yrs • 3,850 sq ft turnkey office • 7,000 sq ft gate-shed build
  • 10+ major logistics/industrial client names on record.
- No money, prices, rates or package costs are shown anywhere on the site
  (client instruction, Oct 2026). Turnover figures from the company profile
  are intentionally not published.
- No testimonials, awards, or ratings were found in DATA — none invented;
  no testimonial section included.

## Assumptions
- No logo file exists in DATA → text wordmark + inline-SVG "J" favicon.
- No brand colours/fonts in DATA → originally navy #0E2A47 + orange #E8821E
  *(round 3: replaced by client-mandated graphite palette #000000 /
  #303030 / #5C5C5C / #D1D1D1 / #FFFFFF)*,
  Manrope headings + body *(round 6; replaced Archivo + Inter)*.
- Working hours not stated → placeholder on contact page.
- Website URL/social handles not stated → placeholders in footer/contact.
- "How we work" 5-step process synthesised from standard BOQ notes found in
  DATA (site measurement → itemised BOQ → PO + advance → execution →
  handover & final bill); payment terms (50% advance / 50% on handover,
  GST extra) quoted from real BOQ notes.
- Contact form is front-end only (no backend found). On valid submit it
  builds a `mailto:juveriyainterior@yahoo.com` link (subject "Website
  enquiry from <name>", body with name/phone/email/service/message via
  encodeURIComponent), opens it with window.location.href, then shows the
  success message. A plain mailto fallback link is also shown under the form.
- Profile turnover table 2018–19 row is truncated in source — not published.
