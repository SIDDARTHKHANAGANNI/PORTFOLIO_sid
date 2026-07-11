import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Github, Linkedin, Mail, Sparkles, MapPin, Database, Brain, Cpu, Layout } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const roleHighlights = [
    { title: 'Software Eng', icon: <Cpu size={16} className="text-cyan-400" />, desc: 'Core Java & Data Structures' },
    { title: 'Backend Eng', icon: <Database size={16} className="text-emerald-400" />, desc: 'APIs, Flask, SQL & Docker' },
    { title: 'Frontend Eng', icon: <Layout size={16} className="text-pink-400" />, desc: 'React, TypeScript & Tailwind' },
    { title: 'ML Engineer', icon: <Brain size={16} className="text-purple-400" />, desc: 'TensorFlow, Scikit & ANNs' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      {/* Visual background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-cyan-400 font-mono mb-6 w-fit shadow-inner">
              <Sparkles size={12} className="animate-spin-slow" />
              <span>Available for Fall 2026/Immediate Roles</span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-zinc-400 font-sans text-xl font-medium tracking-wide">
                Hi, I am
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-none bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-2">
                {PERSONAL_INFO.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-6 max-w-2xl font-sans font-light">
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* Meta badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 text-zinc-400 text-xs sm:text-sm font-mono mt-4">
              <div className="flex items-center gap-1.5 bg-zinc-900/50 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
                <MapPin size={14} className="text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/50 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>B.Tech CSE (Hons.) Student</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollToSection('role-explorer')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-display font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/10 cursor-pointer text-sm"
              >
                <span>Role Fit Matcher</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 font-display font-medium px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer text-sm"
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 mt-10">
              <span className="text-zinc-600 text-xs font-mono tracking-widest uppercase">Find me on</span>
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 text-zinc-400 transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 text-zinc-400 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 text-zinc-400 transition-all duration-300"
                  title="Email Address"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Role Card Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end w-full"
          >
            <div className="w-full max-w-sm bg-zinc-900/80 border border-zinc-800/80 rounded-3xl p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2 py-1 rounded">
                  System.config
                </div>
              </div>

              <h3 className="font-display font-extrabold text-zinc-100 text-base mb-1 flex items-center gap-2">
                Looking For...
              </h3>
              <p className="text-zinc-400 text-xs font-sans font-light mb-6">
                Interactive matching engine across multiple software disciplines. Select one to explore details.
              </p>

              {/* Stacked role list selectors */}
              <div className="space-y-3">
                {roleHighlights.map((role, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4, backgroundColor: 'rgba(39, 39, 42, 0.8)' }}
                    onClick={() => scrollToSection('role-explorer')}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/50 cursor-pointer transition-all duration-300"
                  >
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                      {role.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-zinc-200 truncate">{role.title}</div>
                      <div className="text-[10px] text-zinc-500 truncate mt-0.5">{role.desc}</div>
                    </div>
                    <ArrowRight size={12} className="text-zinc-600 hover:text-white transition-colors" />
                  </motion.div>
                ))}
              </div>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
