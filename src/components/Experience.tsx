import React from 'react';
import { motion } from 'motion/react';
import { INTERNSHIPS, PERSONAL_INFO } from '../data';
import { Calendar, MapPin, Briefcase, GraduationCap, ChevronRight, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
            Career Journey
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Professional Internships & Education
          </h3>
          <p className="text-zinc-400 text-sm font-sans font-light">
            My chronological training, practical real-world internships, and structured academic foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience / Internships Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6 px-1">
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400">
                <Briefcase size={18} />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">
                Technical Internships
              </h4>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 ml-4 space-y-12">
              {INTERNSHIPS.map((intern, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300 z-10" />
                  
                  <div>
                    {/* Role & Date header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h5 className="font-display font-extrabold text-zinc-100 text-lg group-hover:text-cyan-400 transition-colors">
                        {intern.role}
                      </h5>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                        <Calendar size={12} className="text-cyan-500" />
                        <span>{intern.period}</span>
                      </div>
                    </div>

                    {/* Company name and Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-sans mb-4">
                      <span className="font-semibold text-zinc-300">{intern.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{intern.location}</span>
                      </span>
                    </div>

                    {/* Bullets lists */}
                    <ul className="space-y-2.5 mb-5">
                      {intern.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2 text-zinc-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                          <ChevronRight size={14} className="text-cyan-500 shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools & Tech stack used */}
                    <div className="flex flex-wrap gap-1.5">
                      {intern.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-[10px] font-mono bg-zinc-900/50 border border-zinc-800/80 text-zinc-400 px-2.5 py-1 rounded-xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Coursework info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education header */}
            <div className="flex items-center gap-3 mb-6 px-1">
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
                <GraduationCap size={18} />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">
                Education
              </h4>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />

              <div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-xl uppercase tracking-wider font-semibold">
                  Undergraduate Program
                </span>
                <h5 className="font-display font-extrabold text-zinc-100 text-lg mt-3 leading-snug">
                  {PERSONAL_INFO.education.degree}
                </h5>
                <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-1">
                  {PERSONAL_INFO.education.school}
                </p>
              </div>

              {/* Coursework list */}
              <div className="border-t border-zinc-800/60 pt-5">
                <h6 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold mb-3">
                  Core Relevant Coursework
                </h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PERSONAL_INFO.education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 bg-zinc-950/60 border border-zinc-800/60 rounded-xl text-zinc-300 text-xs"
                    >
                      <div className="w-1 h-1 rounded-full bg-purple-400" />
                      <span className="font-sans font-light truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom message about GPA / Status */}
              <div className="p-4 bg-purple-500/5 border border-purple-500/10 rounded-2xl flex items-start gap-3">
                <Award size={16} className="text-purple-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-purple-200">B.Tech Hons. Thesis Focus:</span>
                  <p className="text-zinc-400 font-light mt-0.5 leading-relaxed">
                    Specializing in high-performance Machine Learning pipelines, predictive time-series models, and real-time full-stack dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
