import { motion } from "framer-motion";
import { experiences, education } from "@/data/experience-data";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
  const handleDownloadResume = (e: React.MouseEvent) => {
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
    <section id="experience" className="py-24 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-primary/50 transform md:translate-x-px"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${
                  exp.isReversed ? 'md:flex-row-reverse' : ''
                }`}
              >
                <motion.div 
                  className={`md:w-1/2 ${exp.isReversed ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}
                  initial={{ opacity: 0, x: exp.isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`${exp.isReversed ? '' : 'md:ml-auto'} md:max-w-md p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg`}>
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
                  </div>
                  <div className={`text-primary font-semibold mt-4 ${exp.isReversed ? 'md:pl-12' : 'md:pr-12'}`}>
                    {exp.period}
                  </div>
                </motion.div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-800 shadow-md z-10">
                  <i className="ri-briefcase-line text-white"></i>
                </div>
                
                <motion.div 
                  className={`md:w-1/2 ${exp.isReversed ? 'md:pr-12 md:text-right order-2' : 'md:pl-12'}`}
                  initial={{ opacity: 0, x: exp.isReversed ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* For achievements list */}
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg md:mt-24">
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      {exp.achievements?.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ri-check-line text-primary mr-2 mt-1"></i>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                  </div>
                  <span className="text-primary font-semibold">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="text-center mt-16">
          <Button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <i className="ri-download-line mr-2"></i> Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
