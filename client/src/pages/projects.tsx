import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects, type Project } from "@/data/project-data";
import { ProjectModal } from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Web" | "Mobile" | "UI/UX">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Projects | Eesar Hussain";
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects
    .filter(project => {
      // First filter by category
      if (activeFilter !== "All" && project.category !== activeFilter) {
        return false;
      }
      
      // Then filter by search term
      if (searchTerm.trim() === "") {
        return true;
      }
      
      // Search in title, description, and technologies
      return (
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <motion.h1 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My <span className="gradient-text">Projects</span>
              </motion.h1>
              <motion.p 
                className="text-slate-600 dark:text-slate-400 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Browse through my recent work and projects. Each project represents a unique challenge and solution.
              </motion.p>
            </div>
            <motion.div 
              className="mt-6 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <Button 
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <i className="ri-arrow-left-line"></i>
                  <span>Back to Home</span>
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs 
              defaultValue="All" 
              className="w-full md:w-auto"
              onValueChange={(value) => setActiveFilter(value as "All" | "Web" | "Mobile" | "UI/UX")}
            >
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Web">Web</TabsTrigger>
                <TabsTrigger value="Mobile">Mobile</TabsTrigger>
                <TabsTrigger value="UI/UX">UI/UX</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="w-full md:w-64">
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
          
          {filteredProjects.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
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
                        <div className="flex flex-wrap gap-2 mb-2">
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
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                    <button 
                      onClick={() => openProjectDetails(project)}
                      className="text-primary hover:text-primary/80 inline-flex items-center font-medium transition-colors duration-300"
                    >
                      View Details <i className="ri-arrow-right-line ml-1"></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="ri-search-line text-5xl text-slate-400 mb-4"></i>
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm("");
                setActiveFilter("All");
              }}>
                Reset Filters
              </Button>
            </motion.div>
          )}
          
          <div className="mt-16 flex justify-center">
            <Link href="/#contact">
              <Button
                className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Interested in working together? Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeProjectDetails}
        project={selectedProject}
      />
    </div>
  );
}