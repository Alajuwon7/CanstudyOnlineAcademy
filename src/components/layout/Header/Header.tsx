'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { Container } from '../Container';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header: React.FC = () => {
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
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-bold text-lg md:text-xl text-white">e</span>
            </div>
            <span className="font-primary font-bold text-lg md:text-xl text-secondary-blue-dark transition-colors">
              Canstudy Online Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-heading-1 font-semibold text-secondary-blue-dark hover:text-secondary-blue-light transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-blue-light transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
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
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-body-md font-medium text-secondary-blue-dark hover:text-secondary-blue-light transition-colors py-2 border-b border-gray-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
