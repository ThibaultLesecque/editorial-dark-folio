# Dark Paper CV

Build a single-page, print-ready résumé as a dark editorial document. This is a CV, not a website, portfolio, dashboard, or personal landing page.

The résumé must look like it belongs to the same brand as my production portfolio: almost-black canvas, warm-white type, hairline dividers, uppercase micro-labels, two-digit indices, sparse pills, generous whitespace, and one restrained green status accent. Personality is technical and editorial — not terminal cosplay, not neon, not glassmorphism, not card-shadow UI.

OUTPUT
- One A4 page only (210 × 297 mm). Nothing may overflow to a second page.
- Fixed canvas: max-width 210mm, min-height 297mm, centered on screen with a subtle page-shadow so it reads as a document.
- Semantic HTML, selectable text, no images, no icon fonts that disappear in print.
- Google Font: Inter (weights 400, 500, 600, 700). Fallback: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif. No monospace except if a tiny status label needs it — prefer Inter throughout.
- Include a print stylesheet: @page { size: A4; margin: 0; } so Cmd/Ctrl+P → Save as PDF yields a clean A4 file with no browser headers/footers and no extra blank page.
- Add a small on-screen-only control: “Print / Save PDF”. Hide it in print.

COLOUR (use exactly these)
- Canvas / page background: #0A0A0A
- Primary text: #F5F5F5
- Muted body / metadata: #8A8A8A
- Hairline dividers: rgba(255,255,255,0.12)
- Strong hairline / interactive outlines: rgba(255,255,255,0.22)
- Status accent (use once, sparingly): #4ADE80
- No extra brand colours. No card shadows. No gradients except a possible very subtle #1A1A1A → #0A0A0A wash behind the header if needed.
- Status green may appear as a 6–8px glowing dot next to a tiny uppercase label. Do not use it for headings, backgrounds, or skill bars.

TYPE SCALE FOR A4 (do not copy website display sizes)
- Name: 36–42px, weight 700, line-height 1.02, letter-spacing -0.03em
- Role line: 14–16px, weight 500, color #8A8A8A
- Section titles: 11px, weight 500, uppercase, letter-spacing 0.16em, color #8A8A8A
- Entry titles: 16–18px, weight 600, letter-spacing -0.01em
- Body: 12.5–13px, weight 400, line-height 1.55, color #8A8A8A
- Micro labels / indices: 10px, uppercase, letter-spacing 0.14em, color #8A8A8A
Wordmark treatment is optional in the header: “THIBAULT LESECQUE” at 11px, weight 700, letter-spacing 0.14em.

LAYOUT
- Page padding: 28–32px.
- Single column, editorial, not a dense two-column recruiter template. A narrow right rail is allowed only for contact + skills if the left column stays ≥62% and nothing feels cramped.
- Hierarchy: header → summary → experience → education → skills.
- Section structure: uppercase micro label + 1px hairline, then content. Use two-digit indices for experience/education (01, 02).
- Repeated entries: 16–20px vertical padding, hairline between rows. No boxed cards.
- Tech tags: quiet outlined pills, 10–11px, 1px hairline, fully rounded (999px), 4px / 10px padding, 6–8px gap. No filled colourful chips except one “Current” badge and one “Primary focus” badge (canvas text on #F5F5F5 fill, 10px uppercase, 0.12em tracking, 3px / 8px padding, fully rounded).
- Alignment: left-aligned content, generous negative space, no centered body copy.
- At screen widths below 700px, the on-screen preview may stack, but print must stay A4 single-page.

HEADER
Left:
- Optional tiny status row: green glowing dot + “SYSTEM INITIALIZED” (11px uppercase, tracking 0.16em, muted except the dot).
- Name: Thibault Lesecque
- Role: Odoo / Python / Full-stack product development
Right or under the role, as a quiet metadata row (not buttons):
- thibault.lesecque@outlook.com
- linkedin.com/in/thibault-lesecque
- github.com/ThibaultLesecque
Make email and profile URLs real links. Do not add phone, address, city, country, date of birth, nationality, photo, or QR codes.

SUMMARY
Label: 01 / Profile
Body, exactly:

I build practical software for real business needs. Professionally I focus on Odoo and Python — custom modules, integrations, and workflows that fit how companies actually operate. Independently I build full-stack products with TypeScript and Next.js.

Then one muted line:
Open to junior engineering opportunities, Odoo/Python work, and practical web products.

EXPERIENCE
Label: 02 / Experience
One entry only:

Index: 01
Title: Odoo Development
Badge: Current
Role: Software Engineer
Summary: I build custom Odoo modules, integrations, and end-to-end business workflows, tailoring systems to how a company operates—from sales and inventory to accounting and automation—so teams work with software that fits their process.
Tags: Python, Odoo ORM, QWeb, PostgreSQL, APIs

Do not add an employer, client, location, or date. Those fields are intentionally omitted.

EDUCATION
Label: 03 / Education
One entry only:

Index: 02
Title: Programming Degree
Role/programme: Graduate Programme in Programming
Summary: A structured foundation in software development—databases, web frameworks, security, and IT service management—and the fundamentals everything else builds on.
Tags: SQL, Vue.js, ASP.NET, Cybersecurity, Scrum, ITIL

Do not add an institution, location, dates, grade, or thesis.

SKILLS
Label: 04 / Skills
Intro line, muted: Tools and practices I use to build useful, dependable software.

Render as a compact indexed list (not progress bars, not percentages, not “expert/advanced” ratings):

01  Odoo — Primary focus — Custom modules, integrations, and end-to-end business workflows—the focus of my current role.
02  Process Analysis — Business analysis — Mapping real business processes and translating them into clear, workable software.
03  Python — Core language — Backend development, automation, and the language behind most of my Odoo work.
04  PostgreSQL — Data storage — Relational data storage and queries for business applications and APIs.
05  TypeScript — Typed JavaScript — Typed interfaces and application logic for maintainable full-stack products.
06  Next.js — React framework — Full-stack React apps with server-side rendering and modern frontend tooling.
07  ASP.NET — Web framework — Robust server-side applications and APIs with C# and the .NET ecosystem.
08  Scrum — Agile delivery — Sprint planning, backlog refinement, and shipping iteratively as part of a team.

If space is tight on one A4 page, keep names + category labels + the Primary focus badge, and shorten descriptions rather than dropping Odoo, Python, or Next.js. Never invent extra skills.

FOOTER (tiny, muted, 10–11px)
© 2026 Thibault Lesecque

MOTION / UI
This is a static document. No page navigation, no mobile menu, no contact form, no CMS, no auth, no animations except:
- optional 2.4s opacity pulse on the status dot (disable under prefers-reduced-motion)
- link hover: muted → #F5F5F5 over 200ms
Focus rings: 2px #F5F5F5 outline, 2px offset.

HARD CONSTRAINTS — DO NOT
- Do not invent employers, clients, institutions, dates, locations, metrics, outcomes, certifications, years of experience, or proficiency levels.
- Do not add a portrait, avatar, or stock photo.
- Do not add Selected Work, case studies, project cards, testimonials, services, or a blog.
- Do not add a contact form.
- Do not use monospace walls, ASCII art, code rain, grid overlays, or more than one accent colour.
- Do not use Inter incorrectly as a system-font-only stack; actually load Inter.
- Do not spell the surname as Leseque. Canonical spelling is Lesecque / LESECQUE.
- Do not change the email, LinkedIn URL, or GitHub URL.
- Do not use placeholder lorem ipsum. Use only the copy in this prompt.
- Keep the whole résumé on one A4 page with comfortable whitespace. If content overflows, tighten spacing and shorten skill descriptions first.

SUCCESS LOOKS LIKE
A quiet, expensive-looking dark CV: large name, small uppercase section labels, hairline rules, indexed rows, pill tags, almost no decoration. A hiring manager should be able to scan identity, current work, education, and tools in under 10 seconds, then print a flawless A4 PDF.

Match the portfolio design system more strictly. Do not invent extra colours, fonts, radii, or effects.

COLOUR TOKENS (exact)

- Canvas: #0A0A0A

- Foreground: #F5F5F5

- Muted: #8A8A8A

- Hairline: rgba(255,255,255,0.12)

- Strong hairline: rgba(255,255,255,0.22)

- Status green: #4ADE80 — used only for the 6–8px status dot, with glow 0 0 12px #4ADE80

- Optional header/page wash: none needed on a résumé

Do not add a second accent. Do not tint backgrounds green, blue, or purple.

TYPE

- Family: Inter only

- Weights: 400, 500, 600, 700

- Micro labels / indices: 10–11px, 400–500, uppercase, tracking 0.12–0.20em, color muted

- Body: 13–14px, 400, line-height 1.6, color muted

- Entry titles: 16–18px, 600, tracking -0.01em, color foreground

- Name: 36–42px, 700, line-height 1.02, tracking -0.03em, color foreground

- Role: 14–16px, 500, color muted

No monospace. No second typeface.

SURFACES

- Depth from borders, spacing, and opacity only — never box-shadows on cards or sections

- Structural dividers: 1px hairline

- Primary/current row (the Current experience entry): 1px strong hairline

- Pills / badges / tags: border-radius 999px

- Tag pills: 11px muted, tracking 0.04em, 1px hairline, padding 4px 10px

- Current / Primary focus badge: 10px uppercase, tracking 0.12em, canvas text on foreground fill, padding 3px 8px, radius 999px

- No filled cards, no glass, no gradients except a possible #1A1A1A to #0A0A0A header wash

SPACING RHYTHM

Use 4px multiples: 8, 12, 16, 20, 24, 28, 32. Page padding 28–32px. Row padding ~20–28px. Section gap 24–32px. Keep generous negative space; one idea per region.

If anything currently uses a different grey, blue accent, card shadow, or rounded rectangle chip, replace it with the tokens above.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/37deac90-b2c1-483d-b203-5c15c36172b1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
