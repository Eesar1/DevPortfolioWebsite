import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ui/theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { scrollToSection } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "testimonials", label: "Testimonials" },
    { href: "contact", label: "Contact" },
  ];
  
  const activeSection = useScrollSpy(
    ["hero", ...navLinks.map(link => link.href)]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("hero");
  };

  const handleNavLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur ${
          isScrolled ? "bg-white/80 dark:bg-slate-900/80 shadow-md" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-xl font-bold relative z-10 gradient-text"
            onClick={handleLogoClick}
          >
            Eesar<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={`#${link.href}`}
                className={`relative group transition-all duration-300 ${
                  activeSection === link.href ? "text-primary" : ""
                }`}
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
                <span className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <a 
              href="#contact" 
              className="hidden md:block px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => handleNavLinkClick(e, "contact")}
            >
              Let's Talk
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
              aria-label="Open menu"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
