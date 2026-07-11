import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleExplorer from './components/RoleExplorer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple intersection observer to update active section in navbar during scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'role-explorer', 'projects', 'skills', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for nav

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500/35 selection:text-white scroll-smooth antialiased">
      {/* Background radial glow */}
      <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_20%,#09090b_100%)] opacity-30" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="relative">
        
        {/* Home / Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* Dynamic Role Fitting Section */}
        <RoleExplorer scrollToSection={scrollToSection} />

        {/* Projects Grid Showcase */}
        <Projects />

        {/* Technical Competencies & DSA Java Interactive */}
        <Skills />

        {/* Experience & Internships & Education Timeline */}
        <Experience />

        {/* Industry Certifications & Hackathons */}
        <Certifications />

        {/* Copy Contact & Dynamic Mail Generation Section */}
        <Contact />

      </main>
    </div>
  );
}
