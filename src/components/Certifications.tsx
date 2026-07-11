import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, AWARDS } from '../data';
import { ShieldAlert, Award, FileCheck, ExternalLink, Cpu, Cloud, Database, Network } from 'lucide-react';

export default function Certifications() {
  
  // Custom icons based on certificate keywords
  const getCertIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('aws') || lowerName.includes('cloud')) {
      return <Cloud size={18} className="text-cyan-400" />;
    }
    if (lowerName.includes('containers') || lowerName.includes('kubernetes')) {
      return <Cpu size={18} className="text-purple-400" />;
    }
    if (lowerName.includes('networking')) {
      return <Network size={18} className="text-blue-400" />;
    }
    if (lowerName.includes('big data')) {
      return <Database size={18} className="text-amber-400" />;
    }
    return <FileCheck size={18} className="text-slate-400" />;
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
            Achievements
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Credentials & Hackathons
          </h3>
          <p className="text-zinc-400 text-sm font-sans font-light">
            My professional certifications from IBM and AWS alongside competitive hackathon accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Hackathon Awards */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1">
              Hackathons & Contests
            </h4>

            <div className="space-y-4">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-cyan-500/20 rounded-3xl p-6 transition-all duration-300 shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex gap-4">
                    <div className="p-3 bg-zinc-950 border border-zinc-800 text-cyan-400 rounded-2xl group-hover:border-cyan-500/30 transition-colors shrink-0">
                      <Award size={20} className="animate-pulse" />
                    </div>
                    <div>
                      <h5 className="font-display font-extrabold text-zinc-100 text-base mb-1.5 group-hover:text-cyan-400 transition-colors">
                        {award.title}
                      </h5>
                      <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                        {award.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick highlight badge */}
            <div className="p-5 bg-gradient-to-tr from-cyan-950/20 to-zinc-900/40 border border-zinc-800/60 rounded-3xl">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">DSA Mindset</span>
              <p className="text-zinc-300 text-xs font-sans font-light mt-2 leading-relaxed">
                Applying structural computer science foundations and rapid prototyping skills under tight 24-hour hackathon timelines.
              </p>
            </div>
          </div>

          {/* Right Side: Professional Industry Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1">
              Industry Certifications
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-4 flex gap-3.5 items-start hover:border-zinc-700/80 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-xl shrink-0">
                    {getCertIcon(cert.name)}
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-display font-extrabold text-zinc-200 text-xs sm:text-sm line-clamp-2 leading-snug">
                      {cert.name}
                    </h5>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-1.5 uppercase font-medium">
                      Issuer: {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
