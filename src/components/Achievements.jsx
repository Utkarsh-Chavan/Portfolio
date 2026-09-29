import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { achievementsData, certificationsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="scene-light py-20 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
            <span>05 — Recognition</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mt-2">
            Verified hackathon results, technical workshops, and professional development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Trophy size={18} className="text-accent" />
              <h3 className="font-display font-bold text-xl text-primary">
                Hackathons & Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {achievementsData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-200 shadow-sm space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent font-semibold uppercase px-2.5 py-0.5 rounded bg-accent-light border border-accent/20">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted font-mono">{item.organizer}</span>
                  </div>

                  <h4 className="font-display font-semibold text-base text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-muted leading-relaxed font-normal">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Award size={18} className="text-accent" />
              <h3 className="font-display font-bold text-xl text-primary">
                Certifications & Workshops
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-200 shadow-sm space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-muted">
                      {cert.status}
                    </span>
                  </div>

                  <h4 className="font-display font-semibold text-base text-primary group-hover:text-accent transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-muted leading-relaxed font-normal">
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
