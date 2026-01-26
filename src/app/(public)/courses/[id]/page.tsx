import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { CourseDetails } from '@/components/course/CourseDetails';
import { CourseSidebar } from '@/components/course/CourseSidebar';
import { CourseGrid } from '@/components/course/CourseGrid';
import { getCourseById, getCourses } from '@/lib/api';
import { Course } from '@/types/course';

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  // French Course (ID "1") specific metadata
  if (course.id === '1') {
    return {
      title: 'Master French Online | Learn French with Live Classes – Canstudy Online Academy',
      description:
        'Beginner-friendly and globally relevant. Learn French online through live, interactive classes that build fluency, confidence, and real-world communication skills. Perfect for professionals, travelers, and global learners.',
      keywords: [
        'learn French online',
        'French classes for beginners',
        'live French course',
        'online French language training',
        'interactive French lessons',
        'professional French classes',
      ],
      openGraph: {
        title: 'Master French Online | Learn French with Live Classes – Canstudy Online Academy',
        description:
          'Beginner-friendly and globally relevant. Learn French online through live, interactive classes that build fluency, confidence, and real-world communication skills. Perfect for professionals, travelers, and global learners.',
        url: `https://canstudyacademy.com/courses/${course.id}`,
        siteName: 'Canstudy Online Academy',
        images: course.image
          ? [
              {
                url: course.image.startsWith('http')
                  ? course.image
                  : `https://canstudyacademy.com${course.image}`,
                width: 1200,
                height: 630,
                alt: `${course.title} - Canstudy Online Academy`,
              },
            ]
          : [],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Master French Online | Learn French with Live Classes – Canstudy Online Academy',
        description:
          'Beginner-friendly and globally relevant. Learn French online through live, interactive classes that build fluency, confidence, and real-world communication skills.',
        images: course.image
          ? [
              course.image.startsWith('http')
                ? course.image
                : `https://canstudyacademy.com${course.image}`,
            ]
          : [],
      },
    };
  }

  // Global Education Recruiter Training Program (ID "2") specific metadata
  if (course.id === '2') {
    return {
      title: 'Global Education Recruiter Training Program | Build a Career in International Student Recruitment',
      description:
        'Learn how to ethically recruit and support international students while building a profitable, globally transferable consulting business. Gain real-world experience from education and immigration professionals.',
      keywords: [
        'education recruiter training',
        'international student recruitment course',
        'study abroad consultant training',
        'global education consultant program',
        'online recruiter certification',
        'international admissions training',
      ],
      openGraph: {
        title: 'Global Education Recruiter Training Program | Build a Career in International Student Recruitment',
        description:
          'Learn how to ethically recruit and support international students while building a profitable, globally transferable consulting business. Gain real-world experience from education and immigration professionals.',
        url: `https://canstudyacademy.com/courses/${course.id}`,
        siteName: 'Canstudy Online Academy',
        images: course.image
          ? [
              {
                url: course.image.startsWith('http')
                  ? course.image
                  : `https://canstudyacademy.com${course.image}`,
                width: 1200,
                height: 630,
                alt: `${course.title} - Canstudy Online Academy`,
              },
            ]
          : [],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Global Education Recruiter Training Program | Build a Career in International Student Recruitment',
        description:
          'Learn how to ethically recruit and support international students while building a profitable, globally transferable consulting business. Gain real-world experience from education and immigration professionals.',
        images: course.image
          ? [
              course.image.startsWith('http')
                ? course.image
                : `https://canstudyacademy.com${course.image}`,
            ]
          : [],
      },
    };
  }

  // Default metadata for other courses
  return {
    title: `${course.title} – Canstudy Online Academy`,
    description: course.description || course.fullDescription || '',
    keywords: course.tags || [],
    openGraph: {
      title: `${course.title} – Canstudy Online Academy`,
      description: course.description || course.fullDescription || '',
      url: `https://canstudyacademy.com/courses/${course.id}`,
      siteName: 'Canstudy Online Academy',
      images: course.image
        ? [
            {
              url: course.image.startsWith('http')
                ? course.image
                : `https://canstudyacademy.com${course.image}`,
              width: 1200,
              height: 630,
              alt: `${course.title} - Canstudy Online Academy`,
            },
          ]
        : [],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} – Canstudy Online Academy`,
      description: course.description || course.fullDescription || '',
      images: course.image
        ? [
            course.image.startsWith('http')
              ? course.image
              : `https://canstudyacademy.com${course.image}`,
          ]
        : [],
    },
  };
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

  // Get related courses (use relatedCourses field if available, otherwise same category, exclude current)
  const allCourses = await getCourses();
  let relatedCourses: Course[];
  
  if (course.relatedCourses && course.relatedCourses.length > 0) {
    // Use explicitly defined related courses
    relatedCourses = allCourses
      .filter((c) => course.relatedCourses!.includes(c.id))
      .slice(0, 3);
  } else {
    // Fallback to category-based matching
    relatedCourses = allCourses
      .filter((c) => c.category === course.category && c.id !== course.id)
      .slice(0, 3);
  }

  // Structured data for AEO optimization
  const structuredData =
    course.id === '1'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is Canstudy Online Academy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Canstudy Online Academy is a global e-learning platform offering short, career-focused courses led by real instructors, designed to help learners build in-demand skills for professional success.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where can I learn new skills online?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'At Canstudy Online Academy, learners can access live, instructor-led online classes designed to fit flexible schedules and teach real-world skills.',
              },
            },
            {
              '@type': 'Question',
              name: 'You can learn French online with Canstudy Online Academy through live, instructor-led classes that focus on pronunciation, grammar, and real-life communication.',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, you can learn French online with Canstudy Online Academy through live, instructor-led classes that focus on pronunciation, grammar, and real-life communication. Our beginner-friendly French course is designed for professionals, travelers, and global learners who want to build fluency and confidence.',
              },
            },
          ],
        }
      : course.id === '2'
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Canstudy Online Academy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Canstudy Online Academy is a global e-learning platform offering short, career-focused courses led by real instructors, designed to help learners build in-demand skills for professional success.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where can I learn new skills online?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At Canstudy Online Academy, learners can access live, instructor-led online classes designed to fit flexible schedules and teach real-world skills.',
                },
              },
              {
                '@type': 'Question',
                name: 'The Global Education Recruiter Training Program teaches participants how to ethically recruit international students, secure partnerships with institutions, and build sustainable consulting careers in the global education sector.',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Global Education Recruiter Training Program teaches participants how to ethically recruit international students, secure partnerships with institutions, and build sustainable consulting careers in the global education sector. This 8-week professional training program is designed for individuals who want to build a profitable career or business in international student recruitment, with real-world experience from education and immigration professionals.',
                },
              },
            ],
          }
        : null;

  return (
    <>
      {/* Structured Data for SEO */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
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
        </div>

        <div className="relative z-10">
          <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
            <div className="max-w-[610px] pt-12 md:pt-0">
              <p className="text-[20px] md:text-heading-2 font-primary text-accent-yellow tracking-[-0.5px] mb-4">
                Courses details
              </p>
              <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-primary font-bold leading-[1.2] tracking-[-2px] mb-0">
                {course.id === '2'
                  ? 'Global Education Recruiter'
                  : course.id === '3'
                  ? 'Immigration Recruitment & Support Specialist™'
                  : course.title}
              </h1>
              {course.id === '2' && (
                <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-primary font-semibold text-white/90 mt-2 tracking-[-0.5px]">
                  Training Program
                </h2>
              )}
              {course.id === '3' && (
                <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-primary font-semibold text-white/90 mt-2 tracking-[-0.5px]">
                  Training Program
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Info Bar */}
      <div className="bg-white border-b border-gray-200 my-2">
        <div className="max-w-container mx-auto px-4 md:px-lg lg:px-xl">
          <div className="relative py-4 md:py-5 flex flex-col md:flex-row items-center justify-center min-h-[60px]">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
              {/* Instructor */}
              <div className="flex items-center gap-3">
                <div className="relative w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-full overflow-hidden flex-shrink-0">
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
                <span className="text-body-md font-semibold text-text-primary whitespace-nowrap">
                  Instructor:{' '}
                  <span className="font-normal text-text-secondary">
                    {course.instructor.name}
                  </span>
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-[20px] bg-gray-200" />

              {/* Categories */}
              <div className="flex items-center">
                <span className="text-body-md font-semibold text-text-primary whitespace-nowrap">
                  Categories:
                  <span className="font-normal text-text-secondary">
                    {' '}
                    {course.id === '1'
                      ? 'Languages & Global Communication'
                      : course.id === '2'
                      ? 'Business & Professional Development'
                      : course.id === '3'
                      ? 'Professional Development & Compliance Training'
                      : course.category}
                  </span>
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-[20px] bg-gray-200" />

              {/* Skill Level */}
              <div className="flex items-center">
                <span className="text-body-md font-semibold text-text-primary whitespace-nowrap">
                  Skill level:
                  <span className="font-normal text-text-secondary"> Beginner to Intermediate</span>
                </span>
              </div>
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
                  <span className="font-normal text-text-secondary">
                    {' '}
                    {course.id === '1'
                      ? 'Languages & Global Communication'
                      : course.id === '2'
                      ? 'Business & Professional Development'
                      : course.id === '3'
                      ? 'Professional Development & Compliance Training'
                      : course.category}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-body-sm font-semibold text-text-primary">
                  Skill level:
                  <span className="font-normal text-text-secondary"> Beginner to Intermediate</span>
                </span>
              </div>
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
