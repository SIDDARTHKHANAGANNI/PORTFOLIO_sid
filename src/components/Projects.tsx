import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, Lightbulb, ChevronRight, Check } from 'lucide-react';
import { PROJECTS, Project } from '../data';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'ML' | 'Backend' | 'Frontend' | 'IoT'>('ALL');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filters = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'ML', label: 'Machine Learning' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'IoT', label: 'IoT & Embedded' }
  ] as const;

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(project => project.category.includes(activeFilter));

  // Custom key impact metrics for each project
  const getImpactMetric = (id: string) => {
    switch(id) {
      case 'solariq':
        return { label: 'Energy Wastage Reduction', value: '28% – 32%', accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
      case 'carbonflow':
        return { label: 'Carbon Credit Valuation', value: '₹1,500 / Ton', accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' };
      case 'gassensor':
        return { label: 'Hardware Response', value: 'Real-Time Alerts', accent: 'text-rose-400 bg-rose-500/10 border-rose-500/20' };
      case 'fraud_detection':
        return { label: 'Target Objective', value: 'Min. False Negatives', accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl text-left">
            <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
              My Creations
            </h2>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Featured Engineering Projects
            </h3>
            <p className="text-zinc-400 text-sm font-sans font-light">
              Demonstrating a bridge between machine learning intelligence, robust backend systems, and responsive visual interfaces.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1.5 mt-6 md:mt-0 bg-zinc-900/60 border border-zinc-800/80 p-1.5 rounded-2xl">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-zinc-850 text-cyan-400 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index) => {
              const impact = getImpactMetric(project.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/60 hover:border-zinc-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg relative group h-full"
                >
                  <div>
                    {/* Upper Meta: Category tag & Impact Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.category.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {impact && (
                        <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 border rounded text-[10px] font-mono font-medium ${impact.accent}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          <span>{impact.value}</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-400 text-xs font-mono mt-0.5 mb-4 italic">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights Bullets */}
                    <div className="space-y-3 border-t border-zinc-800/60 pt-5 mb-6">
                      <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Key Highlights & Outcomes</h5>
                      <ul className="space-y-2.5">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <div className="bg-zinc-950 text-cyan-400 border border-zinc-800 p-0.5 rounded mt-0.5 shrink-0">
                              <Check size={10} />
                            </div>
                            <span className="text-zinc-400 text-xs leading-relaxed font-sans font-light">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono bg-zinc-950/80 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 border-t border-zinc-800/40 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                        >
                          <Github size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink size={14} />
                          <span>Live Dashboard</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
