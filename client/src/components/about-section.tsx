import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

export function AboutSection() {
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real implementation, this would download a CV file
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/CV.pdf`; // Path to your CV file
    link.target = '_blank';

    link.setAttribute('download', 'CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Developer at work" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              A passionate developer with a creative approach
            </h3>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              I'm a Full-stack Web Developer with 5+ years of experience in building exceptional digital experiences. I specialize in JavaScript, React, Node.js, and modern frontend frameworks.
            </p>
            <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
              My journey in tech began when I built my first website at 18. Since then, I've worked with startups and established companies to create innovative solutions that solve real business problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Name:</h4>
                <p>Eesar Hussain</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Email:</h4>
                <p>eesarhussain99@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Location:</h4>
                <p>Lahore, Pakistan</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Availability:</h4>
                <p>Open to opportunities</p>
              </div>
            </div>
            
            <motion.a
              href="#"
              onClick={handleDownloadCV}
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-download-line mr-2"></i> Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
