# Juveriya Interiors — Website Brand Kit

Everything you need to put the logo on a website, in email, on social media and in browser tabs.

**Quick start:** open `index.html` in your browser to test everything. Then follow the setup steps for your website platform below.

---

## 1. What's inside

```
juveriya-brand-kit/
├── svg/                      Logos for websites (sharp at any size)
│   ├── logo-full.svg         Full logo: icon + JUVERIYA / INTERIORS stacked
│   ├── logo-icon.svg         Icon only
│   ├── logo-wordmark.svg     "JUVERIYA INTERIORS" on one line
│   ├── *-dark.svg            Same three, for DARK backgrounds
│   └── *-auto.svg            Same three, switch light/dark by themselves
├── png/                      Transparent PNGs (email, Word, social, Shopify…)
├── favicons/                 Browser tab, iPhone/iPad and Android icons
├── social/og-image.png       1200×630 preview image for shared links
├── head-snippet.html         Code to paste into your site's <head> and header
├── index.html                Test page
└── README.md                 This file
```

**PNG sizes** (all transparent; the `-small` files are for places that show a logo at 200–300 px wide and want it crisp on high-resolution screens):

| File | Size |
|---|---|
| `logo-full.png` / `-dark` | 1200 × 1660 |
| `logo-full-small.png` / `-dark` | 400 × 553 |
| `logo-wordmark.png` / `-dark` | 2000 × 226 |
| `logo-wordmark-small.png` / `-dark` | 600 × 68 |
| `logo-icon.png` / `-dark` | 1024 × 1024 |
| `logo-icon-small.png` / `-dark` | 256 × 256 |

**Favicon files**

| File | Used for |
|---|---|
| `favicon.svg` | Modern browser tabs |
| `favicon.ico` (16, 32, 48 px) | Older browsers, Windows, Google search results |
| `favicon-16x16.png`, `favicon-32x32.png` | Browser tabs, bookmarks |
| `apple-touch-icon.png` (180 px) | iPhone / iPad home screen |
| `android-chrome-192x192.png`, `android-chrome-512x512.png` | Android home screen, "add to home screen" |
| `maskable-icon-512x512.png` | Android adaptive icons (extra safe margin so nothing is cropped) |
| `site.webmanifest` | Tells Android which icons to use |

The favicon and app icons use the icon on a dark graphite square, so they stay readable on both light and dark browser tabs.

---

## 2. Brand basics

| | |
|---|---|
| Golden yellow (JUVERIYA, accent edges) | `#F0B429` |
| Graphite (INTERIORS, dark faces) | `#33383C` |
| Mid graphite | `#5B6166` |
| Light graphite | `#8C9399` |
| Graphite tints used on dark backgrounds | `#6B737B` · `#98A0A8` · `#C9CFD5` |
| Page background used in the logo files | `#F5F5F5` |
| Icon tile (favicons) | `#1B1F22` |

**Fonts:** the lettering inside every logo file is converted to shapes, so the logos look identical everywhere and need no font installed. Manrope (700) is only loaded for the optional live-text header (Option C in `head-snippet.html`).

**Which file where**

| Where | Use |
|---|---|
| Website header / footer | `svg/logo-full.svg`, `svg/logo-wordmark.svg` or the compact header (Option C) |
| Dark sections of your site | the `-dark.svg` version, or the `-auto.svg` version |
| Email signature | `png/logo-wordmark-small.png` (display at 300 px wide) or `png/logo-full-small.png` (display at about 150 px wide) |
| Word / PowerPoint / Google Docs | `png/logo-full.png` or `png/logo-wordmark.png` (they scale down cleanly) |
| Social profile picture | `favicons/android-chrome-512x512.png` (solid background, works in round crops) |
| Shopify / Wix / Squarespace logo | the PNG versions |
| Link previews | `social/og-image.png` |

---

## 3. Setup

In every case, **replace `https://www.YOUR-DOMAIN.com` and the description text** in `head-snippet.html` first. Share-preview tags need your full web address.

Platforms rename their menus from time to time. If a name below differs, search the platform's help for the setting named in bold.

### Plain HTML site

1. Copy the `svg/`, `png/`, `favicons/` and `social/` folders into your site's root folder (next to your `index.html`).
2. Open `head-snippet.html`. Paste **Part 1** inside the `<head>` of every page.
3. Paste **one** of the header options (A, B or C) of **Part 2** where your header is.
4. Optional: also copy `favicons/favicon.ico` to the very root of your site as `/favicon.ico`. Some tools and crawlers ask for that exact address.

### WordPress

*Menu names differ slightly between themes and WordPress versions.*

1. **Logo:** Appearance → Customize → Site Identity → Logo (classic themes), or add a **Site Logo** block in Appearance → Editor (block themes). WordPress does not accept SVG uploads by default, so use the PNGs (`png/logo-wordmark.png` is a good header choice). To use the SVGs, install a plugin that safely allows SVG uploads (for example *Safe SVG*).
2. **Favicon:** Appearance → Customize → Site Identity → **Site Icon** (on block themes it can also be under Settings → General). Upload `favicons/android-chrome-512x512.png`. WordPress asks for a square image of at least 512 × 512 px, and creates the other sizes.
3. **Share image and extra tags:** Part 1 of `head-snippet.html` goes into your head through an "insert headers and footers" plugin (such as WPCode) or a child theme. If you use an SEO plugin (Yoast, Rank Math), set the social image there instead — `social/og-image.png` — and skip the Open Graph lines so they are not duplicated. If you set the Site Icon in step 2, skip the favicon lines in the snippet.

### Shopify

1. Online Store → Themes → **Customize**.
2. **Logo:** open your **Header** section and upload `png/logo-wordmark.png` (or `png/logo-full.png` for a taller header).
3. **Favicon:** open **Theme settings** (gear icon) → **Logo** or **Favicon** (the name depends on your theme) and upload `favicons/favicon-32x32.png`. Shopify recommends a 32 × 32 px image and resizes larger ones. The favicon does not show inside the theme editor, so check your live store.
4. **Share image:** Online Store → Preferences → Social sharing image → upload `social/og-image.png`.
5. **Optional, for full control:** Online Store → Themes → ⋯ → Edit code → `layout/theme.liquid`, and paste Part 1 of the snippet before `</head>` (skip lines your theme already outputs).

### Wix

*Menu names change; use the search box in your Wix dashboard if you can't find one.*

1. **Favicon:** Dashboard → Settings → **Website settings** → Favicon → upload `favicons/android-chrome-512x512.png`. Wix may require a Premium plan with a connected domain for a custom favicon.
2. **Logo:** in the Wix editor, add an image and upload `png/logo-wordmark.png` (or `png/logo-full.png`) in the header. Use the PNGs, not the SVGs.
3. **Share image:** in the same Website settings area, look for the **Social image** setting and upload `social/og-image.png`.

### Squarespace

1. **Logo:** in the site editor, open the header / Site Identity settings and upload `png/logo-wordmark.png`.
2. **Favicon:** Design → **Browser Icon** (on newer versions, Settings → General → Browser Icon). Squarespace takes one square image, at least 100 × 100 px, so upload `favicons/android-chrome-192x192.png`.
3. **Share image:** look for the **Social image** setting in the site's SEO / Marketing settings and upload `social/og-image.png`.

### Webflow

1. **Favicon + home-screen icons:** Site settings → General → **Icons** → Upload icon → choose `favicons/android-chrome-512x512.png` → choose which icons to update → Apply, then publish. Webflow creates the favicon, touch icon and webclip sizes from this one square image. Webflow also lets you add a separate dark-mode favicon once the light one is set.
2. **Logo:** add an Image element in your navbar and upload `svg/logo-wordmark.svg` (Webflow accepts SVG) or the PNG.
3. **Share image:** in Page settings, look for the Open Graph image (per page), and check Site settings for a site-wide default. Upload `social/og-image.png`.
4. For the extra tags in Part 1 of the snippet, use Site settings → Custom code → Head code (needs a paid Site plan).

### React / Next.js

1. Copy `svg/`, `png/`, `favicons/` and `social/` into your project's **`public/`** folder.
2. **Next.js (App Router)** — in `app/layout.tsx`:

```tsx
export const metadata = {
  metadataBase: new URL('https://www.YOUR-DOMAIN.com'),
  title: 'Juveriya Interiors',
  description: 'YOUR SHORT DESCRIPTION',
  manifest: '/favicons/site.webmanifest',
  themeColor: '#33383C',
  icons: {
    icon: [
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: '48x48' },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Juveriya Interiors',
    images: [{ url: '/social/og-image.png', width: 1200, height: 630, alt: 'Juveriya Interiors logo' }],
  },
  twitter: { card: 'summary_large_image', images: ['/social/og-image.png'] },
};
```

   (In newer Next.js versions, `themeColor` may need to move to the separate `viewport` export — follow the warning in your console if you see one.)

3. **A logo component that switches in dark mode:**

```jsx
export function Logo({ kind = 'full', height = 150 }) {
  // kind: 'full' | 'icon' | 'wordmark'
  return (
    <picture>
      <source srcSet={`/svg/logo-${kind}-dark.svg`} media="(prefers-color-scheme: dark)" />
      <img src={`/svg/logo-${kind}.svg`} alt="Juveriya Interiors" style={{ height, width: 'auto' }} />
    </picture>
  );
}
```

   Use a plain `<img>` for the SVGs; it is the simplest option and they are already tiny.
4. **Create React App / Vite:** same idea — put the folders in `public/`, paste Part 1 into `index.html`'s `<head>`.

---

## 4. Dark mode

There are three ways to handle dark backgrounds. Pick the one that matches your site.

1. **Automatic, per file:** use a `*-auto.svg` file. One `<img>`, and it switches with the visitor's device setting. Simplest.
2. **Automatic, with `<picture>`:** Options B and C in `head-snippet.html`. Same result, using the light and dark files.
3. **Your site has its own dark-mode button** (a `dark` class on `<html>`): the two methods above only follow the *device* setting, so use two images and let your CSS pick one:

```html
<img class="logo-light" src="/svg/logo-full.svg" alt="Juveriya Interiors" height="150">
<img class="logo-dark"  src="/svg/logo-full-dark.svg" alt="" height="150">
<style>
  .logo-dark{display:none}
  .dark .logo-light{display:none}
  .dark .logo-dark{display:block}
</style>
```

Always put the **dark** logo on dark backgrounds. The standard logo's graphite shapes would nearly disappear there.

---

## 5. Sizing tips

- **Set only the height *or* the width** and leave the other automatic (`height:auto`). Never stretch a logo to fit a box.
- **Minimum sizes** (below these the small lettering gets hard to read):
  - Full logo: about **140 px tall**. Sweet spot for headers, hero sections and footers: 160–240 px.
  - Wordmark (one line): about **180 px wide**. Sweet spot in a navigation bar: 220–320 px wide.
  - Icon: about **24 px**. In a nav bar next to text, 40–48 px.
  - Smaller than that? Use the favicon.
- **Phones:** the full logo is tall, so use the wordmark or the compact header (Option C) in the top bar and keep the full logo for the footer or hero.
- **Clear space:** keep an empty margin around the logo of at least one-eighth of its height. Don't crowd it with text or borders.
- **High-resolution screens:** PNGs are already supplied at 2× or more. Show them at half their pixel width (for example `logo-wordmark-small.png` is 600 px wide, so show it at 300).
- **Email signatures:** Outlook and Gmail don't reliably show SVG. Use a `-small.png`, give it an explicit `width`, and host it on your website or attach it inline.
- **Backgrounds:** use the standard logo on light backgrounds and the `-dark` logo on dark ones. Avoid placing either directly on a busy photo — put it on a solid area.

---

## 6. If something doesn't look right

- **Old favicon still showing:** browsers cache favicons for a long time. Hard-refresh (Ctrl/Cmd + Shift + R), or open the site in a private window.
- **Share preview not updating:** WhatsApp, Facebook and LinkedIn cache previews. Facebook's *Sharing Debugger* and LinkedIn's *Post Inspector* let you force a refresh. For WhatsApp, adding something like `?v=2` to the link makes it fetch fresh.
- **Preview image missing:** the `og:image` address must be a full `https://` URL (not `/social/…`) and publicly reachable.
- **Logo blurry:** you are probably showing it much larger than the PNG's pixel size. Use the SVG, or the larger PNG.
- **Logo vanishes on a dark section:** switch to the `-dark` or `-auto` version.
