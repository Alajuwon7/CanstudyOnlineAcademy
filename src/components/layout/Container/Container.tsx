import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className,
  ...props
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-container mx-auto',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'w-full px-4 md:px-md lg:px-lg xl:px-xl',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
