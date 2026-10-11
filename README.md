# OA7 Software website

The website for OA7 Software, the independent software initiative of Joachim Osafo Amoateng.

Built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS and Framer Motion.

## Scripts

```bash
npm install
npm run dev         # local development
npm run type-check  # tsc --noEmit
npm run lint        # next lint
npm run build       # production build
```

## Where the content lives

Most copy is data-driven. Edit these files rather than the components:

| What | File |
| --- | --- |
| Name, email, LinkedIn, GitHub, navigation | `constants/site.ts` |
| Portfolio projects and their status | `data/projects.ts` |
| "What I build" areas and their status | `data/services-detail.ts` |
| Template concepts (not products) | `data/templates.ts` |
| Sector ideas | `data/industries.ts` |
| About, founder, timeline | `data/about.ts` |
| Process and approach | `data/process.ts` |
| Home FAQ, contact FAQ, pricing FAQ | `data/faq.ts`, `data/contact.ts`, `data/pricing.ts` |
| Legal pages | `app/legal/*` |

## Content rules

This site is a portfolio for an independent developer. Keep it accurate:

- Do not add client names, testimonials, statistics or results unless they are real and can be shown.
- Project status in `data/projects.ts` must stay truthful: `Completed`, `Closed testing` or `In development`.
- Template concepts have no prices, purchase buttons or demo links. Add a demo URL only when a real demo exists.
- Only list technologies in `stack` that a project actually uses.

## Configuration

- `NEXT_PUBLIC_SITE_URL`: the public URL of the site. Used for canonical links, Open Graph and the sitemap. Falls back to a placeholder in `constants/site.ts`, so set it in your hosting environment.
- The contact form has no backend. It opens the visitor's email app with a prepared message.

## Notes

- The `/legal/privacy` page also covers the Hitz Play app. Keep that URL stable if it is used as a store privacy policy link.
- History of earlier releases: `CHANGELOG_v1.1.md`, `CHANGELOG_v1.2.md`.
