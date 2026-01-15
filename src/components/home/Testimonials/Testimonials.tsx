import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Rating } from '@/components/ui/Rating';
import { Testimonial } from '@/types/testimonial';
import { getTestimonials } from '@/lib/api';

export const Testimonials: React.FC = async () => {
  const testimonials = await getTestimonials();

  return (
    <Section padding="lg" background="secondary">
      <div className="relative">
        {/* Design Element decorative background */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10 z-0">
          <Image
            src="/images/designElement.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 z-0">
          <Image
            src="/images/designElement2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-display-2 font-primary font-bold text-white mb-4">
            Trusted by genius people.
          </h2>
          <p className="text-body-lg text-white/80 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis
            dictum nec.
          </p>
          <div className="space-y-2">
            <div className="text-display-1 font-primary font-bold text-accent">
              99%
            </div>
            <p className="text-body-lg text-white/80">
              Students complete courses successfully.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {testimonials.slice(0, 1).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Rating value={testimonial.rating} size="lg" className="mb-4" />
              <p className="text-body-lg text-white mb-6">
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
                  <p className="text-body-md font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-body-sm text-white/80">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Section>
  );
};
