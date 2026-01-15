import { Section } from '@/components/layout/Section';
import { CourseGrid } from '@/components/course/CourseGrid';
import { getCourses } from '@/lib/api';

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <Section padding="xl" background="white" className="pt-32">
      <div className="mb-8">
        <h1 className="text-display-2 font-primary font-bold text-text-primary mb-4">
          All Courses
        </h1>
        <p className="text-body-lg text-text-secondary">
          Explore our comprehensive collection of online courses
        </p>
      </div>

      <CourseGrid courses={courses} />
    </Section>
  );
}
