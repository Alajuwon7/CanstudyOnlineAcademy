import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export interface RatingProps {
  value: number;
  max?: number;
  showValue?: boolean;
  showCount?: boolean;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  showValue = false,
  showCount = false,
  reviewCount,
  size = 'md',
  className,
}) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn('flex items-center text-accent', sizes[size])}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} className="fill-current" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="fill-current" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </div>
      {showValue && (
        <span className="text-body-sm font-medium text-text-primary">
          {value.toFixed(1)}
        </span>
      )}
      {showCount && reviewCount !== undefined && (
        <span className="text-body-sm text-text-secondary">
          ({reviewCount} Reviews)
        </span>
      )}
    </div>
  );
};
