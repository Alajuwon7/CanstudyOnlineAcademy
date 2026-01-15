# Setup Instructions

Follow these steps to set up the CanStudy Online Academy project:

## 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- React Icons
- And all dev dependencies

## 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=CanStudy Online Academy
```

## 3. Add Images

The project expects images in the following directories:
- `public/images/courses/` - Course images
- `public/images/instructors/` - Instructor avatars
- `public/images/testimonials/` - Testimonial avatars
- `public/images/articles/` - Article images
- `public/images/authors/` - Author avatars

You can use placeholder images or add your own. Update the image paths in the JSON data files accordingly.

## 4. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 5. Build for Production

```bash
npm run build
npm run start
```

## 6. Code Quality

- **Linting:** `npm run lint`
- **Formatting:** `npm run format`
- **Type Checking:** `npm run type-check`

## 7. Git Hooks (Optional)

If you want to enable Husky for pre-commit hooks:

```bash
npm run prepare
```

This will set up git hooks to run linting and formatting before commits.

## Troubleshooting

### TypeScript Errors
- Ensure all dependencies are installed: `npm install`
- Run type checking: `npm run type-check`

### Build Errors
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Image Loading Issues
- Ensure images exist in the `public/images/` directories
- Check image paths in JSON data files match actual file locations
- For development, you can use placeholder images or update paths

## Next Steps

1. Add your course images to `public/images/courses/`
2. Update course data in `src/data/courses.json`
3. Customize colors and styling in `tailwind.config.ts`
4. Add your own content and branding
