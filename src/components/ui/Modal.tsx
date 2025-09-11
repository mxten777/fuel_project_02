// Moved to ../atoms/Modal.tsx
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ open, onClose, children, className = "" }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-1 xs:px-2 sm:px-4">
      <div className={`bg-white/90 dark:bg-navy-dark rounded-2xl p-2 xs:p-4 sm:p-8 max-w-md xs:max-w-xl sm:max-w-3xl md:max-w-5xl w-full relative overflow-y-auto max-h-[90vh] shadow-2xl flex flex-col items-center ${className}`}>
        <button className="absolute top-2 xs:top-4 right-3 xs:right-6 text-2xl xs:text-3xl text-navy dark:text-white hover:text-blue-500" onClick={onClose} aria-label="Close modal">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
