'use client';

import React from 'react';
import Image from 'next/image';

const PAYMENT_LOGOS = {
  klarna: 'https://res.cloudinary.com/kingaat7/image/upload/v1770142074/Klarna_hwp2ns.png',
  affirm: 'https://res.cloudinary.com/kingaat7/image/upload/v1770142074/Affirm_lm3nut.png',
  afterpay: 'https://res.cloudinary.com/kingaat7/image/upload/v1770142074/Afterpay_ao2ktw.png',
} as const;

export const WeAcceptStrip: React.FC = () => {
  return (
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
  );
};
