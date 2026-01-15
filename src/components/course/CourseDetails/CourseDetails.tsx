import React from 'react';
import Image from 'next/image';
import { Course } from '@/types/course';
import { Tab, TabItem } from '@/components/ui/Tab';
import { Rating } from '@/components/ui/Rating';
import { FiCheck } from 'react-icons/fi';

export interface CourseDetailsProps {
  course: Course;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const tabItems: TabItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6 pt-6">
          <div>
            <h3 className="text-heading-2 font-semibold text-text-primary mb-4 tracking-[-0.5px]">
              Course description
            </h3>
            <div className="space-y-4 text-body-md text-text-secondary leading-[30px]">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium.
              </p>
            </div>
          </div>

          <div className="pt-10 pb-6">
            <h3 className="text-heading-2 font-semibold text-text-primary mb-4 tracking-[-0.5px]">
              What you'll learn from this course
            </h3>
            <ul className="space-y-2">
              {course.whatYoullLearn && course.whatYoullLearn.length > 0 ? (
                course.whatYoullLearn.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body-md text-text-primary leading-[30px]"
                  >
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-3 text-body-md text-text-primary leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Ready to begin working on real-world data modeling projects.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-text-primary leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Expanded responsibilities as part of an existing role.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-text-primary leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Manage your time so you'll get more done in less time.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-text-primary leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Hone sharp leadership skills to manage your team.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-text-primary leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Cut expenses without sacrificing quality.</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-heading-2 font-semibold text-text-primary mb-4 tracking-[-0.5px]">
              Certification
            </h3>
            <div className="text-body-md text-text-secondary leading-[30px]">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'content',
      label: 'Content',
      content: (
        <div className="pt-6">
          <p className="text-body-md text-text-secondary">
            Course content will be displayed here.
          </p>
        </div>
      ),
    },
    {
      id: 'instructor',
      label: 'Instructor',
      content: (
        <div className="pt-6">
          <p className="text-body-md text-text-secondary">
            Instructor information will be displayed here.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative aspect-[783/449] w-full mb-8 rounded-md overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mb-8">
        <div className="text-body-md text-text-secondary leading-[30px] space-y-2">
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium.
          </p>
        </div>
      </div>

      <Tab items={tabItems} />
    </div>
  );
};
