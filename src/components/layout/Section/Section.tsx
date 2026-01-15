import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'primary' | 'secondary';
}

export const Section: React.FC<SectionProps> = ({
  children,
  padding = 'lg',
  background = 'white',
  className,
  ...props
}) => {
  const paddings = {
    none: 'py-0',
    sm: 'py-8 md:py-4xl',
    md: 'py-12 md:py-5xl',
    lg: 'py-12 md:py-16 lg:py-6xl',
    xl: 'py-16 md:py-20 lg:py-9xl',
  };

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary-blue-dark text-white',
  };

  return (
    <section
      className={cn(paddings[padding], backgrounds[background], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};
