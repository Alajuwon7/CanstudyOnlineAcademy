import { Section } from '@/components/layout/Section';
import { getTestimonials } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import Image from 'next/image';

export default async function TestimonialPage() {
  const testimonials = await getTestimonials();

  return (
    <Section padding="xl" background="white" className="pt-32">
      <div className="mb-8">
        <h1 className="text-display-2 font-primary font-bold text-text-primary mb-4">
          Student Testimonials
        </h1>
        <p className="text-body-lg text-text-secondary">
          See what our students have to say about their learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} variant="testimonial">
            <Rating value={testimonial.rating} size="lg" className="mb-4" />
            <p className="text-body-md text-text-secondary mb-6">
              "{testimonial.comment}"
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-body-md font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-body-sm text-text-secondary">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
