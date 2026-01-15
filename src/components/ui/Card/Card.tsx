import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'course' | 'testimonial' | 'sidebar';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-lg bg-white';

  const variants = {
    default: 'shadow-card p-6',
    course: 'shadow-card overflow-hidden',
    testimonial: 'shadow-card p-6 bg-gray-100',
    sidebar: 'shadow-card p-6',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
