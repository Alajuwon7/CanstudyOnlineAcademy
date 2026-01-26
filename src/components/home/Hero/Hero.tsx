'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative text-white pt-24 pb-12 md:pt-32 md:pb-20"
      style={{
        background:
          'linear-gradient(to bottom, #0a2d5a 0%, #062346 50%, #041a2e 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
        {/* Design Element 2 - Circular ring gradient (more visible) */}
        <div 
          className="absolute"
          style={{ 
            top: '20px',
            right: '-200px',
            width: '600px', 
            height: '600px',
            opacity: 0.6,
            zIndex: 0,
            transform: 'rotate(30deg)'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/designElement2.png"
              alt=""
              fill
              className="object-contain"
              sizes="600px"
            />
          </div>
        </div>
        {/* Design Element - Additional decorative element (more visible) */}
        <div 
          className="absolute"
          style={{ 
            bottom: '20px',
            left: '-200px',
            width: '500px', 
            height: '500px',
            opacity: 0.5,
            zIndex: 0,
            transform: 'rotate(30deg)'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/designElement.png"
              alt=""
              fill
              className="object-contain"
              sizes="500px"
            />
          </div>
        </div>
        {/* Additional design elements for depth */}
        <div 
          className="absolute"
          style={{ 
            top: '50%',
            left: '5%',
            width: '400px', 
            height: '400px',
            opacity: 0.4,
            zIndex: 0,
            transform: 'translate(-50%, -50%) rotate(30deg)'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/designElement2.png"
              alt=""
              fill
              className="object-contain"
              sizes="400px"
            />
          </div>
        </div>
        {/* Accent blur circles for depth */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10">
        <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-primary font-bold mb-4 md:mb-6 leading-tight">
                Learn the Skills the World Needs Now.
              </h1>
              <p className="text-body-md md:text-body-lg text-white/80 mb-6 md:mb-8 px-2 md:px-0">
                Future-proof your career with Canstudy Online Academy. Gain in-demand skills, global insights, and mentorship from industry leaders — all from the comfort of home.
              </p>
              <Link href="/courses">
                <Button
                  variant="accent"
                  size="lg"
                  className="flex items-center gap-2 mx-auto lg:mx-0 w-fit"
                >
                  View Courses
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative z-10 w-full flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center lg:-ml-8">
                {/* Large Image - Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative w-full lg:w-[65%] h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] rounded-lg overflow-hidden group cursor-pointer"
                  style={{
                    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.3), 0px 10px 20px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {/* Gradient overlay to fade with background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-blue-darker/30 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-50" />
                  <Image
                    src="https://res.cloudinary.com/kingaat7/image/upload/v1768444000/COA2_xzuunu.png"
                    alt="Student learning - Best online platform for education"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                </motion.div>

                {/* Right Column - Two Images */}
                <div className="relative w-full lg:w-[38%] flex flex-col gap-4 lg:gap-6">
                  {/* Top Right Image - Medium */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] rounded-lg overflow-hidden group cursor-pointer"
                    style={{
                      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.25), 0px 8px 15px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {/* Gradient overlay to fade with background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-blue-darker/30 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-50" />
                    <Image
                      src="https://res.cloudinary.com/kingaat7/image/upload/v1768444912/COA4_zlichp.png"
                      alt="Instructor teaching - Best online platform for education"
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 35vw"
                    />
                  </motion.div>

                  {/* Bottom Right Image - Smaller */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] rounded-lg overflow-hidden group cursor-pointer"
                    style={{
                      boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.25), 0px 6px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {/* Gradient overlay to fade with background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-blue-darker/30 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-50" />
                    <Image
                      src="https://res.cloudinary.com/kingaat7/image/upload/v1768444201/COA3_lakj5q.png"
                      alt="Student success - Best online platform for education"
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 35vw"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
