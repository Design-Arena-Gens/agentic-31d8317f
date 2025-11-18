## Nova Student Dashboard

A minimal dark-mode student dashboard built with Next.js 15, Tailwind CSS, and the App Router. The layout focuses on clarity and quick scanning: weekly highlights, upcoming sessions, assignments, and course progress are rendered with subtle gradients and glassmorphism-inspired surfaces.

### Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the dashboard. Tailwind CSS is already configured; editing files inside `src/app` will trigger hot reloads.

### Production build

```bash
npm run build
npm start
```

The production build outputs to `.next/` and serves on `http://localhost:3000` when `npm start` is running.

### Deployment

The project is optimized for Vercel. Deploy using the Vercel CLI or connect the repository to Vercel for automated deployments.
