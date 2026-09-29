import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'exploring', label: 'Exploring' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', ...navItems.map(item => item.id)];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg/90 backdrop-blur-md border-b border-border/60 py-3.5 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
            aria-label="Utkarsh Chavan Portfolio Home"
          >
            <span className="w-8 h-8 rounded bg-accent/15 border border-accent/30 text-accent font-display font-bold text-sm flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-colors duration-200">
              UC
            </span>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-primary group-hover:text-accent transition-colors">
                UTKARSH CHAVAN
              </span>
              <span className="text-[10px] text-muted tracking-wider uppercase hidden sm:inline">
                Software · Data · AI
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 border border-border/80 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-accent font-semibold bg-accent/10'
                      : 'text-muted hover:text-primary hover:bg-surface-hover'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-border hover:border-accent text-primary hover:text-accent bg-surface hover:bg-accent/5 transition-all duration-200 shadow-sm"
            >
              <FileText size={13} className="text-accent" />
              <span>Resume</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border bg-surface text-muted hover:text-primary hover:border-accent transition-all duration-200"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-amber-400" />
              ) : (
                <Moon size={15} className="text-teal-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-border bg-surface text-primary hover:border-accent transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-surface border-b border-border shadow-2xl transition-all duration-300 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-accent/10 text-accent font-semibold'
                    : 'text-muted hover:text-primary hover:bg-surface-hover'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <a
              href={personalInfo.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-accent text-bg hover:opacity-90 transition-opacity"
            >
              <FileText size={14} />
              <span>View Resume (PDF)</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
