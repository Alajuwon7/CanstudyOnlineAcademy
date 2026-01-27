'use client';

import React from 'react';
import Link from 'next/link';
import { FiBriefcase, FiArrowRight } from 'react-icons/fi';

const features = [
  {
    title: 'Master the skills that matter to you',
    description:
      'Learn from certified experts and gain real-world skills through live, interactive online courses designed to help you succeed.',
    highlighted: true,
  },
];

const whyChooseItems = [
  'Live, instructor-led classes — not pre-recorded lessons',
  'Courses built by industry and immigration experts',
  'Global pathways for students, professionals, and families',
  'Affordable, flexible, and results-driven learning',
  'A trusted brand serving 20+ countries',
];

export const PremiumLearning: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .premium-learning-fade-text {
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }
          @media (min-width: 768px) {
            .premium-learning-fade-text {
              mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
            }
          }
          @media (min-width: 1024px) {
            .premium-learning-fade-text {
              mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            }
          }
          @media (min-width: 1280px) {
            .premium-learning-fade-text {
              mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
            }
          }
        `
      }} />
      <section className="relative bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6 md:space-y-8">
            {/* Premium learning experience badge */}
            <div className="flex items-center gap-2 text-text-secondary">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                <FiBriefcase className="w-5 h-5" aria-hidden />
              </div>
              <span className="text-body-md md:text-body-lg font-medium">
                Premium learning experience
              </span>
            </div>

            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-primary font-bold text-text-primary leading-tight tracking-tight">
              Empowering Global Learners through Practical, Career-Ready Education.
            </h2>

            {/* Feature list */}
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index}>
                  {item.highlighted ? (
                    <div className="p-4 md:p-5 rounded-lg bg-gray-100">
                      <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body-sm md:text-body-md text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                  )}
                </li>
              ))}
            </ul>

            {/* Why Students Choose Canstudy Academy */}
            <div className="space-y-3">
              <h3 className="text-body-md md:text-body-lg font-semibold text-text-primary">
                Why Students Choose Canstudy Academy
              </h3>
              <ul className="space-y-2">
                {whyChooseItems.map((item, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    <span className="text-accent text-lg leading-none">•</span>
                    <span className="text-body-sm md:text-body-md text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-body-md md:text-body-lg px-6 py-3 md:px-8 md:py-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-button"
            >
              Learn More
              <FiArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom - Large faded slogan */}
      <div
        className="relative w-full text-center py-8 md:py-12 lg:py-16 select-none pointer-events-none overflow-x-hidden"
        aria-hidden
      >
        <p className="premium-learning-fade-text text-[36px] md:text-[60px] lg:text-[90px] xl:text-[120px] font-primary font-bold leading-none text-gray-200/20 whitespace-nowrap">
          Canstudy Online Learning
        </p>
      </div>
    </section>
    </>
  );
};
