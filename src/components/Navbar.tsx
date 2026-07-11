import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'role-explorer', label: 'Role Matcher' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills & DSA' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="app-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-lg text-white">
              <Terminal size={18} className="animate-pulse" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Siddarth<span className="text-cyan-400">.S.K</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-zinc-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-zinc-800/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Icons & CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm shadow-cyan-500/5 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-zinc-900 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-zinc-800 flex items-center justify-around">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-2 text-sm"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
