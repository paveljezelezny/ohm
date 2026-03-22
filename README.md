# OHM - Organic HR Marketing

Webová platforma projektu OHM — spojení HR strategie (Human Capital) a profesionální produkce obsahu (Pracovna / Podcasters).

## Spuštění lokálně

```bash
npm install
npm run dev
```

Web poběží na `http://localhost:3000`

## Build pro produkci

```bash
npm run build
npm run preview   # lokální náhled produkčního buildu
```

## Deploy na Vercel

1. Push do GitHub repozitáře
2. Připoj repo ve Vercelu
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

Vercel config (`vercel.json`) je už připravený pro SPA routing.

## Deploy na Replit

1. Importuj repozitář do Replitu
2. Spusť `npm install && npm run dev`

## Struktura

```
src/
├── pages/          # Stránky webu
│   ├── Home.jsx        # Hlavní stránka
│   ├── Services.jsx    # Služby
│   ├── About.jsx       # O nás + tým
│   ├── Pricing.jsx     # Ceník
│   ├── Contact.jsx     # Kontakt
│   ├── LidiProsim.jsx  # Podcast "Lidi, prosím..."
│   ├── ClientPortal.jsx # Klientská zóna
│   └── ClientLogin.jsx  # Přihlášení klientů
├── components/     # Sdílené komponenty
├── layouts/        # Layout wrappers
└── context/        # Auth context
```

## Tech stack

- React 18 + Vite
- React Router 6
- Tailwind CSS 3
- Framer Motion
- Lucide React icons
