import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export function CTASection() {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("contact");
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real implementation, this would download a resume file
     const link = document.createElement('a');
    link.href = '/assets/CV.pdf'; // Path to your CV file
    link.target = '_blank';

    link.setAttribute('download', 'CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Ready to work together?
        </motion.h2>
        
        <motion.p 
          className="text-xl max-w-2xl mx-auto mb-10 text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's create something amazing. If you have a project in mind or just want to chat, I'm always open to new opportunities.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="default"
            size="lg"
            onClick={handleContactClick}
            className="px-8 py-3 rounded-full border-2 bg-white text-primary hover:bg-white/10 transition-colors duration-300 shadow-md hover:shadow-lg font-medium"
          >
            Contact Me
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleResumeClick}
            className="px-8 py-3 rounded-full border-2 bg-white text-primary hover:bg-white/10 transition-colors duration-300 shadow-md hover:shadow-lg font-medium "
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
