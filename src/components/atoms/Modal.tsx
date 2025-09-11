import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  animation?: string;
  closeIcon?: React.ReactNode;
}

const Modal = ({
  open,
  onClose,
  children,
  className = "",
  "aria-label": ariaLabel = "Modal dialog",
  animation = "animate-fadein",
  closeIcon = "×",
}: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-1 xs:px-2 sm:px-4" aria-modal="true" role="dialog" aria-label={ariaLabel}>
      <div className={`bg-white/90 dark:bg-navy-dark rounded-2xl p-2 xs:p-4 sm:p-8 max-w-md xs:max-w-xl sm:max-w-3xl md:max-w-5xl w-full relative overflow-y-auto max-h-[90vh] shadow-2xl flex flex-col items-center ${animation} ${className}`}>
        <button className="absolute top-2 xs:top-4 right-3 xs:right-6 text-2xl xs:text-3xl text-navy dark:text-white hover:text-blue-500" onClick={onClose} aria-label="Close modal">{closeIcon}</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
