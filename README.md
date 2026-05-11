# State Roofing & Carpentry — Landing Page (Next.js 15)

Marketing landing for State Roofing & Carpentry — a Massachusetts general contractor. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Designed to be edited natively by [v0.app](https://v0.app).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub (already configured for `eder-prog/statesite-preview2`).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No env vars required for preview.
4. Click **Deploy**.

## Data-pending items (replace before going live)

These placeholders exist throughout the site and need real values before launch:

- **Form backend** — both estimate forms currently `alert()` on submit. Wire to a real backend (Resend, SendGrid, Formspree, or custom API route).
- **Massachusetts HIC license #** — search `XXXXXXX` in `app/terms/page.tsx` and `components/faq.tsx`.
- **Insurance carrier name** — search `[Carrier Name]` in `components/faq.tsx`.
- **Testimonials** — 8 placeholder reviews in `components/testimonials.tsx` — swap for real reviews.
- **Trust logos** — 5 placeholder pills in `components/testimonials.tsx` (BBB, Insurance, GAF, Google, Angi).
- **Privacy Policy / Terms of Service** — starter A2P-compliant drafts. Review with legal counsel.

## Project structure

```
preview-nextjs/
├── app/                # App Router pages (home, /privacy, /terms)
├── components/         # All UI components
├── public/assets/      # Logos + hero + service photos + 22 gallery photos
├── tailwind.config.ts  # Custom colors (navy, orange) + keyframes
└── next.config.mjs     # Next.js + image optimization
```

## Tech stack

- Next.js 15 (App Router, RSC)
- React 19
- TypeScript (strict)
- Tailwind CSS 3.4
- lucide-react for icons

No shadcn/ui, no framer-motion — keeps the dep tree minimal so v0.app can add components on demand without conflicts.
