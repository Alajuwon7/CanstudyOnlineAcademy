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
            <h3 className="text-heading-2 font-semibold text-black mb-4 tracking-[-0.5px]">
              Course description
            </h3>
            <div className="space-y-4 text-body-md text-gray-800 leading-[30px]">
              {course.id === '2' ? (
                <>
                  <p>
                    The Global Education Recruiter Training Program is a professional, practical training designed for individuals who want to build a profitable career or business in international student recruitment across the global education sector. This course prepares you to ethically recruit and place students for institutions worldwide, including international high schools, colleges, and universities, while also teaching you how to operate as a professional education consultant.
                  </p>
                  <p>
                    While Canada is used as a case study and reference point throughout the training—due to its structured education system and global recognition—the skills taught in this program are fully transferable and applicable to recruiting for institutions in any country. In addition to recruitment and admissions knowledge, participants will learn the business side of education consulting, including how to secure institutional partnerships, structure services, and build a sustainable education consulting business. Training is delivered by industry professionals at Canstudy Consulting, with a strong focus on real-world application, ethical practice, and long-term career viability.
                  </p>
                </>
              ) : (
                <p>
                  This course focuses on building a foundational understanding of the French language while gaining exposure to French culture, sounds, and pronunciation. The course covers basic grammar (gender, verb conjugation patterns, word order in sentences and questions), vocabulary and essential concepts needed for effective communication in everyday situations. The course also delves into intermediate grammatical structures and vocabulary needed to provide more detailed information in a given situation.
                </p>
              )}
            </div>
          </div>

          <div className="pt-10 pb-6">
            <h3 className="text-heading-2 font-semibold text-black mb-4 tracking-[-0.5px]">
              What you'll learn from this course
            </h3>
            <ul className="space-y-2">
              {course.whatYoullLearn && course.whatYoullLearn.length > 0 ? (
                course.whatYoullLearn.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body-md text-gray-800 leading-[30px]"
                  >
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Ready to begin working on real-world data modeling projects.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Expanded responsibilities as part of an existing role.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Manage your time so you'll get more done in less time.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Hone sharp leadership skills to manage your team.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                    <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                    <span>Cut expenses without sacrificing quality.</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="pt-10 pb-6">
            <h3 className="text-heading-2 font-semibold text-black mb-4 tracking-[-0.5px]">
              Benefits of doing the program
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                <span>
                  <strong>Boost Your Canadian PR Score</strong> - Improve your French proficiency to earn additional CRS points and strengthen your Express Entry or PR application.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                <span>
                  <strong>Career & Study Advantage</strong> - French skills open doors to bilingual jobs, scholarships, and study opportunities across Canada—especially in Quebec and bilingual provinces.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                <span>
                  <strong>Structured, Results-Driven Learning</strong> - A guided program designed for real progress, not just theory—focused on practical French for exams, work, and daily communication.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                <span>
                  <strong>Exam & Immigration Focused</strong> - Tailored support for TEF/TCF preparation and the specific language benchmarks required for Canadian immigration pathways.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                <span>
                  <strong>Expert Support & Accountability</strong> - Learn with experienced instructors and a supportive cohort that keeps you motivated and consistent.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md text-gray-700 leading-[30px]">
                <FiCheck className="text-accent text-xl flex-shrink-0 mt-1.5" />
                <span>
                  <strong>Confidence in Real-Life French</strong> - Develop speaking, listening, reading, and writing skills to confidently navigate interviews, exams, and everyday situations.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'content',
      label: 'Content',
      content: (
        <div className="pt-6 space-y-8">
          {/* Level 1 */}
          <div>
            <h3 className="text-heading-2 font-semibold text-black mb-3 tracking-[-0.5px]">
              Level 1 – Foundations of French (A1-A2)
            </h3>
            <p className="text-body-md text-gray-800 leading-[30px]">
              Build your basics in pronunciation, sentence structure, gender, and verb conjugation. Learn to introduce yourself, ask and answer everyday questions, and express simple ideas with confidence.
            </p>
          </div>

          {/* Level 2 */}
          <div>
            <h3 className="text-heading-2 font-semibold text-black mb-3 tracking-[-0.5px]">
              Level 2 – Everyday Communication (B1)
            </h3>
            <p className="text-body-md text-gray-800 leading-[30px]">
              Expand your vocabulary and grammar while learning to narrate past events, share opinions, and describe experiences using Perfect and Imperfect tenses.
            </p>
          </div>

          {/* Level 3 */}
          <div>
            <h3 className="text-heading-2 font-semibold text-black mb-3 tracking-[-0.5px]">
              Level 3 – Advanced Conversation & Expression (B2)
            </h3>
            <p className="text-body-md text-gray-800 leading-[30px]">
              Master complex grammar forms like the Conditional and Subjunctive tenses. Engage in debates, discussions, and real-world conversations about work, travel, and culture.
            </p>
          </div>

          {/* Live Sessions */}
          <div>
            <h3 className="text-heading-2 font-semibold text-black mb-4 tracking-[-0.5px]">
              Live Sessions Include:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-baseline gap-2">
                <span className="text-accent text-lg leading-none">•</span>
                <span className="text-body-md text-gray-800">Pronunciation and listening drills</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent text-lg leading-none">•</span>
                <span className="text-body-md text-gray-800">Interactive dialogue practice</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent text-lg leading-none">•</span>
                <span className="text-body-md text-gray-800">Weekly grammar and vocabulary games</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent text-lg leading-none">•</span>
                <span className="text-body-md text-gray-800">Cultural immersion activities</span>
              </li>
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <p className="text-body-md text-gray-800 leading-[30px]">
              By the end of the program, you'll be able to communicate clearly, express nuanced thoughts, and navigate French-speaking environments with ease.
            </p>
          </div>
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
        {course.id === '1' && (
          <h2 className="text-heading-1 font-semibold text-black mb-4 tracking-[-0.5px]">
            Beginner-friendly. Career-boosting. Globally relevant.
          </h2>
        )}
        {course.id === '2' && (
          <h2 className="text-heading-1 font-semibold text-black mb-4 tracking-[-0.5px]">
            Professional. Practical. Globally Transferable.
          </h2>
        )}
        <div className="text-body-md text-gray-800 leading-[30px]">
          {course.id === '2' ? (
            <p>
              Step into the world of international education recruitment and learn how to build a successful, ethical, and globally recognized career in the field. This hands-on program teaches you how to recruit students for schools, colleges, and universities worldwide while mastering the business side of education consulting. Through live, instructor-led sessions, you'll gain real-world knowledge on admissions systems, institutional partnerships, and compliance-safe recruitment practices. Whether you're starting out or expanding your consulting business, you'll graduate ready to operate confidently in the global education industry.
            </p>
          ) : (
            <p>
              Discover how learning French can open global doors — from career advancement and travel to international networking and education. In this interactive course, you'll build fluency through real conversations, cultural insights, and live guidance from expert instructors. No matter your background or goals, you'll gain the confidence to communicate, connect, and stand out in a multilingual world.
            </p>
          )}
        </div>
      </div>

      <Tab items={tabItems} />
    </div>
  );
};
