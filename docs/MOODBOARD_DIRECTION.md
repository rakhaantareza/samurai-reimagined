# History of Samurai — Reimagined
## Moodboard Direction & Creative Reference Pack

**Status:** Approved direction v1.0  
**Project repository:** `samurai-reimagined`  
**Purpose:** Menjadi acuan visual utama sebelum wireframe, asset generation, dan coding  
**Related documents:**  
- `docs/PROJECT_BRIEF.md`
- `docs/CONTENT.md`
- `docs/ASSET_LIST.md`

---

# 1. Final Creative Direction

## Creative concept

**Cinematic Japanese Historical Editorial**

Website ini harus terasa seperti gabungan antara:

- pameran sejarah digital,
- editorial magazine premium,
- film sejarah Jepang yang atmosferik,
- dan interactive storytelling modern.

Pengunjung tidak boleh merasa sedang membuka:

- blog sejarah biasa,
- website anime,
- landing page template,
- website game samurai,
- atau halaman museum yang terlalu kaku.

## Experience statement

> A restrained cinematic journey through the rise, transformation, and legacy of the samurai.

## Visual keywords

- Dark
- Quiet
- Historical
- Cinematic
- Editorial
- Atmospheric
- Minimal
- Textural
- Reflective
- Human

---

# 2. Core Visual Principles

## 2.1 Silence over spectacle

Desain harus terasa tenang dan berwibawa. Jangan isi setiap area dengan ornamen.

Gunakan:

- negative space,
- image besar,
- headline kuat,
- text block pendek,
- gerakan halus.

Hindari:

- terlalu banyak card,
- terlalu banyak icon,
- animasi di semua elemen,
- dekorasi Jepang yang berlebihan.

## 2.2 History over fantasy

Samurai harus ditampilkan sebagai bagian dari sejarah, bukan sebagai karakter game.

Gunakan:

- armor realistis,
- lanskap berkabut,
- interior kayu,
- senjata dengan proporsi masuk akal,
- komposisi manusiawi.

Hindari:

- armor fantasy,
- pedang menyala,
- aura supernatural,
- pose anime,
- kastel fantasi.

## 2.3 Editorial hierarchy

Setiap section harus memiliki hierarchy yang jelas:

```text
Section number
Eyebrow
Large headline
Short introduction
Main visual
Supporting content
Historical fact
```

## 2.4 One strong idea per section

Setiap section hanya boleh punya satu pusat perhatian.

Contoh:

- Hero: lone samurai.
- Timeline: perubahan era.
- Bushidō: myth versus history.
- Weapons: more than swords.
- Decline: institutional change.
- Legacy: samurai as an idea.

---

# 3. Final Typography Direction

## 3.1 Primary display font

**Cormorant Garamond**

Digunakan untuk:

- Hero title
- Section headline
- Pull quote
- Large historical statement
- Timeline era title

Karakter:

- Editorial
- Historical
- Elegan
- Dramatis tanpa terasa fantasy

Recommended weights:

- 500
- 600
- 700

## 3.2 Primary body font

**Manrope**

Digunakan untuk:

- Body copy
- Navigation
- Eyebrow
- Date
- Caption
- Button
- Interface label

Karakter:

- Bersih
- Modern
- Mudah dibaca
- Memberi kontras terhadap serif heading

Recommended weights:

- 400
- 500
- 600

## 3.3 Japanese decorative typography

Japanese characters hanya digunakan sebagai elemen dekoratif terbatas.

Contoh:

```text
侍
武
道
刀
```

Rules:

- Maksimal satu decorative character dalam satu section.
- Opacity rendah.
- Tidak digunakan sebagai pengganti heading.
- Tidak dimasukkan ke dalam generated image.
- Harus diverifikasi maknanya sebelum dipakai.

## 3.4 Typography scale direction

Desktop:

```text
Hero title        : 112–144 px
Section headline  : 64–88 px
Subheading        : 36–48 px
Body large        : 22–26 px
Body              : 16–18 px
Eyebrow           : 12–14 px
Caption           : 12–14 px
```

Mobile:

```text
Hero title        : 56–72 px
Section headline  : 42–56 px
Subheading        : 28–36 px
Body large        : 19–22 px
Body              : 16–18 px
Eyebrow           : 11–13 px
Caption           : 12–13 px
```

---

# 4. Final Color Palette

## Core tokens

```css
--color-bg: #0B0B0B;
--color-bg-soft: #131210;
--color-surface: #191714;
--color-ivory: #EEE8DC;
--color-muted: #A39C92;
--color-crimson: #8F2525;
--color-crimson-dark: #5F1818;
--color-gold: #A48657;
--color-border: rgba(238, 232, 220, 0.14);
--color-overlay: rgba(8, 8, 8, 0.56);
```

## Usage ratio

```text
Charcoal / black  : 65%
Warm ivory        : 20%
Muted gray        : 8%
Crimson           : 5%
Aged gold         : 2%
```

## Rules

- Crimson hanya untuk emphasis.
- Gold hanya untuk detail kecil.
- Warm ivory digunakan untuk body text utama.
- Jangan gunakan pure white.
- Jangan gunakan bright red.
- Jangan gunakan gradient berwarna-warni.

---

# 5. Image Treatment

## 5.1 General treatment

Semua image harus memiliki treatment yang konsisten:

- contrast sedang,
- saturation rendah,
- shadow sedikit terangkat,
- highlight hangat,
- subtle film grain,
- restrained crimson undertone,
- vignette tipis bila diperlukan.

## 5.2 Image framing

Gunakan kombinasi:

- full-bleed hero,
- portrait editorial crop,
- wide cinematic crop,
- sticky image,
- close-up weapon still life.

Hindari:

- rounded card image,
- semua gambar memiliki ukuran sama,
- semua gambar berada di tengah,
- terlalu banyak border radius.

## 5.3 Border radius

Default image radius:

```text
0–4 px
```

Project ini tidak menggunakan rounded card style.

## 5.4 Overlay

Hero dan image dengan text overlay memakai:

```css
linear-gradient(
  90deg,
  rgba(7, 7, 7, 0.92) 0%,
  rgba(7, 7, 7, 0.60) 42%,
  rgba(7, 7, 7, 0.12) 76%
)
```

Nilai dapat disesuaikan setelah hero final tersedia.

---

# 6. Texture Direction

## Film grain

Gunakan sangat tipis di seluruh halaman.

Recommended opacity:

```text
3–6%
```

## Washi paper

Gunakan hanya pada:

- Legacy section,
- About project,
- Sources,
- atau light interlude.

## Brush mask

Gunakan hanya untuk satu transisi utama.

Jangan pakai brush stroke pada:

- setiap heading,
- setiap image,
- setiap section divider.

---

# 7. Layout Rhythm

## Section spacing

Desktop:

```text
Top and bottom section spacing: 160–220 px
```

Mobile:

```text
Top and bottom section spacing: 96–136 px
```

## Content width

```text
Maximum page width: 1360 px
Main content width: 1180–1240 px
Readable paragraph width: 560–680 px
```

## Grid

Desktop:

```text
12-column grid
Outer margin: 64–96 px
Gutter: 24–32 px
```

Mobile:

```text
4-column grid
Outer margin: 20–24 px
Gutter: 16 px
```

---

# 8. Hero Direction

## Chosen layout

**Text left, lone samurai right**

### Structure

```text
[Navigation]

Eyebrow

THE WAY OF
THE SAMURAI

Supporting copy

c. 900–1877                  Scroll to begin
```

### Image

- Samurai di right third.
- Fog dan landscape.
- Distant architecture optional.
- Left side gelap untuk typography.
- Subject tidak terlalu besar.

### Why this direction

- Memberi ruang headline yang kuat.
- Hero tetap readable.
- Mudah diadaptasi ke mobile.
- Tidak terasa seperti poster film.
- Memberi tone tenang dan premium.

### Avoid

- Samurai close-up memenuhi layar.
- Pedang diarahkan ke kamera.
- Pose menyerang.
- Red sun besar tepat di belakang kepala.
- Fake Japanese text.

---

# 9. Introduction Direction

## Layout

Desktop:

```text
Left:
Section index
Eyebrow
Headline
Opening statement

Right:
Mounted archer portrait
```

Lower area:

```text
Supporting paragraph
Historical correction
Editorial quote
```

## Visual idea

Mounted archer dipilih untuk mengoreksi stereotip katana sejak awal.

## Mood

- Quiet
- Informative
- Slightly brighter than hero
- More human

---

# 10. Historical Timeline Direction

## Desktop

Three-part layout:

```text
Left column:
Era list and progress

Center:
Date, heading, body, fact

Right:
Sticky changing image
```

Recommended proportion:

```text
2 columns / 5 columns / 5 columns
```

## Behavior

- Timeline container memiliki scroll panjang.
- Image tetap sticky.
- Active era berubah mengikuti scroll.
- Progress line tumbuh.
- Text transitions simple.
- Era list tidak menjadi tab yang membutuhkan click.

## Mobile

Vertical editorial timeline:

```text
Era number
Date
Headline
Image
Body
Fact
Divider
```

No pinned image.

## Visual reference principle

Timeline harus terasa seperti membuka halaman berbeda dalam satu historical volume.

---

# 11. Bushidō Direction

## Central concept

**Myth versus historical complexity**

## Layout

- Large opening statement.
- One reflective interior image.
- Five principles arranged as editorial lines.
- One large pull quote.
- One Zen clarification block.

## Avoid

- Seven virtues icon grid.
- Samurai silhouette with motivational quotes.
- Gold icons.
- Corporate value cards.

## Visual mood

- Quiet interior
- Paper screens
- Soft side light
- More negative space
- Slow pacing

---

# 12. Weapons Direction

## Desktop behavior

Horizontal storytelling section controlled by vertical scroll.

Panel structure:

```text
Weapon number
Japanese character
Weapon name
Category
Large visual
Description
Supporting fact
```

## Panel rhythm

1. Yumi — wide movement.
2. Tachi and Katana — still-life detail.
3. Yari — repeating formation.
4. Naginata — full silhouette.
5. Tanegashima — mechanical close-up.

## Why horizontal

- Memberi satu “wow section”.
- Menunjukkan variasi senjata.
- Membuat arsenal terasa seperti curated exhibition.

## Mobile

Vertical panels.

No forced horizontal scroll.

---

# 13. Legendary Figures Direction

## Layout principle

Alternating editorial portraits.

Example:

```text
Portrait left  / Content right
Content left   / Portrait right
Portrait left  / Content right
```

## Do not use

- Six identical cards.
- Circular portraits.
- Hover-only biography.
- Carousel that hides content.

## Portrait treatment

- 4:5 ratio.
- Same lighting family.
- Dark background.
- Slightly different framing per figure.
- Name and lifetime large.
- “Why this figure matters” as concluding line.

---

# 14. Decline Direction

## Visual shift

The page gradually moves from:

```text
warm charcoal + crimson
```

toward:

```text
cold gray + ivory
```

## Layout

- Large transitional visual.
- Main heading.
- Four dates in sequence.
- Closing paragraph.

## Key line

> The end came through reform, not one final duel.

## Motion concept

A dark image slowly reveals a colder modern scene.

Avoid dramatic sword-fight ending.

---

# 15. Legacy Direction

## Visual mood

- Reflective.
- More open.
- More ivory.
- Less dense.
- Past dissolving into modern memory.

## Layout

```text
Large heading
Conceptual visual
Four legacy themes
Final historical statement
```

## Avoid

- Copyrighted film or game characters.
- Logos.
- Anime references.
- Montage overload.

---

# 16. About Project Direction

## Core purpose

Menjual proses growth dari 2022 ke 2026.

## Layout

```text
Original screenshot   →   Redesigned screenshot
```

Below:

```text
Why I rebuilt it
What I improved
My role
Technology
AI-assisted workflow
Project links
```

## Visual treatment

- More neutral.
- Slightly lighter background.
- Strong before-and-after contrast.
- No shame toward the old project.
- Original version framed as an important milestone.

---

# 17. Navigation Direction

## Desktop

- Fixed.
- Transparent over hero.
- Becomes dark translucent after scroll.
- Small wordmark.
- Compact labels.
- No large CTA button.

## Mobile

- Menu icon.
- Full-screen dark menu.
- Large section links.
- Close button.
- Escape support.
- Scroll lock while open.

## Wordmark

```text
SAMURAI
```

Optional small label:

```text
A HISTORY IN MOTION
```

---

# 18. Motion Direction

## Motion personality

- Slow.
- Controlled.
- Weighty.
- Never bouncy.
- Never playful.

## Timing

Recommended:

```text
Fast UI response      : 180–240 ms
Small reveal          : 500–700 ms
Headline reveal       : 700–1000 ms
Large image transition: 900–1400 ms
```

## Easing

Use smooth cinematic easing.

Avoid:

- elastic,
- bounce,
- overshoot,
- exaggerated spring.

## Primary motion patterns

- Line reveal.
- Fade and rise.
- Image mask reveal.
- Slow parallax.
- Sticky image change.
- Horizontal weapons movement.
- Timeline progress.
- Section tone transition.

---

# 19. What to Take

## From historical exhibitions

- Clear chronology.
- Respectful image treatment.
- Labels and dates.
- Source transparency.
- Object-focused weapon presentation.

## From editorial magazines

- Large typography.
- Controlled asymmetry.
- Strong negative space.
- Alternating layouts.
- Pull quotes.

## From cinematic storytelling

- Atmosphere.
- Pacing.
- Light and shadow.
- Wide establishing images.
- Quiet transitions.

## From modern interactive websites

- Sticky storytelling.
- Scroll-linked progress.
- Responsive motion.
- Smooth image transitions.
- Clear section navigation.

---

# 20. What to Avoid

- Generic black-red gaming UI.
- Fake kanji.
- Sakura in every section.
- Torii gate as universal decoration.
- Too many brush strokes.
- Every section as cards.
- Bright gold gradients.
- Glowing katana.
- Tiny body text.
- Overlapping text that hurts readability.
- Complex cursor effects.
- Excessive smooth scrolling.
- Horizontal scrolling on mobile.
- Long loading animation.
- Overuse of parallax.
- AI image inconsistencies.

---

# 21. Figma Board Structure

Create these pages:

```text
01 — Moodboard
02 — Visual References
03 — Desktop Wireframe
04 — Mobile Wireframe
05 — Approved Direction
06 — Asset Review
```

## Page 01 — Moodboard

Create six blocks:

1. Atmosphere
2. Typography
3. Color
4. Image treatment
5. Layout
6. Motion

## Page 02 — Visual References

Create section groups:

- Hero
- Timeline
- Bushidō
- Weapons
- Figures
- Decline
- Legacy
- Project story

## Page 03 — Desktop Wireframe

Frame:

```text
1440 px width
```

## Page 04 — Mobile Wireframe

Frame:

```text
390 px width
```

## Page 05 — Approved Direction

Place:

- Final palette
- Font samples
- Hero composition
- Image style sample
- Section spacing sample
- Motion notes

## Page 06 — Asset Review

Use columns:

```text
Asset ID
Candidate
Status
Notes
Approved
```

---

# 22. Approved Decisions

The following decisions are now locked:

- Creative direction: Cinematic Japanese Historical Editorial.
- Display font: Cormorant Garamond.
- Body font: Manrope.
- Dark charcoal base.
- Warm ivory text.
- Muted crimson accent.
- Aged gold only as minor detail.
- Hero: text left, samurai right.
- Timeline: sticky visual desktop, vertical mobile.
- Weapons: horizontal desktop, vertical mobile.
- Figures: alternating editorial layout.
- Bushidō: no “seven virtues” card grid.
- Decline: institutional transition, not dramatic final duel.
- Visuals: realistic artistic interpretation.
- Animation: slow, controlled, and purposeful.
- No React for Version 1.0.
- No WebGL for Version 1.0.

---

# 23. Immediate Next Step

After this document is placed in `docs/`, create the low-fidelity wireframes.

Order:

```text
1. Hero
2. Introduction
3. Timeline
4. Bushidō
5. Weapons
6. Figures
7. Decline
8. Legacy
9. About Project
10. Sources and Footer
```

Do not use final images yet.

Use grayscale placeholders and focus only on:

- hierarchy,
- section order,
- spacing,
- image placement,
- text width,
- desktop-to-mobile behavior.
