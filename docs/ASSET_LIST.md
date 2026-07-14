# History of Samurai — Reimagined
## Asset List & Visual Production Specification

**Status:** Draft v1.0  
**Purpose:** Menentukan seluruh kebutuhan visual sebelum masuk ke wireframe dan coding  
**Related files:** `PROJECT_BRIEF.md`, `CONTENT.md`  
**Primary visual direction:** Dark Japanese editorial  
**Primary asset method:** AI-generated imagery + manual review + optimization

---

## 1. Tujuan Dokumen

Dokumen ini menjadi sumber utama untuk:

- Menentukan gambar apa saja yang dibutuhkan.
- Menjaga visual tetap konsisten.
- Menentukan komposisi desktop dan mobile.
- Menentukan prompt AI per aset.
- Menghindari generate gambar secara random.
- Menentukan alt text.
- Menentukan nama file dan folder.
- Memeriksa risiko ketidakakuratan sejarah.
- Menentukan prioritas aset sebelum coding.

Jangan generate seluruh gambar sekaligus. Visual direction harus dikunci dari hero terlebih dahulu.

---

## 2. Global Art Direction

### Desired mood

- Cinematic
- Historical
- Atmospheric
- Editorial
- Mature
- Minimal
- Realistic
- Restrained

### Avoid

- Anime style
- Fantasy RPG
- Cyberpunk
- Cosplay look
- Generic Japanese template
- Glowing katana
- Fake kanji
- Excessive sakura
- Oversaturated red
- Modern objects
- Recognizable movie recreation

### Color direction

- Charcoal black
- Warm ivory
- Muted crimson
- Weathered brown
- Aged gold
- Cold blue-gray
- Mist white

### Lighting

- Soft natural side light
- Overcast daylight
- Candlelit interiors
- Morning fog
- Restrained late-afternoon light

### Texture

- Film grain
- Washi paper
- Weathered metal
- Worn lacquer
- Smoke
- Dust
- Fog

---

## 3. Master AI Image Prompt

Gunakan prompt ini sebagai basis untuk semua visual:

```text
Cinematic historical editorial photography inspired by feudal Japan,
realistic materials and natural human proportions,
historically inspired clothing and armor,
dark charcoal, warm ivory, muted crimson, weathered brown, and aged gold palette,
subtle analog film grain,
atmospheric fog or soft natural haze,
dramatic but restrained natural lighting,
museum-quality art direction,
minimal composition,
realistic environment,
no fantasy elements,
no anime styling,
no glowing weapons,
no text,
no calligraphy,
no symbols,
no logos,
no watermark
```

Setiap prompt aset harus menambahkan:

- Period atau era.
- Subject.
- Composition.
- Camera distance.
- Negative space.
- Orientation.
- Lighting.
- Environment.
- Specific exclusions.

---

## 4. Technical Standards

### Format

- AVIF untuk visual utama.
- WebP sebagai fallback.
- PNG hanya untuk transparency.
- SVG untuk icon dan decorative shape.

### Export widths

**Hero**
- Desktop: 2400 px
- Tablet: 1600 px
- Mobile: 1080 px

**Section image**
- Desktop: 1600 px
- Mobile: 900–1080 px

**Portrait**
- Desktop: 1000–1200 px
- Mobile: 800–900 px

### Compression target

- Hero: 300–450 KB
- Section image: 150–300 KB
- Portrait: 100–220 KB
- Texture: under 100 KB
- Social image: under 500 KB

### File naming

Gunakan lowercase dan hyphen:

```text
hero-lone-samurai-desktop.avif
timeline-heian-mounted-warriors.avif
weapon-yari-infantry.avif
figure-tokugawa-ieyasu.avif
```

---

## 5. Asset Priority

### P0 — Dibutuhkan untuk mengunci visual direction

1. Hero visual
2. Introduction visual
3. One timeline sample
4. One weapon sample
5. One figure portrait
6. Film grain texture

### P1 — Dibutuhkan sebelum implementasi section

1. Remaining timeline visuals
2. Bushidō visual
3. Remaining weapon visuals
4. Remaining figure portraits
5. Decline visual
6. Legacy visual

### P2 — Dibutuhkan sebelum launch

1. Original project screenshots
2. Final redesign screenshots
3. Open Graph image
4. Responsive crops
5. Credits and disclosure
6. Final decorative assets

---

# 6. Detailed Asset Specification

## HERO-01 — Lone Samurai

**Section:** Hero  
**Purpose:** Menentukan first impression dan seluruh visual language project.

### Subject

A lone samurai in a mist-covered landscape.

### Composition

**Desktop**
- Samurai on the right third.
- Large negative space on the left.
- Wide cinematic frame.
- Distant mountain or castle silhouette.
- Subject readable under dark overlay.

**Mobile**
- Portrait crop.
- Subject slightly below center.
- Negative space above for heading.
- Main subject not blocked by browser UI.

### Aspect ratio

- Desktop: 21:9 or 16:9
- Tablet: 16:10
- Mobile: 4:5

### Prompt

```text
Cinematic historical editorial scene inspired by late medieval Japan,
a lone samurai wearing realistic weathered lamellar armor,
standing on the right side of a mist-covered field,
distant dark mountains and a barely visible Japanese castle silhouette,
wide panoramic composition with large negative space on the left for website typography,
subtle wind moving fabric,
muted charcoal, warm ivory, weathered brown, and restrained crimson palette,
overcast dawn light,
natural proportions,
realistic armor materials,
subtle analog film grain,
quiet and atmospheric,
no battle pose,
no fantasy armor,
no glowing sword,
no text,
no calligraphy,
no logo,
no watermark
```

### Alt text

`A lone armored samurai standing in a mist-covered landscape`

### Final files

```text
hero-lone-samurai-desktop.avif
hero-lone-samurai-tablet.avif
hero-lone-samurai-mobile.avif
hero-lone-samurai-desktop.webp
hero-lone-samurai-mobile.webp
```

### Accuracy risk

Medium

### Review checklist

- Armor tidak fantasy.
- Sword proportion masuk akal.
- Tidak ada fake kanji.
- Negative space cukup.
- Mobile crop tetap bagus.
- Tidak ada anatomical error.

---

## ORIGIN-01 — Mounted Samurai Archer

**Section:** Who Were the Samurai?  
**Purpose:** Menantang persepsi bahwa samurai hanya identik dengan katana.

### Subject

Mounted warrior archer inspired by late Heian or early Kamakura period.

### Composition

- Medium-wide portrait.
- Horse and bow visible.
- Subject not centered.
- Calm preparation, not chaotic battle.
- Space for copy.

### Aspect ratio

- Desktop: 4:5
- Mobile: 4:5

### Prompt

```text
Historically inspired mounted samurai archer from late Heian or early Kamakura Japan,
wearing realistic large-sleeved lamellar armor,
holding a long asymmetrical yumi bow,
horse standing calmly in an open field,
editorial portrait composition,
subject positioned slightly to the left,
subtle fog,
soft natural side light,
muted charcoal and weathered brown palette,
realistic equipment,
museum-quality art direction,
no katana-centered pose,
no fantasy armor,
no text,
no watermark
```

### Alt text

`Historically inspired portrait of a mounted samurai archer`

### Final files

```text
origin-mounted-archer-desktop.avif
origin-mounted-archer-mobile.avif
```

### Accuracy risk

High

---

## TIMELINE-01 — Foundations

**Period:** c. 700–900  
**Subject:** Regional riders crossing an early medieval landscape.

### Prompt

```text
Early medieval Japanese rural landscape around the eighth or ninth century,
a small group of distant mounted regional warriors crossing open countryside,
simple practical clothing and early military equipment,
landscape-focused cinematic editorial composition,
soft morning fog,
earthy weathered palette,
historically restrained,
no later samurai armor,
no katana,
no late-period castle,
no fantasy,
no text
```

### Alt text

`Riders crossing a rural landscape in early medieval Japan`

### Final files

```text
timeline-foundations-regional-riders.avif
timeline-foundations-regional-riders-mobile.avif
```

### Accuracy risk

High

---

## TIMELINE-02 — Heian Period

**Period:** 794–1185  
**Subject:** Mounted warriors preparing for battle.

### Prompt

```text
Late Heian period mounted warriors preparing for battle,
elite cavalry archers wearing realistic large-sleeved armor,
long asymmetrical bows visible,
wide cinematic battlefield preparation,
misty open ground,
restrained tension,
muted charcoal, faded red, and weathered gold details,
historical editorial realism,
no Edo clothing,
no firearms,
no fantasy,
no text
```

### Alt text

`Mounted warriors preparing for battle during the late Heian period`

### Final files

```text
timeline-heian-mounted-warriors.avif
timeline-heian-mounted-warriors-mobile.avif
```

### Accuracy risk

High

---

## TIMELINE-03 — Kamakura Period

**Period:** 1185–1333  
**Subject:** Coastal defense during the Mongol invasions.

### Prompt

```text
Kamakura-period Japanese warriors defending a windswept coast during the thirteenth century,
mounted and foot warriors preparing for an approaching invasion,
distant medieval ships visible through sea mist,
realistic armor and weapons,
cinematic editorial scene,
natural storm light,
historically restrained,
no supernatural wind,
no European galleons,
no firearms,
no text
```

### Alt text

`Kamakura-period warriors facing an approaching coastal battle`

### Final files

```text
timeline-kamakura-coastal-defense.avif
timeline-kamakura-coastal-defense-mobile.avif
```

### Accuracy risk

High

---

## TIMELINE-04 — Muromachi Period

**Period:** 1336–1573  
**Subject:** Warriors moving through a damaged medieval Kyoto street.

### Prompt

```text
Medieval Kyoto street damaged during the Onin War,
small groups of warriors moving through smoke, broken timber buildings, and dust,
late fifteenth-century Japanese setting,
cinematic historical editorial realism,
muted ash-gray, brown, and dark crimson palette,
somber atmosphere,
no modern ruins,
no fantasy,
no text
```

### Alt text

`Warriors moving through a damaged medieval Kyoto street`

### Final files

```text
timeline-muromachi-damaged-kyoto.avif
timeline-muromachi-damaged-kyoto-mobile.avif
```

### Accuracy risk

Medium

---

## TIMELINE-05 — Sengoku Period

**Period:** c. 1467–1600  
**Subject:** Infantry formation with yari and matchlocks.

### Prompt

```text
Sixteenth-century Sengoku army advancing in disciplined formation,
ashigaru infantry carrying long yari spears and tanegashima matchlock firearms,
samurai commanders visible behind the ranks,
large-scale but realistic battlefield,
smoke and mist,
cinematic historical editorial realism,
muted charcoal, brown, and restrained crimson palette,
no heroic katana pose,
no fantasy,
no text
```

### Alt text

`A Sengoku army advancing with spears and matchlock firearms`

### Final files

```text
timeline-sengoku-army-formation.avif
timeline-sengoku-army-formation-mobile.avif
```

### Accuracy risk

High

---

## TIMELINE-06 — Unification

**Period:** 1568–1603  
**Subject:** Daimyō overlooking a fortified castle.

### Prompt

```text
Late sixteenth-century Japanese daimyo overlooking a fortified castle and surrounding territory,
seen from behind in realistic formal armor,
strategic elevated viewpoint,
Azuchi-Momoyama period atmosphere,
soft late-afternoon light,
weathered gold details with dark charcoal and crimson palette,
cinematic historical editorial composition,
no identifiable actor,
no fantasy castle,
no text
```

### Alt text

`A daimyo overlooking a fortified castle during Japan's unification`

### Final files

```text
timeline-unification-daimyo-castle.avif
timeline-unification-daimyo-castle-mobile.avif
```

### Accuracy risk

Medium

---

## TIMELINE-07 — Edo Period

**Period:** 1603–1868  
**Subject:** Samurai official writing in a quiet room.

### Prompt

```text
Edo-period samurai official seated inside a quiet wooden room,
writing administrative records with a brush,
paired swords resting nearby as a status symbol,
simple formal clothing,
soft window light and subtle candle warmth,
restrained cinematic historical editorial realism,
calm atmosphere,
no battle pose,
no fantasy,
no text
```

### Alt text

`An Edo-period samurai official writing beside a pair of swords`

### Final files

```text
timeline-edo-samurai-official.avif
timeline-edo-samurai-official-mobile.avif
```

### Accuracy risk

Medium

---

## TIMELINE-08 — Meiji Transformation

**Period:** 1868–1877  
**Subject:** Former samurai standing between old and modern Japan.

### Prompt

```text
Early Meiji Japan,
a former samurai in traditional clothing standing between the old and modern world,
traditional wooden buildings on one side,
telegraph poles, early railway atmosphere, or western-influenced architecture on the other,
reflective cinematic editorial composition,
cool gray daylight with restrained crimson accents,
historically inspired realism,
no fantasy,
no film recreation,
no text
```

### Alt text

`Former samurai standing between traditional armor and a modernizing city`

### Final files

```text
timeline-meiji-transition.avif
timeline-meiji-transition-mobile.avif
```

### Accuracy risk

High

---

## TRANSITION-01 — Empty Armor

**Section:** Timeline closing transition  
**Purpose:** Simbol berakhirnya kelas samurai.

### Prompt

```text
Empty samurai armor displayed in a silent dim wooden room,
a sheathed sword resting nearby,
minimal cinematic historical editorial composition,
large negative space,
soft fading natural light,
subtle dust in the air,
charcoal black, warm ivory, and restrained crimson palette,
symbolic but realistic,
no person,
no text,
no calligraphy
```

### Alt text

`Empty samurai armor displayed in a quiet room`

### Final files

```text
transition-empty-armor-desktop.avif
transition-empty-armor-mobile.avif
```

### Accuracy risk

Low

---

## BUSHIDO-01 — Quiet Reflection

**Section:** Bushidō and Warrior Ethics  
**Subject:** Samurai seated in a quiet room.

### Prompt

```text
Historically inspired samurai seated quietly in a dim wooden room,
seen in restrained side profile,
simple formal clothing rather than full battle armor,
soft natural light through paper screens,
subtle shadows and film grain,
reflective cinematic editorial atmosphere,
no exaggerated meditation pose,
no temple cliché,
no text,
no fantasy
```

### Alt text

`A samurai seated in quiet reflection inside a dim wooden room`

### Final files

```text
bushido-samurai-reflection.avif
bushido-samurai-reflection-mobile.avif
```

### Accuracy risk

Medium

---

## WEAPON-01 — Yumi

### Prompt

```text
Mounted Japanese warrior holding a long asymmetrical yumi bow,
historically inspired early samurai equipment,
editorial weapon-focused composition,
full bow visible,
horse standing calmly,
muted natural landscape,
soft overcast light,
realistic materials and anatomy,
no modern kyudo uniform,
no fantasy,
no text
```

### Alt text

`A long asymmetrical Japanese bow held by a mounted warrior`

### Final files

```text
weapon-yumi-mounted-archer.avif
weapon-yumi-mounted-archer-mobile.avif
```

### Accuracy risk

High

---

## WEAPON-02 — Tachi and Katana

### Prompt

```text
Historically inspired tachi and katana displayed side by side,
realistic curved blades, scabbards, and restrained traditional fittings,
museum-style editorial still life,
dark weathered wood surface,
soft side lighting,
high material detail,
charcoal and aged gold palette,
no glowing blade,
no fake inscriptions,
no text,
no watermark
```

### Alt text

`A tachi and katana displayed with historically inspired mountings`

### Final files

```text
weapon-tachi-katana-still-life.avif
weapon-tachi-katana-still-life-mobile.avif
```

### Accuracy risk

High

---

## WEAPON-03 — Yari

### Prompt

```text
Rows of sixteenth-century Japanese infantry carrying long yari spears,
disciplined formation,
repeating spear lines creating strong visual rhythm,
cinematic historical editorial realism,
misty battlefield preparation,
weathered armor and clothing,
muted charcoal and brown palette,
no heroic swordsman,
no fantasy,
no text
```

### Alt text

`Rows of infantry carrying long yari spears`

### Final files

```text
weapon-yari-infantry-formation.avif
weapon-yari-infantry-formation-mobile.avif
```

### Accuracy risk

Medium

---

## WEAPON-04 — Naginata

### Prompt

```text
Historically inspired Japanese naginata displayed in full profile,
curved blade and long shaft clearly visible,
minimal museum-style editorial composition,
dark textured background,
soft directional light,
realistic metal and wood materials,
restrained atmosphere,
no fantasy ornament,
no text,
no watermark
```

### Alt text

`A historically inspired naginata displayed against a dark background`

### Final files

```text
weapon-naginata-profile.avif
weapon-naginata-profile-mobile.avif
```

### Accuracy risk

Medium

---

## WEAPON-05 — Tanegashima

### Prompt

```text
Sixteenth-century Japanese tanegashima matchlock firearm displayed beside historically inspired armor,
realistic matchlock mechanism and wooden stock,
museum-style editorial still life,
dark weathered surface,
soft directional light,
subtle smoke haze only,
no modern rifle proportions,
no fantasy,
no text,
no watermark
```

### Alt text

`A sixteenth-century Japanese matchlock firearm beside armor`

### Final files

```text
weapon-tanegashima-matchlock.avif
weapon-tanegashima-matchlock-mobile.avif
```

### Accuracy risk

High

---

# 7. Figure Portrait Series

Semua portrait harus memakai treatment yang konsisten:

- 4:5 ratio.
- Dark minimal background.
- Soft side lighting.
- No exact facial reconstruction claims.
- No fake signatures.
- No fantasy armor.
- No celebrity resemblance.
- Disclosed as artistic interpretation.

---

## FIGURE-01 — Minamoto no Yoritomo

### Prompt

```text
Interpretive historical portrait inspired by Minamoto no Yoritomo,
late twelfth-century Japanese warrior ruler,
formal seated pose,
historically inspired court and warrior clothing,
restrained dark background,
soft natural side lighting,
cinematic museum-quality editorial portrait,
realistic materials,
not an exact facial reconstruction,
no text,
no calligraphy,
no watermark
```

### Alt text

`Interpretive portrait of Minamoto no Yoritomo in formal warrior attire`

### File

`figure-minamoto-no-yoritomo.avif`

---

## FIGURE-02 — Tomoe Gozen

### Prompt

```text
Interpretive historical portrait inspired by the literary tradition of Tomoe Gozen,
late twelfth-century mounted woman warrior,
realistic historically inspired armor,
long bow or period weapon present,
dignified and restrained expression,
cinematic editorial portrait,
muted natural background,
realistic anatomy,
not an exact historical reconstruction,
no fantasy,
no sexualized styling,
no text
```

### Alt text

`Interpretive portrait of a mounted woman warrior inspired by Tomoe Gozen`

### File

`figure-tomoe-gozen.avif`

---

## FIGURE-03 — Oda Nobunaga

### Prompt

```text
Interpretive historical portrait inspired by Oda Nobunaga,
late sixteenth-century Japanese daimyo wearing realistic restrained armor,
three-quarter formal pose,
controlled confidence,
dark neutral background,
subtle aged-gold and crimson details,
cinematic museum-quality editorial portrait,
not an exact facial reconstruction,
no fantasy,
no text
```

### Alt text

`Interpretive portrait of Oda Nobunaga in late sixteenth-century armor`

### File

`figure-oda-nobunaga.avif`

---

## FIGURE-04 — Toyotomi Hideyoshi

### Prompt

```text
Interpretive historical portrait inspired by Toyotomi Hideyoshi,
late sixteenth-century Japanese ruler in formal historically inspired armor,
restrained ceremonial details,
three-quarter editorial portrait,
warm muted light,
dark background,
realistic materials,
not an exact facial reconstruction,
no fantasy,
no text
```

### Alt text

`Interpretive portrait of Toyotomi Hideyoshi in formal armor`

### File

`figure-toyotomi-hideyoshi.avif`

---

## FIGURE-05 — Tokugawa Ieyasu

### Prompt

```text
Interpretive historical portrait inspired by Tokugawa Ieyasu,
early seventeenth-century Japanese shogun,
formal seated pose,
realistic restrained armor and clothing,
calm authoritative expression,
dark minimal background,
soft natural side light,
cinematic museum-quality editorial portrait,
not an exact facial reconstruction,
no fantasy,
no text
```

### Alt text

`Interpretive portrait of Tokugawa Ieyasu in formal armor`

### File

`figure-tokugawa-ieyasu.avif`

---

## FIGURE-06 — Miyamoto Musashi

### Prompt

```text
Interpretive historical portrait inspired by Miyamoto Musashi,
early seventeenth-century Japanese swordsman and strategist,
weathered simple clothing,
two sheathed swords present,
calm alert posture,
minimal natural background,
cinematic historical editorial realism,
not an exact facial reconstruction,
no dramatic duel pose,
no fantasy,
no text
```

### Alt text

`Interpretive portrait of Miyamoto Musashi carrying two swords`

### File

`figure-miyamoto-musashi.avif`

---

## DECLINE-01 — Former Samurai and Modern Army

### Prompt

```text
Early Meiji period historical editorial scene,
a former samurai in traditional clothing facing a distant formation of modern conscript soldiers,
symbolic transition from hereditary warrior class to national army,
realistic period uniforms and equipment,
cold natural daylight,
restrained cinematic composition,
somber and reflective,
no direct movie recreation,
no fantasy,
no text
```

### Alt text

`Former samurai facing soldiers of a modern conscript army`

### Final files

```text
decline-former-samurai-modern-army.avif
decline-former-samurai-modern-army-mobile.avif
```

### Accuracy risk

High

---

## LEGACY-01 — Samurai as Cultural Memory

### Prompt

```text
Conceptual cinematic editorial image about the cultural legacy of the samurai,
a historical samurai silhouette gradually dissolving into layers of film grain, printed paper, theater shadow, and modern visual media texture,
no copyrighted characters,
no logos,
no brand references,
warm ivory, charcoal, and restrained crimson palette,
minimal reflective composition,
no text
```

### Alt text

`A historic samurai silhouette dissolving into modern visual media`

### Final files

```text
legacy-samurai-cultural-memory.avif
legacy-samurai-cultural-memory-mobile.avif
```

### Accuracy risk

Low

---

# 8. Project Documentation Assets

## PROJECT-01 — Original 2022 Website

### Required screenshots

- Full-page desktop.
- Hero desktop.
- Mobile view if possible.

### Rules

- Keep original design unchanged.
- Blur or remove sensitive personal data.
- Preserve as evidence of the original submission.

### Final files

```text
project-original-2022-desktop.webp
project-original-2022-mobile.webp
```

---

## PROJECT-02 — Final 2026 Redesign

Capture after Version 1.0 is complete:

- Hero desktop.
- Timeline desktop.
- Weapons desktop.
- Hero mobile.
- Timeline mobile.
- Full-page desktop if practical.

### Final files

```text
project-redesign-2026-hero.webp
project-redesign-2026-timeline.webp
project-redesign-2026-weapons.webp
project-redesign-2026-mobile.webp
```

---

## SOCIAL-01 — Open Graph Image

### Size

1200 × 630 px

### Text

```text
THE WAY OF THE SAMURAI
An Interactive Journey Through Feudal Japan
```

### Rules

- Use approved hero image.
- Add text manually in Figma.
- Do not generate text inside AI image.
- Keep title inside safe area.

### File

`social-history-of-samurai-og.webp`

---

# 9. Texture Assets

## TEXTURE-01 — Film Grain

- Transparent PNG or CSS noise.
- Very subtle.
- Must not reduce text readability.
- Under 80 KB.

File:

`texture-film-grain.png`

## TEXTURE-02 — Washi Paper

- Warm ivory.
- Subtle fiber.
- No writing.
- Under 100 KB.

File:

`texture-washi-paper.webp`

## TEXTURE-03 — Brush Edge Mask

- Transparent background.
- Used only for one or two transitions.
- Must work as CSS mask.
- Under 100 KB.

File:

`mask-brush-edge.png`

---

# 10. Decorative Elements

Prefer CSS, HTML, or SVG instead of generated images.

Required:

- Timeline progress line.
- Scroll indicator.
- Section numbers.
- Crimson sun circle.
- Arrow icon.
- Menu icon.
- Close icon.

Do not generate these with image AI unless there is a strong reason.

---

# 11. Production Workflow

## Step 1 — Generate three hero candidates

Direction A:
- Lone samurai standing in fog.

Direction B:
- Samurai overlooking distant castle.

Direction C:
- Mounted warrior in open landscape.

Only one direction will be selected.

## Step 2 — Lock the visual treatment

Record:

- Final prompt.
- Lighting.
- Color grading.
- Grain.
- Armor realism.
- Contrast.
- Composition.
- Negative space.

## Step 3 — Generate sample categories

Generate:

- One timeline scene.
- One weapon still life.
- One figure portrait.
- One quiet interior.

## Step 4 — Compare consistency

Check:

- Palette.
- Lighting.
- Realism.
- Grain.
- Historical plausibility.
- Anatomy.
- Negative space.
- Sharpness.

## Step 5 — Generate remaining assets

Only after the sample set feels like one project.

## Step 6 — Create responsive crops

Use:

- Figma
- Photopea
- Photoshop
- Squoosh

Do not rely only on CSS `object-position`.

## Step 7 — Optimize

Recommended:

- Squoosh
- ImageMagick
- Sharp

## Step 8 — Track credits

For every image record:

- Asset ID.
- Generation tool.
- Prompt version.
- Generation date.
- Manual edits.
- Final filename.
- Historical reference used.
- Disclosure status.

---

# 12. Asset Tracking Table

| Asset ID | Status | Source | Desktop | Mobile | Optimized | Reviewed |
|---|---|---|---|---|---|---|
| HERO-01 | Not started | AI | No | No | No | No |
| ORIGIN-01 | Not started | AI | No | No | No | No |
| TIMELINE-01 | Not started | AI | No | No | No | No |
| TIMELINE-02 | Not started | AI | No | No | No | No |
| TIMELINE-03 | Not started | AI | No | No | No | No |
| TIMELINE-04 | Not started | AI | No | No | No | No |
| TIMELINE-05 | Not started | AI | No | No | No | No |
| TIMELINE-06 | Not started | AI | No | No | No | No |
| TIMELINE-07 | Not started | AI | No | No | No | No |
| TIMELINE-08 | Not started | AI | No | No | No | No |
| TRANSITION-01 | Not started | AI | No | No | No | No |
| BUSHIDO-01 | Not started | AI | No | No | No | No |
| WEAPON-01 | Not started | AI | No | No | No | No |
| WEAPON-02 | Not started | AI | No | No | No | No |
| WEAPON-03 | Not started | AI | No | No | No | No |
| WEAPON-04 | Not started | AI | No | No | No | No |
| WEAPON-05 | Not started | AI | No | No | No | No |
| FIGURE-01 | Not started | AI | No | No | No | No |
| FIGURE-02 | Not started | AI | No | No | No | No |
| FIGURE-03 | Not started | AI | No | No | No | No |
| FIGURE-04 | Not started | AI | No | No | No | No |
| FIGURE-05 | Not started | AI | No | No | No | No |
| FIGURE-06 | Not started | AI | No | No | No | No |
| DECLINE-01 | Not started | AI | No | No | No | No |
| LEGACY-01 | Not started | AI | No | No | No | No |
| PROJECT-01 | Pending | Screenshot | No | No | No | No |
| PROJECT-02 | Blocked | Screenshot | No | No | No | No |
| SOCIAL-01 | Blocked | Composite | No | N/A | No | No |

---

# 13. Historical Review Checklist

Before approving any image:

- Armor broadly matches the period.
- Weapon matches the period.
- Human anatomy is believable.
- Horse anatomy is believable.
- Architecture is plausible.
- No modern object appears.
- No fake Japanese writing appears.
- No unrelated periods are mixed.
- No fantasy stereotype dominates.
- No disputed fact is presented as certainty.
- The image is clearly treated as artistic interpretation.

---

# 14. Accessibility Rules

Use empty alt text when:

- Image is purely decorative.
- Visible text already communicates the same meaning.
- Image is only an atmospheric background.

Use descriptive alt text when:

- Image explains an era.
- Image introduces a weapon.
- Image differentiates timeline content.
- Image is part of the before-and-after case study.

Do not write alt text like:

- “Image of”
- “Beautiful image”
- “Cinematic image”
- “AI-generated image”

AI disclosure belongs in the source and footer sections.

---

# 15. Final Folder Structure

```text
public/
├── images/
│   ├── hero/
│   ├── origins/
│   ├── timeline/
│   ├── bushido/
│   ├── weapons/
│   ├── figures/
│   ├── decline/
│   ├── legacy/
│   ├── project/
│   └── social/
├── textures/
└── icons/
```

---

# 16. Definition of Done

The asset phase is complete when:

- Hero direction is approved.
- Every required asset has a final file.
- Desktop and mobile crops are ready.
- Naming convention is consistent.
- No watermark or accidental text exists.
- High-risk assets are historically reviewed.
- Anatomy and weapon handling are acceptable.
- No copyrighted character or movie recreation is present.
- All files are optimized.
- Alt text is finalized.
- AI disclosure is ready.
- Credits and generation records are documented.

---

# 17. Next Step After This Document

Setelah `ASSET_LIST.md`, tahap berikutnya adalah membuat:

## Figma Moodboard + Low-Fidelity Wireframe

Buat satu Figma file dengan pages:

```text
01 — Moodboard
02 — Visual References
03 — Desktop Wireframe
04 — Mobile Wireframe
05 — Approved Visual Direction
06 — Asset Review
```

Moodboard harus mengunci:

- Typography character.
- Color balance.
- Image treatment.
- Layout rhythm.
- Texture intensity.
- Section pacing.
- Motion references.
- Hero composition.

Jangan generate seluruh aset dan jangan mulai coding sebelum hero direction dan low-fidelity wireframe sudah disetujui.
