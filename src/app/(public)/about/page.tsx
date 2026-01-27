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
            <p className="text-body-lg text-gray-800 font-semibold">
              Empowering global learners through practical, career-ready education.
            </p>
            <p className="text-body-lg text-gray-800">
              Canstudy Online Academy (COA) is a global learning platform powered by Canstudy Consulting Ltd., a leader in international education, immigration, and professional training. COA was built on the belief that learning should be accessible, relevant, and transformative — preparing learners worldwide for the skills and careers shaping the future.
            </p>
            <p className="text-body-md text-gray-800">
              Our academy delivers short, practical courses taught by real industry professionals — not just lecturers. Every program is designed to bridge the gap between theory and real-world application, giving students the tools to thrive in today's competitive job market. Whether you're enhancing your professional qualifications, developing global career skills, or exploring new industries, COA offers flexible, instructor-led learning that fits your life and goals.
            </p>
            <p className="text-body-md text-gray-800">
              From language and communication programs to career-focused certifications in education and immigration recruitment, our courses are built for global learners seeking fast, credible, and skill-based training — anywhere in the world.
            </p>
            <p className="text-body-md text-gray-800">
              COA operates with the same excellence and integrity that define Canstudy Consulting Ltd., ensuring that every course meets the highest standards of quality, ethics, and global relevance.
            </p>
            <p className="text-body-md text-gray-800">
              To learn more about our founding organization and the broader mission behind Canstudy's educational ecosystem, visit{' '}
              <Link href="https://canstudyconsult.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Canstudy Consulting Ltd.
              </Link>
              .
            </p>
            <p className="text-body-md text-gray-800">
              Together, we're not just offering courses — we're building pathways for people around the world to learn, grow, and lead.
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
