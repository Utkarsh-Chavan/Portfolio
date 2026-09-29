import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Server, Check } from 'lucide-react';
import { capabilityDomains, projectsData } from '../data/portfolioData';

const iconMap = {
  BUILD: Code,
  INTELLIGENCE: Brain,
  DATA: Database,
  SYSTEMS: Server,
};

export default function Capabilities({ selectedDomain, setSelectedDomain }) {
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const activeDomainId = hoveredDomain || selectedDomain || 'INTELLIGENCE';
  const activeDomain = capabilityDomains.find(d => d.id === activeDomainId) || capabilityDomains[1];

  const relatedProjects = projectsData.filter(p => activeDomain.relatedProjectIds.includes(p.id));

  return (
    <section id="capabilities" className="scene-dark py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
            <span>02 — Capabilities</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
            What kinds of technical problems can I work on?
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            Selecting a technical domain reveals relevant technologies and linked featured projects across software, AI, data, and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {capabilityDomains.map((domain) => {
            const Icon = iconMap[domain.id] || Code;
            const isActive = activeDomainId === domain.id;

            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative group flex flex-col justify-between ${
                  isActive
                    ? 'bg-surface border-accent shadow-lg shadow-accent/5'
                    : 'bg-surface/60 border-border hover:border-accent/50 hover:bg-surface'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {domain.number}
                    </span>
                    <Icon size={20} className={isActive ? 'text-accent' : 'text-muted group-hover:text-accent transition-colors'} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-primary mb-1">
                    {domain.title}
                  </h3>
                  <p className="text-xs font-mono text-accent font-medium mb-3">
                    {domain.subtitle}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                  <span className={isActive ? 'text-accent' : 'text-muted'}>
                    {domain.technologies.length} Technologies
                  </span>
                  <span className={`transition-transform duration-200 ${isActive ? 'translate-x-1 text-accent' : 'text-muted'}`}>
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="font-mono text-xs text-accent uppercase font-semibold">
                  DOMAIN TECHNOLOGIES // {activeDomain.title}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeDomain.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-1.5 rounded-lg bg-bg border border-accent/40 text-accent font-mono text-xs font-medium flex items-center gap-1.5"
                  >
                    <Check size={12} />
                    <span>{tech}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-xs text-accent uppercase font-semibold">
                  LINKED PROJECTS ({relatedProjects.length})
                </span>
                <span className="text-[11px] font-mono text-muted">
                  Capability → Projects
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {relatedProjects.map((project) => (
                  <a
                    key={project.id}
                    href="#projects"
                    className="p-4 rounded-xl bg-bg border border-border hover:border-accent transition-all duration-200 group block"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className="text-accent">{project.category}</span>
                      <span className="text-muted">{project.status}</span>
                    </div>
                    <h4 className="font-display font-semibold text-sm text-primary group-hover:text-accent transition-colors line-clamp-1">
                      {project.shortTitle}
                    </h4>
                    <p className="text-xs text-muted mt-1 line-clamp-2">
                      {project.oneLiner}
                    </p>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
