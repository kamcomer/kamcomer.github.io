import React from 'react';

interface TagProps {
  children: React.ReactNode;
  size?: 'sm' | 'md';
  className?: string;
}

function Tag({ children, size = 'md', className = '' }: TagProps) {
  const sizeClasses = size === 'sm'
    ? 'text-[10px] px-1.5 py-0.5'
    : 'text-xs px-2 py-0.5';

  return (
    <span
      className={`${sizeClasses} bg-bg dark:bg-bg-dark border border-borderMuted dark:border-borderMuted text-muted dark:text-muted-dark font-mono ${className}`}
    >
      {children}
    </span>
  );
}

export default Tag;
