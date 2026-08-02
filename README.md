# Gaurang Agarwal — Portfolio

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Design

- **Palette:** off-white paper (`#F7F7F4`), near-black ink (`#14171A`), and a single
  signature accent — a cyan-teal (`#03948A`) pulled from competitive-programming
  rating-tier colors.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, tags,
  stats) — the monospace nods to the code/CP background.
- **Signature element:** the "rating ladder" — horizontal bars on the Home and
  Achievements pages, colored to match each platform's real rating-tier color
  (LeetCode Knight gold, Codeforces Pupil green, CodeChef 3★ blue).

## Structure

```
app/
  layout.tsx          — root layout, fonts, Navbar/Footer
  page.tsx             — Home
  projects/page.tsx     — Projects
  achievements/page.tsx  — Achievements (contest ranks + rating ladder)
  about/page.tsx         — Education, coursework, skills, contact
components/
  Navbar.tsx, Footer.tsx, RatingBar.tsx
lib/
  data.ts             — all content lives here (edit this file to update copy)
```

To edit any text — projects, ratings, achievements, skills, contact info — open
`lib/data.ts`. Nothing else needs to change.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

> Note: the very first `npm run build` needs internet access, since
> `next/font/google` fetches Space Grotesk / Inter / JetBrains Mono from Google
> Fonts at build time. This is normal — it'll work on any machine or CI with
> regular internet access (this just wasn't fetchable inside the sandbox that
> generated these files).

## Deploy

Easiest path is [Vercel](https://vercel.com):

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new.
3. No environment variables or config needed — it deploys as-is.

## Add real images later

Placeholders/icons are used throughout (no photos yet). To add a profile photo
or project screenshots, drop images into `public/` and reference them with
Next's `<Image />` component.
