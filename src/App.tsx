import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Sun, ArrowRight, Printer } from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import EducationCard from './components/EducationCard';
import SkillsCard from './components/SkillsCard';
import ProjectsCard from './components/ProjectsCard';
import ExperienceCard from './components/ExperienceCard';
import ContactCard from './components/ContactCard';

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSelectSkill = (skill: string | null) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Subtle Radial Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-50/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-50/30 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <main id="main-portfolio-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 relative z-10 space-y-6 md:space-y-8">
        
        {/* Dynamic Nav Header */}
        <motion.header
          id="interactive-dashboard-controls"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between border-b border-gray-100 pb-4 mb-2"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold font-display text-sm shadow-sm shadow-indigo-100">
              DS
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-gray-900 font-display">
                Dharanitha S
              </span>
              <span className="text-[10px] text-gray-400 font-mono block leading-none mt-0.5">
                Developer Portfolio v1.4
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div id="interactive-badge" className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-white border border-gray-150 rounded-full shadow-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-sans font-medium">B.Tech IT Track</span>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-display text-gray-600 hover:text-indigo-600 bg-white border border-gray-150 rounded-full shadow-sm hover:border-indigo-100 hover:bg-indigo-50/20 active:bg-indigo-50 transition-all cursor-pointer"
              title="Print Portfolio Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              Print CV
            </button>
          </div>
        </motion.header>

        {/* 1. Profile Section (Full Width Hero) */}
        <ProfileCard />

        {/* 2. Interactive Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          
          {/* Education - timeline column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <EducationCard />
          </div>

          {/* Skills - interactive categories & filters column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SkillsCard onSelectSkill={handleSelectSkill} selectedSkill={selectedSkill} />
          </div>

          {/* Experience - Internships & certifications column */}
          <div className="col-span-12 lg:col-span-4">
            <ExperienceCard />
          </div>

          {/* Featured Projects - 2/3 width bottom left */}
          <div className="col-span-12 lg:col-span-8">
            <ProjectsCard selectedSkill={selectedSkill} />
          </div>

          {/* Contact / Quick Send - 1/3 width bottom right */}
          <div className="col-span-12 lg:col-span-4">
            <ContactCard />
          </div>

        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-gray-300" />
            <span>Built with React, Vite & Tailwind CSS • Hand-crafted Layout</span>
          </div>
          <div>
            <span>© 2026 Dharanitha S • All rights reserved</span>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}
