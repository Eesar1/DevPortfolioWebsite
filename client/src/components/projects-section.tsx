import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/project-data";
import { ProjectModal } from "./project-modal";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Web" | "Mobile" | "UI/UX">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (filter: "All" | "Web" | "Mobile" | "UI/UX") => {
    setActiveFilter(filter);
  };

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-700/50 rounded-full">
            {["All", "Web", "Mobile", "UI/UX"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                onClick={() => handleFilterClick(filter as "All" | "Web" | "Mobile" | "UI/UX")}
                className={`px-6 py-2 rounded-full ${
                  activeFilter === filter
                    ? "bg-white dark:bg-slate-800 shadow-md text-primary"
                    : "hover:bg-white/80 dark:hover:bg-slate-800/80"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2 mb-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={`${project.id}-${tech}`} 
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              i === 0 ? 'bg-primary text-white' : 'bg-slate-700 text-white'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={project.githubLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
                          aria-label="View GitHub repository"
                        >
                          <i className="ri-github-fill text-white"></i>
                        </a>
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
                          aria-label="View live demo"
                        >
                          <i className="ri-external-link-line text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="text-primary hover:text-primary/80 inline-flex items-center font-medium transition-colors duration-300"
                  >
                    View Details <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-6 py-3 rounded-full border-2 border-primary hover:bg-primary/10 text-primary transition-all duration-300"
          >
            View All Projects <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeProjectDetails}
        project={selectedProject}
      />
    </section>
  );
}
