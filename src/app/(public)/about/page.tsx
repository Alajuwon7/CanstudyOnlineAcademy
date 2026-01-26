import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Canstudy Online Academy | Empowering Global Learners Through Career-Focused Education',
  description:
    'Canstudy Online Academy is a global hub for short, practical, and career-focused online courses. We connect learners with industry experts to help them gain real skills, confidence, and career advancement opportunities.',
  keywords: [
    'about online academy',
    'global education platform',
    'Canstudy Consulting brand',
    'online learning hub',
    'international skill development',
  ],
  openGraph: {
    title: 'About Canstudy Online Academy | Empowering Global Learners Through Career-Focused Education',
    description:
      'Canstudy Online Academy is a global hub for short, practical, and career-focused online courses. We connect learners with industry experts to help them gain real skills, confidence, and career advancement opportunities.',
    url: `${SITE_URL}/about`,
    siteName: 'Canstudy Online Academy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Canstudy Online Academy | Empowering Global Learners Through Career-Focused Education',
    description:
      'Canstudy Online Academy is a global hub for short, practical, and career-focused online courses. We connect learners with industry experts.',
  },
};

// Get production URL for schema (use environment variable or default to production domain)
const getProductionUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace('http://', 'https://');
  }
  return 'https://canstudyacademy.com';
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Canstudy Online Academy',
  url: getProductionUrl(),
  logo: `${getProductionUrl()}/logo.png`,
  description:
    'Canstudy Online Academy offers live, short, career-focused online courses for global learners.',
  sameAs: [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linkedin,
  ],
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Section padding="xl" background="white" className="pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-display-2 font-primary font-bold text-text-primary mb-6">
            About Canstudy Online Academy
          </h1>
          <div className="prose max-w-none space-y-6">
            <p className="text-body-lg text-text-secondary font-semibold">
              Canstudy Online Academy is the education division of Canstudy Consulting, offering live, expert-led online courses for global learners seeking to enhance their skills and careers.
            </p>
            <p className="text-body-lg text-text-secondary">
              Canstudy Online Academy is a global hub for short, practical, and career-focused online courses. We connect learners with industry experts to help them gain real skills, confidence, and career advancement opportunities.
            </p>
            <p className="text-body-md text-text-secondary">
              Our mission is to make high-quality, professional education accessible to everyone, everywhere. Through our live, instructor-led programs, we empower learners worldwide to build practical, job-ready skills that translate directly into career growth and personal development.
            </p>
            <p className="text-body-md text-text-secondary">
              Whether you're looking to master a new language, build expertise in education consulting, or develop professional skills for the global marketplace, Canstudy Online Academy provides the expert guidance and flexible learning environment you need to succeed.
            </p>
            <div className="pt-4">
              <Link href="/courses">
                <Button variant="accent" size="lg">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
