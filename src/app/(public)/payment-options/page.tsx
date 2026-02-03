import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { PaymentOptions } from '@/components/home/PaymentOptions';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Payment Options made Simple | Canstudy Online Academy',
  description:
    'Pay for your course with Klarna, Affirm, Afterpay, E-transfer, or PayPal. Flexible payment plans so you can start learning now and pay over time.',
  keywords: [
    'payment options',
    'Klarna',
    'Affirm',
    'Afterpay',
    'pay over time',
    'education financing',
  ],
  openGraph: {
    title: 'Payment Options made Simple | Canstudy Online Academy',
    description:
      'Pay for your course with Klarna, Affirm, Afterpay, E-transfer, or PayPal. Flexible payment plans so you can start learning now and pay over time.',
    url: `${SITE_URL}/payment-options`,
    siteName: 'Canstudy Online Academy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Options made Simple | Canstudy Online Academy',
    description:
      'Pay for your course with Klarna, Affirm, Afterpay, E-transfer, or PayPal. Flexible payment plans.',
  },
};

export default function PaymentOptionsPage() {
  return (
    <Section
      padding="xl"
      background="white"
      className="pt-32"
      style={{
        background: 'linear-gradient(to bottom, #F3F6F8 0%, #F3F6F8 100%)',
      }}
    >
      <div className="mb-10">
        <h1 className="text-[28px] md:text-[42px] lg:text-[54.6px] font-primary font-bold text-black text-center md:text-left">
          Payment Options made Simple.
        </h1>
      </div>
      <PaymentOptions />
    </Section>
  );
}
