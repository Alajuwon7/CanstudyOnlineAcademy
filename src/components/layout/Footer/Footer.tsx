import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiMail } from 'react-icons/fi';
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { Container } from '../Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { NAVIGATION_ITEMS, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-secondary-blue-light via-secondary-blue-dark to-secondary-blue-darker text-white overflow-hidden">
        {/* Background decorative elements - hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
          {/* Design Element 2 - Circular ring gradient */}
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
          {/* Design Element - Additional decorative element */}
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
      <Container className="relative z-10">
        <div className="py-12 md:py-16 lg:py-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-4 md:mb-6 md:block">
              <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mx-auto md:mx-0">
                <Image
                  src="https://res.cloudinary.com/kingaat7/image/upload/v1769454070/LogoCOA-1FooterCircle_mw0nxx.png"
                  alt="Canstudy Online Academy Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
            </Link>
            <p className="text-body-sm md:text-body-md text-white/80 mb-4 md:mb-6">
              We are providing high-quality courses for about five years.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <FaTiktok />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Popular Courses */}
          <div className="text-center md:text-left">
            <h3 className="text-heading-2 font-semibold mb-4">Popular courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses?category=business"
                  className="text-body-md text-white/80 hover:text-accent transition-colors"
                >
                  Business finance
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=design"
                  className="text-body-md text-white/80 hover:text-accent transition-colors"
                >
                  Advanced design
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=development"
                  className="text-body-md text-white/80 hover:text-accent transition-colors"
                >
                  Web development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=data"
                  className="text-body-md text-white/80 hover:text-accent transition-colors"
                >
                  Data visualization
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div className="text-center md:text-left">
            <h3 className="text-heading-2 font-semibold mb-4">Need help?</h3>
            <div className="space-y-3">
              <div>
                <p className="text-body-sm text-white/60 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/16478951747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md text-accent font-semibold flex items-center gap-2"
                >
                  <FaWhatsapp />
                  647-895-1747
                </a>
              </div>
              <div>
                <p className="text-body-sm text-white/60 mb-1">Toll Free</p>
                <a
                  href="tel:+18664763433"
                  className="text-body-md text-accent font-semibold flex items-center gap-2"
                >
                  <FiPhone />
                  +1-866-476-3433
                </a>
              </div>
              <div>
                <p className="text-body-sm text-white/60 mb-1">Need support?</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-body-md text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FiMail />
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-heading-2 font-semibold mb-4">
              Subscribe our newsletter
            </h3>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="accent" size="md" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-body-xs md:text-body-sm text-white/60 max-w-2xl md:max-w-none">
              © 2020 Studi 2006 Study Online Academy - Powered by Camstudy
              Consulting Ltd.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              {NAVIGATION_ITEMS.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-xs md:text-body-sm text-white/80 hover:text-accent transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
