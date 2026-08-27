# RANTO Design QA

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
