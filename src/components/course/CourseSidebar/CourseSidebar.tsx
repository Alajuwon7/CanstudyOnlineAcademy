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
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
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
              className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg"
            >
              <FiPlay className="text-primary text-xl ml-1" />
            </a>
          </div>
        </div>

        {/* Course Details */}
        <div className="p-[35px] flex flex-col gap-5">
          {/* Course Details List */}
          <div className="flex flex-col">
            {/* Start Date */}
            <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiFlag className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Start
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                {course.id === '1' ? 'Feb. 9th, 2026' : course.id === '2' ? 'March 12th, 2026' : course.id === '3' ? 'March 10th, 2026' : 'Feb. 9th, 2026'}
              </span>
            </div>

            {/* Duration */}
            <div className="border-b border-gray-200 pb-4 pt-[15px] flex items-center justify-between">
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

            {/* Time */}
            <div className="border-b border-gray-200 pb-4 pt-[15px] flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiClock className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Time
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px] text-right">
                {course.id === '2' || course.id === '3' ? '11:00 AM - 1:00 PM EST' : '6:00 PM - 7:30 PM EST'}
              </span>
            </div>

            {/* Format */}
            <div className="border-b border-gray-200 pb-4 pt-[15px] flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-[10px] flex items-center justify-center">
                  <FiVideo className="text-primary text-[20px]" />
                </div>
                <span className="text-[17px] font-semibold text-text-primary leading-[30px]">
                  Format
                </span>
              </div>
              <span className="text-[17px] font-normal text-text-secondary leading-[30px]">
                Live - Video
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
              course.id === '1'
                ? 'https://form.jotform.com/260338022159149'
                : course.id === '2'
                ? 'https://form.jotform.com/canstudy_consult/ger'
                : course.id === '3'
                ? 'https://form.jotform.com/canstudy_consult/irss'
                : 'https://form.jotform.com/260338022159149'
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
          <div className="flex items-center gap-4 justify-center">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-text-primary"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-text-primary"
              aria-label="Visit our TikTok page"
            >
              <FaTiktok />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-text-primary"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-text-primary"
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
