import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { personalInfo, projectsData, achievementsData } from '../data/portfolioData';

const workStages = [
  {
    id: 'understand',
    num: '01',
    title: 'UNDERSTAND',
    short: 'Problem Definition & Research',
    desc: 'Break down complex real-world requirements—whether analyzing sensor telemetry, light-curve astrophysical datasets, or volunteer workflow constraints—into precise technical specifications.'
  },
  {
    id: 'build',
    num: '02',
    title: 'BUILD',
    short: 'Modular Architecture & Engineering',
    desc: 'Engineer practical, maintainable solutions using Python, Kotlin, Angular, or Node.js. Select domain-appropriate frameworks like YOLOv8 for vision or Flask/FastAPI for low-latency backend APIs.'
  },
  {
    id: 'test',
    num: '03',
    title: 'TEST',
    short: 'Validation & Stress Testing',
    desc: 'Validate logic under pressure—tuning sensor thresholds in Zero UI to eliminate false fall alerts, or benchmarking ML classification performance on real astronomical noise patterns.'
  },
  {
    id: 'improve',
    num: '04',
    title: 'IMPROVE',
    short: 'Refinement & Deployment Preparation',
    desc: 'Iterate based on performance metrics, containerizing components with Docker and establishing clean REST API contracts with Swagger documentation.'
  }
];

export default function About() {
  const [activeStage, setActiveStage] = useState(0);

  const stats = [
    { label: 'SGPA', value: personalInfo.sgpa, subtext: 'MGM University IICT' },
    { label: 'Featured Projects', value: projectsData.length.toString(), subtext: 'Web, AI, Systems & Mobile' },
    { label: 'Hackathon Finalists', value: achievementsData.filter(a => a.type === 'finalist').length.toString(), subtext: 'Hack the Gap & Zero UI' },
    { label: 'Minor Track', value: 'Data Science', subtext: personalInfo.degree }
  ];

  return (
    <section id="about" className="scene-light py-20 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
            <span>01 — About</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
            More than a job title.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            I am a B.Tech Information Technology student with a minor in Data Science, focused on building practical software and data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-primary text-base leading-relaxed">
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-accent-light text-accent border border-accent/20 font-medium">
                Full-Stack Web
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-light text-accent border border-accent/20 font-medium">
                AI / Machine Learning
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-light text-accent border border-accent/20 font-medium">
                Computer Vision (YOLOv8)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-light text-accent border border-accent/20 font-medium">
                Android Development (Kotlin)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-light text-accent border border-accent/20 font-medium">
                Data Science (SQL & Python)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface border border-border rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs text-muted tracking-wider uppercase font-semibold">
                PROFILE.SNAPSHOT
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                VERIFIED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-bg/60 border border-border/80">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-primary">
                    {stat.value}
                  </div>
                  <div className="font-display font-semibold text-xs text-accent mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-muted mt-1 font-mono">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
            <div>
              <span className="text-xs font-mono text-accent font-semibold tracking-wider uppercase">
                ENGINEERING PROCESS
              </span>
              <h3 className="font-display font-bold text-xl text-primary mt-1">
                How I Work
              </h3>
            </div>
            <span className="text-xs text-muted font-mono">Select a stage to explore methodology</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {workStages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'border-accent bg-accent-light/50 text-accent shadow-sm'
                      : 'border-border bg-bg/40 text-muted hover:text-primary hover:border-accent/40'
                  }`}
                >
                  <div className="font-mono text-xs text-accent font-semibold">
                    {stage.num}
                  </div>
                  <div className="font-display font-bold text-sm text-primary mt-1">
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl bg-bg/80 border border-border/80 flex flex-col sm:flex-row items-start justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-semibold">
                <CheckCircle2 size={15} />
                <span>STAGE {workStages[activeStage].num} — {workStages[activeStage].title}</span>
              </div>
              <h4 className="font-display font-semibold text-lg text-primary">
                {workStages[activeStage].short}
              </h4>
              <p className="text-muted text-sm leading-relaxed max-w-3xl">
                {workStages[activeStage].desc}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
