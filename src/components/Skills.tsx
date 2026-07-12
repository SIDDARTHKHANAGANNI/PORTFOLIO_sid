import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data';
import { Terminal, Layers, Database, ShieldCheck } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
            Competencies
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Technical Arsenal
          </h3>
          <p className="text-zinc-400 text-sm font-sans font-light">
            An overview of my tech stack, frameworks, tools, and computer science foundations.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 shadow-lg backdrop-blur-sm hover:border-zinc-700/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                  {group.category === 'Languages' && <Terminal size={16} />}
                  {group.category === 'Frameworks & Libraries' && <Layers size={16} />}
                  {group.category === 'Tools & Platforms' && <Database size={16} />}
                  {group.category === 'Core Concepts' && <ShieldCheck size={16} />}
                </div>
                <h4 className="font-display font-extrabold text-zinc-100 text-sm tracking-wide">
                  {group.category}
                </h4>
              </div>

              <div className="space-y-2">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-2 py-1.5 px-2 rounded-xl hover:bg-zinc-950/40 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/80" />
                    <span className="text-zinc-300 text-xs font-mono font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
