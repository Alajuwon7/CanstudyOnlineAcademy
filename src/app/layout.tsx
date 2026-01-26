import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AdmissionBanner } from '@/components/home/AdmissionBanner';
import { FAQCarousel } from '@/components/home/FAQCarousel';
import '@/styles/design-tokens.css';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Canstudy Online Academy | Short Courses. Real Skills. Fast-Track Careers.',
  description:
    'Canstudy Online Academy empowers learners around the world through short, instructor-led online courses that build real skills for real careers. Join our global learning community and start your next chapter today.',
  keywords: [
    'online academy for professionals',
    'live online classes',
    'global learning platform',
    'professional development online',
    'international education courses',
    'online career advancement programs',
  ],
  authors: [{ name: 'Canstudy Consulting Ltd.' }],
  creator: 'Canstudy Consulting Ltd.',
  publisher: 'Canstudy Consulting Ltd.',
  metadataBase: new URL('https://canstudyacademy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Canstudy Online Academy | Global Learning for Modern Careers',
    description:
      'Canstudy Online Academy empowers learners around the world through short, instructor-led online courses that build real skills for real careers. Join our global learning community and start your next chapter today.',
    url: 'https://canstudyacademy.com',
    siteName: 'Canstudy Online Academy',
    images: [
      {
        url: 'https://res.cloudinary.com/kingaat7/image/upload/v1768444000/COA2_xzuunu.png',
        width: 1200,
        height: 630,
        alt: 'Canstudy Online Academy - Student learning online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canstudy Online Academy | Global Learning for Modern Careers',
    description:
      'Canstudy Online Academy empowers learners around the world through short, instructor-led online courses that build real skills for real careers. Join our global learning community and start your next chapter today.',
    images: ['https://res.cloudinary.com/kingaat7/image/upload/v1768444000/COA2_xzuunu.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-secondary antialiased">
        <Header />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <AdmissionBanner />
        <FAQCarousel />
        <Footer />
      </body>
    </html>
  );
}
