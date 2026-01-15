import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'price' | 'category' | 'free';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-secondary font-semibold rounded-full';

  const variants = {
    default: 'bg-gray-200 text-text-primary px-3 py-1 text-body-xs',
    price: 'bg-accent text-white px-4 py-2 text-body-sm',
    category: 'bg-gray-200 text-text-primary px-3 py-1 text-body-xs',
    free: 'bg-green-500 text-white px-3 py-1 text-body-xs',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
