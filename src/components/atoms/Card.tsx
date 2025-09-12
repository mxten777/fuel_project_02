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
    className={`flex flex-col items-center w-full h-full min-w-0 transition-all duration-500 ${animation} ${className} 
      hover:scale-[1.03] active:scale-95 hover:shadow-xl focus:scale-[1.03] focus:shadow-xl cursor-pointer`}
    style={style}
    tabIndex={tabIndex}
    aria-label={ariaLabel}
  >
    {icon && <span className="mb-2 text-3xl xs:text-4xl sm:text-5xl">{icon}</span>}
    {children}
  </div>
);

export default Card;
