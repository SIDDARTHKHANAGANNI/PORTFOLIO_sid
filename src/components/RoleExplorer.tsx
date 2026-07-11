import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Database, Layout, Brain, CheckCircle2, ArrowUpRight, FolderOpen } from 'lucide-react';
import { ROLES, PROJECTS, Project } from '../data';

interface RoleExplorerProps {
  scrollToSection: (id: string) => void;
}

export default function RoleExplorer({ scrollToSection }: RoleExplorerProps) {
  const [selectedRole, setSelectedRole] = useState<'swe' | 'backend' | 'frontend' | 'ml'>('swe');

  const rolesList = [
    { id: 'swe', label: 'Software Engineer', icon: <Cpu size={18} /> },
    { id: 'backend', label: 'Backend Engineer', icon: <Database size={18} /> },
    { id: 'frontend', label: 'Frontend Engineer', icon: <Layout size={18} /> },
    { id: 'ml', label: 'Machine Learning', icon: <Brain size={18} /> }
  ] as const;

  const currentRoleData = ROLES[selectedRole];

  // Get matching projects for current role
  const matchedProjects = PROJECTS.filter(p => currentRoleData.relevantProjects.includes(p.id));

  return (
    <section id="role-explorer" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
            Recruiter Matchmaker
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Interactive Role Fit Explorer
          </h3>
          <p className="text-zinc-400 text-sm font-sans font-light">
            Select the role you are hiring for to instantly personalize this portfolio and see how my experience, skills, and projects align directly with your requirements.
          </p>
        </div>

        {/* Dynamic Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto p-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl">
          {rolesList.map((role) => {
            const isSelected = selectedRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer flex-1 justify-center md:flex-initial ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-400 border border-cyan-500/30 shadow-inner shadow-cyan-500/5'
                    : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-800/40'
                }`}
              >
                {role.icon}
                <span>{role.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Details & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-sm"
              >
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Role Overview</h4>
                  <h5 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                    {currentRoleData.title}
                  </h5>
                  <p className="text-zinc-300 text-sm font-sans font-normal leading-relaxed">
                    {currentRoleData.tagline}
                  </p>
                  <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed mt-4">
                    {currentRoleData.description}
                  </p>
                </div>

                {/* Match Badges / Skill Tags */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">Matching Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentRoleData.matchingSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-2xl text-xs font-mono hover:border-cyan-500/40 hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Checklist Highlights */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">Why I Excel In This Role</h4>
                  <ul className="space-y-3.5">
                    {currentRoleData.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-sm leading-relaxed font-sans font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Key Relevant Projects for this role */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1">
              Top Role-Relevant Projects
            </h4>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {matchedProjects.map((project: Project) => (
                  <div
                    key={project.id}
                    className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-cyan-500/30 rounded-3xl p-5 transition-all duration-300 shadow-lg relative overflow-hidden"
                  >
                    {/* Visual bar identifier */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <h5 className="font-display font-extrabold text-zinc-100 group-hover:text-cyan-400 transition-colors text-lg">
                          {project.title}
                        </h5>
                        <p className="text-zinc-400 text-xs font-sans line-clamp-1 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                      <button
                        onClick={() => scrollToSection('projects')}
                        className="p-1.5 rounded-2xl bg-zinc-950/60 text-zinc-500 group-hover:text-white transition-colors border border-zinc-800/80 hover:border-zinc-700 cursor-pointer"
                        title="View Project Details"
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </div>

                    <p className="text-zinc-400 text-xs font-sans line-clamp-2 leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-zinc-950/80 border border-zinc-800/60 text-zinc-400 px-2.5 py-1 rounded-xl">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] font-mono bg-zinc-950/80 border border-zinc-800/60 text-zinc-500 px-2 py-1 rounded-xl">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* General portfolio CTA */}
            <div className="p-4 bg-zinc-900/20 border border-zinc-800/40 rounded-3xl flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <FolderOpen size={14} className="text-cyan-400" />
                <span>Want to see all projects?</span>
              </span>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-cyan-400 font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                Show All
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
