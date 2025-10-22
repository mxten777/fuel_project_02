import React, { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  animation?: string;
  closeIcon?: React.ReactNode;
}

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]'
].join(',');

const Modal = ({
  open,
  onClose,
  children,
  className = "",
  "aria-label": ariaLabel = "Modal dialog",
  animation = "animate-fadein",
  closeIcon = "×",
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    // prevent background scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // focus first focusable element inside modal
    const container = containerRef.current;
    if (container) {
      const els = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
      const first = els.find(Boolean) || null;
      (first || container).focus();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        // focus trap
        const focusable = container ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)) : [];
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      // restore focus
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] px-1 xs:px-2 sm:px-4"
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div
        ref={containerRef}
        tabIndex={-1}
        className={`bg-white/90 dark:bg-navy-dark rounded-2xl p-2 xs:p-4 sm:p-8 max-w-md xs:max-w-xl sm:max-w-3xl md:max-w-5xl w-full relative overflow-y-auto max-h-[90vh] shadow-2xl flex flex-col items-center ${animation} ${className}`}
        onClick={e => e.stopPropagation()}
        style={{ zIndex: 10000 }}
      >
        <button type="button" className="absolute top-2 xs:top-4 right-3 xs:right-6 text-2xl xs:text-3xl text-navy dark:text-white hover:text-blue-500" onClick={onClose} aria-label="Close modal">{closeIcon}</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
