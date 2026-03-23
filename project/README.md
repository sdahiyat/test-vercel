# PhotoBuddy

An AI-powered photo sharing app where photographers can upload, share, and enhance their photos with artificial intelligence.

## Features

- Photo upload and sharing
- AI-powered photo analysis and feedback
- Social features (follow, like, comment)
- Feed and discovery
- User profiles

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Supabase (database, auth, storage)
- OpenAI Vision API
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your environment variables
4. Run the development server: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- `OPENAI_API_KEY` - Your OpenAI API key
- `NEXT_PUBLIC_APP_URL` - Your app URL (for production)
