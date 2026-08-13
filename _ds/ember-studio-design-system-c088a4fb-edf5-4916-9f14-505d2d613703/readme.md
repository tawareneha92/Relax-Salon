# Ember Studio — design system

A warm, craft-focused system for creative project management tools. Soft earth tones anchor the interface; amber accents draw attention to actions and progress. It is built for teams that care about how their tools look as much as what they do. Light mode is the default surface; the palette is warm throughout, and the serif/sans pairing is the design's signature.

## Sources

This system was written from a single written brief supplied in chat (the "Ember Studio" brand notes: colours, typography, elevation, component specs, spacing, radii, do's and don'ts). **No codebase, Figma file, screenshots, logo files, font binaries or slide deck were attached.** Everything here is a faithful implementation of that brief plus the smallest reasonable amount of connective design work.

Two notes for whoever picks this up next:

- The brief arrived with the company description "relax salon" but the attached notes describe Ember Studio, a project management product for creative teams. The notes were treated as authoritative because they are specific and internally consistent. If the real client is a salon, say so and this can be re-pointed quickly — the tokens are already warm enough to suit either.
- **Font binaries were not supplied.** Playfair Display, Source Sans 3 and Fira Code are loaded from Google Fonts (`tokens/fonts.css`). If licensed files exist, drop them in `assets/fonts/` and swap that file's `@import` for `@font-face` rules.
- **No logo was supplied, so none was drawn.** Wherever a mark would sit, the brand name is set in Playfair Display bold (see `guidelines/brand-wordmark.card.html` and the app sidebar). `assets/` is otherwise empty.

## Products

One product is described: **Ember Studio**, a project management tool for creative studios — projects, task boards, files, team. It is recreated in `ui_kits/app/`. No marketing site, docs site or mobile surface was described, so none was invented.

## Content fundamentals

The voice is calm and matter-of-fact. It states what a thing is and what will happen, then stops.

- **Person.** Second person for the user's own things ("Assigned to me", "Notify the team"), never first person plural. The product doesn't say "we".
- **Casing.** Sentence case everywhere — headings, buttons, nav, table headers. The only uppercase is the 11px overline used for sidebar section labels and board column headers ("WORK", "IN PROGRESS"), always with 0.08em tracking.
- **Buttons** are verb-first and short: "New project", "Create project", "Invite teammate", "Archive". Never "Click here", never a trailing exclamation.
- **Descriptions** are one clause, no period-free fragments piled up: "Sends one digest email", "You can restore it from Archive at any time", "Visible to your workspace". They answer "what happens if I do this".
- **Metadata** is terse and unpunctuated, separated by a middle dot: "12 tasks · due Friday", "Ida Morrow · 2 days ago", "Northwind Coffee · due Fri, 14 Aug".
- **Empty and success states** state the fact, then the next step: "Project created. It is now in Active."
- **Numbers** lead when they carry the meaning: "6 active across 3 clients", "8 of 12 tasks".
- **No emoji.** None anywhere in the product, marketing, or documentation. No exclamation marks. No exhortation ("Let's get started!"), no cleverness in error copy — an overdue task says "Overdue", not "Yikes".
- **Status vocabulary is fixed**: On track, Needs attention, In review, Overdue, Done. Priorities are High, Medium, Low.

## Visual foundations

**Colour.** A warm palette with no cool grays anywhere — every neutral is stone, tinted toward brown. Terracotta `#C2410C` is reserved for interactive things: primary buttons, active nav, active tabs, links, focus rings, progress fill. It is never decoration, and never appears twice as a filled button in one section. Amber `#F59E0B` is the attention colour only — new-item dots, notification badges. Semantic green/amber/red appear as 12%-opacity tints behind matching text, not as solid fills (destructive buttons excepted). Pure black and pure white are never used; text is `#1C1917`, the page is `#FAFAF9`.

**Type.** Playfair Display bold at -0.02em tracking for anything display or heading level; Source Sans 3 regular/semibold for everything else; Fira Code with ligatures for code. Two weights maximum per screen. The serif/sans contrast is the identity — do not substitute a sans for headings. Scale: 64 / 48 / 28 / 20 / 16 / 14 / 12 / 11.

**Backgrounds.** Flat colour only. No gradients, no photography behind text, no repeating patterns, no textures, no illustration. Depth comes from the three-step surface ladder (page `#FAFAF9` → card `#F5F5F4` → raised `#E7E5E4`) plus a 1px warm border. Full-bleed imagery is not part of the system; where photography appears it is user content inside a card, warm-toned and never desaturated to gray.

**Elevation and borders.** Cards rest completely flat — 1px `#D6D3D1` border, no shadow. Hover adds `0 4px 16px rgba(28,25,23,0.06)` and lifts 2px. Selected cards swap the left border to 2px terracotta. Primary buttons gain a warm glow `0 4px 12px rgba(194,65,12,0.25)` on hover. Modals sit on `0 24px 48px rgba(28,25,23,0.12)`. There are no inner shadows anywhere.

**Transparency and blur.** Used in exactly two places: the app header and modal scrims (`backdrop-filter: blur(8px)` over an 80% warm-white / 32% warm-black base). Nothing else is translucent — no frosted cards, no glass panels.

**Motion.** 150ms for controls, 300ms for progress fills and panel reveals, all on `cubic-bezier(0.2,0,0,1)`. No bounce, no spring, no entrance animation on page load. Hover states *darken* (terracotta → burnt sienna) rather than lighten. Press states do not scale or shrink — the colour change carries the feedback. Focus is a 3px `rgba(194,65,12,0.12)` ring plus a terracotta border, never a browser outline.

**Radii.** Strictly four values, never mixed within a role: 4px badges and inline code, 8px buttons/inputs/dropdowns, 12px cards/panels/modals/popovers, full for chips, avatars and progress bars.

**Layout.** 4px grid throughout; the spacing scale is 4-8-12-16-20-24-32-40-48-64-80. Container maxes at 1200px with 24px horizontal padding. Card grids gap 16px on mobile, 24px on desktop. Section spacing steps 24 / 32 / 48 by breakpoint. The sidebar is a fixed 256px; the page header is sticky; nothing else is pinned.

**Ornament.** None. No dividers used decoratively, no accent shapes, no illustrated empty states. The warmth is entirely in the palette.

## Iconography

No icon set was supplied with the brief and no assets existed to copy, so **Lucide** (CDN, v0.454.0) is used as the substitute — 24px grid, 2px stroke, rounded caps, which is the closest match to the system's restrained, warm-minimal tone. **Flag this**: swap it for the real set the moment one exists; only `ui_kits/app/index.html` and the components' icon slots reference it.

Rules in practice: icons are stroke-only, never filled; rendered at 16px inside 32/40px controls; they inherit `currentColor` so they take the terracotta of an active nav item automatically. Icons never appear alone as a primary action without a Tooltip. **No emoji and no Unicode glyphs are used as icons** — the two exceptions in the component sources are the checkbox tick and select chevron, both drawn as text because they are control ornaments rather than icons. There is no icon font and no sprite sheet.

## Index

**Root**
- `styles.css` — the single stylesheet consumers link; imports everything below.
- `readme.md` — this file. `SKILL.md` — Agent Skills wrapper. `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`.

**`guidelines/`** — foundation specimen cards: colour (primary/accent, warm neutrals, text, semantic), type (display, headings, body, code), spacing (scale, in use), radius, elevation, interactive states, wordmark.

**`components/`** — every component below is exported on the bundle namespace.
- `core/` — **Button**, **IconButton**, **Card**, **Badge**, **Chip**, **Avatar**, **AvatarStack**, **ProgressBar**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- `navigation/` — **Tabs**, **SidebarNav**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**

Each has a `.d.ts` props contract and a `.prompt.md` usage note; each directory has one `@dsCard` HTML showing its states.

**`ui_kits/app/`** — the Ember Studio product recreation (projects grid, project board, settings). See its own README.

**Intentional additions.** The brief names buttons, cards, inputs, chips, progress bars, avatars, tabs and navigation. Added to make those usable in real screens: IconButton, Badge, Select, Checkbox, Radio, Switch, Dialog, Toast, Tooltip — each styled strictly from the brief's stated radii, colours and motion values. No component invents a new colour or radius.
