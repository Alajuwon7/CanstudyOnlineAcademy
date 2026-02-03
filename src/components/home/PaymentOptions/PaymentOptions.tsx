'use client';

import React from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

const PAYMENT_LOGOS = {
  klarna: 'https://cdn.simpleicons.org/klarna/0A0A0A',
  affirm: 'https://cdn.simpleicons.org/affirm/000000',
  afterpay: 'https://cdn.simpleicons.org/afterpay/000000',
} as const;

export const PaymentOptions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 md:space-y-12 text-text-primary">
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-body-md md:text-body-lg text-gray-800 leading-[30px]">
          At Canstudy Consulting, we make education accessible and flexible — including how you pay.
          We accept Klarna, Affirm, Afterpay, E-transfer, and PayPal, giving you convenient options to start learning now and pay over time.
        </p>
        <p className="text-body-md md:text-body-lg text-gray-800 leading-[30px]">
          If you&apos;d like to use one of these payment methods, simply contact our office at{' '}
          <a href="mailto:info@canstudyconsult.com" className="text-accent hover:underline font-medium">
            info@canstudyconsult.com
          </a>
          {' '}or{' '}
          <a href="tel:6478951747" className="text-accent hover:underline font-medium">
            647-895-1747
          </a>
          , and we&apos;ll send you your secure payment link.
        </p>
      </div>

      {/* We accept — logo strip */}
      <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
        <p className="text-body-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
          We accept
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-10 w-24 md:h-12 md:w-28">
              <Image
                src={PAYMENT_LOGOS.klarna}
                alt="Klarna"
                fill
                className="object-contain object-center"
                sizes="112px"
              />
            </div>
            <span className="text-body-xs text-gray-500">Pay in 4 or monthly</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-10 w-24 md:h-12 md:w-28">
              <Image
                src={PAYMENT_LOGOS.affirm}
                alt="Affirm"
                fill
                className="object-contain object-center"
                sizes="112px"
              />
            </div>
            <span className="text-body-xs text-gray-500">Monthly payments</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-10 w-24 md:h-12 md:w-28">
              <Image
                src={PAYMENT_LOGOS.afterpay}
                alt="Afterpay"
                fill
                className="object-contain object-center"
                sizes="112px"
              />
            </div>
            <span className="text-body-xs text-gray-500">Split in 4</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Klarna */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative h-12 w-28 flex-shrink-0">
            <Image
              src={PAYMENT_LOGOS.klarna}
              alt=""
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
          <h2 className="text-heading-2 font-semibold text-black tracking-[-0.5px]">
            Pay in 4 or Monthly Installments
          </h2>
        </div>
        <p className="text-body-md text-gray-800 leading-[30px]">
          Klarna allows you to divide your total payment into 4 smaller, interest-free installments or set up a monthly plan.
          You can use Klarna to enroll in programs like:
        </p>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>The French Cohort (35-week program)</span>
          </li>
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>The Global Education Recruiter Training Program</span>
          </li>
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>The Immigration Recruitment & Support Specialist™ Program</span>
          </li>
        </ul>
        <div className="p-4 md:p-5 rounded-lg bg-gray-100">
          <p className="text-body-sm font-semibold text-black mb-2">How it works:</p>
          <ol className="list-decimal list-inside space-y-1 text-body-md text-gray-800">
            <li>Contact our office to request your Klarna payment link.</li>
            <li>Choose &quot;Pay with Klarna&quot; at checkout.</li>
            <li>Select your preferred payment plan — either &quot;Pay in 4&quot; or monthly installments.</li>
            <li>Complete your enrollment instantly and start your course while paying over time.</li>
          </ol>
        </div>
        <p className="text-body-sm md:text-body-md text-gray-700 italic">
          If you&apos;re not eligible for Klarna: Don&apos;t worry! Try Affirm or Afterpay using the same payment link. Just let our team know, and we&apos;ll walk you through it.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Affirm */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative h-12 w-28 flex-shrink-0">
            <Image
              src={PAYMENT_LOGOS.affirm}
              alt=""
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
          <h2 className="text-heading-2 font-semibold text-black tracking-[-0.5px]">
            Flexible Monthly Payments
          </h2>
        </div>
        <p className="text-body-md text-gray-800 leading-[30px]">
          Affirm lets you break your payment into manageable monthly installments with clear terms and no hidden fees.
          Perfect for learners enrolling in higher-value programs such as:
        </p>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>Study & Work in Canada Consultations</span>
          </li>
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>Immigration Recruitment & Support Specialist™ Training</span>
          </li>
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>Career Coaching or Mentorship Packages</span>
          </li>
        </ul>
        <div className="p-4 md:p-5 rounded-lg bg-gray-100">
          <p className="text-body-sm font-semibold text-black mb-2">How it works:</p>
          <ol className="list-decimal list-inside space-y-1 text-body-md text-gray-800">
            <li>Contact us for your payment link.</li>
            <li>Choose &quot;Pay with Affirm&quot; during checkout.</li>
            <li>Select your payment term — 3, 6, or 12 months (depending on eligibility).</li>
            <li>Enroll and start your training immediately.</li>
          </ol>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Afterpay */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative h-12 w-28 flex-shrink-0">
            <Image
              src={PAYMENT_LOGOS.afterpay}
              alt=""
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
          <h2 className="text-heading-2 font-semibold text-black tracking-[-0.5px]">
            Split Your Payment in 4
          </h2>
        </div>
        <p className="text-body-md text-gray-800 leading-[30px]">
          Afterpay divides your total payment into four equal biweekly payments — interest-free and available instantly.
          It&apos;s a great option for:
        </p>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>Short courses or bootcamps</span>
          </li>
          <li className="flex items-start gap-2 text-body-md text-gray-800">
            <span className="text-accent mt-1">•</span>
            <span>Consultations and application services</span>
          </li>
        </ul>
        <div className="p-4 md:p-5 rounded-lg bg-gray-100">
          <p className="text-body-sm font-semibold text-black mb-2">How it works:</p>
          <ol className="list-decimal list-inside space-y-1 text-body-md text-gray-800">
            <li>Ask for your payment link and choose Afterpay at checkout.</li>
            <li>Make your first payment today.</li>
            <li>Remaining payments will be automatically deducted every two weeks.</li>
          </ol>
        </div>
        <p className="text-body-sm md:text-body-md text-gray-700 italic">
          Tip: Afterpay approval is fast and often easier than credit-based financing.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* E-Transfer & PayPal */}
      <div className="space-y-2">
        <h2 className="text-heading-2 font-semibold text-black tracking-[-0.5px]">
          E-Transfer & PayPal
        </h2>
        <p className="text-body-md text-gray-800 leading-[30px]">
          Prefer to pay in full?
          You can also complete your payment through E-transfer (Canada) or PayPal (global).
          Just contact us, and we&apos;ll send your secure payment instructions.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold text-black tracking-[-0.5px]">
          Example: How to Enroll Using a Payment Plan
        </h2>
        <p className="text-body-md text-gray-800 leading-[30px]">
          Let&apos;s say you want to register for the Global Education Recruiter Training Program ($1,200 USD) but prefer not to pay the full amount upfront.
          Here&apos;s how your enrollment could look:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-body-md text-gray-800">
          <li>You email info@canstudyconsult.com and request to pay using a plan.</li>
          <li>Our team sends you a payment link.</li>
          <li>You select Klarna at checkout.</li>
          <li>Klarna offers you 4 payments of $300 USD every two weeks.</li>
          <li>You&apos;re instantly enrolled and receive your confirmation email — no delays, no interest.</li>
        </ol>
        <p className="text-body-md text-gray-800 leading-[30px]">
          If Klarna doesn&apos;t approve your plan, you can try Affirm or Afterpay using the same link, with similar split-payment options.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Summary */}
      <div className="p-5 md:p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
        <h2 className="text-heading-2 font-semibold text-black tracking-[-0.5px] mb-4">
          Summary
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-3 text-body-md text-gray-800">
            <FiCheck className="text-accent text-xl flex-shrink-0 mt-0.5" />
            <span>Enroll now — pay over time</span>
          </li>
          <li className="flex items-start gap-3 text-body-md text-gray-800">
            <FiCheck className="text-accent text-xl flex-shrink-0 mt-0.5" />
            <span>Use Klarna, Affirm, or Afterpay — all through the same secure checkout link</span>
          </li>
          <li className="flex items-start gap-3 text-body-md text-gray-800">
            <FiCheck className="text-accent text-xl flex-shrink-0 mt-0.5" />
            <span>If one provider doesn&apos;t approve your plan, try another instantly</span>
          </li>
          <li className="flex items-start gap-3 text-body-md text-gray-800">
            <FiCheck className="text-accent text-xl flex-shrink-0 mt-0.5" />
            <span>You&apos;ll still get full access to your course once your first payment is made</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
