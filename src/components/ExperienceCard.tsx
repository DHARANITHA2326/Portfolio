import { useState } from 'react';
import { Award, Briefcase, Calendar, MapPin, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATIONS_DATA, INTERNSHIPS_DATA } from '../data';

export default function ExperienceCard() {
  const [activeTab, setActiveTab] = useState<'internships' | 'certifications'>('internships');

  return (
    <motion.div
      id="experience-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full justify-between"
    >
      <div>
        {/* Header Tabs */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
          <div className="flex gap-1 bg-gray-50 p-1 rounded-xl">
            <button
              id="tab-internships-btn"
              onClick={() => setActiveTab('internships')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg font-display transition-all cursor-pointer ${
                activeTab === 'internships'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Internships
            </button>
            <button
              id="tab-certifications-btn"
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg font-display transition-all cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Certifications
            </button>
          </div>

          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
            {activeTab === 'internships' ? 'Industry Practice' : 'Credentials'}
          </span>
        </div>

        {/* Dynamic List */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            {activeTab === 'internships' ? (
              <motion.div
                key="internships"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {INTERNSHIPS_DATA.map((intern, idx) => (
                  <div
                    key={intern.id}
                    className="p-3.5 bg-gray-50/50 hover:bg-indigo-50/20 border border-transparent hover:border-indigo-50 rounded-xl transition-all space-y-2 group"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-1">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm font-display group-hover:text-indigo-600 transition-colors">
                          {intern.role}
                        </h3>
                        <p className="text-xs text-indigo-500 font-semibold font-sans">
                          {intern.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-100 font-mono">
                        <Calendar className="w-3 h-3 text-indigo-400" />
                        {intern.period}
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-500 font-sans flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      {intern.location}
                    </p>

                    <ul className="space-y-1 pl-1 pt-1 border-t border-gray-100/50">
                      {intern.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-600 font-sans flex items-start gap-1.5 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3 bg-gray-50/50 hover:bg-indigo-50/20 border border-transparent hover:border-indigo-50 rounded-xl transition-all flex items-start gap-2.5 group"
                  >
                    <div className="p-1.5 bg-indigo-50 text-indigo-500 rounded-lg group-hover:bg-indigo-100 transition-colors mt-0.5">
                      <BadgeCheck className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h3 className="font-bold text-gray-900 text-xs font-display leading-snug truncate group-hover:text-indigo-600 transition-colors" title={cert.title}>
                        {cert.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-sans font-medium">
                        {cert.issuer}
                      </p>
                      <span className="inline-block text-[10px] text-gray-400 font-mono">
                        Year: {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-gray-500 font-sans">
        {activeTab === 'internships' ? (
          <>
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Practical industry projects and engineering exposure.</span>
          </>
        ) : (
          <>
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Verified certificates from global programs and institutes.</span>
          </>
        )}
      </div>
    </motion.div>
  );
}
