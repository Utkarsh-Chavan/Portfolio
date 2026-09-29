import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-alt border-t border-border text-muted py-10 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col text-center md:text-left space-y-1">
            <span className="font-display font-bold text-base text-primary">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-muted">
              B.Tech IT · Minor in Data Science · Software Developer
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.contacts.email}`}
              className="hover:text-accent transition-colors"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 p-2 rounded-lg bg-surface border border-border text-accent hover:bg-accent hover:text-bg transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-border/60 text-center md:text-left text-[11px] font-mono text-muted">
          © {new Date().getFullYear()} Utkarsh Chavan. Engineered for performance, credibility, and visual clarity.
        </div>
      </div>
    </footer>
  );
}
