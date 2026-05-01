# oskarsundberg.com

My alternative CV. The side projects, internal tools and startups, basically the things I make when nobody's paying me to. The proper job-history thing lives on [LinkedIn](https://www.linkedin.com/in/oskarsundberg).

Single page. Filter at the top by kind (side-project / fun / internal tool / startup). Year groups below.

## Stack

- Next.js 16, React 19, Tailwind v4
- One typeface, Brockmann, self-hosted

## Run it

```bash
pnpm install
pnpm dev
```

http://localhost:3000

## Where to look

- `app/page.tsx` — the entire site, projects live in the `PROJECTS` array
- `app/globals.css` — colors, base styles, Tailwind theme tokens
- `docs/projects-order.md` — quick reorder list for the entries
