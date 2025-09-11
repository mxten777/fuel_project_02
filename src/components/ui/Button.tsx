// Moved to ../atoms/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md';
const variants = {
  primary:
    'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 dark:from-blue-700 dark:to-blue-900 dark:hover:from-blue-800 dark:hover:to-blue-950 text-white',
  secondary:
    'bg-navy dark:bg-blue-800 hover:bg-navy-dark dark:hover:bg-blue-900 text-white',
  outline:
    'bg-transparent border border-blue-500 text-blue-600 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900',
  ghost:
    'bg-transparent text-blue-600 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900',
};
const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-10 py-3 text-lg',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className = '', children, ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={[
        base,
        variants[variant],
        sizes[size],
        'hover:scale-105 active:scale-95 animate-fadein',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
