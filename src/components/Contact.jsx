import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scene-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
          <circle cx="200" cy="150" r="100" stroke="var(--color-accent-primary)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="800" cy="450" r="120" stroke="var(--color-accent-primary)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="200" y1="150" x2="800" y2="450" stroke="var(--color-accent-primary)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-muted">
                07 — Contact · Open to Internships & Roles
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl text-primary tracking-tight leading-none">
              Let's build something meaningful.
            </h2>

            <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
              Whether it's a project, internship, collaboration, or technical conversation — I'm open to connecting.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:opacity-90 transition-colors shadow-lg shadow-accent/10"
              >
                <Mail size={16} />
                <span>Get in touch</span>
              </a>

              <a
                href={personalInfo.contacts.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface border border-border text-primary hover:border-accent hover:text-accent font-medium text-sm transition-colors"
              >
                <FileText size={15} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-3 text-xs font-mono text-muted">
              <span>DIRECT CONTACT</span>
              <span className="text-accent">RESPONSIVE</span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full p-4 rounded-xl bg-bg border border-border hover:border-accent transition-colors flex items-center justify-between text-left group"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-muted uppercase block">
                  EMAIL ADDRESS
                </span>
                <span className="font-mono text-xs sm:text-sm text-primary group-hover:text-accent transition-colors font-medium">
                  {personalInfo.contacts.email}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-surface border border-border text-accent">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </button>

            <a
              href={`tel:${personalInfo.contacts.phone.replace(/\s+/g, '')}`}
              className="w-full p-4 rounded-xl bg-bg border border-border hover:border-accent transition-colors flex items-center justify-between text-left group block"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-muted uppercase block">
                  PHONE
                </span>
                <span className="font-mono text-xs sm:text-sm text-primary group-hover:text-accent transition-colors font-medium">
                  {personalInfo.contacts.phone}
                </span>
              </div>
              <Phone size={16} className="text-muted group-hover:text-accent transition-colors" />
            </a>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-bg border border-border hover:border-accent text-xs font-mono text-primary hover:text-accent flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-bg border border-border hover:border-accent text-xs font-mono text-primary hover:text-accent flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github size={15} />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="pt-2 text-[11px] font-mono text-muted text-center border-t border-border">
              LOCATION // {personalInfo.location}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
