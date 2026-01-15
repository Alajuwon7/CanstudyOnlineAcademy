import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';

export default function NotFound() {
  return (
    <Section padding="xl" background="white" className="pt-32 min-h-screen flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-display-1 font-primary font-bold text-text-primary mb-4">
          404
        </h1>
        <h2 className="text-heading-1 font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-body-lg text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </Section>
  );
}
