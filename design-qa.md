# RANTO Design QA

## Multi-page architecture round (2026-08, round 4)

- Scope: split the single-page site into a real six-page structure and enrich/de-duplicate all copy. No new images (product photography arrives later and will slot into the existing media frames).
- Architecture:
  - Vite multi-entry MPA: `index.html` (home), `story.html`, `quality.html`, `products.html`, `global.html`, `official.html`. One shared JS/CSS bundle. Per-page titles, descriptions and OG tags (also fixes basic SEO per page).
  - Shared `Chrome` component (header with page-aware active nav, custom locale menu, mobile menu, footer, grain, Lenis, scroll state). Page components render inside it; locale persists across pages via localStorage (verified).
  - `main.tsx` resolves the page from `#root[data-page]`. BrowserRouter removed (was unused; avoids GitHub Pages deep-link 404s).
- Content enrichment (4 locales, all new keys additive):
  - Home rebuilt as a cover: hero, proof band, a chapters index (photo + four editorial rows linking to pages), manifesto statement, contact CTA.
  - Story page: page hero with new long-form `storyIntro`, heritage body promoted to a serif statement block, pillars, trusted-places grid.
  - Quality page: hero, quality feature with new `qualityFeatureTitle`, pinned six-stage runway, lab section with new unique `labBody` (no longer reusing qualityBody).
  - Products page: hero, six systems with overlay detail (ritual copy), refill section.
  - Global page: hero, markets, scene cards now using unique `offlineBody`/`hospitalityBody` (no longer reusing partnersBody/placesBody), ecosystem, partner marquee.
  - Official page: hero, verification, channel rows, static contact channels (LINE / email / site), confidence grid, contact CTA.
  - `nextLabel` drives the NEXT CHAPTER footer device chaining story, quality, products, global, official.
- Fixed during QA: mobile menu was trapped inside the header because the header's `backdrop-filter` creates a containing block for fixed descendants; the menu now renders as a header sibling and covers the viewport correctly.
- Verification: all six pages load with correct localized titles/h1s, zero console errors, zero horizontal overflow; internal links resolve (200); locale persistence verified (th); products overlay and pinned runway regressions pass; mobile menu navigates with correct active state. Evidence: `qa-r4-home-chapters.png`, `qa-r4-story-hero.png`, `qa-r4-story-next.png`, `qa-r4-official.png`, `qa-r4-mobile-menu.png`.

## Signature-moments round (2026-08, round 3)

- Scope: one memorable scroll story, a product detail ritual, a manifesto screen, buttery scrolling, custom language UI. All copy keys additive (`manifesto`, `productRituals`); no existing copy touched.
- New experiences:
  - Pinned quality story: the six-stage process is now a sticky full-viewport runway (sticky view + six IntersectionObserver marks on the viewport centre line). Stage copy crossfades left while a giant ghost serif numeral resolves right; mono counter and a six-segment progress rail (clickable, jumps via Lenis) sit at the bottom. No scroll listeners, no animation libraries.
  - Manifesto screen: full-bleed `heritage-japan.jpg` (previously unused asset) under a tuned scrim with one huge localized serif line (`t.manifesto`, written in EN/ZH/JA/TH).
  - Product detail overlay: clicking a product image or title opens a full-screen paper takeover (52/48 media/copy) with mono system eyebrow, oversized serif title, description, an italic serif usage-ritual line (new `productRituals` copy), and verify link. Escape closes, focus moves to the close button, page scroll locks (body + Lenis stop).
  - Smooth scrolling: Lenis inertial scroll (duration 1.15s), disabled under `prefers-reduced-motion`; all in-page navigation routes through `lenis.scrollTo` with header offset.
  - Custom locale menu replaces the native `<select>`: mono button, glass panel, per-language native names + codes, outside-click and Escape dismissal.
- Fixed during QA: ecosystem grid used percentage columns plus an 8vw gap (tracks overflowed the container since v1, masked by the old `overflow: hidden` shell) now uses `fr` tracks; removed the shell `overflow: hidden` which had silently broken `position: sticky` (header never actually stuck before this round).
- Verification: four locales (EN/ZH/JA/TH) x desktop 1440 + mobile 390. Sticky header confirmed at top:0 after scroll; pinned stages switch correctly through the runway (0, 1, 4 sampled); overlay opens/closes via Escape; statement, runway, Lenis present in all locales; zero console errors; zero horizontal overflow everywhere. Evidence: `qa-r3-process-s4.png`, `qa-r3-statement.png`, `qa-r3-overlay.png`, `qa-r3-locale.png`, `qa-r3-mobile-process.png`.

## Visual elevation round (2026-08) — luxury upgrade

- Scope: visual layer only. Content, copy keys, section IDs, anchors and i18n structure untouched.
- Design read: redesign-preserve. Brand tokens kept (warm paper `#faf8f3`, warm `#f2ede3`, RANTO blue `#075dc2`, navy `#0c263f`, Newsreader / Inter / IBM Plex Mono). Dials: variance 7, motion 5-6, density 2-3.
- System changes:
  - Header: 88px transparent at top, condenses to 64px with paper blur once scrolled (IntersectionObserver sentinel, no scroll listeners). Desktop nav underline-draw hover. Mobile menu is now a full-screen bottom-anchored overlay with serif links, index numbers, staggered entrance and body scroll-lock.
  - Hero: full-viewport (`100svh`), headline up to 98px Newsreader, staggered entrance, slow 2.6s image settle zoom, minimal white hairline caption replacing the boxed chip.
  - Motion layer: all sections scroll-reveal via the shared `Reveal` component (`.stagger` cascade on grids); CSS scroll-driven parallax on editorial images (`animation-timeline: view()`, progressive enhancement); image hover scale in `overflow:hidden` media frames; everything gated by `prefers-reduced-motion`.
  - Buttons/links: quiet-luxury mono uppercase (10.5px, .22em tracking), hairline outline hovers with ink fill; text links get hairline underline + arrow shift.
  - Editorial grids: boxed table cells replaced by open hairline-top grids with oversized ghost serif numerals (hover: numeral resolves to blue, hairline to blue).
  - Partner network: six bordered cells replaced by a slow serif marquee (single marquee per page, pause on hover, static under reduced motion).
  - Product cards: boxed cards opened up; mono eyebrow numbers, serif titles, image hover scale.
  - Footer: giant RANTO wordmark (up to 186px), refined mono link columns.
  - Materiality: fixed SVG film grain at 4% (pointer-events none), tinted radial depth on navy/blue bands, custom scrollbar, global focus-visible rings.
  - Thai typography: Noto Serif Thai added for display headings; mono stacks extended for Thai.
  - Perf-adjacent: hero preload + `fetchpriority`, all below-fold images `loading="lazy" decoding="async"`.
- Fixed during QA: `.reveal.is-visible.stagger` selector (same-element stagger grids never resolved with the descendant selector), mobile-menu base `display:none` guard outside breakpoints.
- Verification: scroll-triggered captures across EN/ZH/JA/TH, desktop 1440 and mobile 390, menu open state. Zero console errors, zero horizontal overflow in all four locales. Evidence: `qa-en-desktop-full.png`, `qa-lux-desktop-hero.png`, `qa-lux-mobile-hero.png`, `qa-lux-mobile-full.png`, `qa-lux-mobile-menu.png`, `qa-th-hero.png`.

## Comparison target (previous round)

- Source visual truth:
  - `E:\Company\舰长\RANTO品牌\网站代码\pencil-site-exports\00-global-homepage-desktop.png`
  - `E:\Company\舰长\RANTO品牌\网站代码\pencil-site-exports\06-homepage-mobile.png`
  - Detail boards `01` through `05` supplied the expanded heritage, quality, products, global-network and official-channel content.
- Browser-rendered implementation: `https://kevin592.github.io/ranto/`
- State: English global homepage, logged-out/public visitor, no form result shown in final captures.

## Viewports and normalization

- Desktop source pixels: `1384 x 8192`.
- Desktop implementation: browser viewport `1384 x 900`, device scale factor `1`; page capture `1369 x 14172` after the browser scrollbar is accounted for.
- Mobile source pixels: `553 x 8192` (Pencil export density).
- Mobile implementation: browser viewport `390 x 844`, device scale factor `1`; content width/capture `375 x 20263` after the browser scrollbar is accounted for.
- No density-derived visual finding was filed. The implementation is intentionally longer because the five detailed Pencil pages were consolidated into the public homepage so the user can review the full real effect.

## Full-view comparison evidence

- Desktop side-by-side: `E:\Company\舰长\RANTO品牌\网站代码\app\qa-compare-desktop-full.png`
- Mobile side-by-side: `E:\Company\舰长\RANTO品牌\网站代码\app\qa-compare-mobile-full.png`
- The implementation preserves the source composition language: warm off-white editorial fields, RANTO blue, dark navy evidence sections, thin rules, serif display hierarchy, mono labels, restrained square controls, split image/text sections and image-led product systems.
- Intentional content deviations: unverified statistics, named retailers and testimonial quotes were replaced with verifiable evidence categories and an explicit official-verification path. This avoids presenting design-stage examples as brand facts.

## Focused comparison evidence

- Header, hero and proof strip: `E:\Company\舰长\RANTO品牌\网站代码\app\qa-compare-desktop-hero.png`
- Mobile menu and language access: `E:\Company\舰长\RANTO品牌\网站代码\app\qa-mobile-menu-final.png`
- Focused review confirms the logo is a real source asset, the hero uses the original high-resolution product image, typography hierarchy and image crop follow the Pencil target, and mobile controls remain visible without horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: Newsreader display serif, Inter body text and IBM Plex Mono labels match the intended editorial hierarchy. Noto Sans/Serif fallbacks cover Chinese, Japanese and Thai. No clipping or horizontal overflow was found.
- Spacing and layout rhythm: desktop split sections, bordered grids and full-bleed evidence bands follow the source rhythm. Mobile changes to a single-column narrative with product cards in a compact image/text split.
- Colors and visual tokens: warm paper `#fbfaf7`, warm section `#f4f0e9`, RANTO blue `#075dc2`, navy `#0c263f`, ink and thin neutral rules match the Pencil direction.
- Image quality and asset fidelity: hero remains `4096 x 2142`; new scene, factory, laboratory, retail and hospitality images are locally served at `2400px` width. All 17 rendered images loaded successfully and no placeholder, CSS-art or emoji asset substitution is present.
- Copy and content: the full brand narrative, quality chain, six product systems, offline/professional ecosystem, global perspective, display-only intent and official-channel verification are present. English, Japanese, Thai and Chinese primary content was tested.

## Comparison history

### Iteration 1 — blocked

- [P2] Mobile language switching was unavailable because the desktop select was hidden at the mobile breakpoint.
- [P2] Several secondary Japanese and Thai sections inherited English content, producing mixed-language pages.
- Fixes: added a four-language selector to the mobile menu; localized the heritage pillars, use scenes, quality steps, six product descriptions, partner ecosystem, markets, reuse evidence and verification content; localized secondary Chinese scene headings and disclosure copy.

### Iteration 2 — passed

- Post-fix browser evidence: `qa-mobile-menu-final.png`, `qa-mobile-final.png`, `qa-desktop-final.png`.
- Four-language switch result: English, Japanese, Thai and Chinese each produced the correct localized hero heading.
- Responsive result: no horizontal overflow at desktop or mobile.
- Asset result: zero broken images.
- Interaction result: mobile menu opens/closes; primary anchors scroll to sections; channel verification input returns the intended guidance; mail contact remains an explicit user action.
- Console result: zero errors or warnings recorded during the final public-page run.

## Follow-up polish

- [P3] Confirmed retailer/factory names, certification identifiers and exact market contacts can replace the current evidence categories after the brand team supplies documentary proof.

## Implementation checklist

- [x] Complete public brand narrative implemented.
- [x] High-resolution image assets stored locally and served successfully.
- [x] Desktop and mobile responsive layouts verified.
- [x] Four language states verified.
- [x] Navigation, mobile menu and verification interaction tested.
- [x] GitHub Pages deployment succeeded.

final result: passed
