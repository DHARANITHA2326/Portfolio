import { useState } from 'react';
import { Briefcase, Github, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';

interface ProjectsCardProps {
  selectedSkill: string | null;
}

export default function ProjectsCard({ selectedSkill }: ProjectsCardProps) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  // Filter projects if a skill is selected
  const filteredProjects = selectedSkill
    ? PROJECTS_DATA.filter((proj) =>
        proj.tags.some((tag) => tag.toLowerCase() === selectedSkill.toLowerCase())
      )
    : PROJECTS_DATA;

  return (
    <motion.div
      id="projects-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full justify-between"
    >
      <div>
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-display">Featured Projects</h2>
              <p className="text-xs text-gray-500 font-sans">Innovative software & full-stack development</p>
            </div>
          </div>

          {selectedSkill && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-lg font-display">
              <Sparkles className="w-3 h-3 text-indigo-500 animate-pulse" />
              <span>Filtered by "{selectedSkill}"</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200"
              >
                <p className="text-sm text-gray-500 font-sans">
                  No projects match the selected skill "{selectedSkill}".
                </p>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Try clearing the filter or choosing another technology.
                </p>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => {
                const isExpanded = expandedProjectId === project.id;
                return (
                  <motion.div
                    key={project.id}
                    layout="position"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`border rounded-xl transition-all overflow-hidden ${
                      isExpanded
                        ? 'border-indigo-200 bg-indigo-50/10 shadow-sm'
                        : 'border-gray-100 bg-white hover:bg-gray-50/50 hover:border-gray-200'
                    }`}
                  >
                    {/* Header */}
                    <div
                      id={`project-header-${project.id}`}
                      onClick={() => toggleExpand(project.id)}
                      className="p-4 flex justify-between items-start gap-3 cursor-pointer select-none"
                    >
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base font-display">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-1 font-sans">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full font-mono ${
                                selectedSkill?.toLowerCase() === tag.toLowerCase()
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
                        <a
                          id={`project-git-btn-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <button
                          id={`project-expand-btn-${project.id}`}
                          className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-indigo-50 bg-white"
                        >
                          <div className="p-4 space-y-4 text-xs font-sans">
                            <p className="text-gray-600 leading-relaxed">
                              {project.description}
                            </p>

                            <div className="space-y-2">
                              <h4 className="font-bold text-gray-800 font-display flex items-center gap-1 text-[11px] uppercase tracking-wider text-indigo-600">
                                Key Features & Implementation
                              </h4>
                              <ul className="list-disc pl-4 space-y-1.5 text-gray-600">
                                {project.keyFeatures.map((feat, idx) => (
                                  <li key={idx} className="leading-relaxed">
                                    {feat}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-2 flex justify-between items-center border-t border-gray-50 text-[10px] text-gray-400">
                              <span>Full architecture on GitHub</span>
                              <a
                                id={`project-details-link-${project.id}`}
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:underline cursor-pointer"
                              >
                                View Source <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 text-[11px] text-gray-400 font-sans flex items-center justify-between">
        <span>Click on any project header to view expanded features</span>
        {selectedSkill && (
          <span>Showing matches for "{selectedSkill}"</span>
        )}
      </div>
    </motion.div>
  );
}
