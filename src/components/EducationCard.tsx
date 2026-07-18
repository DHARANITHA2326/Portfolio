import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_DATA } from '../data';

export default function EducationCard() {
  return (
    <motion.div
      id="education-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full justify-between"
    >
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-display">Education</h2>
            <p className="text-xs text-gray-500 font-sans">Academic Journey & Credentials</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-indigo-100 pl-4 ml-3.5 space-y-6">
          {EDUCATION_DATA.map((edu, idx) => {
            const isCollege = edu.type === 'college';
            // Extract numeric score for presentation
            const scoreNum = edu.score.match(/\d+(\.\d+)?/)?.[0] || '100';
            const progressPercentage = isCollege 
              ? (parseFloat(scoreNum) / 10) * 100 
              : parseFloat(scoreNum);

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[24.5px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-110 transition-all z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-100" />
                </div>

                <div className="bg-gray-50/50 hover:bg-indigo-50/20 border border-transparent hover:border-indigo-50 rounded-xl p-4 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm font-display leading-tight group-hover:text-indigo-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-100 font-mono">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 font-sans mb-3">
                    {edu.institution}
                  </p>

                  {/* score badge and interactive slider representation */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-display flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {edu.score}
                      </span>
                      <span className="text-[10px] font-medium text-gray-400 font-mono">
                        {isCollege ? 'Targeting Distinction' : 'Academic Record'}
                      </span>
                    </div>
                    
                    {/* Tiny Progress Bar */}
                    <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                        className={`h-full ${isCollege ? 'bg-indigo-500' : 'bg-emerald-500'}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-gray-500">
        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
        <span>Consistently maintaining top-tier academic standing.</span>
      </div>
    </motion.div>
  );
}
