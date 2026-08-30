# Amitabh Bhandari — Portfolio

Personal portfolio website showcasing my data science & analytics projects, skills, and certifications.

Live sections: Home, About, Projects, Certifications, Internship, and Contact.

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Components**: shadcn/ui + Radix UI primitives

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui and custom UI primitives
│   ├── sections/           # Page sections (hero, about, portfolio, certifications, internship, contact)
│   ├── 3d/                 # Three.js components (hero scene, contact globe)
│   └── optimization/       # Performance monitoring
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## Updating Content

- **Hero**: `src/components/sections/hero-section.tsx`
- **About / Skills / Timeline**: `src/components/sections/about-section.tsx`
- **Projects**: `src/components/sections/portfolio-section.tsx`
- **Certifications**: `src/components/sections/certifications-section.tsx`
- **Internship**: `src/components/sections/internship-section.tsx`
- **Contact info**: `src/components/sections/contact-section.tsx`

## Deployment

This is a standard Next.js app and deploys cleanly to Vercel, Netlify, or any platform that supports Next.js:

```bash
npm run build
npm start
```

## License

MIT — see [LICENSE](LICENSE).
