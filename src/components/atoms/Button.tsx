import React, { useRef } from "react";

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

const base = "font-semibold transition-colors duration-500 focus:outline-none animate-fadein relative overflow-hidden select-none group";
const variants = {
  primary: "bg-navy dark:bg-blue-800 text-white",
  secondary: "bg-white dark:bg-blue-900 text-blue-600 dark:text-blue-100",
};
const sizes = {
  sm: "text-xs xs:text-sm",
  md: "text-sm xs:text-base sm:text-lg",
  lg: "text-base xs:text-lg sm:text-lg",
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
}: ButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  // Ripple effect handler
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = btnRef.current;
    if (!button) return;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.className = "absolute bg-white/40 dark:bg-blue-200/30 rounded-full pointer-events-none animate-ripple z-10";
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  };

  return (
    <button
      ref={btnRef}
      className={
        `${base} ${variants[variant]} ${sizes[size]} ${className} ${loading ? "opacity-60 cursor-not-allowed" : ""} ` +
        "hover:scale-[1.04] active:scale-95 transition-transform duration-200"
      }
      disabled={disabled || loading}
      aria-label={ariaLabel}
      {...props}
      onClick={e => {
        if (!disabled && !loading) handleRipple(e);
        if (props.onClick) props.onClick(e);
      }}
    >
      {/* Ripple container (span will be injected here) */}
      {loading ? (
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin align-middle mr-2" aria-hidden="true"></span>
      ) : icon ? (
        <span className="inline-block align-middle mr-2">{icon}</span>
      ) : null}
      <span className="align-middle z-20 relative">{children}</span>
    </button>
  );
};

export default Button;
