import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';

const features = [
  {
    number: '01',
    title: 'Flexible schedule',
    description:
      'Flexible, instructor-led online classes designed for working professionals, students, and global learners. Join from anywhere, and if you miss a live class, catch up with the session recording at your convenience.',
  },
  {
    number: '02',
    title: 'Pocket friendly',
    description:
      'High-quality programs that fit your budget. With Canstudy, you get global-standard training without the high tuition fees — because education should be an opportunity, not an obstacle.',
  },
  {
    number: '03',
    title: 'Expert instructor',
    description:
      'Every course is taught by real instructors and professionals who bring international experience, mentorship, and personalized feedback to every class.',
  },
];

export const Features: React.FC = () => {
  return (
    <Section
      padding="lg"
      background="white"
      className="relative"
      style={{
        background:
          'linear-gradient(to bottom, #ffffff 0%, #ffffff 85%, #F3F6F8 100%)',
      }}
    >
      <div className="relative">
        {/* Design Element decorative background - hidden on mobile */}
        <div className="absolute -z-10 top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-5 hidden md:block">
          <Image
            src="/images/designElement2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* Large background text - hidden on mobile */}
        <div className="absolute -z-10 top-0 left-0 text-[80px] md:text-[150px] lg:text-[200px] font-bold text-gray-100 leading-none hidden md:block whitespace-nowrap overflow-hidden opacity-30">
          Global learning. Real instructors. Proven results.
        </div>
        <h2 className="text-[24px] md:text-[36px] lg:text-[42px] font-primary font-bold text-black mb-8 md:mb-12 relative z-10 text-center md:text-left px-4 md:px-0">
          Global learning. Real instructors. Proven results.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-[40px] md:text-[50px] lg:text-[60px] font-primary font-bold text-gray-200 leading-none">
                  {feature.number}
                </span>
                <h3 className="text-heading-1 md:text-heading-1 font-semibold text-text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-body-sm md:text-body-md text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
