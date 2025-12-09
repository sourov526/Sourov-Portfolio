# Sourov – Portfolio

A modern, responsive developer portfolio for showcasing Sourov’s full-stack engineering work. The site is built with the Next.js App Router, TypeScript, TailwindCSS v4, dark/light theming, markdown-powered blogs, and Framer Motion accents.

## Tech Stack & Highlights

- Next.js 16 (App Router) + TypeScript
- TailwindCSS 4 with custom tokens and glassmorphism cards
- `next-themes` powered dark/light mode toggle
- Markdown blog collection rendered with `gray-matter`, `remark`, and SEO-friendly routes
- Framer Motion micro-interactions on hero + section cards
- Lucide iconography and responsive design tokens

## Getting Started

1. **Install dependencies**
   ```bash
   cd app
   npm install
   ```
2. **Start the dev server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` and edit files inside `src/` to see live updates.
3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
app/
├─ content/blog/           # Markdown blog posts with frontmatter
├─ public/                 # Static assets (resume, favicons, etc.)
└─ src/
   ├─ app/                 # App Router routes (home + blog)
   ├─ components/          # Reusable UI, sections, theming utilities
   ├─ data/                # Portfolio metadata + project list
   └─ lib/                 # Blog parsing helpers
```

## Updating Portfolio Content

- **Hero + contact details**: edit `src/data/site.ts`.
- **Projects grid**: edit the array in `src/data/projects.ts`. Each project accepts `name`, `description`, `techStack`, and `link`.
- **Résumé download**: replace `public/resume-sourov.pdf` with a new file using the same name for instant updates.

## Adding or Editing Blog Posts

Blog posts live in `content/blog` as Markdown files. Each file must contain frontmatter:

```md
---
title: "TypeScript Architecture Notes for Scalable Frontends"
date: "2024-08-04"
excerpt: "Short summary shown on cards."
tags: ["TypeScript", "Architecture"]
---

Write your article in Markdown here. Headings, code blocks, and lists are styled automatically.
```

New posts automatically appear on the home page (latest four) and on `/blog`, and the `[slug]` route renders the full content.

## Customizing Colors & Aesthetic

- Global tokens such as `--background`, `--foreground`, and `--card` live in `src/app/globals.css`.
- Update gradients, glassmorphism, or typography by editing the CSS variables or Tailwind utility classes in the section components.
- Tailwind v4 supports arbitrary values, so you can drop in custom HEX/RGB values directly in class names (e.g., `bg-[#020617]`).

## Optional Enhancements Already Enabled

- ✅ Dark/light mode toggle (`next-themes`)
- ✅ Markdown-based blog system (`content/blog`)
- ✅ Framer Motion animations (`AnimatedSection` wrappers)

Feel free to extend the site with analytics, CMS data sources, or deployment workflows. Open an issue or reach out if you need help evolving the portfolio further.

# Sourov-Portfolio
