import React from "react";

const Footer = () => (
  <footer className="w-full py-6 bg-navy-light dark:bg-navy-dark text-center text-white text-xs xs:text-sm sm:text-base border-t border-blue-100 dark:border-navy/40 transition-colors duration-500 animate-fadein-up">
    <div className="flex flex-col items-center gap-2">
      <img src="/src/assets/footer_logo.png" alt="Footer Logo" className="w-24 h-8 object-contain mb-1" />
      <div>© 2025 Changwon ENG Smart Service Consortium. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
