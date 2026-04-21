# Risk Monitor Dashboard

Production-style Next.js dashboard for global risk intelligence with mock macroeconomic and geopolitical data.

## Features
- Dark-mode Bloomberg-style interface with glassmorphism cards and neon accents.
- Global macro panel (world debt, GDP, debt distribution, currency share).
- Global risk event feed and timeline-style cards.
- Financial power structure (top funds and exposure footprint).
- Resource distribution heatmap table.
- Interactive world map with clickable country risk markers.
- Country profile pages with core macro/risk indicators.
- API routes ready for real data source integrations.

## Run locally
```bash
npm install
npm run dev
```

## Routes
- `/` — Main dashboard
- `/map` — Interactive risk map
- `/country/[code]` — Country details (example: `/country/USA`)
- `/api/countries` and `/api/risks` — JSON endpoints

## Data model and future integrations
Mock data is centralized in `data/mockData.ts` and typed in `lib/types.ts`.
The structure is designed for World Bank, IMF, OECD, and UN ingestion pipelines.
