import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, ExternalLink, MessageSquareCode } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('swe');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const roleLabels: Record<string, string> = {
    swe: 'Software Engineer',
    backend: 'Backend Engineer',
    frontend: 'Frontend Engineer',
    ml: 'Machine Learning Engineer',
    other: 'Other Role'
  };

  // Generate dynamic mailto URL based on form contents
  const mailtoUrl = () => {
    const subject = encodeURIComponent(`Job Inquiry: ${roleLabels[role]} position at ${company || 'our company'}`);
    const body = encodeURIComponent(
      `Hi Siddarth,\n\nMy name is ${name || '[Name]'}, hiring for ${company || '[Company]'} for a ${roleLabels[role]} role.\n\nHere is some information about the opening:\n${message || '[Details of opening]'}\n\nLet me know if you are available to connect!\n\nBest regards,\n${name || '[My Name]'}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Trigger the mailto trigger directly to make it seamless
      window.location.href = mailtoUrl();
      setSubmitted(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-x-0 bottom-0 z-0 h-96 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Initiate Contact
          </h3>
          <p className="text-zinc-400 text-sm font-sans font-light">
            Have an open role, project inquiry, or want to collaborate? Use the dynamic mail generator or copy my direct credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1">
              Direct Channels
            </h4>

            {/* Email copying widget */}
            <div className="bg-zinc-900/60 border border-zinc-800/85 rounded-3xl p-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Email Address</span>
                <span className="font-sans font-bold text-zinc-200 text-sm sm:text-base block truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-3 bg-zinc-950 hover:bg-zinc-900 text-cyan-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-200 shrink-0 cursor-pointer"
                title="Copy Email to Clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone calling widget */}
            <div className="bg-zinc-900/60 border border-zinc-800/85 rounded-3xl p-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Mobile Number</span>
                <span className="font-sans font-bold text-zinc-200 text-sm sm:text-base block">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3 bg-zinc-950 hover:bg-zinc-900 text-cyan-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-200 shrink-0"
                title="Call Directly"
              >
                <Phone size={16} />
              </a>
            </div>

            {/* Social channels cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-cyan-500/20 rounded-3xl p-4 flex flex-col justify-between h-28 group transition-all duration-300"
              >
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-cyan-400 shrink-0 w-10">
                  <Linkedin size={18} />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-zinc-300 font-semibold font-display">LinkedIn</span>
                  <ExternalLink size={12} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-cyan-500/20 rounded-3xl p-4 flex flex-col justify-between h-28 group transition-all duration-300"
              >
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-400 shrink-0 w-10">
                  <Github size={18} />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-zinc-300 font-semibold font-display">GitHub</span>
                  <ExternalLink size={12} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Mailto compose Form */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-805 text-cyan-400">
                <MessageSquareCode size={18} />
              </div>
              <h4 className="font-display font-extrabold text-white text-base">
                Interactive Email Builder
              </h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/10 rounded-2xl px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 font-semibold">Your Company</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/10 rounded-2xl px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 font-semibold">Hiring Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/10 rounded-2xl px-4 py-3 text-xs text-zinc-200 outline-none transition-colors cursor-pointer"
                >
                  <option value="swe">Software Engineer</option>
                  <option value="backend">Backend Engineer</option>
                  <option value="frontend">Frontend Engineer</option>
                  <option value="ml">Machine Learning Engineer</option>
                  <option value="other">Other Role / Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 font-semibold">Message & Offer Details</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role, stack, or project. This will be pre-filled inside your mail application."
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/10 rounded-2xl px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-display font-bold px-5 py-3.5 rounded-2xl transition-all duration-300 shadow-md shadow-cyan-500/5 cursor-pointer text-xs"
              >
                <Send size={14} />
                <span>{submitted ? 'Opening Mail Client...' : 'Generate & Compose Professional Email'}</span>
              </button>
            </form>

            <span className="block text-[9px] font-mono text-zinc-600 text-center mt-3">
              *Generates a custom mailto link that pre-composes a professional email template in your local application.
            </span>
          </div>

        </div>

      </div>

      {/* Footer credits inside contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/80 mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-650 text-[10px] font-mono">
        <span>© {new Date().getFullYear()} Siddarth S Khanaganni. All rights reserved.</span>
        <span className="flex items-center gap-1.5">
          <span>Active & Open to Opportunities</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </span>
      </div>
    </section>
  );
}
