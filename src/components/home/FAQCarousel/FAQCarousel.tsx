'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Section } from '@/components/layout/Section';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What is Canstudy Online Academy?',
    answer: 'Canstudy Online Academy is a global e-learning platform offering short, career-focused online courses taught by real industry professionals. Our live, instructor-led programs help learners worldwide gain practical, job-ready skills in language learning, education consulting, and professional development.',
  },
  {
    id: '2',
    question: 'Who can enroll in courses at Canstudy Online Academy?',
    answer: 'Anyone, anywhere in the world, can enroll. Our programs are designed for students, professionals, and entrepreneurs seeking to upgrade their skills, explore new careers, or prepare for global job opportunities — no prior experience required.',
  },
  {
    id: '3',
    question: 'Are the courses live or self-paced?',
    answer: 'Courses are taught live by certified instructors. However, all sessions are recorded so learners who can\'t attend live can catch up at any time. This ensures complete flexibility without sacrificing interaction or quality.',
  },
  {
    id: '4',
    question: 'What makes Canstudy\'s courses different from other online programs?',
    answer: 'Every course is built by industry experts and focuses on real-world application, not just theory. We combine small-group instruction, flexible scheduling, and compliance-safe training methods that meet professional standards worldwide.',
  },
  {
    id: '5',
    question: 'What courses are currently available?',
    answer: 'Two flagship programs are open for enrollment: • Mastering French as a Second Language – a 35-week live course designed to build fluency and confidence in French. • Global Education Recruiter Training Program – an 8-week professional certification that prepares participants for careers in international education recruitment.',
  },
  {
    id: '6',
    question: 'How do I enroll in a course?',
    answer: 'Simply visit our course catalog at www.canstudyacademy.com, select your preferred program, and complete the quick online registration form. You\'ll receive confirmation and next-step instructions by email within 24 hours.',
  },
  {
    id: '7',
    question: 'What happens if I miss a live class?',
    answer: 'All live sessions are recorded and uploaded to your student dashboard within 24 hours. You can rewatch any session, review slides, and continue progressing at your own pace.',
  },
  {
    id: '9',
    question: 'Who teaches the courses?',
    answer: 'Courses are taught by certified experts and professionals working in their respective industries — including immigration consultants, university administrators, and language instructors with international experience.',
  },
  {
    id: '10',
    question: 'How can I contact Canstudy Online Academy for support?',
    answer: 'You can reach our support team by email at info@canstudyconsult.com or through the contact form on our website. We respond to all inquiries within one business day.',
  },
];

export const FAQCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFAQ = () => {
    setCurrentIndex((prev) => (prev + 1) % faqData.length);
  };

  const prevFAQ = () => {
    setCurrentIndex((prev) => (prev - 1 + faqData.length) % faqData.length);
  };

  const goToFAQ = (index: number) => {
    setCurrentIndex(index);
  };

  const currentFAQ = faqData[currentIndex];

  // Inject structured data for SEO
  useEffect(() => {
    // Schema.org FAQPage structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const scriptId = 'faq-structured-data';
    // Remove existing script if it exists
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []); // Empty dependency array since structuredData is static

  return (
    <Section padding="lg" background="white" className="bg-white">
        <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[28px] md:text-[42px] lg:text-display-2 font-primary font-bold text-text-primary mb-2">
              Canstudy Online Academy — FAQs
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          {/* Carousel Container */}
          <div className="max-w-4xl mx-auto">
            {/* FAQ Card */}
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-card p-6 md:p-8 lg:p-10 mb-6 min-h-[300px] md:min-h-[350px] flex flex-col"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {/* Question */}
              <div className="mb-4 md:mb-6">
                <h3
                  className="text-heading-2 md:text-heading-1 font-primary font-semibold text-text-primary mb-4"
                  itemProp="name"
                >
                  {currentFAQ.question}
                </h3>
                <div className="w-full h-0.5 bg-gray-200 my-4" />
              </div>

              {/* Answer */}
              <div className="flex-1">
                <div
                  className="text-body-md md:text-body-lg text-text-secondary leading-relaxed whitespace-pre-line"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <span itemProp="text">{currentFAQ.answer}</span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-4">
              {/* Previous Button */}
              <button
                onClick={prevFAQ}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors text-text-primary"
                aria-label="Previous FAQ"
              >
                <FiChevronLeft className="text-xl md:text-2xl" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2 flex-1 justify-center">
                {faqData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToFAQ(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-accent w-8 md:w-10'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to FAQ ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextFAQ}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors text-text-primary"
                aria-label="Next FAQ"
              >
                <FiChevronRight className="text-xl md:text-2xl" />
              </button>
            </div>

            {/* FAQ Counter */}
            <div className="text-center mt-4">
              <p className="text-body-sm text-text-secondary">
                {currentIndex + 1} of {faqData.length}
              </p>
            </div>
          </div>
        </div>
      </Section>
  );
};
