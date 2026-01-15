import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { CourseDetails } from '@/components/course/CourseDetails';
import { CourseSidebar } from '@/components/course/CourseSidebar';
import { Rating } from '@/components/ui/Rating';
import { CourseGrid } from '@/components/course/CourseGrid';
import { getCourseById, getCourses } from '@/lib/api';
import { Course } from '@/types/course';

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  // Get related courses (same category, exclude current)
  const allCourses = await getCourses();
  const relatedCourses = allCourses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20"
        style={{
          background:
            'linear-gradient(to bottom, #0a2d5a 0%, #062346 50%, #041a2e 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative elements - hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
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
            <img
              src="/images/designElement2.png"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
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
            <img
              src="/images/designElement.png"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
            <div className="max-w-[610px] pt-12 md:pt-0">
              <p className="text-[20px] md:text-heading-2 font-primary text-accent-yellow tracking-[-0.5px] mb-4">
                Courses details
              </p>
              <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-primary font-bold leading-[1.2] tracking-[-2px] mb-0">
                {course.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
          <div className="relative h-[60px] md:h-[60px] flex items-center justify-center">
            {/* Instructor */}
            <div className="absolute left-0 md:left-1/2 md:translate-x-[-346px] flex items-center gap-3">
              <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                {course.instructor.avatar ? (
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">
                      {course.instructor.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <span className="text-body-md font-semibold text-text-primary">
                  Instructor:{' '}
                  <span className="font-normal text-text-secondary">
                    {course.instructor.name}
                  </span>
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 translate-x-[-174px] w-px h-[20px] bg-gray-200" />

            {/* Categories */}
            <div className="absolute left-1/2 translate-x-[-66px] hidden md:block">
              <span className="text-body-md font-semibold text-text-primary text-center">
                Categories:
                <span className="font-normal text-text-secondary"> {course.category}</span>
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 translate-x-[43px] w-px h-[20px] bg-gray-200" />

            {/* Enrolled */}
            <div className="absolute left-1/2 translate-x-[159px] hidden md:block">
              <span className="text-body-md font-semibold text-text-primary text-center">
                Enrolled:
                <span className="font-normal text-text-secondary">
                  {' '}
                  {course.enrolledStudents} students
                </span>
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 translate-x-[273px] w-px h-[20px] bg-gray-200" />

            {/* Rating */}
            <div className="absolute left-1/2 translate-x-[297px] hidden md:flex items-center gap-2">
              <Rating
                value={course.rating}
                showCount
                reviewCount={course.reviews}
                size="sm"
              />
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center justify-center gap-3 w-full py-4">
              <div className="flex items-center gap-3 w-full justify-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  {course.instructor.avatar ? (
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-primary text-lg font-bold">
                        {course.instructor.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-body-sm font-semibold text-text-primary">
                  Instructor:{' '}
                  <span className="font-normal text-text-secondary">
                    {course.instructor.name}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-body-sm font-semibold text-text-primary">
                  Category:
                  <span className="font-normal text-text-secondary"> {course.category}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-body-sm font-semibold text-text-primary">
                  Enrolled:
                  <span className="font-normal text-text-secondary">
                    {' '}
                    {course.enrolledStudents}
                  </span>
                </span>
              </div>
              <Rating
                value={course.rating}
                showCount
                reviewCount={course.reviews}
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <Section padding="lg" background="white">
        <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-15">
            <div>
              <CourseDetails course={course} />
            </div>
            <div className="lg:sticky lg:top-24 h-fit">
              <CourseSidebar course={course} />
            </div>
          </div>
        </div>
      </Section>

      {/* Related Courses */}
      <Section padding="lg" background="gray" className="bg-gray-100">
        <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
          <h2 className="text-[28px] md:text-[42px] lg:text-display-2 font-primary font-bold text-text-primary text-center mb-12">
            Related courses
          </h2>
          {relatedCourses.length > 0 ? (
            <CourseGrid courses={relatedCourses} />
          ) : (
            <p className="text-center text-text-secondary">No related courses found.</p>
          )}
        </div>
      </Section>
    </>
  );
}
