# YUMYUM - Premium Cannabis Delivery Marketplace

A modern, responsive marketplace for cannabis delivery built with Next.js and Tailwind CSS.

## Features

- Responsive design with mobile-first approach
- Custom brand identity with Thai-inspired aesthetics
- Product catalog with filtering and search
- User authentication (coming soon)
- Shopping cart functionality (coming soon)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase (for backend services)

## Brand Colors

- Primary Background: Thai Cream `#f8e7c4`
- Accent Colors:
  - Deep Purple `#583e8d`
  - Thai Gold `#efad00`
  - Teal Green `#19a89e`
  - Hot Pink `#e14d96`

## Fonts

- Headline: Custom bubble font (placeholder)
- Subheadline: Fredoka (Google Fonts)
- Body: Inter (Google Fonts)

## Project Structure

```
src/
├── app/
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
└── lib/
    └── supabaseClient.ts
``` 