import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  accent?: boolean;
  className?: string;
}

const sizeClasses = {
  lg: 'text-3xl',
  md: 'text-2xl',
  sm: 'text-xl',
};

function SectionHeading({ children, size = 'lg', accent = true, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`font-bold text-primary dark:text-primary-dark ${
        sizeClasses[size]
      } ${
        accent ? 'border-l-4 border-primary dark:border-primary-dark pl-4' : ''
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
