# ScalexMedia

Premium social media marketing website. Dark, editorial, conversion-focused.

## Edit content

All copy and numbers live in `data/`:

- `site.ts` — name, nav, SEO, social, CTAs
- `projects.ts` — case studies
- `services.ts` — service list
- `metrics.ts` / `results.ts` — placeholder stats
- `pricing.ts` — packages (prices are placeholders)
- `testimonials.ts` / `team.ts` / `faqs.ts`

Replace anything marked `[RESULT]`, `[CLIENT NAME]`, or `isPlaceholder: true` with verified information before launch.

## Run

```bash
npm install
npm run dev
```

Connect the contact form later with `CONTACT_WEBHOOK_URL` in `.env.local`.
