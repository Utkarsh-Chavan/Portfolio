import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export default function Journey() {
  const [activeMilestone, setActiveMilestone] = useState(2);

  const handlePrev = () => {
    setActiveMilestone(prev => (prev > 0 ? prev - 1 : journeyMilestones.length - 1));
  };

  const handleNext = () => {
    setActiveMilestone(prev => (prev < journeyMilestones.length - 1 ? prev + 1 : 0));
  };

  const current = journeyMilestones[activeMilestone];

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="journey" className="scene-light py-20 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
              <span>03 — Journey</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
              How I got here
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl mt-2">
              Progression grounded strictly in verified academic, project, and hackathon milestones.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-primary shadow-sm"
              aria-label="Previous Milestone"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="font-mono text-xs text-muted px-2">
              {activeMilestone + 1} / {journeyMilestones.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-primary shadow-sm"
              aria-label="Next Milestone"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mb-10 hidden md:block">
          <div className="relative flex items-center justify-between">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

            {journeyMilestones.map((ms, idx) => {
              const isSelected = activeMilestone === idx;
              return (
                <button
                  key={ms.id}
                  onClick={() => setActiveMilestone(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div 
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'border-accent bg-accent text-bg shadow-md scale-115'
                        : 'border-border bg-surface text-muted hover:border-accent hover:text-accent'
                    }`}
                  >
                    {ms.badge}
                  </div>

                  <span className={`text-[11px] font-mono mt-2 transition-colors ${
                    isSelected ? 'text-accent font-semibold' : 'text-muted group-hover:text-primary'
                  }`}>
                    {ms.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-accent-light text-accent border border-accent/20 font-mono text-xs font-semibold">
                    {current.year}
                  </span>
                  <span className="text-xs font-mono text-muted">
                    MILESTONE {current.badge} OF {journeyMilestones.length}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary">
                  {current.title}
                </h3>
                
                <p className="font-display font-semibold text-sm text-accent">
                  {current.institution} {current.score && `— ${current.score}`}
                </p>

                <p className="text-muted text-base leading-relaxed max-w-2xl font-normal">
                  {current.summary}
                </p>
              </div>

              <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
                <div className="w-32 h-32 rounded-2xl bg-bg/70 border border-border flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-display font-bold text-3xl text-accent">
                    {current.badge}
                  </span>
                  <span className="font-mono text-[10px] text-muted uppercase mt-1">
                    {current.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-surface/50 border border-border/70">
          <div className="text-center sm:text-left">
            <p className="font-display font-semibold text-base text-primary">
              "The progression became projects."
            </p>
            <p className="text-xs text-muted font-mono mt-0.5">
              Turning academic foundations into applied software solutions.
            </p>
          </div>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-semibold text-xs hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
          >
            <span>Explore what I've built</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
