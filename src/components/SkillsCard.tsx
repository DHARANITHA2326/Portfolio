import { useState } from 'react';
import { Cpu, Check, Layers, Code, HardDrive, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';

interface SkillsCardProps {
  onSelectSkill: (skill: string | null) => void;
  selectedSkill: string | null;
}

export default function SkillsCard({ onSelectSkill, selectedSkill }: SkillsCardProps) {
  const [activeCategory, setActiveCategory] = useState<string>('prog');

  const getIcon = (id: string) => {
    switch (id) {
      case 'prog':
        return <Code className="w-4 h-4" />;
      case 'webdev':
        return <Layers className="w-4 h-4" />;
      case 'db':
        return <HardDrive className="w-4 h-4" />;
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  const getCategoryDetails = (id: string) => {
    switch (id) {
      case 'prog':
        return 'Strong foundations in OOP, algorithmic thinking, and structural problem-solving in Java and Python.';
      case 'webdev':
        return 'Proficient in building interactive single-page interfaces, backend servers, routing APIs, and styling dashboards.';
      case 'db':
        return 'Experience in relational query structures, schema design, indexes, and normalizations using MySQL.';
      default:
        return 'Proficient in standard developer workflows, IDE configurations, code control systems, and collaborative platform setups.';
    }
  };

  return (
    <motion.div
      id="skills-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full justify-between"
    >
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-display">Technical Skills</h2>
            <p className="text-xs text-gray-500 font-sans">Click on any category or chip to filter relevant projects</p>
          </div>
        </div>

        {/* Navigation for Categories */}
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-50 rounded-xl mb-5">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-cat-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-1 text-[11px] font-semibold rounded-lg font-display transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <div className={isActive ? 'text-indigo-600' : 'text-gray-400'}>
                  {getIcon(cat.id)}
                </div>
                <span className="truncate max-w-full">{cat.category.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="space-y-4">
          <div className="bg-gray-50/50 rounded-xl p-3.5 border border-gray-100 min-h-[70px]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display mb-1">
              Category Overview
            </h3>
            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              {getCategoryDetails(activeCategory)}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              <AnimatePresence mode="popLayout">
                {SKILL_CATEGORIES.find((c) => c.id === activeCategory)?.items.map((skill) => {
                  const isSelected = selectedSkill === skill;
                  return (
                    <motion.button
                      key={skill}
                      id={`skill-chip-${skill.toLowerCase().replace('.', '')}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => onSelectSkill(isSelected ? null : skill)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg font-sans border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-100'
                          : 'bg-white hover:bg-indigo-50/30 text-gray-700 hover:text-indigo-600 border-gray-150 hover:border-indigo-100'
                      }`}
                    >
                      {skill}
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center"
                        >
                          <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-sans">
        <span>Click chips to toggle spotlight filter</span>
        {selectedSkill && (
          <button
            id="clear-skill-filter-btn"
            onClick={() => onSelectSkill(null)}
            className="text-indigo-500 font-semibold hover:underline cursor-pointer"
          >
            Clear Filter
          </button>
        )}
      </div>
    </motion.div>
  );
}
