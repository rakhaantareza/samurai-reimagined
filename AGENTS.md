# Project Instructions

## Permanent technical constraints

- Use Vite, semantic HTML, CSS, and vanilla JavaScript only.
- Do not use React or another JavaScript framework.
- Do not add a CSS framework, CSS library, component library, or new dependency.
- Preserve progressive enhancement: essential content must remain available without JavaScript.
- Use mobile-first CSS.
- Preserve accessibility, semantic landmarks, correct heading order, keyboard access, visible focus states, and logical DOM order.
- Run `npm run build` before reporting any implementation milestone complete.

## Documentation authority

When project documents overlap, use this order for the relevant concern:

- `docs/CONTENT.md` is the authority for visible copy. Do not invent or materially alter copy.
- `docs/ASSET_LIST.md` is the authority for asset IDs, placeholder labels, aspect ratios, alt text, and asset direction.
- `docs/MOODBOARD_DIRECTION.md` is the authority for visual composition and layout direction.
- `docs/WIREFRAME_SPEC.md` is the phase-specific implementation authority for the browser wireframe.
- `docs/PROJECT_BRIEF.md` defines the overall product goals, scope, and long-term technical direction.

## Wireframe-phase restrictions

During the browser wireframe phase:

- Do not install dependencies.
- Do not add GSAP, ScrollTrigger, or another animation or smooth-scroll library.
- Do not implement CSS or JavaScript animation, parallax, reveal effects, or pinned horizontal-scroll behavior.
- Do not add final imagery, generated imagery, textures, or final image crops.
- Do not load final fonts. Use the approved system-font wireframe fallbacks.
- Do not modify Figma. Figma export starts only after the complete browser wireframe has been reviewed and approved.
- Use grayscale placeholders labeled from `docs/ASSET_LIST.md`.
- Keep all content readable without future interactions or animation.
- Implement in reviewable milestones and stop at the approved milestone boundary.
