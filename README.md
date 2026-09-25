# Mella Software Solutions PLC

> **Make the next thing.**  
> Independent software studio based in Addis Ababa, Ethiopia. We design, build, and run software products for people with something useful to put into the world.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Bundler-Turbopack-000000?style=flat)](https://turbo.build/)

---

## ✦ Overview

This repository contains the official website and digital presence for **Mella Software Solutions PLC**.

The website features an editorial, typography-driven modern aesthetic with deep architectural lighting, interactive client and in-house case studies, and responsive layouts designed for mobile, tablet, and ultra-wide viewports.

### Key Sections:
- **Cinematic Hero**: Full-bleed ambient skyline imagery with atmospheric moving glowing orbs and frosted glass presentation.
- **Selected Work**: Interactive portfolio featuring flagship in-house product ([AdVouch](https://advouch.com)) and specialized client systems (Legal AI, ERP, Healthcare EHR, Hospitality POS).
- **What We Solve**: A 2-column architectural gallery with technical blueprint pattern grid overlays and concise scenario breakdowns.
- **Products & Partnerships**: Dual-track overview highlighting our in-house ventures and dedicated client engineering models.
- **The Mella Method**: Four clear product development chapters (Understand → Build → Ship → Improve).
- **AdVouch Deep Dive**: In-depth case study of our live identity & advertising escrow marketplace.
- **Contact Climax**: Direct inquiry endpoints for global partners and prospective clients.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Fonts**: [Sora](https://fonts.google.com/specimen/Sora) (Google Fonts via `next/font`)
- **Icons**: Custom inline optimized SVG iconography + Lucide
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18+ or 20+ recommended)
- [pnpm](https://pnpm.io/) (version 9+ recommended)

### 1. Clone the repository

```bash
git clone https://github.com/DanielAbabu/mellasoftware.git
cd mellasoftware
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application supports fast HMR via Next.js Turbopack.

### 4. Create an optimized production build

```bash
pnpm build
```

To preview the built production bundle locally:

```bash
pnpm start
```

---

## 📁 Project Structure

```text
mellasoftware/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Theme design tokens, blueprint grid patterns, keyframe animations
│   ├── layout.tsx          # Root layout, fonts, metadata, and analytics
│   ├── page.tsx            # Main application homepage
│   └── icon.svg            # Dynamic SVG favicon
├── public/                 # Static assets, logos, and case study visuals
│   ├── aa-skyline.jpeg
│   ├── vouch-card.jpg
│   ├── blue icon.svg
│   ├── mella-clinic.jpeg
│   ├── mella-menu.jpeg
│   ├── mella-net.jpeg
│   └── mella-school.jpeg
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

---

## 🌐 Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your changes to GitHub.
2. Import the repository into your Vercel team/account.
3. Next.js will automatically detect build settings (`pnpm build`).
4. Set up custom production domains (e.g. `mellasoftware.com`).

### Docker

A multi-stage `Dockerfile` is included for self-hosting outside of Vercel, using the Next.js [standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output):

```bash
docker build -t mellasoftware .
docker run -p 3033:3033 mellasoftware
```

Open [http://localhost:3033](http://localhost:3033) to view it.

---

## 📬 Contact & Inquiries

- **Email**: [hello@mellasoftware.com](mailto:hello@mellasoftware.com)
- **Phone**: [+251 944 741 857](tel:+251944741857) · [+251 713 184 474](tel:+251713184474)
- **Location**: Addis Ababa, Ethiopia
- **Hours**: Monday – Friday · 09:00 – 18:00 EAT

---

## 📄 License

© 2026 Mella Software Solutions PLC. All rights reserved.
