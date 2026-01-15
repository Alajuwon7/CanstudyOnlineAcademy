# CanStudy Online Academy

A modern, full-stack e-learning platform built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS and design system integration
- ⚡ Next.js 14 App Router with Server Components
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🎭 Framer Motion for smooth animations
- 📝 React Hook Form for form handling
- 🎨 Custom design tokens and theme system

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** React Icons
- **Fonts:** Space Grotesk (headings), Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd canstudy-online
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
canstudy-online/
├── src/
│   ├── app/                    # Next.js app router pages
│   ├── components/             # React components
│   │   ├── ui/                # Base UI components
│   │   ├── layout/            # Layout components
│   │   ├── course/            # Course-specific components
│   │   └── home/              # Home page sections
│   ├── lib/                   # Utility functions
│   ├── data/                  # Static JSON data
│   ├── types/                 # TypeScript types
│   └── styles/                # Global styles
├── public/                    # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Design System

The project uses a custom design system with:

- **Colors:** Primary (teal-dark), Accent (yellow-lime), Secondary (blue-dark)
- **Typography:** Space Grotesk for headings, Inter for body text
- **Spacing:** 15px base increments
- **Shadows:** Card and button shadows
- **Border Radius:** 4px to 50px scale

See `src/styles/design-tokens.css` for all design tokens.

## API Routes

- `GET /api/courses` - List all courses
- `GET /api/courses/[id]` - Get course details
- `GET /api/instructors` - List instructors
- `POST /api/newsletter` - Subscribe to newsletter

## Pages

- `/` - Homepage
- `/courses` - Course listing
- `/courses/[id]` - Course details
- `/about` - About page
- `/instructors` - Instructors page
- `/blog` - Blog listing
- `/contact` - Contact page
- `/testimonial` - Testimonials page

## Development

The project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** strict mode
- **Husky** for git hooks (optional)

## License

MIT
