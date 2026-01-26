'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { CourseGrid } from '@/components/course/CourseGrid';
import { COURSE_CATEGORIES } from '@/lib/constants';
import { Course } from '@/types/course';
import { getCourses } from '@/lib/api';

export const PopularCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    const loadCourses = async () => {
      const allCourses = await getCourses();
      setCourses(allCourses);
    };
    loadCourses();
  }, []);

  const filteredCourses =
    activeCategory === 'all'
      ? courses
      : courses.filter(
          (course) =>
            course.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <Section
      padding="lg"
      background="white"
      style={{
        background:
          'linear-gradient(to bottom, #F3F6F8 0%, #F3F6F8 100%)',
      }}
    >
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-8">
          <h2 className="text-[28px] md:text-[42px] lg:text-[54.6px] font-primary font-bold text-black text-center md:text-left">
            Popular courses.
          </h2>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {COURSE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium text-body-sm md:text-body-md transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <CourseGrid courses={filteredCourses} />
    </Section>
  );
};
