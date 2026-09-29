import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ArrowRight, Check, AlertCircle } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onNextProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-border rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col justify-between"
        >
          <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-accent">
              <span>PROJECT // {project.category}</span>
              <span>·</span>
              <span className="text-muted">{project.status}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-border bg-bg text-muted hover:text-primary hover:border-accent transition-colors"
              aria-label="Close Case Study Modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            <div className="space-y-2">
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-primary">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-accent font-mono font-medium">
                {project.subtitle}
              </p>
              <p className="text-sm text-muted leading-relaxed pt-1">
                {project.oneLiner}
              </p>
            </div>

            <div className="w-full h-44 sm:h-56 rounded-xl bg-bg border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-accent-primary)_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
              
              <div className="relative z-10 text-center space-y-2">
                <span className="font-mono text-xs text-accent tracking-widest uppercase px-3 py-1 rounded bg-accent-light border border-accent/30">
                  {project.id.toUpperCase()} // PIPELINE SCHEMATIC
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded bg-surface text-primary border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-bg/60 border border-border space-y-2">
                <span className="font-mono text-xs text-accent font-semibold uppercase">
                  PROBLEM STATEMENT
                </span>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-bg/60 border border-border space-y-2">
                <span className="font-mono text-xs text-accent font-semibold uppercase">
                  ENGINEERING APPROACH
                </span>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-accent font-semibold uppercase">
                KEY FEATURES & CAPABILITIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-bg/40 border border-border/60 text-xs text-primary">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-accent font-semibold uppercase">
                TECHNOLOGIES UTILIZED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-bg border border-border text-xs font-mono text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-accent-light border border-accent/20 space-y-1 text-xs text-muted">
              <div className="flex items-center gap-1.5 text-accent font-mono font-semibold">
                <AlertCircle size={14} />
                <span>MY CONTRIBUTION & STATUS NOTE</span>
              </div>
              <p className="text-primary pt-0.5">{project.contribution}</p>
              {project.statusNote && <p className="text-muted italic">{project.statusNote}</p>}
            </div>

          </div>

          <div className="bg-bg border-t border-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-bg font-semibold text-xs hover:opacity-90 transition-opacity"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-muted italic">
                  Repository available upon request
                </span>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface border border-border text-accent font-semibold text-xs hover:border-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onNextProject}
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:opacity-80 transition-opacity font-semibold"
            >
              <span>NEXT PROJECT</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
