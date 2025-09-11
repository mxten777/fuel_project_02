import React from "react";

// ...Button component code (migrated from ui/Button.tsx)...

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  "aria-label"?: string;
  [key: string]: any;
}

const base = "rounded-full font-semibold transition-colors duration-500 focus:outline-none focus:ring-4 shadow-md hover:scale-105 active:scale-95 animate-fadein";
const variants = {
  primary: "bg-navy dark:bg-blue-800 text-white hover:bg-navy-dark dark:hover:bg-blue-900 focus:ring-blue-300 dark:focus:ring-blue-900",
  secondary: "bg-white dark:bg-blue-900 text-blue-600 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900",
};
const sizes = {
  sm: "px-3 py-1 text-xs xs:text-sm",
  md: "px-4 py-2 text-sm xs:text-base sm:text-lg",
  lg: "px-6 py-3 text-base xs:text-lg sm:text-lg",
};

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  loading = false,
  disabled = false,
  "aria-label": ariaLabel,
  ...props
}: ButtonProps) => (
  <button
    className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
    disabled={disabled || loading}
    aria-label={ariaLabel}
    {...props}
  >
    {loading ? (
      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin align-middle mr-2" aria-hidden="true"></span>
    ) : icon ? (
      <span className="inline-block align-middle mr-2">{icon}</span>
    ) : null}
    <span className="align-middle">{children}</span>
  </button>
);

export default Button;
