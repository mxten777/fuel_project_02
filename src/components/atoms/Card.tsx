import React from "react";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  children: React.ReactNode;
  icon?: React.ReactNode;
  "aria-label"?: string;
  animation?: string;
}

const Card = ({
  className = "",
  style,
  tabIndex,
  children,
  icon,
  "aria-label": ariaLabel,
  animation = "animate-fadein",
}: CardProps) => (
  <div
    className={
      `flex flex-col items-center bg-white/80 dark:bg-navy/80 text-navy dark:text-blue-100 rounded-2xl p-2 xs:p-3 sm:p-8 shadow-xl border border-blue-100 dark:border-navy-light/30 backdrop-blur-md min-w-0 w-full max-w-xs mx-auto transition-all transition-colors duration-500 ${animation} hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl ${className}`
    }
    style={style}
    tabIndex={tabIndex}
    aria-label={ariaLabel}
  >
    {icon && <span className="mb-2 text-3xl xs:text-4xl sm:text-5xl drop-shadow-lg">{icon}</span>}
    {children}
  </div>
);

export default Card;
