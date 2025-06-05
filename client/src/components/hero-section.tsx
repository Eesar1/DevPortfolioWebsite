/// <reference types="vite/client" />

import { motion } from "framer-motion";
import { ProfileImage } from "./ui/profile-image";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const handleButtonClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Eesar Hussain</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-400">
              Full-stack Web Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I build exceptional and accessible digital experiences for the web.
              Currently, I'm focused on building responsive full-stack web
              applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#about"
                onClick={(e) => handleButtonClick(e, "about")}
                className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => handleButtonClick(e, "projects")}
                className="px-8 py-3 rounded-full border-2 border-primary hover:bg-primary/10 text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleButtonClick(e, "contact")}
                className="px-8 py-3 rounded-full bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
            <div className="flex space-x-6 mt-10">
              <motion.a
                href="https://github.com/Eesar1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
                whileHover={{ y: -3 }}
              >
                <i className="ri-github-fill"></i>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/eesar-hussain-094436181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
              >
                <i className="ri-linkedin-fill"></i>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
                whileHover={{ y: -3 }}
              >
                <i className="ri-twitter-fill"></i>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
                whileHover={{ y: -3 }}
              >
                <i className="ri-instagram-line"></i>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileImage
               src="https://eesar1.github.io/DevPortfolioWebsite/images/about-bg.jpg"
              alt="Eesar Hussain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
