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
    <Card variant="course" className="group transition-shadow hover:shadow-lg">
      <Link href={`/courses/${course.id}`}>
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className={`object-cover transition-transform duration-300 group-hover:scale-105 ${course.id === '4' ? 'object-[center_30%]' : ''}`}
            />
          </div>
          <div className="absolute right-4 top-4">
            <Badge variant="price">
              {course.id === '1' ? 'Beginner' : course.id === '4' ? 'Intermediate' : 'All Levels'}
            </Badge>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <Badge variant="category" className="w-fit">
              {course.id === '3' ? 'Prof. Development' : course.category}
            </Badge>
            <div className="flex items-center gap-2">
              {course.instructor.avatar && (
                <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span className="truncate text-body-xs text-text-secondary">
                {course.instructor.name}
              </span>
            </div>
          </div>
          <h3 className="mb-3 line-clamp-2 min-h-[56px] text-[18px] font-semibold text-black transition-colors group-hover:text-primary md:text-heading-2">
            {course.title}{' '}
            {course.id === '1' && <span className="font-normal">(Beginner to Intermediate)</span>}
          </h3>
          <div className="mb-4 flex flex-col gap-3 text-body-xs text-gray-800 md:gap-4 md:text-body-sm">
            {/* First row: Webcam icon with days */}
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-orange-500">
                <FiVideo
                  className="h-3 w-3"
                  style={{ color: '#000000', stroke: '#000000', strokeWidth: 2 }}
                />
              </div>
              <span className="font-medium">
                {course.id === '1'
                  ? 'Mondays - Wednesdays - Thursdays'
                  : course.id === '2'
                    ? 'Thursdays'
                    : course.id === '3'
                      ? 'Tuesdays'
                      : course.id === '4'
                        ? 'Tuesday - Wednesday'
                        : 'Mon. Wed. Thur.'}
              </span>
            </div>
            {/* Second row: Clock icon with time and Calendar icon with duration */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-orange-500">
                  <FiClock
                    className="h-3 w-3"
                    style={{ color: '#000000', stroke: '#000000', strokeWidth: 2 }}
                  />
                </div>
                <span className="font-medium">
                  {course.id === '2' || course.id === '3'
                    ? '11:00 AM - 1:00 PM EST'
                    : course.id === '4'
                      ? '6:30 PM - 8:00 PM EST'
                      : '6:00 PM - 7:30 PM EST'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-orange-500">
                  <FiCalendar
                    className="h-3 w-3"
                    style={{ color: '#000000', stroke: '#000000', strokeWidth: 2 }}
                  />
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
