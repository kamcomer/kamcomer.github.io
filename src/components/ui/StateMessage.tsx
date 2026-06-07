import React from 'react';

interface StateMessageProps {
  children: React.ReactNode;
  variant: 'loading' | 'error';
  className?: string;
}

function StateMessage({ children, variant, className = '' }: StateMessageProps) {
  return (
    <div
      className={`text-center py-12 ${
        variant === 'error'
          ? 'text-danger dark:text-danger'
          : 'text-muted dark:text-muted-dark'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default StateMessage;
