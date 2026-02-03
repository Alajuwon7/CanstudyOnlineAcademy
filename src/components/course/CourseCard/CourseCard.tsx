import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/types/course';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FiCalendar, FiClock, FiVideo } from 'react-icons/fi';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card variant="course" className="group hover:shadow-lg transition-shadow">
      <Link href={`/courses/${course.id}`}>
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="price">{course.id === '1' ? 'Beginner' : 'All Levels'}</Badge>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
            <Badge variant="category" className="w-fit">
              {course.id === '3' ? 'Prof. Development' : course.category}
            </Badge>
            <div className="flex items-center gap-2">
              {course.instructor.avatar && (
                <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span className="text-body-xs text-text-secondary truncate">
                {course.instructor.name}
              </span>
            </div>
          </div>
          <h3 className="text-[18px] md:text-heading-2 font-semibold text-black mb-3 line-clamp-2 group-hover:text-primary transition-colors min-h-[56px]">
            {course.title} {course.id === '1' && <span className="font-normal">(Beginner to Intermediate)</span>}
          </h3>
          <div className="flex flex-col gap-3 md:gap-4 mb-4 text-body-xs md:text-body-sm text-gray-800">
            {/* First row: Webcam icon with days */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center bg-orange-500">
                <FiVideo className="w-3 h-3" style={{ color: '#000000', stroke: '#000000', strokeWidth: 2 }} />
              </div>
              <span className="font-medium">
                {course.id === '1' ? 'Mondays - Wednesdays - Thursdays' : course.id === '2' ? 'Thursdays' : course.id === '3' ? 'Tuesdays' : 'Mon. Wed. Thur.'}
              </span>
            </div>
            {/* Second row: Clock icon with time and Calendar icon with duration */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-orange-500">
                  <FiClock className="w-3 h-3" style={{ color: '#000000', stroke: '#000000', strokeWidth: 2 }} />
                </div>
                <span className="font-medium">
                  {course.id === '2' || course.id === '3' ? '11:00 AM - 1:00 PM EST' : '6:00 PM - 7:30 PM EST'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-orange-500">
                  <FiCalendar className="w-3 h-3" style={{ color: '#000000', stroke: '#000000', strokeWidth: 2 }} />
                </div>
                <span className="font-medium">{course.duration || '35 Weeks'}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};
