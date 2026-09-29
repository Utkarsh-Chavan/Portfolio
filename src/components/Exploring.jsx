import React from 'react';
import { Activity } from 'lucide-react';
import { currentlyExploring } from '../data/portfolioData';

export default function Exploring() {
  return (
    <section id="exploring" className="scene-dark py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
            <span>06 — Active Direction</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
            Currently Exploring
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mt-2 leading-relaxed">
            Active areas of implementation, research, and technical training — grounded strictly in present projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentlyExploring.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-bg border border-border font-mono text-[10px] text-accent font-semibold uppercase">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-muted">
                    {item.statusTag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors">
                  {item.topic}
                </h3>

                <p className="text-xs text-muted leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
                <span>STATUS // ACTIVE</span>
                <Activity size={13} className="text-accent" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
