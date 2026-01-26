import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { FiPhone, FiMail, FiMapPin, FiUsers, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[250px] md:h-[320px] lg:h-[400px]">
        <Image
          src="https://res.cloudinary.com/kingaat7/image/upload/v1742941666/CS-contactSyndi_tc8vpg.png"
          alt="Contact Us"
          fill
          className="object-cover object-[center_75%]"
          priority
          sizes="100vw"
        />
      </section>

      <Section padding="xl" background="white" className="!py-[90px]">
      <div className="max-w-4xl mx-auto">
        {/* Top Section with Label, Heading, and Intro Text */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <span className="inline-block px-3 py-1.5 rounded-full bg-gray-100 text-body-sm font-medium text-text-secondary mb-4">
                HOW CAN WE HELP YOU?
              </span>
              <h1 className="text-display-1 md:text-[42px] lg:text-[48px] font-primary font-bold text-text-primary mb-4">
                Get in touch with us!
              </h1>
            </div>
            <div className="flex-1 md:max-w-md">
              <p className="text-body-md md:text-body-lg text-text-secondary leading-relaxed">
                We're here to support you and answer any questions you may have. Feel free to reach out—we look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Office location */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <FiMapPin className="text-2xl text-text-primary" />
              <h3 className="text-heading-2 font-semibold text-text-primary">
                Office location
              </h3>
            </div>
            <div className="h-px bg-gray-200 mb-3"></div>
            <div className="space-y-1">
              <p className="text-body-md text-text-secondary">
                {CONTACT_INFO.address}
              </p>
              <p className="text-body-md text-text-secondary">
                {CONTACT_INFO.city}
              </p>
            </div>
          </div>

          {/* Send a message */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <FiMail className="text-2xl text-text-primary" />
              <h3 className="text-heading-2 font-semibold text-text-primary">
                Send a message
              </h3>
            </div>
            <div className="h-px bg-gray-200 mb-3"></div>
            <div className="space-y-1">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-body-md text-text-secondary hover:text-accent transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* WhatsApp & Tollfree */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <FiPhone className="text-2xl text-text-primary" />
              <h3 className="text-heading-2 font-semibold text-text-primary">
                WhatsApp & Tollfree
              </h3>
            </div>
            <div className="h-px bg-gray-200 mb-3"></div>
            <div className="space-y-1">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                className="block text-body-md text-text-secondary hover:text-accent transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`tel:${CONTACT_INFO.tollfree.replace(/[-\s]/g, '')}`}
                className="block text-body-md text-text-secondary hover:text-accent transition-colors"
              >
                {CONTACT_INFO.tollfree}
              </a>
            </div>
          </div>

          {/* Our Social Platforms */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <FiUsers className="text-2xl text-text-primary" />
              <h3 className="text-heading-2 font-semibold text-text-primary">
                Our Social Platforms
              </h3>
            </div>
            <div className="h-px bg-gray-200 mb-3"></div>
            <div className="space-y-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-md text-text-secondary hover:text-accent transition-colors group"
              >
                <FiInstagram className="text-xl text-text-primary group-hover:text-accent transition-colors" />
                <span>
                  Instagram: <span className="font-medium">{CONTACT_INFO.social.instagram}</span>
                </span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-md text-text-secondary hover:text-accent transition-colors group"
              >
                <FiFacebook className="text-xl text-text-primary group-hover:text-accent transition-colors" />
                <span>
                  Facebook: <span className="font-medium">{CONTACT_INFO.social.facebook}</span>
                </span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-md text-text-secondary hover:text-accent transition-colors group"
              >
                <FiLinkedin className="text-xl text-text-primary group-hover:text-accent transition-colors" />
                <span>
                  Linkedin: <span className="font-medium">{CONTACT_INFO.social.linkedin}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 text-body-md text-text-secondary">
                <FaTiktok className="text-xl text-text-primary" />
                <span>
                  TikTok: <span className="font-medium">{CONTACT_INFO.social.tiktok}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
}
