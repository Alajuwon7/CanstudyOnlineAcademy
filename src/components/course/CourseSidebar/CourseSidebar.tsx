import React from 'react';
import Image from 'next/image';
import { Course } from '@/types/course';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/lib/constants';
import {
  FiClock,
  FiUsers,
  FiGlobe,
  FiBook,
  FiAward,
  FiPlay,
  FiArrowRight,
  FiVideo,
  FiFlag,
  FiCreditCard,
} from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';

export interface CourseSidebarProps {
  course: Course;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({ course }) => {
  return (
    <div className="sticky top-24 space-y-5">
      {/* Video Thumbnail */}
      <Card variant="sidebar" className="overflow-hidden rounded-md bg-gray-100 p-0">
        <div className="relative h-[220px] w-full">
          {course.id === '1' ? (
            <Image
              src="https://img.youtube.com/vi/zLJCJQI1lVU/hqdefault.jpg"
              alt={`${course.title} – Course overview video`}
              fill
              className="object-cover"
            />
          ) : course.id === '2' ? (
            <Image
              src="https://res.cloudinary.com/kingaat7/image/upload/v1769526126/2_d8ln3t.png"
              alt={`${course.title} – Course overview video`}
              fill
              className="object-cover"
            />
          ) : course.id === '3' ? (
            <Image
              src="https://res.cloudinary.com/kingaat7/image/upload/v1769526126/3_p0g65t.png"
              alt={`${course.title} – Course overview video`}
              fill
              className="object-cover"
            />
          ) : course.videoThumbnail ? (
            <Image src={course.videoThumbnail} alt={course.title} fill className="object-cover" />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
          {course.id !== '4' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <a
                href={
                  course.id === '2'
                    ? 'https://canstudyconsultcom-my.sharepoint.com/:v:/g/personal/info_canstudyconsult_com/IQBfsYGHTzMMT65PQUaVPm45AYN-adCSSOEKyRRPFLh_Jdw?e=oeHcc5'
                    : course.id === '3'
                      ? 'https://canstudyconsultcom-my.sharepoint.com/:v:/g/personal/info_canstudyconsult_com/IQBeDgeyZWeKSqGhYphHv1d_AUxCeYAlwIIQiCzHjyw4GFQ?e=ut8dwO'
                      : 'https://youtu.be/zLJCJQI1lVU'
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play course overview video"
                className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-white/90"
              >
                <FiPlay className="ml-1 text-xl text-primary" />
              </a>
            </div>
          )}
        </div>

        {/* Course Details */}
        <div className="flex flex-col gap-5 p-[35px]">
          {/* Course Details List */}
          <div className="flex flex-col">
            {/* Start Date */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center pr-[10px]">
                  <FiFlag className="text-[20px] text-primary" />
                </div>
                <span className="text-[17px] font-semibold leading-[30px] text-text-primary">
                  Start
                </span>
              </div>
              <span className="text-[17px] font-normal leading-[30px] text-text-secondary">
                {course.id === '1'
                  ? 'Feb. 9th, 2026'
                  : course.id === '2'
                    ? 'March 12th, 2026'
                    : course.id === '3'
                      ? 'March 10th, 2026'
                      : course.id === '4'
                        ? 'March 17 & 18, 2026'
                        : 'Feb. 9th, 2026'}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-[15px]">
              <div className="flex items-center">
                <div className="flex items-center justify-center pr-[10px]">
                  <FiClock className="text-[20px] text-primary" />
                </div>
                <span className="text-[17px] font-semibold leading-[30px] text-text-primary">
                  Duration
                </span>
              </div>
              <span className="text-[17px] font-normal leading-[30px] text-text-secondary">
                {course.duration || '3 weeks'}
              </span>
            </div>

            {/* Time */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-[15px]">
              <div className="flex items-center">
                <div className="flex items-center justify-center pr-[10px]">
                  <FiClock className="text-[20px] text-primary" />
                </div>
                <span className="text-[17px] font-semibold leading-[30px] text-text-primary">
                  Time
                </span>
              </div>
              <span className="text-right text-[17px] font-normal leading-[30px] text-text-secondary">
                {course.id === '2' || course.id === '3'
                  ? '11:00 AM - 1:00 PM EST'
                  : course.id === '4'
                    ? '6:30 PM - 8:00 PM EST'
                    : '6:00 PM - 7:30 PM EST'}
              </span>
            </div>

            {/* Format */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-[15px]">
              <div className="flex items-center">
                <div className="flex items-center justify-center pr-[10px]">
                  <FiVideo className="text-[20px] text-primary" />
                </div>
                <span className="text-[17px] font-semibold leading-[30px] text-text-primary">
                  Format
                </span>
              </div>
              <span className="text-[17px] font-normal leading-[30px] text-text-secondary">
                Live - Video
              </span>
            </div>

            {/* Language */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-[15px]">
              <div className="flex items-center">
                <div className="flex items-center justify-center pr-[10px]">
                  <FiGlobe className="text-[20px] text-primary" />
                </div>
                <span className="text-[17px] font-semibold leading-[30px] text-text-primary">
                  Language
                </span>
              </div>
              <span className="text-[17px] font-normal leading-[30px] text-text-secondary">
                {course.language || 'English'}
              </span>
            </div>

            {/* Lessons */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-[15px]">
              <div className="flex items-center">
                <div className="flex items-center justify-center pr-[10px]">
                  <FiBook className="text-[20px] text-primary" />
                </div>
                <span className="text-[17px] font-semibold leading-[30px] text-text-primary">
                  Lessons
                </span>
              </div>
              <span className="text-[17px] font-normal leading-[30px] text-text-secondary">
                {course.lessons}
              </span>
            </div>
          </div>

          {/* Price Badge */}
          <div className="flex items-center justify-center rounded-full bg-secondary-blue-dark py-[10px]">
            <p className="text-center text-[18px] font-medium leading-[34px] text-white">
              Price: {formatPrice(course.price)}
            </p>
          </div>

          {/* Enroll / Enrollment status */}
          {course.id === '1' ? (
            <div className="flex cursor-not-allowed items-center justify-center overflow-clip rounded-full border-2 border-transparent bg-gray-300">
              <div className="flex items-center rounded-[inherit] px-[38px] pb-[15px] pt-[14px]">
                <span className="text-center text-[17px] font-semibold leading-[25.5px] text-gray-700">
                  Enrollment closed
                </span>
              </div>
            </div>
          ) : (
            <a
              href={
                course.id === '2'
                  ? 'https://form.jotform.com/canstudy_consult/ger'
                  : course.id === '3'
                    ? 'https://form.jotform.com/canstudy_consult/irss'
                    : course.id === '4'
                      ? 'https://form.jotform.com/canstudy_consult/celpip'
                      : 'https://form.jotform.com/260338022159149'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center overflow-clip rounded-full border-2 border-transparent bg-accent transition-opacity hover:opacity-90"
            >
              <div className="flex items-center rounded-[inherit] px-[38px] pb-[15px] pt-[14px]">
                <div className="pb-[5.5px] pr-[6px] pt-[3px]">
                  <FiArrowRight className="scale-y-[-100%] text-[17px] text-white" />
                </div>
                <span className="text-center text-[17px] font-semibold leading-[25.5px] text-white">
                  Enroll now
                </span>
              </div>
            </a>
          )}

          {/* Social Sharing */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-text-primary transition-colors hover:bg-accent hover:text-white"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-text-primary transition-colors hover:bg-accent hover:text-white"
              aria-label="Visit our TikTok page"
            >
              <FaTiktok />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-text-primary transition-colors hover:bg-accent hover:text-white"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-text-primary transition-colors hover:bg-accent hover:text-white"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};
