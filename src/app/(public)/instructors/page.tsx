import { Section } from '@/components/layout/Section';
import { getInstructors } from '@/lib/api';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';

export default async function InstructorsPage() {
  const instructors = await getInstructors();

  return (
    <Section padding="xl" background="white" className="pt-32">
      <div className="mb-8">
        <h1 className="text-display-2 font-primary font-bold text-text-primary mb-4">
          Our Instructors
        </h1>
        <p className="text-body-lg text-text-secondary">
          Learn from the world's leading experts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <Card key={instructor.id} variant="default">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src={instructor.avatar}
                alt={instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-heading-2 font-semibold text-text-primary text-center mb-2">
              {instructor.name}
            </h3>
            {instructor.title && (
              <p className="text-body-sm text-text-secondary text-center mb-4">
                {instructor.title}
              </p>
            )}
            {instructor.rating && (
              <div className="flex justify-center mb-4">
                <Rating value={instructor.rating} showCount reviewCount={instructor.reviews} />
              </div>
            )}
            <p className="text-body-sm text-text-secondary text-center">
              {instructor.bio}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
