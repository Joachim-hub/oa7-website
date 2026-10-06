# OA7 Website v1.1

Production-polish upgrade from v1.0. No architecture changes, no route
changes, no redesign — targeted improvements to mobile experience,
branding, and theming, on top of the existing v1.0 foundation.

## Branding

- Rebranded `OA7 Technologies` → `OA7 Software` (single source of truth:
  `constants/site.ts`, so every page that renders it — About, Terms,
  Privacy, Cookies, the footer — updated automatically).
- Updated the placeholder contact email to `contact@oa7software.com`
  (still a placeholder until the real domain is purchased — same status
  as before, just a different placeholder value, per your instruction).
- **Note**: `SITE.url` (`oa7.dev`) was deliberately left unchanged. You
  only asked to update the email, and the URL feeds `metadataBase`, the
  sitemap, canonical tags, and Open Graph URLs — changing it would have
  touched SEO, which this upgrade was explicitly told to preserve. Flag
  it if you want the domain updated too; that's a one-line follow-up in
  the same file.

## Theme

- Removed the light/dark theme system completely: deleted
  `ThemeProvider.tsx`, `ThemeToggle.tsx`, the anti-flash boot script in
  `layout.tsx`, and the toggle button from the navbar (both desktop and
  mobile).
  removed from `tailwind.config.ts` and `globals.css`, since a single
  permanent theme has no runtime need for them — colors are flat, static
  values again, matching how the project started.
- The `-ink` color tokens (`accent-ink`, `success-ink`, etc.) added
  during the theme work stayed, but now just resolve to flat hex values
  identical to their `DEFAULT` counterparts, so no risky rename across
  the ~30 files that use them for anything to actually break.
- Site is now permanently on the OA7 dark identity: background
  `#0A192F`, accent `#00F0FF`, primary text `#E2E8F0`, secondary text
  `#94A3B8` — no toggle, no system-preference detection, no stored
  preference.

## Mobile experience (primary focus of this release)

- **Section spacing**: every section's vertical padding
  (`py-24 md:py-30` in v1.0) now scales in three steps instead of two
  — smaller on phones, a middle value on tablets, and the *exact same*
  value as before at desktop (`lg:` and up). Desktop is unchanged;
  phones and tablets get meaningfully less dead space. This one change
  touched 19 section components consistently.
- **Heading-to-content spacing**: the gap between a section's heading
  and the content below it is now smaller on phones, standard from
  tablet up — same three-tier approach, same 19 files.
- **Hero sections**: every hero on the site (Home plus the six
  service/industry/about/process/pricing/contact heroes) had
  substantially oversized mobile padding — the Home hero alone had
  160px of top padding on a phone. All seven reduced on mobile and
  tablet, unchanged at desktop.
- **Cards, site-wide**: the base `Card` component's padding is now
  smaller on phones, standard from `sm:` up — this alone reduces the
  height of every card on the site on small screens, including the
  "Seven Disciplines" service cards you called out specifically.
- **Seven Disciplines section specifically**: tighter grid gap on
  phones, tighter heading spacing inside each card, on top of the Card
  padding fix above. Cards are meaningfully shorter on a phone screen
  without losing any content or changing the desktop layout.
- **Footer**: the four link columns (Services/Resources/Company/Legal)
  now lay out in a 2×2 grid on phones and tablets instead of stacking
  as four full-width lists — roughly halves the footer's mobile height.
  Desktop keeps the original 5-column layout unchanged. Also tightened
  the footer's top/bottom padding and the gap before the copyright bar
  on mobile.
- **Mobile navigation**: the slide-in drawer menu now has real hover/
  active states on every link (v1.0 had none — links had no visual
  feedback when touched), larger touch targets, and slightly more
  generous spacing throughout.

## New section

- Reframed the existing "Why OA7" section as **"Why OA7 Software?"**
  per your request, rather than adding a new, separate section. It
  already covered exactly what was asked (a concise explanation of why
  a business should choose OA7), so renaming and tightening it met the
  goal without adding length to the homepage or the About page, where
  the same section is reused.

## Explicitly preserved, unchanged

Routing, all page content and copy (outside the renamed section title
above), SEO metadata/sitemap/robots.txt, animations, the Next.js/
Tailwind/Framer Motion stack, desktop layout and spacing at the `lg`
breakpoint and above, and every existing component's public API except
where noted above.
