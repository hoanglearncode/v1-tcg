# UI Kit — Website (Trang chủ Toàn Cầu OOH)

Interactive recreation of the public homepage specified in `tcg-landing-page/docs/design-system/wireframe-homepage.md` (the page itself is a stub in the codebase; the wireframe + design-system.md are the source of truth).

Interactions: industry chips re-rank AI spotlight cards · "+ Thêm báo giá" feeds the sticky QuoteTray · map list/marker selection · lead form idle→submitting→success with toast · smooth-scroll CTAs.

Files: `index.html` (entry), `data.js` (seed locations/industries), `sections.jsx` (nav→footer sections), `app.jsx` (composition + state). Composes the design-system bundle — no re-implemented primitives.

Placeholders: billboard photos, partner logos, case studies await real material. Map canvas is cosmetic (production: MapLibre GL + clustering).
