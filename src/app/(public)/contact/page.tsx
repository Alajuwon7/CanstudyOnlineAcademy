'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Section } from '@/components/layout/Section';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // Handle form submission
  };

  return (
    <Section padding="xl" background="white" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-display-2 font-primary font-bold text-text-primary mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-body-lg text-text-secondary text-center mb-12">
          Get in touch with us for any questions or inquiries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FiPhone className="text-2xl text-primary" />
            </div>
            <h3 className="text-heading-2 font-semibold text-text-primary mb-2">
              Phone
            </h3>
            <p className="text-body-md text-text-secondary">{CONTACT_INFO.phone}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FiMail className="text-2xl text-primary" />
            </div>
            <h3 className="text-heading-2 font-semibold text-text-primary mb-2">
              Email
            </h3>
            <p className="text-body-md text-text-secondary">{CONTACT_INFO.email}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FiMapPin className="text-2xl text-primary" />
            </div>
            <h3 className="text-heading-2 font-semibold text-text-primary mb-2">
              Address
            </h3>
            <p className="text-body-md text-text-secondary">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Name"
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            error={errors.email?.message}
          />
          <div>
            <label className="block text-body-sm font-medium text-text-primary mb-2">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={6}
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            {errors.message && (
              <p className="mt-1 text-body-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button variant="primary" size="lg" type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}
