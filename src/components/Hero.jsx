import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, ArrowUpRight, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section 
      id="hero" 
      className="scene-dark relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-border"
    >
      {/* Background Grid Pattern responding to theme */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-accent-primary)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-7 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-muted tracking-wide">
              {personalInfo.degree} · Minor in {personalInfo.minor}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-display font-bold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-primary">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-mono text-accent font-medium tracking-wide">
              Software Developer · Data Science · Computer Vision
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed font-normal">
            "{personalInfo.positioning}"
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/10 active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowDown size={15} />
            </button>

            <a
              href={personalInfo.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface border border-border hover:border-accent text-primary hover:text-accent font-medium text-sm transition-colors"
            >
              <FileText size={15} />
              <span>View Resume</span>
              <ArrowUpRight size={14} className="opacity-70" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-border/60 text-xs font-mono text-muted">
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.contacts.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right System Network Visual - Semantic Theme Adapted */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div 
            className="relative w-full aspect-square max-w-[420px] mx-auto rounded-2xl bg-surface/90 border border-border p-6 flex flex-col justify-between shadow-xl backdrop-blur-sm transition-colors"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.1, 0.2, 0.1, 1)'
            }}
          >
            <div className="flex items-center justify-between border-b border-border pb-3 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-accent" />
                <span>SYSTEM.NETWORK // ARCHITECTURE</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-accent-light text-accent border border-accent/20 font-semibold">
                ACTIVE
              </span>
            </div>

            <div className="relative my-6 h-60 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 300 240" fill="none">
                <line x1="70" y1="60" x2="230" y2="60" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="70" y1="60" x2="70" y2="180" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="230" y1="60" x2="230" y2="180" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="70" y1="180" x2="230" y2="180" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="70" y1="60" x2="230" y2="180" stroke="var(--color-accent-primary)" strokeWidth="1" opacity="0.3" />
                <line x1="230" y1="60" x2="70" y2="180" stroke="var(--color-accent-primary)" strokeWidth="1" opacity="0.3" />

                <circle cx="150" cy="120" r="30" fill="var(--color-accent-light)" stroke="var(--color-accent-primary)" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="150" cy="120" r="6" fill="var(--color-accent-primary)" className="animate-ping opacity-75" />

                <g transform="translate(70, 60)">
                  <circle r="20" fill="var(--color-surface)" stroke="var(--color-accent-primary)" strokeWidth="2" />
                  <text y="32" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">BUILD</text>
                  <text y="42" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="Inter">Web & App</text>
                </g>

                <g transform="translate(230, 60)">
                  <circle r="20" fill="var(--color-surface)" stroke="var(--color-accent-primary)" strokeWidth="2" />
                  <text y="32" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">INTELLIGENCE</text>
                  <text y="42" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="Inter">AI & Vision</text>
                </g>

                <g transform="translate(70, 180)">
                  <circle r="20" fill="var(--color-surface)" stroke="var(--color-accent-primary)" strokeWidth="2" />
                  <text y="32" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">DATA</text>
                  <text y="42" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="Inter">SQL & Science</text>
                </g>

                <g transform="translate(230, 180)">
                  <circle r="20" fill="var(--color-surface)" stroke="var(--color-accent-primary)" strokeWidth="2" />
                  <text y="32" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">SYSTEMS</text>
                  <text y="42" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="Inter">Cloud & DevOps</text>
                </g>
              </svg>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
              <span>NODE_STATUS: ONLINE</span>
              <span className="text-accent font-semibold">SGPA: 8.5</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="text-center pt-8 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-[10px] font-mono tracking-widest text-muted uppercase">Scroll to explore</span>
        <ArrowDown size={14} className="text-accent animate-bounce" />
      </motion.div>
    </section>
  );
}
