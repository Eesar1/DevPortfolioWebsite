import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuLinks = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "testimonials", label: "Testimonials" },
    { href: "contact", label: "Contact" },
  ];
  
  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 bg-slate-900/90 backdrop-blur z-40"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col justify-center items-center space-y-8 text-xl">
            {menuLinks.map((link) => (
              <motion.a
                key={link.href}
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={() => handleClick(link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-white text-2xl"
              aria-label="Close menu"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
