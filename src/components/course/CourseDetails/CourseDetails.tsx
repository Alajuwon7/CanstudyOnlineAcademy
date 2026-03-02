'use client';

import React from 'react';
import Image from 'next/image';
import { Course } from '@/types/course';
import { Tab, TabItem } from '@/components/ui/Tab';
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
            <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
              Course description
            </h3>
            <div className="space-y-4 text-body-md leading-[30px] text-gray-800">
              {course.id === '2' ? (
                <>
                  <p>
                    The Global Education Recruiter Training Program is a professional, practical
                    training designed for individuals who want to build a profitable career or
                    business in international student recruitment across the global education
                    sector. This course prepares you to ethically recruit and place students for
                    institutions worldwide, including international high schools, colleges, and
                    universities, while also teaching you how to operate as a professional education
                    consultant.
                  </p>
                  <p>
                    While Canada is used as a case study and reference point throughout the
                    training—due to its structured education system and global recognition—the
                    skills taught in this program are fully transferable and applicable to
                    recruiting for institutions in any country. In addition to recruitment and
                    admissions knowledge, participants will learn the business side of education
                    consulting, including how to secure institutional partnerships, structure
                    services, and build a sustainable education consulting business. Training is
                    delivered by industry professionals at Canstudy Consulting, with a strong focus
                    on real-world application, ethical practice, and long-term career viability.
                  </p>
                </>
              ) : course.id === '3' ? (
                <>
                  <p>
                    The Immigration Recruitment & Support Specialist™ (IRSS) Training Program by
                    Canstudy Online Academy equips participants with the skills to operate as
                    ethical, professional immigration agents working in partnership with licensed
                    Regulated Canadian Immigration Consultants (RCICs) and Canadian immigration
                    lawyers — while managing their own independent business from anywhere in the
                    world.
                  </p>
                  <p>
                    This comprehensive 8-week program is designed for individuals seeking a
                    legitimate entry point into the Canadian immigration industry without needing to
                    become a licensed consultant. Participants will learn how to ethically recruit
                    and pre-screen clients, manage administrative documentation, and support
                    immigration files within clearly defined legal boundaries.
                  </p>
                  <p>
                    The program emphasizes compliance, professional integrity, and remote career
                    readiness, ensuring every graduate operates confidently and lawfully in a
                    support capacity within the global immigration ecosystem.
                  </p>
                </>
              ) : course.id === '4' ? (
                <>
                  <p>
                    The CELPIP Bootcamp is a fast-track, live online training program created for
                    intermediate English speakers who want structured, exam-focused preparation in a
                    short timeframe.
                  </p>
                  <p>Over two intensive sessions, students will:</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Understand CELPIP scoring criteria and examiner expectations</li>
                    <li>Master proven answering frameworks for Writing and Speaking tasks</li>
                    <li>Improve time management and strategic test navigation</li>
                    <li>Practice real exam-style questions with guided correction</li>
                    <li>Receive direct feedback to correct weaknesses quickly</li>
                  </ul>
                  <p>
                    This academic preparation course focuses on performance optimization — helping
                    you avoid common pitfalls and increase score consistency.
                  </p>
                </>
              ) : (
                <p>
                  This course focuses on building a foundational understanding of the French
                  language while gaining exposure to French culture, sounds, and pronunciation. The
                  course covers basic grammar (gender, verb conjugation patterns, word order in
                  sentences and questions), vocabulary and essential concepts needed for effective
                  communication in everyday situations. The course also delves into intermediate
                  grammatical structures and vocabulary needed to provide more detailed information
                  in a given situation.
                </p>
              )}
            </div>
          </div>

          <div className="pb-6 pt-10">
            <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
              {course.id === '4'
                ? 'By the end of this bootcamp, you will:'
                : "What you'll learn from this course"}
            </h3>
            <ul className="space-y-2">
              {course.whatYoullLearn && course.whatYoullLearn.length > 0 ? (
                course.whatYoullLearn.map((item, index) => {
                  const colonIndex = item.indexOf(':');
                  const hasColon = colonIndex !== -1;
                  const beforeColon = hasColon ? item.substring(0, colonIndex + 1) : '';
                  const afterColon = hasColon ? item.substring(colonIndex + 1) : item;

                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800"
                    >
                      <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                      <span>
                        {hasColon ? (
                          <>
                            <span className="font-semibold">{beforeColon}</span>
                            {afterColon}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  );
                })
              ) : (
                <>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Ready to begin working on real-world data modeling projects.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Expanded responsibilities as part of an existing role.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Manage your time so you'll get more done in less time.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Hone sharp leadership skills to manage your team.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Cut expenses without sacrificing quality.</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="pb-6 pt-10">
            <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
              {course.id === '2'
                ? 'Benefits of This Course'
                : course.id === '4'
                  ? 'Benefits of This Bootcamp'
                  : 'Benefits of doing the program'}
            </h3>
            <ul className="space-y-2">
              {course.id === '2' ? (
                <>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Learn both the career and business side of international education
                      recruitment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Build a globally transferable education consulting business not limited by
                      borders.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Gain compliance-safe training that protects you, your clients, and partner
                      institutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Create a remote-friendly, flexible career that allows you to work from
                      anywhere in the world.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Develop income-generating skills that empower you to help students and
                      families access global education opportunities.
                    </span>
                  </li>
                </>
              ) : course.id === '3' ? (
                <>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Gain a legitimate entry point into the immigration industry without requiring
                      a license.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Build a remote-friendly, globally flexible career supporting immigration
                      professionals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Receive compliance-safe training that protects you, your clients, and your
                      business.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Develop practical, job-ready, and business-ready skills for immediate
                      application.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      Earn a Certificate of Completion from Canstudy Online Academy, recognized for
                      professional credibility.
                    </span>
                  </li>
                </>
              ) : course.id === '4' ? (
                <>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Intensive preparation in just 2 days</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Real-time instruction and interaction</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Practical scoring strategies (not theory)</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Confidence-building practice under timed conditions</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Personalized guidance from an experienced educator</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      <strong>Boost Your Canadian PR Score</strong> - Improve your French
                      proficiency to earn additional CRS points and strengthen your Express Entry or
                      PR application.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      <strong>Career & Study Advantage</strong> - French skills open doors to
                      bilingual jobs, scholarships, and study opportunities across Canada—especially
                      in Quebec and bilingual provinces.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      <strong>Structured, Results-Driven Learning</strong> - A guided program
                      designed for real progress, not just theory—focused on practical French for
                      exams, work, and daily communication.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      <strong>Exam & Immigration Focused</strong> - Tailored support for TEF/TCF
                      preparation and the specific language benchmarks required for Canadian
                      immigration pathways.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      <strong>Expert Support & Accountability</strong> - Learn with experienced
                      instructors and a supportive cohort that keeps you motivated and consistent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-700">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>
                      <strong>Confidence in Real-Life French</strong> - Develop speaking, listening,
                      reading, and writing skills to confidently navigate interviews, exams, and
                      everyday situations.
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {course.id === '2' ? (
            <>
              <div className="pb-6 pt-10">
                <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Who This Course Is For
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Aspiring and established education consultants</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Recruitment agents seeking to expand globally</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Entrepreneurs entering the international education sector</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>School counselors, advisors, and administrators</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Professionals transitioning into education-based business roles</span>
                  </li>
                </ul>
              </div>
              <div className="pb-6 pt-10">
                <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Important Note
                </h3>
                <p className="text-body-md leading-[30px] text-gray-800">
                  This professional development program is open to participants worldwide. The
                  training does not provide immigration or legal advice. All study permit and visa
                  discussions are contextual, based on publicly available government information.
                </p>
              </div>
            </>
          ) : course.id === '3' ? (
            <div className="pb-6 pt-10">
              <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                Who This Course Is For
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                  <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                  <span>
                    Individuals outside Canada seeking a legitimate remote career in immigration
                    support
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                  <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                  <span>
                    Professionals aspiring to collaborate with RCICs and immigration lawyers
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                  <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                  <span>Entrepreneurs building global immigration support agencies</span>
                </li>
                <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                  <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                  <span>
                    Administrative professionals looking to upskill in compliance-based workflows
                  </span>
                </li>
              </ul>
            </div>
          ) : course.id === '4' ? (
            <>
              <div className="pb-6 pt-10">
                <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Who This Course Is For
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Individuals preparing for Canadian Permanent Residency</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Test takers who previously scored below the target</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Professionals requiring CELPIP for immigration or licensing</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Students needing structured, short-term exam preparation</span>
                  </li>
                </ul>
              </div>
              <div className="pb-6 pt-10">
                <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Student Resources
                </h3>
                <p className="mb-3 text-body-md leading-[30px] text-gray-800">
                  All enrolled students receive:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Access to recordings</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Study guide material</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md leading-[30px] text-gray-800">
                    <FiCheck className="mt-1.5 flex-shrink-0 text-xl text-accent" />
                    <span>Course slides</span>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
        </div>
      ),
    },
    {
      id: 'content',
      label: 'Content',
      content: (
        <div className="pt-6">
          {course.id === '2' || course.id === '3' ? (
            <p className="text-body-md leading-[30px] text-gray-800">
              Course content will be provided upon enrollment completion.
            </p>
          ) : course.id === '4' ? (
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Day 1 – Listening & Reading Mastery
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Overview of CELPIP exam format
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Listening strategies for identifying keywords and traps
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Reading techniques for speed, inference, and accuracy
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Timed practice session with instructor breakdown
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Day 2 – Writing & Speaking Excellence
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Writing task structure templates (Email & Survey responses)
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Common grammar and clarity mistakes to avoid
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Speaking response frameworks for each task type
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Live mock practice and corrective feedback
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Level 1 */}
              <div>
                <h3 className="mb-3 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Level 1 – Foundations of French (A1-A2)
                </h3>
                <p className="text-body-md leading-[30px] text-gray-800">
                  Build your basics in pronunciation, sentence structure, gender, and verb
                  conjugation. Learn to introduce yourself, ask and answer everyday questions, and
                  express simple ideas with confidence.
                </p>
              </div>

              {/* Level 2 */}
              <div>
                <h3 className="mb-3 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Level 2 – Everyday Communication (B1)
                </h3>
                <p className="text-body-md leading-[30px] text-gray-800">
                  Expand your vocabulary and grammar while learning to narrate past events, share
                  opinions, and describe experiences using Perfect and Imperfect tenses.
                </p>
              </div>

              {/* Level 3 */}
              <div>
                <h3 className="mb-3 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Level 3 – Advanced Conversation & Expression (B2)
                </h3>
                <p className="text-body-md leading-[30px] text-gray-800">
                  Master complex grammar forms like the Conditional and Subjunctive tenses. Engage
                  in debates, discussions, and real-world conversations about work, travel, and
                  culture.
                </p>
              </div>

              {/* Live Sessions */}
              <div>
                <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                  Live Sessions Include:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Pronunciation and listening drills
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Interactive dialogue practice
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Weekly grammar and vocabulary games
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-lg leading-none text-accent">•</span>
                    <span className="text-body-md text-gray-800">
                      Cultural immersion activities
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div>
                <p className="text-body-md leading-[30px] text-gray-800">
                  By the end of the program, you'll be able to communicate clearly, express nuanced
                  thoughts, and navigate French-speaking environments with ease.
                </p>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'instructor',
      label: 'Instructor',
      content: (
        <div className="pt-6">
          {course.id === '2' || course.id === '3' || course.id === '4' ? (
            <div className="space-y-4">
              <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                Meet Your Instructor: Mrs. Monique Myers
              </h3>
              <p className="text-body-md font-semibold leading-[30px] text-gray-800">
                Founder & CEO, Canstudy Consulting Ltd. | Myers Immigration Services Inc.
              </p>
              <p className="text-body-md font-semibold leading-[30px] text-gray-800">
                International Education Consultant | RCIC #R731184
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                {course.id === '2'
                  ? 'With over 8 years of experience in Canadian university administration and a proven track record of helping students and professionals navigate global education systems, Monique Myers brings real-world expertise and leadership to the Global Education Recruiter Training Program.'
                  : course.id === '4'
                    ? 'With over 8 years of experience in Canadian university administration and a proven track record of helping students and professionals navigate global education systems, Monique Myers brings real-world expertise and leadership to the CELPIP 2-Day Bootcamp.'
                    : 'With over 8 years of experience in Canadian university administration and a proven track record of helping students and professionals navigate global education systems, Monique Myers brings real-world expertise and leadership to the Immigration Recruitment & Support Specialist™ Training Program.'}
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                A Caribbean native who began her own international journey as a student in Toronto,
                Monique transformed her academic foundation in Criminology and Political Science
                into a purpose-driven career in international education and immigration consulting.
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                After earning permanent residency in Canada, she further specialized in Canadian
                Immigration Law and Policy, becoming a Regulated Canadian Immigration Consultant
                (RCIC). Through her companies — Canstudy Consulting and Myers Immigration Services —
                she has trained and advised hundreds of students, consultants, and partner
                institutions worldwide.
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                {course.id === '2'
                  ? 'Today, Monique is recognized for her practical, ethics-driven approach to education recruitment and her commitment to preparing the next generation of professionals to thrive in the global education industry.'
                  : course.id === '4'
                    ? 'Today, Monique is recognized for her practical, ethics-driven approach to test preparation and her commitment to helping learners achieve their immigration and academic goals through focused, results-driven training.'
                    : 'Today, Monique is recognized for her practical, ethics-driven approach to immigration recruitment and her commitment to preparing the next generation of professionals to thrive in the global immigration industry.'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="mb-4 text-heading-2 font-semibold tracking-[-0.5px] text-black">
                Meet Your Instructor: Ms. Cherice Parsotan
              </h3>
              <p className="text-body-md font-semibold leading-[30px] text-gray-800">
                French, Spanish, and ESL Tutor | Education Consultant, Canstudy Consulting Ltd.
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                With over 15 years of experience teaching French, Spanish, and English as a Second
                Language (ESL) to learners worldwide, Cherice Parsotan brings a wealth of linguistic
                expertise and cultural awareness to every class. She holds a Bachelor's degree in
                Spanish and French and has worked with students across a wide range of ages, goals,
                and educational backgrounds.
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                Cherice's teaching philosophy is both innovative and student-centered, blending
                proven language acquisition techniques with interactive, real-world learning
                experiences. Her classes are designed to help students not only grasp grammar and
                vocabulary but also gain the confidence and fluency to communicate naturally in
                diverse settings.
              </p>
              <p className="text-body-md leading-[30px] text-gray-800">
                As an Education Consultant with Canstudy Consulting Ltd., Cherice combines her deep
                understanding of language learning with her knowledge of international education
                pathways — making her an exceptional mentor for students who aspire to study, work,
                or thrive in multilingual environments.
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'payment',
      label: 'Payment Options',
      href: '/payment-options',
      content: (
        <div className="pt-6">
          <p className="mb-4 text-body-md leading-[30px] text-gray-800">
            Please note that we accept Klarna, Affirm, AfterPay, E-transfer, and PayPal.
          </p>
          <p className="text-body-md leading-[30px] text-gray-800">
            If you would like to pay using one of these payment methods, Please contact our office
            at{' '}
            <a href="mailto:info@canstudyconsult.com" className="text-accent hover:underline">
              info@canstudyconsult.com
            </a>{' '}
            or{' '}
            <a href="tel:6478951747" className="text-accent hover:underline">
              647-895-1747
            </a>
            .
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative mb-8 aspect-[783/449] w-full overflow-hidden rounded-md">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className={`object-cover ${course.id === '4' ? 'object-top' : ''}`}
        />
      </div>

      <div className="mb-8">
        {course.id === '1' && (
          <h2 className="mb-4 text-heading-1 font-semibold tracking-[-0.5px] text-black">
            Beginner-friendly. Career-boosting. Globally relevant.
          </h2>
        )}
        {course.id === '2' && (
          <h2 className="mb-4 text-heading-1 font-semibold tracking-[-0.5px] text-black">
            Professional. Practical. Globally Transferable.
          </h2>
        )}
        {course.id === '3' && (
          <h2 className="mb-4 text-heading-1 font-semibold tracking-[-0.5px] text-black">
            Compliance-Focused. Career-Driven. Globally Accessible.
          </h2>
        )}
        {course.id === '4' && (
          <h2 className="mb-4 text-heading-1 font-semibold tracking-[-0.5px] text-black">
            Focused. Strategic. Results-Driven.
          </h2>
        )}
        <div className="text-body-md leading-[30px] text-gray-800">
          {course.id === '2' ? (
            <p>
              Step into the world of international education recruitment and learn how to build a
              successful, ethical, and globally recognized career in the field. This hands-on
              program teaches you how to recruit students for schools, colleges, and universities
              worldwide while mastering the business side of education consulting. Through live,
              instructor-led sessions, you'll gain real-world knowledge on admissions systems,
              institutional partnerships, and compliance-safe recruitment practices. Whether you're
              starting out or expanding your consulting business, you'll graduate ready to operate
              confidently in the global education industry.
            </p>
          ) : course.id === '3' ? (
            <p>
              Launch a legitimate career in the global immigration industry — no license required.
              This professional, instructor-led program trains you to ethically recruit and support
              clients for licensed RCICs and immigration lawyers while managing your own independent
              business. Through live classes, real-world templates, and compliance-based training,
              you'll gain the knowledge, confidence, and systems to operate as a trusted Immigration
              Recruitment & Support Specialist™ anywhere in the world.
            </p>
          ) : course.id === '4' ? (
            <>
              <p>
                Prepare with clarity and confidence in this intensive 2-day CELPIP Bootcamp designed
                to help you maximize your score efficiently. Whether you’re taking the CELPIP for
                permanent residency, professional requirements, or academic advancement, this live
                training will equip you with targeted strategies across Listening, Reading, Writing,
                and Speaking.
              </p>
              <p>
                Through real test simulations, structured feedback, and practical techniques taught
                by an experienced instructor, you’ll strengthen your performance under timed
                conditions and walk into your exam fully prepared.
              </p>
              <p>
                This isn’t generic preparation — it’s focused training designed for measurable
                results.
              </p>
            </>
          ) : (
            <p>
              Discover how learning French can open global doors — from career advancement and
              travel to international networking and education. In this interactive course, you'll
              build fluency through real conversations, cultural insights, and live guidance from
              expert instructors. No matter your background or goals, you'll gain the confidence to
              communicate, connect, and stand out in a multilingual world.
            </p>
          )}
        </div>
      </div>

      <Tab items={tabItems} />
    </div>
  );
};
