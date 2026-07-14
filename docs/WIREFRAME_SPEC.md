# History of Samurai — Reimagined
## Wireframe Specification

**Status:** Draft v1.0  
**Repository:** `samurai-reimagined`  
**Purpose:** Spesifikasi utama untuk low-fidelity wireframe sebelum visual design, imagery, dan animation  
**Related documents:** `PROJECT_BRIEF.md`, `CONTENT.md`, `ASSET_LIST.md`, `MOODBOARD_DIRECTION.md`

---

## 1. Wireframe Goal

Wireframe harus memvalidasi:

- Urutan cerita.
- Hierarchy.
- Section pacing.
- Text width.
- Image placement.
- Desktop dan mobile behavior.
- Sticky layout.
- Horizontal weapons section.
- Before-and-after project story.
- Accessibility structure.

Wireframe belum fokus pada:

- Final imagery.
- Final color grading.
- Fine typography.
- GSAP animation.
- Texture.
- Decorative brush effects.
- Polished hover states.

Output utama:

1. Responsive browser wireframe.
2. Desktop Figma frame 1440 px.
3. Mobile Figma frame 390 px.
4. Editable Figma layers.
5. Static semantic HTML structure.

---

## 2. Global Wireframe Rules

### Visual treatment

Gunakan grayscale.

```css
--wf-bg: #111111;
--wf-surface: #1b1b1b;
--wf-surface-2: #252525;
--wf-text: #f1f1f1;
--wf-muted: #9d9d9d;
--wf-line: rgba(255, 255, 255, 0.14);
--wf-accent: #777777;
```

Gunakan label placeholder seperti:

```text
IMAGE PLACEHOLDER
TIMELINE VISUAL
WEAPON IMAGE
FIGURE PORTRAIT
```

### Typography placeholder

Heading:

```css
font-family: Georgia, "Times New Roman", serif;
```

Body:

```css
font-family: Arial, Helvetica, sans-serif;
```

Final fonts belum perlu di-load saat wireframe.

### Content

Gunakan copy dari `CONTENT.md`.

Boleh memendekkan body untuk wireframe apabila terlalu panjang, tetapi:

- Jangan membuat copy baru.
- Jangan mengubah historical meaning.
- Heading, labels, dates, dan facts harus sesuai `CONTENT.md`.

### Layout strategy

Gunakan mobile-first CSS.

```text
Maximum page width: 1360 px
Main content width: 1180–1240 px
Readable paragraph width: 560–680 px
```

### Breakpoints

```text
Mobile:     0–767 px
Tablet:     768–1023 px
Desktop:    1024–1439 px
Large:      1440 px and above
```

### No animation yet

Jangan gunakan:

- GSAP.
- ScrollTrigger.
- Smooth-scroll library.
- CSS reveal animation.
- Parallax.
- Actual horizontal scroll behavior.

Gunakan annotation untuk menjelaskan future behavior.

---

## 3. Semantic Page Structure

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <header>
    <nav></nav>
  </header>

  <main id="main-content">
    <section id="hero"></section>
    <section id="origins"></section>
    <section id="timeline"></section>
    <section id="timeline-transition"></section>
    <section id="bushido"></section>
    <section id="weapons"></section>
    <section id="figures"></section>
    <section id="decline"></section>
    <section id="legacy"></section>
    <section id="project"></section>
    <section id="sources"></section>
  </main>

  <footer></footer>
</body>
```

Heading order:

```text
h1: Hero title
h2: Main section headings
h3: Era, weapon, figure, and principle titles
```

---

## 4. Desktop Frame

```text
Name: Desktop — Full Page
Width: 1440 px
Height: auto
Columns: 12
Margin: 80 px
Gutter: 24 px
Section spacing: 160–200 px
```

---

## 5. Mobile Frame

```text
Name: Mobile — Full Page
Width: 390 px
Height: auto
Columns: 4
Margin: 20 px
Gutter: 16 px
Section spacing: 96–120 px
```

---

## 6. Navigation

### Desktop

```text
Height: 80 px
Left: SAMURAI
Right: Origins, Timeline, Bushidō, Weapons, Figures, Legacy, Project
```

Requirements:

- Full-width.
- Aligned to main container.
- Compact.
- No CTA button.
- Add annotation: `FUTURE: FIXED NAV / BACKGROUND CHANGES AFTER SCROLL`.

### Mobile

```text
Height: 68–72 px
Left: SAMURAI
Right: MENU
```

Create a hidden menu mockup containing all section links.

Annotation:

```text
FUTURE: FULL-SCREEN MOBILE MENU
```

---

## 7. Hero

### Desktop

```text
Minimum height: 900 px
Content width: 600–660 px
```

Content:

```text
A JOURNEY THROUGH FEUDAL JAPAN

The Way of
the Samurai

For centuries, the samurai stood at the center of Japan’s military and political order.

c. 900–1877

SCROLL TO BEGIN
```

Image annotation:

```text
HERO-01
LONE SAMURAI ON RIGHT THIRD
NEGATIVE SPACE ON LEFT
```

Future annotation:

```text
FUTURE:
- Slow image scale
- Sequential text reveal
- Scroll indicator
```

### Mobile

```text
Height: 760–820 px
Order: Eyebrow → Heading → Supporting copy → Date → Scroll label
```

Image subject remains lower-right or center-right.

---

## 8. Origins

### Desktop

Two columns:

```text
Left: 6 columns
Right: 5 columns
Gap: 1 column breathing room
```

Left:

```text
01 / BEYOND THE LEGEND

Who Were
the Samurai?

Opening statement
Body paragraph
```

Right:

```text
ORIGIN-01
MOUNTED SAMURAI ARCHER
4:5 IMAGE PLACEHOLDER
```

Below:

- Historical fact block.
- Pull quote.
- Divider.

### Mobile

Order:

1. Eyebrow.
2. Heading.
3. Opening statement.
4. Image.
5. Body copy.
6. Historical fact.
7. Pull quote.

---

## 9. Timeline Introduction

### Desktop

```text
Height: 520–620 px
Max heading width: 800 px
```

Content:

```text
02 / THE RISE OF WARRIOR RULE

A History Shaped by
Service, Conflict,
and Power
```

### Mobile

Single column with natural wrapping.

---

## 10. Timeline Main

### Desktop

Three columns:

```text
Left navigation: 2 columns
Main content: 5 columns
Sticky visual: 5 columns
```

Left:

```text
01 Foundations
02 Heian
03 Kamakura
04 Muromachi
05 Sengoku
06 Unification
07 Edo
08 Meiji
```

Add progress line.

Annotation:

```text
FUTURE:
ACTIVE ERA CHANGES ON SCROLL
PROGRESS LINE GROWS
```

Center:

Create eight era blocks with:

```text
Date
Era label
Headline
Short body
Supporting fact
```

Each block minimum height:

```text
620 px
```

Right:

```text
STICKY TIMELINE IMAGE
CHANGES PER ACTIVE ERA
```

Show only one placeholder in the wireframe.

### Tablet

```text
Left era list: 3 columns
Content: 9 columns
Image inline
```

### Mobile

Each era becomes:

```text
Era number
Date
Era label
Headline
Image placeholder
Body
Supporting fact
Divider
```

No sticky image.

---

## 11. Timeline Transition

### Desktop

```text
Height: 860–940 px
```

Image:

```text
TRANSITION-01
EMPTY ARMOR
```

Text:

```text
A CLASS ENDS.
AN IMAGE SURVIVES.

The Samurai Left the Battlefield,
but Never Left the Imagination
```

### Mobile

Image above text, no overlay if readability is weak.

---

## 12. Bushidō

### Desktop

Opening:

```text
03 / ETHICS, DUTY, AND MEMORY

Bushidō Was Never
One Timeless Code
```

Two columns:

```text
Left: opening statement + body + quote
Right: BUSHIDO-01 placeholder
```

Below, five principle rows separated by dividers:

```text
01 SERVICE
Duty Was Built on Relationships

02 REPUTATION
Honor Had Social Consequences

03 DISCIPLINE
Control Was a Practical Skill

04 COURAGE
Bravery Was Not the Absence of Strategy

05 ADAPTATION
Tradition Changed to Meet Reality
```

End with Zen clarification.

### Mobile

Image after opening copy. Principles stacked vertically.

---

## 13. Weapons

### Desktop

Introduction:

```text
04 / TOOLS OF A CHANGING BATTLEFIELD

The Samurai Fought
With More Than Swords
```

Static wireframe representation:

- Horizontal rail inside a clipped viewport.
- Show 1.5 panels in viewport.
- Add arrows and future behavior annotation.
- Do not implement JS horizontal scrolling yet.

Each panel:

```text
Width: 680–760 px
Weapon number
Japanese label
Weapon name
Category
Image placeholder
Description
Supporting fact
```

Weapons:

1. Yumi.
2. Tachi and Katana.
3. Yari.
4. Naginata.
5. Tanegashima.

Annotation:

```text
FUTURE:
PINNED HORIZONTAL SCROLL ON DESKTOP
```

### Tablet

Two-column grid.

### Mobile

Vertical stack.

---

## 14. Legendary Figures

### Desktop

Heading:

```text
05 / PEOPLE WHO SHAPED THE AGE

Six Lives,
Six Different Meanings
of Power
```

Create six alternating rows.

Odd:

```text
Portrait left / Content right
```

Even:

```text
Content left / Portrait right
```

Each row contains:

```text
Portrait ratio 4:5
Name
Lifetime
Role
Body
Why this figure matters
```

Figures:

1. Minamoto no Yoritomo.
2. Tomoe Gozen.
3. Oda Nobunaga.
4. Toyotomi Hideyoshi.
5. Tokugawa Ieyasu.
6. Miyamoto Musashi.

Row spacing:

```text
160–200 px
```

### Mobile

Portrait always above text.

---

## 15. Decline

### Desktop

Top image:

```text
DECLINE-01
FULL-WIDTH IMAGE PLACEHOLDER
Height: 620–720 px
```

Heading:

```text
06 / THE LAST TRANSFORMATION

The End Came Through Reform,
Not One Final Duel
```

Four-date sequence:

```text
1871 — Domains abolished
1873 — National conscription
1876 — Sword-wearing restricted
1877 — Satsuma Rebellion
```

Use four columns connected by a thin line.

### Mobile

Vertical timeline with a thin vertical line.

---

## 16. Legacy

### Desktop

Use a slightly lighter surface.

```text
07 / AFTER THE WARRIOR CLASS

The Samurai
Became an Idea
```

Two columns:

```text
Left: LEGACY-01 placeholder
Right: opening copy + themes
```

Themes:

```text
Martial Arts
Cinema
Literature
Global Culture
```

Do not use cards.

### Mobile

Image first, then copy and themes.

---

## 17. Final Reflection

Use a quiet text section.

```text
WHAT REMAINS

History Survives Through
What We Choose to Remember
```

Body max width:

```text
680 px
```

Closing prompt:

```text
Continue to the story behind this project
```

---

## 18. About Project

### Desktop

```text
08 / FROM A 2022 SUBMISSION TO A 2026 REBUILD

Reimagining
My First Web Project
```

Before-after:

```text
Original 2022 screenshot
→
Redesign 2026 placeholder
```

Below:

```text
Why I rebuilt it
What I improved
My role
AI-assisted workflow
```

Technology list:

```text
Vite
Semantic HTML
CSS
Vanilla JavaScript
GSAP
ScrollTrigger
Git
GitHub Pages
```

CTAs:

```text
View source on GitHub
Visit the original 2022 website
```

### Mobile

Stack before-and-after vertically.

---

## 19. Sources

### Desktop

```text
09 / RESEARCH AND TRANSPARENCY

Selected Historical Sources
```

Four columns:

1. Museum Collections.
2. Libraries and Archives.
3. Reference Sources.
4. Modern Scholarship.

Below:

- Historical disclaimer.
- AI imagery disclosure.
- Credits placeholder.

### Mobile

Stack all categories.

---

## 20. Footer

### Desktop

```text
Height: 360–440 px
```

Left:

```text
HISTORY OF SAMURAI — REIMAGINED

A personal front-end project exploring history,
design, motion, and visible growth.
```

Right:

```text
GitHub
Original Project
Portfolio
Back to Top
```

Bottom:

```text
Designed, directed, and reviewed by Rakha Antareza
2026
```

### Mobile

Single column.

---

## 21. Reusable Placeholder Classes

```text
.image-placeholder
.section-eyebrow
.section-heading
.fact-block
.timeline-era
.weapon-panel
.figure-row
.source-column
```

Placeholder content format:

```text
Asset ID
Subject
Aspect ratio
Future behavior
```

Example:

```text
HERO-01
Lone Samurai
21:9 desktop / 4:5 mobile
Future: slow image scale
```

---

## 22. Accessibility Requirements

Wireframe must include:

- Skip link.
- Semantic landmarks.
- Correct heading order.
- Navigation links.
- Button for mobile menu.
- `aria-expanded` for menu button.
- Visible focus states.
- Logical DOM order.
- No essential content hidden behind future interactions.
- Weapons readable without horizontal animation.
- No text embedded in placeholders.

---

## 23. Browser Acceptance Criteria

Approved when:

- All sections exist.
- Section order matches the content structure.
- Desktop 1440 px is balanced.
- Mobile 390 px has no horizontal overflow.
- Body text is readable.
- Timeline works without animation.
- Weapons concept is clear.
- Figures are not generic cards.
- Decline shows institutional change.
- Project section clearly communicates 2022 → 2026 growth.
- All placeholders are labeled.
- No console errors.
- Production build succeeds.
- Figma desktop and mobile captures are editable.

---

## 24. Figma Export Requirements

After the browser wireframe is running:

1. Capture desktop at 1440 px.
2. Capture mobile at 390 px.
3. Send both to the existing Figma file:
   `History of Samurai — Reimagined`.
4. Keep layers editable.
5. Name frames:

```text
Desktop Wireframe — Browser Generated
Mobile Wireframe — Browser Generated
```

6. Place into:

```text
03 — Desktop Wireframe
04 — Mobile Wireframe
```

7. Do not overwrite other pages.
8. Report the Figma frame links.

---

## 25. Codex Implementation Order

```text
1. Project foundation
2. Global layout and placeholders
3. Navigation
4. Hero
5. Origins
6. Timeline introduction
7. Timeline main
8. Timeline transition
9. Bushidō
10. Weapons
11. Figures
12. Decline
13. Legacy
14. Reflection
15. About project
16. Sources
17. Footer
18. Mobile refinement
19. Accessibility verification
20. Figma export
```

---

## 26. Scope Restrictions

Do not:

- Install GSAP yet.
- Generate final imagery.
- Add Lenis.
- Add WebGL.
- Add React.
- Add a CSS framework.
- Add component libraries.
- Add final fonts.
- Add complex interaction.
- Add a loading screen.
- Add custom cursor.
- Add audio.
- Add backend.
- Add unapproved copy.

---

## 27. Definition of Done

Wireframe phase is complete when:

- Browser version exists.
- Desktop and mobile layouts work.
- All sections are represented.
- Placeholder labels match `ASSET_LIST.md`.
- Copy comes from `CONTENT.md`.
- Semantic structure is valid.
- Responsive behavior is clear.
- Figma desktop frame exists.
- Figma mobile frame exists.
- Both Figma frames remain editable.
- Review notes are documented.
- Git commit is created.

Suggested commit:

```text
feat: build responsive low-fidelity wireframe
```
