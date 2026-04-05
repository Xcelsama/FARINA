# CKF Farina Swallow — Next.js Website

Modern, fully responsive Next.js 14 website for **CHITU-KA FOODS**, rebuilt from the original vanilla HTML/CSS/JS site.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js              # Root layout (metadata, fonts)
│   ├── page.js                # Homepage (all sections)
│   ├── api/
│   │   └── config/route.js    # API route for passwords
│   ├── products/
│   │   ├── swallow/page.js
│   │   ├── almond/page.js
│   │   ├── tigernut/page.js
│   │   └── crunchies/page.js
│   └── serving-suggestions/
│       └── page.js
├── components/
│   ├── Navbar.js              # Sticky responsive navbar
│   ├── Footer.js              # Footer with links & socials
│   ├── Carousel.js            # Reusable auto-play carousel
│   ├── ProductLayout.js       # Shared product detail layout
│   └── RevealObserver.js      # Scroll-reveal IntersectionObserver
└── styles/
    └── globals.css            # Full design system
```

## 🌐 Deploying to Vercel

1. Push this folder to a GitHub repository
2. Import the repo on [vercel.com](https://vercel.com)
3. Set environment variables in Vercel dashboard:
   - `WORKER_PASSWORD` — your worker access code
   - `ADMIN_PASSWORD` — your admin access code
4. Deploy — Vercel auto-detects Next.js

## 🖼️ Images

Copy all images from the original `/img/` folder into `/public/img/` in this project.

Required images:
- `logo.jpg` — Brand logo (used in navbar & footer)
- `main2.jpg` — Hero image
- `main3.png` — About Farina section
- `farina.png` — Farina Swallow product
- `almondmix.png` — Almond Mix product
- `farina-tigernut.png` — Tiger Nut Mix product
- `chinchin.jpg` — Crunchies product
- `chinchin2.jpg` through `chinchin8.jpg` — Gallery
- `vision.jpeg`, `misson.jpeg` — About Us cards
- `suggestion.jpg`, `suggestion1.jpg`, `sugestion2.jpg`, `Suggestions 3.jpg`, `suggestion4.jpg` — Serving suggestions

## 🎨 Design System

- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Brand Red**: `#c8102e`
- **Earth Tones**: Warm cream, earth brown, gold accents
- **Fully mobile-first** with breakpoints at 480, 768, 1024px

## 📱 Features

- ✅ Sticky responsive navbar with hamburger menu
- ✅ Hero with floating trust cards
- ✅ Stats bar
- ✅ Product cards with WhatsApp order links
- ✅ Auto-play carousels (gallery + serving suggestions)
- ✅ Scroll-reveal animations
- ✅ New product toast notification
- ✅ Full product detail pages
- ✅ Serving suggestions gallery page
- ✅ Contact section with WhatsApp CTA
- ✅ Open Graph + Twitter card metadata
- ✅ NAFDAC badge
