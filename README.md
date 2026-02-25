# Karl Media website
React + Vite + TypeScript site for Karl Media, showcasing two projects:
- **Desingerica Aftermovie & Photos** (Club Drago) – video + photo set
- **BIBA Festival Reel** – reel only

## Tech stack
- React, TypeScript, Vite
- Tailwind CSS + shadcn/ui
- Framer Motion animations
- React Router, next-themes

## Local development
```bash
npm install
npm run dev
```

If you see `vite: command not found`, ensure dependencies are installed or run `npx vite`.

## Project content
- Media lives in `public/media` (desingerica assets and BIBA reel).
- Portfolio data in `src/data/projects.ts` (only Desingerica and BIBA).
- Agency/team info in `src/data/agency.ts`.

## Contact flow
- Calendly popup (https://calendly.com/seifertsimon-proton/30min) is the primary CTA.
- Contact page exposes Calendly + email.

## Notes
- Tailwind/tw-animate warnings about `@apply`/`@theme` in editors are expected.
- Keep `tailwind-plus/` for reference components.
