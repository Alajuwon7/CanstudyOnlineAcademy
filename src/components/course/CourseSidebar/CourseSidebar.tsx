import React from 'react';
import Image from 'next/image';
import { Course } from '@/types/course';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import {
  FiClock,
  FiUsers,
  FiGlobe,
  FiBook,
  FiAward,
  FiPlay,
  FiArrowRight,
  FiCalendar,
} from 'react-icons/fi';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaBehance,
} from 'react-icons/fa';

export interface CourseSidebarProps {
  course: Course;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({ course }) => {
  return (
    <div className="sticky top-24 space-y-5">
      {/* Video Thumbnail */}
      <Card variant="sidebar" className="p-0 overflow-hidden bg-gray-100 rounded-md">
        <div className="relative h-[220px] w-full">
          {course.videoThumbnail ? (
            <Image
              src={course.videoThumbnail}
              alt={course.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg">
              <FiPlay className="text-primary text-xl ml-1" />
            </button>
          </div>
        </div>

        {/* Course Details */}
        <div className="p-[35px] flex flex-col gap-5">
          {/* Course Details List */}
          <div className="flex flex-col">
            {/* Duration */}
            <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiClock className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Duration
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                {course.duration || '3 weeks'}
              </span>
            </div>

            {/* Enrolled */}
            <div className="border-b border-gray-200 pb-4 pt-[15px] flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiUsers className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Enrolled
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                {course.enrolledStudents} students
              </span>
            </div>

            {/* Language */}
            <div className="border-b border-gray-200 pb-4 pt-[15px] flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiGlobe className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Language
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                {course.language || 'English'}
              </span>
            </div>

            {/* Lessons */}
            <div className="border-b border-gray-200 pb-4 pt-[15px] flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiBook className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Lessons
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                {course.lessons}
              </span>
            </div>

            {/* Start Date (for course id "2") or Certificate (for other courses) */}
            {course.id === '2' ? (
              <div className="pb-[15px] pt-[10px] flex items-center justify-between">
                <div className="flex items-center">
                  <div className="pr-[10px] flex items-center justify-center">
                    <FiCalendar className="text-primary text-[20px]" />
                  </div>
                  <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                    Start Date
                  </span>
                </div>
                <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                  March 12th
                </span>
              </div>
            ) : (
              <div className="pb-[15px] pt-[10px] flex items-center justify-between">
                <div className="flex items-center">
                  <div className="pr-[10px] flex items-center justify-center">
                    <FiAward className="text-primary text-[20px]" />
                  </div>
                  <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                    Certificate
                  </span>
                </div>
                <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                  {course.certification?.available !== false ? 'Yes' : 'No'}
                </span>
              </div>
            )}
          </div>

          {/* Price Badge */}
          <div className="bg-secondary-blue-dark rounded-full py-[10px] flex items-center justify-center">
            <p className="text-[18px] font-medium text-white text-center leading-[34px]">
              Price: {formatPrice(course.price)}
            </p>
          </div>

          {/* Enroll Button */}
          <a
            href={
              course.id === '2'
                ? 'https://form.jotform.com/canstudy_consult/ger'
                : 'https://form.jotform.com/canstudy_consult/french'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent border-2 border-transparent rounded-full flex items-center justify-center overflow-clip hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center pb-[15px] pt-[14px] px-[38px] rounded-[inherit]">
              <div className="pr-[6px] pb-[5.5px] pt-[3px]">
                <FiArrowRight className="text-[17px] text-white scale-y-[-100%]" />
              </div>
              <span className="text-[17px] font-semibold text-white leading-[25.5px] text-center">
                Enroll now
              </span>
            </div>
          </a>

          {/* Social Sharing */}
          <div className="flex items-center gap-[10.8px] pl-[34.65px] pr-[34.66px]">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="text-[18px]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
              aria-label="Share on Pinterest"
            >
              <FaPinterest className="text-[18px]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="text-[18px]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
              aria-label="Share on Behance"
            >
              <FaBehance className="text-[18px]" />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};
