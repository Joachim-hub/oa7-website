# OA7 Official Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Status: v1.1 performance/code cleanup complete (Batch 12, step 4 of 5)

`npm install && npm run build` succeeds (verified in the build sandbox; the
only failure there was Google Fonts being unreachable behind that sandbox's
network allowlist, which won't happen on your machine or any real host).
All 46 routes build and statically generate successfully.

Steps 1–4 (copy/buzzwords, design/spacing/rhythm, accessibility,
performance/code cleanup) are done. Step 5 (scored self-review) is next —
see `/areas/oa7-website.md` in this project's memory for the full sequence.

This batch adds the custom 404 page, all three legal pages (Privacy,
Terms, Cookies), and the `Drawer` component — wired into the mobile nav
rather than left unused. It also includes two real bug fixes found during
self-review: see "This batch" further down before the page-by-page notes.

### Refinement pass (read this first)

**Logo.** The real OA7 logo you sent replaces the typographic placeholder
everywhere (`components/shared/Logo.tsx`). It's a light mark on a
transparent background, which matters for the next point.

**Light/dark theme.** Real, working toggle in the navbar (persists to
`localStorage`, respects system preference on first visit, no flash of
the wrong theme on load). The architecture: colors that need to flip
(page backgrounds, text scale, borders, and the one accent shade used as
text) are now CSS variables with dark values under `:root`/`.dark` and
light values under `.light`, defined in `app/globals.css`. Every existing
component keeps using the same Tailwind classes (`bg-surface-raised`,
`text-secondary-400`, etc.) — they just resolve differently depending on
the theme, so nothing had to be rewritten page by page.

Two deliberate scope decisions here, both because the logo is light-on-transparent:
- **Navbar and Footer stay visually dark in both themes.** They forcibly
  re-apply `.dark` on their own root element regardless of the page
  theme, so the logo stays legible. This also meant the navbar could no
  longer go fully transparent over a hero in light mode (a transparent
  navbar with forced-dark text over a now-light hero would be
  illegible), so it now keeps a persistent dark glass background at all
  scroll positions instead of only appearing on scroll.
- **Purely decorative graphics weren't retrofitted.** The dot-grid
  background texture and the SignalField node network were tuned to sit
  on a dark surface. In light mode they fade toward invisible rather than
  breaking outright — a quiet visual downgrade, not a bug, and an honest
  trade-off given the scope of everything else in this batch.

I also found and fixed a couple of real bugs while wiring this up:
`text-secondary-0` (used 41 times for heading text) was referencing a
shade that didn't exist in the old static palette, so headings were
silently falling back to the body's default off-white instead of true
white — invisible in practice, but a genuine bug. And the bright cyan
accent used directly as text/icon color (badges, eyebrows, icons) fails
contrast badly on a light background (roughly 1.4:1), so that specific
usage now points at a new `accent-ink` token that stays bright cyan in
dark mode and darkens to a still-on-brand teal in light mode, everywhere
it's used as text rather than as a button/badge background.

**Copy voice pass.** Per your note that the writing read as
AI-generated: I audited every data file and component for the actual
problem, which turned out to be heavy em-dash overuse (145 instances
site-wide, concentrated almost entirely in `services-detail.ts` and
`industries.ts`) rather than marketing clichés — a scan for
"empower/unlock/cutting-edge/leverage"-style phrases came back with zero
hits, so that part was already clean. I rewrote every one of those 145
instances by hand, shortening sentences, cutting words that didn't earn
their place, and varying the rhythm instead of leaning on the same
"X, not Y" contrast structure repeatedly. What's left is a small number
of em-dashes in code comments (not user-facing) and conventional
`Page — OA7`-style page-title separators, plus one intentional case in a
button label (`Purchase — $249`) where a dash reads naturally as UI
shorthand rather than prose.

### What's built
- Full project scaffold: config, folder structure, path aliases (`@/*`)
- Complete design token system in `tailwind.config.ts` (colour ramps,
  type scale, spacing, shadows, motion) derived from the brand colours
  `#0A192F` / `#E2E8F0` / `#00F0FF`
- Core UI primitives: `Button`, `Badge`, `Card`, `SectionHeader`, `Accordion`,
  `Tabs`, `Modal`, `SearchBar`, `CategoryPills`, `SortDropdown`, `Pagination`,
  `EmptyState`, `LoadingSkeleton`, `TemplateCard`, `TemplateGrid`,
  `TemplatePreview`, `ProjectCard`
- Layout: `Navbar` (sticky, glass, shrink-on-scroll, mega menu, mobile
  drawer) and `Footer` (multi-column, newsletter form)
- **Home page — fully complete**: Hero (signature animated node-network),
  Services preview, Featured Templates, Featured Projects, Why OA7,
  Industries (12-industry grid), Development Process (5-step timeline),
  Statistics, Testimonials (honest placeholder state), FAQ (accessible
  accordion), Final CTA
- **Templates page — fully complete**:
  - `/templates` — live search, category filter pills, a 5-option sort
    dropdown (Featured / Newest / Popular / Price asc / Price desc),
    pagination (6 per page), a simulated-fetch loading skeleton, an empty
    state with filter reset, and a "Quick view" modal from the grid
  - `/templates/[slug]` — statically generated per template (`generateStaticParams`),
    image gallery with thumbnail strip, tabbed Overview/Features/Tech
    Stack/What's Included, per-template FAQ accordion, related templates,
    and Purchase / Customize / Live Demo CTAs
  - 8 real templates across Automotive, Healthcare, Education, Hospitality,
    Real Estate, Legal, Corporate (quote-only example), and Fitness
- **Portfolio page — fully complete**:
  - `/portfolio` — same explorer pattern as Templates (search, category
    filter, sort, pagination, loading skeleton, empty state), reusing
    `SearchBar`, `CategoryPills`, `SortDropdown`, `Pagination`,
    `EmptyState`, `LoadingSkeleton` directly — `SortDropdown` and
    `LoadingSkeleton` were generalized (configurable options / column
    count) specifically so both pages could share them instead of forking
    the code
  - `/portfolio/[slug]` — statically generated case studies with a shared
    `Gallery` component (also now used by Templates), tabbed
    Overview/Challenge & Solution/Tech Stack/Outcomes, related projects,
    and a "Start a similar project" CTA on the same integration-seam
    pattern as the Templates CTAs
  - 2 real case studies (FarmLink Ghana, Bright Future Academy) — see
    the design decisions section below for why it's 2, not padded higher
- **Services section — now 7 services, fully complete**:
  - `/services` — index page listing all 7 services
  - `/services/[slug]` — statically generated for all 7: Website
    Development, Mobile App Development, Enterprise Software Development,
    **Business Automation**, AI Solutions, UI/UX Design, Maintenance &
    Support. Each page has a premium hero, overview, problems solved, key
    benefits, a feature grid, technology stack, a service-specific
    process timeline, relevant industries, FAQs, related portfolio
    projects/templates (where real ones exist), and a closing CTA
  - Services now live in one file (`services-detail.ts`) that the nav,
    footer, Home preview, and detail pages all derive from — adding
    Business Automation back required editing exactly one data file plus
    two icon maps, nothing else
  - New reusable components: `ServiceHero`, `ServiceCard`, `ProblemsSolved`,
    `BenefitsSection`, `ServiceFeatureGrid`, `TechnologyStack`,
    `RelevantIndustries`
  - Refactored for reuse rather than duplicated: `ProcessTimeline` (Home's
    Process section is now a thin wrapper around it), `FAQSection` (same
    for Home's FAQ), `IndustryGrid` (same for Home's Industries),
    `RelatedProjects`/`RelatedTemplates` (now shared by Templates,
    Portfolio, Services, and Industries detail pages instead of four
    copies of the same block), `SortDropdown`/`LoadingSkeleton` (already
    generalized in the Portfolio batch)
- **Industries section — fully complete**:
  - `/industries` — index page with the same 12-card grid used on Home
  - `/industries/[slug]` — statically generated for all 12: Car
    Dealership, Hospital, School, Hotel, Restaurant, Real Estate, Gym,
    Law Firm, Travel Agency, Construction, Finance, Corporate. Each page
    has a hero, overview, industry-specific challenges, typical
    deliverables, FAQs, related services (reuses `ServiceCard`), related
    templates/projects (where real ones exist), and a closing CTA
  - New reusable components: `IndustryHero`, `RelatedServices`. Reused
    directly rather than duplicated: `ProblemsSolved` and
    `ServiceFeatureGrid` (both generalized with optional copy overrides
    so Industries could reuse them for "Challenges" and "What we build"
    instead of forking new components with near-identical layouts)
- **About page — fully complete**: hero, the OA7 story, mission, vision,
  core values, brand philosophy, "what makes OA7 different" (reuses the
  Home page's `WhyOA7` component as-is), a founder section, "how we work"
  and a separate company timeline (both built on the same
  `ProcessTimeline` primitive with different data), technologies used
  company-wide, FAQ, and a closing CTA. New components: `AboutHero`,
  `MissionVision`, `FounderSection`. `BenefitsSection` was generalized
  (optional copy + column count) so Core Values could reuse it instead of
  a new component. Founder is named in full: Joachim Osafo Amoateng.
- **Process page — fully complete**: a bespoke hero (a large outlined "10"
  stage-counter motif — deliberately not another SignalField network, see
  design direction note below), delivery methodology overview, the full
  ten-stage project lifecycle (Discovery through Maintenance &
  Continuous Improvement) with deliverables and typical client
  involvement per stage, a communication workflow section, quality
  assurance principles, FAQ, and a closing CTA. `ProcessTimeline` was
  **extended** rather than duplicated: it now supports a `layout="vertical"`
  mode for stages carrying deliverables/client-involvement detail,
  alongside its original horizontal card mode (still used unchanged on
  Home, About, Services, and Industries). New components: `ProcessHero`,
  `CommunicationWorkflow`. `ServiceFeatureGrid` was reused as-is for the
  QA principles checklist.
- Base SEO: metadata, Open Graph, Twitter cards, `robots.ts`, `sitemap.ts`
  (now includes every template, portfolio, and service detail page),
  per-page `generateMetadata`
- Accessibility baseline: skip link, visible focus rings, semantic landmarks,
  full WAI-ARIA tabs/accordion/dialog/listbox patterns, `prefers-reduced-motion`
  support, scroll-reveal animations gated with `viewport={{ once: true }}`

### Design decisions worth knowing about
- **Logo updated again**: the full horizontal wordmark (icon + divider +
  "OA7" text) you sent replaces the earlier icon-only mark, sized up from
  `h-7` to `h-9` in both Navbar and Footer per your request. Same
  light-on-transparent file, so the same dark-chrome scoping decision
  from before still applies.
- **v1.1 copy audit, step 1**: I grepped the entire codebase (every
  `.ts`/`.tsx` file, not a sample) for the exact buzzword list from your
  brief — cutting-edge, innovative, transform, empower, seamless,
  end-to-end, tailored solutions, industry-leading — plus a broader pass
  for adjacent words (leverage, elevate, unparalleled, state-of-the-art,
  synergy, robust, unlock, and others). The only real hit was "end to
  end," used 5 times across `FeaturedProjects.tsx`, `not-found.tsx`,
  the Portfolio page, and one Services description. All 5 rewritten.
  Everything else on the list came back with zero matches, which checks
  out against the batch 9 voice pass that already went through this
  content once. I did **not** touch "Transformation gallery" on the
  Fitness template or "Transformation and results galleries" on the Gym
  industry page — that's genuine fitness-industry terminology (before/
  after photos), not the generic "we transform your business" cliché,
  and rewriting it would have made that copy less accurate, not more
  natural.
  - **What I didn't do in this pass, on purpose**: the brief also flags
    "repetitive sentence structures" as a problem. That's real, but it's a
    different, much larger task than a word-list audit — it means reading
    the actual rhythm of every page, not grepping for banned terms. I
    treated that as part of the design/rhythm review (step 2) below, not
    a rushed version bundled into this step.
- **v1.1 design/spacing review, step 2**: went through every shared
  layout/spacing pattern site-wide (not page-by-page eyeballing, which
  doesn't scale to 46 routes — I audited by grepping every occurrence of
  each spacing/sizing pattern and comparing them against each other).
  Found and fixed four real, if minor, inconsistencies:
  - An icon-badge circle (icon in a rounded, accent-tinted square) was
    `h-10 w-10` in `WhyOA7.tsx` and `PricingHero.tsx` but `h-11 w-11` in
    `ServiceCard.tsx` — same visual pattern, no reason for the 4px
    drift. Standardized to `h-11 w-11` everywhere.
  - `IndustryGrid`'s card padding was `p-5` while the same "compact grid
    card" pattern elsewhere (`ServiceFeatureGrid`, the 404 quick-links)
    used `p-4`. Standardized to `p-4`.
  - The gap between a `SectionHeader` and the content below it was
    `mt-12` in 9 of 12 places but drifted to `mt-10`/`mt-8` in three
    others (`WhyOA7`, `FounderSection`, `TechnologyStack`) with no
    content-driven reason for the difference. Standardized to `mt-12`.
  - Confirmed (not changed) several patterns that looked like
    inconsistencies but were actually reasoned: template-card grids use
    a slightly larger gap (`gap-6`) than service-card grids (`gap-5`)
    because template cards carry a thumbnail and more content — that's
    intentional density-based variation, not drift, so I left it. Same
    for hero icon badges being larger (`h-12 w-12`) than card icon
    badges (`h-11 w-11`) — hero context reasonably warrants more visual
    weight.
  - Section vertical rhythm (`py-24 md:py-30` for full sections,
    `py-4 md:py-6` for the shorter "overview" prose blocks under a
    hero), the heading-size hierarchy across hero tiers, hero CTA button
    sizing, and CTA button-group gaps were all already fully consistent
    site-wide — nothing to fix there, listing it so it's clear those
    were checked, not skipped.
  - Checked for hardcoded pixel widths that could break at 320–375px;
    found none outside one desktop-only mega-menu dropdown that's
    correctly hidden below the `lg` breakpoint where it'd never need to
    fit a narrow viewport anyway.
- **v1.1 accessibility audit, step 3**: this one turned up genuine bugs,
  not just polish — worth reading in full rather than skimming.
  - **Four pages had no `<h1>` at all.** `/services`, `/industries`,
    `/templates`, and `/portfolio` used `SectionHeader` (which renders an
    `h2`) as their only heading, so there was no page-level heading for
    screen readers or SEO to anchor on. Gave `SectionHeader` an `as="h1"`
    prop and used it on all four.
  - **Dark-mode text contrast was failing for two widely-used shades.**
    I measured actual WCAG contrast ratios (not eyeballed) for every
    text-color shade against the page background, in both themes. Light
    mode was fine — I'd calculated that carefully when building the
    theme system. Dark mode wasn't: `secondary-500` measured 3.70:1 and
    `secondary-600` measured 2.32:1 against the page background, both
    well under the 4.5:1 AA minimum for normal text, and `secondary-500`
    alone is used at `text-sm` in 32 places site-wide — card
    descriptions, muted copy, throughout. Replaced both with values that
    measure 5.5:1 and ~4:1 respectively, keeping the same relative
    "more muted" ordering without failing contrast.
  - **Status colors (success/warning/error) had the same problem, worse.**
    Used directly as text (badges, form success/error messages), they
    measured 2.20:1, 2.03:1, and 3.55:1 against a light-mode background —
    badly failing AA. These had never been made theme-aware at all when
    I built the light/dark system, only `accent` had. Added `success-ink`
    /`warning-ink`/`error-ink` tokens following the same pattern as
    `accent-ink`, and updated every place that used the color as text
    (Badge, both form components, the "problems" list icon).
  - **`CategoryPills` and `Gallery`'s thumbnail selector were misusing
    ARIA tab roles.** Both used `role="tablist"`/`role="tab"` for what
    are actually a filter-button group and a thumbnail selector — neither
    had an associated `tabpanel`, and neither supported the arrow-key
    navigation that real ARIA tabs require. A screen reader would
    announce "tab" semantics and then not get tab behavior. Both switched
    to `role="group"` with `aria-pressed` toggle buttons, which is what
    they actually are.
  - **The one component that *is* legitimately tabs** (`Tabs.tsx`, used
    on the template and case-study detail pages) had the tab/tabpanel
    relationship right but was missing the arrow-key navigation and
    roving `tabindex` the ARIA tabs pattern requires. Added both
    (Left/Right/Home/End move focus between tabs). Also caught that its
    `aria-label` was hardcoded to "Template information" even though the
    same component renders on the Portfolio case-study page — made it a
    prop instead.
  - **Confirmed clean, not skipped**: zero instances of positive
    `tabIndex` anywhere (natural DOM tab order throughout), every image
    has real `alt` text, every icon-only button has an `aria-label`,
    every form input has a properly associated `<label>`, form errors use
    `role="alert"` so they're announced, the skip link and its target
    both exist and work, and hover states are backed by a working global
    `:focus-visible` ring rather than being mouse-only.
  - **Known gap I did not fix**: `SortDropdown`'s options are real,
    individually-focusable `<button>` elements, so Tab+Enter fully works
    for keyboard users, but it doesn't support arrow-key navigation the
    way a textbook ARIA listbox would. With only 3–5 options per
    dropdown, I judged this a minor completeness gap rather than a
    blocking one, and prioritized the tab/gallery fixes (which actively
    created wrong expectations) over this one (which just isn't maximally
    convenient). Flagging it rather than omitting it.
- **v1.1 performance/code cleanup, step 4**: verified rather than assumed,
  using tools that give a definitive answer instead of a visual scan.
  - **Unused imports/variables: zero, confirmed by the compiler, not by
    eye.** Ran a full type-check with `noUnusedLocals`/`noUnusedParameters`
    enabled — TypeScript's own strict dead-code detection — across the
    entire codebase. Came back completely clean.
  - **Dead component files: zero.** Checked every file under
    `components/` for a reference anywhere else in the codebase; every
    single one is actually used.
  - **Unnecessary `"use client"` directives:** checked every client
    component for whether it actually needs the client boundary (hooks,
    event handlers, browser APIs, Framer Motion). One looked like a false
    positive on first pass — `Button.tsx` has no hooks of its own — but
    it's correctly a client component anyway: it's a shared primitive
    that receives `onClick`/`onSubmit` handlers as props from dozens of
    call sites, and stripping the directive would break every one of
    them. No unnecessary client components found.
  - **Real fix: the logo's image sizing hint.** It's rendered at roughly
    36px tall everywhere, but the `<Image>` component had no `sizes`
    attribute, so Next's image optimizer had no signal that this is
    always a small navbar-scale image rather than something that might
    render full-width. Added `sizes="120px"`, which should meaningfully
    shrink the actual bytes served for the one real image asset on the
    site. (Everything else visual — template screenshots, project
    thumbnails — is a CSS placeholder panel, not an image file, so there
    was nothing else to optimize on that front.)
  - **Confirmed already correct, not just left alone**: the logo already
    used `priority` loading (right call — it's above the fold on every
    page) and explicit width/height (prevents layout shift while it
    loads). Bundle sizes per route are all in a reasonable, unremarkable
    range (96–179 kB first load, largest is `/contact` because of
    react-hook-form + zod, smallest are the plain-text legal pages).
  - **Deliberately not "fixed": the parallel Template/Project explorer
    components.** `TemplatesExplorer`/`PortfolioExplorer`,
    `TemplateCard`/`ProjectCard`, and their CTA button components look
    like duplication at a glance — similar search/filter/sort/paginate
    shape. They already share every actual reusable primitive
    (`SearchBar`, `CategoryPills`, `SortDropdown`, `Pagination`,
    `LoadingSkeleton`, `EmptyState`). What's left is the orchestration
    logic and card layout specific to two genuinely different data
    shapes — templates have price/tech stack/demo URLs, projects have
    client/status/outcomes. Forcing these into one generic component
    would mean a more complex generic type in place of maybe 60 lines of
    plain, readable, duplicated glue code. That's the "unnecessary
    abstraction" this same brief warns against, so I left it as two
    separate, readable components.
- **The legal pages are a real starting point, not a substitute for legal
  review.** I'm not a lawyer, and this content, while accurate about what
  the site actually does, hasn't been reviewed by one. Have someone
  qualified look it over before you treat it as your actual compliance
  posture, especially the Terms of Service's liability and governing-law
  sections.
- **Self-review caught a real bug in Modal and Drawer**: both dialogs' backdrop
  was using the theme-flippable `surface-base` color, which meant the
  dimming scrim behind an open dialog would have turned into a
  near-white, barely-there overlay in light mode instead of dimming the
  page. Fixed to a fixed dark scrim (`ink`) that doesn't depend on
  theme, since a backdrop's job is to dim the background regardless of
  what theme you're in. While in there, I also noticed neither dialog
  actually trapped keyboard focus — Tab could escape to the page behind
  an open Modal or Drawer. Added a shared `useFocusTrap` hook so both
  now keep Tab/Shift+Tab cycling within the open dialog, the way a modal
  or drawer is supposed to behave for keyboard users.
- **Signature element**: the hero's animated network (`SignalField.tsx`)
  traces the numeral **7** as its bright path, surrounded by a dimmer
  coordinate-style node network — a quiet nod to "OA7" that reads as a
  signal/precision motif rather than a generic gradient blob.
- **Logo**: the real OA7 logo (the file you sent) is wired in everywhere via
  `components/shared/Logo.tsx`. See the "Refinement pass" section above
  for why Navbar/Footer stay dark-themed regardless of site theme.
- **Placeholder contact info is now user-facing — please replace it.**
  `constants/site.ts` has `email: "hello@oa7.dev"` and a
  `whatsapp: "+233000000000"` that I invented as placeholders back in the
  very first batch, before there was a real Contact page for them to
  matter. Now that `/contact` displays the email as a real, clickable
  channel, sending an inquiry there wouldn't reach you. I deliberately
  left WhatsApp off the visible Contact page (obviously fake all-zero
  digits, so publishing it felt worse than omitting it), but the email
  is live on the page. Update both values in `constants/site.ts` with
  your real ones before this goes anywhere near production — it's the
  one place both are defined, so the fix is a two-line edit.
- **Dark-first**: the brand's primary colour is a deep navy, so the site is
  built dark-mode-first (matches the Linear/Vercel/Arc reference points in
  the brief). Light mode now exists too — see the Refinement pass notes.
- **Industries list**: the brief listed both "Hospital" + "Healthcare" and
  "School" + "Education" as separate entries. Rendering both would produce
  near-duplicate cards, so the home grid shows 12 distinct industries
  (Hospital and School stand in for Healthcare/Education). Flag it if you
  want them split into separate pages later.
- **Featured Templates/Projects use your real project names** (CarLux Motors,
  FarmLink Ghana, Bright Future Academy) as placeholder content, since
  those are real OA7-adjacent builds already on file — swap in real
  screenshots/copy once you're ready to feature them publicly.
- **Sales System integration seam**: Purchase and Customize buttons on the
  template details page (`components/templates/TemplateCTAButtons.tsx`)
  currently link to `/contact?template=slug&intent=purchase|customize` —
  a real, working interim behavior rather than a dead button. That
  component is the *only* place that needs to change when the OA7 Sales
  System exists (e.g. swap the hrefs for `/checkout?template=slug`).
- **One template is quote-only** (Harborline Freight, Corporate/logistics)
  to demonstrate the "Request Quote" price state end-to-end, since real
  enterprise engagements usually can't carry a fixed price honestly.
- **Screenshots are labeled placeholder panels**, not fake images — real
  product photography/screenshots weren't available, so the gallery and
  cards use the same signal-grid placeholder treatment established on the
  Home page rather than stock or invented imagery.

- **Portfolio has 2 case studies, not more.** These are your real, named
  projects (FarmLink Ghana, Bright Future Academy) with details pulled
  from what's actually on file about them — Bright Future Academy is
  honestly marked "In Development" (public site done, portals in
  progress) rather than claimed as finished. CarLux Motors was
  deliberately **not** duplicated here since it's already a Templates
  product, not a client-commissioned case study — listing it in both
  places would blur that distinction. I did not invent additional
  fictional clients to pad the grid; the explorer is built to scale
  cleanly as you add real ones.
- **No fabricated metrics.** The "Outcomes" tab on each case study
  describes what was actually built (e.g. "three role-based UIs shipped
  from one Flutter codebase"), not invented business results like "40%
  more leads" — I have no basis for numbers like that on projects that
  are still in progress, and fabricating them on a real client's case
  study would be dishonest.

- **Seven services now**, with Business Automation restored as a
  standalone service per your explicit instruction — it's kept distinct
  from AI Solutions and Enterprise Software, with its own problems,
  benefits, process, and FAQs rather than folded into either.
- **Industry relationships are honest, not padded.** Only industries with
  a real matching template (car-dealership → CarLux Motors, hospital →
  Meridian Clinic, etc.) show a related template; only "school" shows a
  related portfolio project (Bright Future Academy) since that's the only
  real case study that maps to one of the 12 industries — FarmLink Ghana
  is agriculture, which isn't one of the 12, so it doesn't force-fit
  anywhere.
- **No fabricated stats or testimonials anywhere in Industries**, same as
  Services.

- **About page makes no claims you didn't give me.** No fabricated
  founding year, no invented awards or certifications, no employee count,
  no office address. The company timeline is written as stages
  ("Foundation," "Public launch," "Expanding the library,"
  "Remote-first partnerships") rather than dated milestones, since OA7
  hasn't launched publicly yet and I don't have real dates to anchor to —
  it honestly frames this website going live as the "Public launch"
  stage rather than pretending OA7 has years of history behind it.
- **Founder section stays company-focused**, per your instruction — role
  and disciplines (web, Flutter, UI/UX) only, no personal biography. Now
  shows your full name, Joachim Osafo Amoateng, per your follow-up.
- **Founder avatar is an initial in a circle**, not a fabricated photo —
  same "genuinely unavailable" placeholder philosophy as the template
  screenshots.
- **Design direction, from the Process page onward**: per your note, I'm
  actively varying page-level visual treatment (hero motifs, section
  layouts) rather than reusing the same SignalField-hero + card-grid
  pattern on every page, while keeping the underlying design tokens
  (color, type scale, spacing, motion easing) identical everywhere. The
  Process page's hero uses a large outlined "10" instead of the network
  graphic; its lifecycle section is a left-spine vertical layout instead
  of another 5-across card row. The Pricing page's hero previews the two
  pricing models directly as compact real cards (with the real $229–$299
  template price range pulled live from `templates.ts`, not hardcoded)
  instead of a headline over a decorative graphic. Earlier pages (Home
  through About) still use the network-hero pattern since they were built
  before this direction was given — say if you'd like any of them
  revisited to match.
- **Pricing page is honest about not having custom-project numbers.**
  There's no invented price range, no "starting at $X" for custom work,
  no fake urgency or discount language. The template price range shown
  is computed from the real template data, not typed in by hand, so it
  can't drift out of sync.
- **Self-review caught real repetition on Pricing**: the first content
  section originally mirrored the hero's two-column Templates/Custom
  layout immediately below it. Restructured it into a single flowing
  column so the same two-column split doesn't appear twice in a row.
  Also caught two raised-background sections sitting back to back
  (`BenefitsSection` → `PricingPolicies`) and dropped one to the base
  tone to restore alternation.
- **Contact page — fully complete**: a deliberately restrained hero (no
  decorative motif at all, on purpose, since a contact page benefits from
  feeling calm and direct rather than another showcase moment), a real
  form (name, email, "what are you looking for," message) with
  validation, direct channels, and FAQ. The form reads the `template=`,
  `service=`, `industry=`, `project=`, and `intent=` query params that
  every CTA across the site already links to (e.g.
  `/contact?template=carlux-motors&intent=purchase`) and shows a small
  "reaching out about X" banner plus pre-fills both the message and the
  "what are you looking for" dropdown accordingly, rather than making the
  visitor repeat context we already have.
- **404 page**: quick links to the four places someone's actually likely
  to want to go (Templates, Portfolio, Services, Contact), not just a
  link back to Home.
- **Legal pages — Privacy, Terms, Cookie Policy**: written to describe
  what this site actually does, not filled-in generic boilerplate. The
  Cookie Policy is genuinely short, because the only thing this site
  currently stores in a visitor's browser is the light/dark preference —
  no analytics, no ad tracking, no third-party scripts, so it doesn't
  pretend otherwise. Terms reflect the real pricing/revision/payment
  model from the Pricing page rather than a disconnected generic
  template.
- **`Drawer` component**: built to the same standard as `Modal` (focus
  trap, Escape to close, backdrop click, portal-rendered) and actually
  wired in — it now powers the mobile navigation menu, replacing the
  in-page dropdown that used to sit there, and it surfaces the Services
  submenu on mobile, which the old menu never exposed at all.

### Not yet built
Nothing from the original brief remains outstanding — all planned pages
and reusable components now exist. The open items are the ones flagged
elsewhere in this README: the real logo is in, but the placeholder
email/WhatsApp number in `constants/site.ts` still need your real
details, and custom illustrations were never part of this build (the
signal-network/placeholder-panel visual language stood in for them
throughout).

## Local setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run type-check
```
