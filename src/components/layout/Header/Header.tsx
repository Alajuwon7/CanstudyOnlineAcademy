'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { Container } from '../Container';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside or on route change
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <Container>
        <nav className="relative flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center gap-1 z-10 min-w-0 flex-shrink">
            <div className="relative w-40 h-10 md:w-48 md:h-12 flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/kingaat7/image/upload/v1769453016/LogoCOA-1_q7jkhk.png"
                alt="Canstudy Online Academy Logo"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
            <span className="hidden md:inline font-primary font-bold text-lg md:text-xl text-secondary-blue-dark transition-colors whitespace-nowrap">
              Canstudy Online Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {NAVIGATION_ITEMS.map((item) => {
              // For home page, use exact match; for others, check if pathname starts with the href
              const isActive =
                item.href === '/'
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-heading-1 font-semibold transition-all duration-200 group px-4 py-2 rounded-lg ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-secondary-blue-dark hover:text-secondary-blue-light'
                  }`}
                >
                  {item.label}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-blue-light transition-all duration-200 group-hover:w-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-secondary-blue-dark transition-colors z-10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {NAVIGATION_ITEMS.map((item) => {
                // For home page, use exact match; for others, check if pathname starts with the href
                const isActive =
                  item.href === '/'
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-body-md font-medium transition-colors py-2 px-4 rounded-lg border-b border-gray-200 ${
                      isActive
                        ? 'bg-accent text-white border-accent'
                        : 'text-secondary-blue-dark hover:text-secondary-blue-light'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
