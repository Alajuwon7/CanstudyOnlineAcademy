'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { Container } from '../Container';
import { Button } from '@/components/ui/Button';
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
          : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center">
              <span className={`font-bold text-lg md:text-xl ${scrolled ? 'text-primary' : 'text-primary'}`}>e</span>
            </div>
            <span className={`font-primary font-bold text-lg md:text-xl transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              learning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-body-sm md:text-body-md font-medium transition-colors ${
                  scrolled
                    ? 'text-text-primary hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button
              variant={scrolled ? 'primary' : 'accent'}
              size="sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
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
                  className="block text-body-md font-medium text-text-primary hover:text-primary py-2 border-b border-gray-200"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
