import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function ProfileCard() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <motion.div
      id="profile-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center w-full">
        {/* Monogram Initial Avatar */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-150 flex items-center justify-center font-bold text-indigo-600 text-2xl md:text-3xl font-display flex-shrink-0 shadow-inner">
          DS
        </div>

        {/* Info & Core Metadata */}
        <div className="flex-grow space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-full font-display">
                Available for Roles
              </span>
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-600 rounded-full font-display flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active IT Student
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-gray-900">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg font-medium text-indigo-600 mt-1 font-display">
              {PERSONAL_INFO.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 font-sans">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-indigo-500" />
              {PERSONAL_INFO.location}
            </span>
            <button
              id="copy-email-btn"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-indigo-500" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedType === 'email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-gray-400" />
              )}
            </button>
            <button
              id="copy-phone-btn"
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer group"
            >
              <Phone className="w-4 h-4 text-indigo-500" />
              <span>{PERSONAL_INFO.phone}</span>
              {copiedType === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-gray-400" />
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a
              id="linkedin-link"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-display text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg border border-gray-150 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              id="github-link"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-display text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg border border-gray-150 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              id="leetcode-link"
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-display text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg border border-gray-150 transition-all"
            >
              <Code className="w-3.5 h-3.5" />
              LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* Objective section within profile card */}
      <div className="w-full md:max-w-xs md:border-l md:border-gray-100 md:pl-6 flex flex-col justify-center h-full pt-6 md:pt-0">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display mb-1.5">
          Career Objective
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed font-sans">
          "{PERSONAL_INFO.objective}"
        </p>
      </div>
    </motion.div>
  );
}
