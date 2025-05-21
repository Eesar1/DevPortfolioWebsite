import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "@/data/project-data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white dark:bg-slate-800 p-0 rounded-2xl overflow-hidden">
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className={`px-2 py-1 rounded text-xs font-medium ${tech === project.technologies[0] ? 'bg-primary text-white' : 'bg-slate-700 text-white'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="p-6">
          <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
          
          {project.details && (
            <div className="space-y-6">
              {project.details.challenge && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                  <p className="text-slate-600 dark:text-slate-400">{project.details.challenge}</p>
                </div>
              )}
              
              {project.details.solution && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Solution</h4>
                  <p className="text-slate-600 dark:text-slate-400">{project.details.solution}</p>
                </div>
              )}
              
              {project.details.features && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                    {project.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.details.outcome && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Outcome</h4>
                  <p className="text-slate-600 dark:text-slate-400">{project.details.outcome}</p>
                </div>
              )}
            </div>
          )}
          
          <div className="flex gap-4 mt-8">
            <Button asChild>
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <i className="ri-github-fill mr-2"></i> View Code
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <i className="ri-external-link-line mr-2"></i> Live Demo
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
