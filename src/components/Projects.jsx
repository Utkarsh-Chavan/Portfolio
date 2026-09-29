import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

const categories = ['ALL', 'BUILD', 'INTELLIGENCE', 'DATA', 'SYSTEMS'];

export default function Projects({ activeCategoryFilter, setActiveCategoryFilter }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = activeCategoryFilter === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategoryFilter || activeCategoryFilter.includes(p.category));

  useEffect(() => {
    if (selectedProjectIndex >= filteredProjects.length) {
      setSelectedProjectIndex(0);
    }
  }, [activeCategoryFilter, filteredProjects.length, selectedProjectIndex]);

  const handlePrev = () => {
    setSelectedProjectIndex(prev => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const handleNext = () => {
    setSelectedProjectIndex(prev => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const handleNextModalProject = () => {
    if (!activeModalProject) return;
    const currentIndex = projectsData.findIndex(p => p.id === activeModalProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setActiveModalProject(projectsData[nextIndex]);
  };

  return (
    <section id="projects" className="scene-dark py-20 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
              <span>04 — Projects</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl mt-2">
              Explore custom systems across computer vision, machine learning, Android telemetry, and full-stack web platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-surface p-1.5 rounded-xl border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 ${
                  activeCategoryFilter === cat
                    ? 'bg-accent text-bg shadow-sm'
                    : 'text-muted hover:text-primary hover:bg-surface-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-accent">
              0{selectedProjectIndex + 1}
            </span>
            <span className="font-mono text-xs text-muted">
              / 0{filteredProjects.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg border border-border bg-surface text-primary hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-border bg-surface text-primary hover:border-accent hover:text-accent transition-colors"
              aria-label="Next Project"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex gap-4 h-[420px] w-full my-6">
          {filteredProjects.map((project, idx) => {
            const isExpanded = selectedProjectIndex === idx;

            return (
              <motion.div
                key={project.id}
                layout
                onClick={() => setSelectedProjectIndex(idx)}
                transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className={`relative rounded-2xl border cursor-pointer overflow-hidden flex flex-col justify-between p-6 transition-colors duration-300 ${
                  isExpanded
                    ? 'flex-[3.5] bg-surface border-accent shadow-xl shadow-accent/5'
                    : 'flex-[1] bg-surface/50 border-border hover:border-accent/40 hover:bg-surface'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="px-2.5 py-1 rounded bg-bg border border-border text-accent font-mono text-[10px] uppercase font-semibold">
                    {project.category}
                  </span>
                  
                  <span className={`text-[10px] font-mono ${isExpanded ? 'text-primary' : 'text-muted'}`}>
                    {project.status}
                  </span>
                </div>

                <div className="my-auto space-y-3">
                  <h3 className={`font-display font-bold text-xl sm:text-2xl transition-colors ${
                    isExpanded ? 'text-primary' : 'text-muted line-clamp-2'
                  }`}>
                    {project.shortTitle}
                  </h3>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                        {project.oneLiner}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 5).map(tech => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-bg text-[10px] font-mono text-accent border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border w-full">
                  <span className="font-mono text-xs text-muted">
                    0{idx + 1}
                  </span>

                  {isExpanded ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline font-semibold"
                    >
                      <span>VIEW CASE STUDY</span>
                      <Maximize2 size={13} />
                    </button>
                  ) : (
                    <span className="text-xs text-muted">Select</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden space-y-4 my-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="p-5 rounded-2xl bg-surface border border-border active:border-accent space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-accent">{project.category}</span>
                <span className="text-muted">{project.status}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-primary">
                {project.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {project.oneLiner}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {project.technologies.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg text-accent border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-2 flex justify-end">
                <span className="inline-flex items-center gap-1 text-xs font-mono text-accent font-semibold">
                  <span>View Case Study</span>
                  <Maximize2 size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeModalProject && (
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onNextProject={handleNextModalProject}
        />
      )}
    </section>
  );
}
