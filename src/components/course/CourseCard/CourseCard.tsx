import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/types/course';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { formatPrice } from '@/lib/utils';
import { FiBook, FiUsers } from 'react-icons/fi';

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
            <Badge variant="price">{formatPrice(course.price)}</Badge>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
            <Badge variant="category" className="w-fit">{course.category}</Badge>
            <span className="text-body-xs text-text-secondary truncate">
              {course.instructor.name}
            </span>
          </div>
          <h3 className="text-[18px] md:text-heading-2 font-semibold text-black mb-3 line-clamp-2 group-hover:text-primary transition-colors min-h-[56px]">
            {course.title}
          </h3>
          <div className="flex items-center justify-between mb-4">
            <Rating
              value={course.rating}
              showCount
              reviewCount={course.reviews}
              size="sm"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-body-xs md:text-body-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <FiBook className="w-4 h-4" />
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="w-4 h-4" />
              <span>{course.enrolledStudents} Students</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};
