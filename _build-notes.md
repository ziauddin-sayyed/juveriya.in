# Juveriya Interior Decorator — Build Notes

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
  development) and Sayed Imran (project head, civil engineer). Disclosed
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
  Project head: Sayed Imran (civil engg, 10 yrs). Sales/BD: Sufiyan Khan.
- GSTIN 27AJKPK1361R1ZN, PAN AJKPK1361R. Bankers: New India Co-op Bank / ICICI.
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
  Archivo headings + Inter body.
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
