# TechnoTP Website

Site web bilingue (FR/EN) pour **TechnoTP** — services contractuels en génie physique et ingénierie, basé à Sherbrooke, QC.

## Project Structure

```
├── index.html               # Single-page site (main entry point)
├── assets/
│   ├── logo.png              # Full logo
│   └── logoCropped.png       # Cropped logo (navbar/favicon)
├── src/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   ├── main.js           # App logic, language toggle, animations
│   │   └── translations.js   # FR/EN translation strings
│   ├── images/               # Image assets
│   └── fonts/                # Custom fonts
└── public/                   # Static files
```

## Features

- Bilingual (French / English) with instant language toggle
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Contact form (mailto fallback)
- No build step — pure HTML/CSS/JS, deployable anywhere

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/termitemorin/TechnoTP_website.git
   ```
2. Open `index.html` in your browser — no build step needed.

## Deployment

Static site — deploy directly to **GitHub Pages**, **Netlify**, or **Vercel**:
- Point the root to `/` and set `index.html` as the entry point.

## License

All rights reserved. © 2026 TechnoTP.
