import { useState, FormEvent } from 'react';
import { Mail, Phone, Send, CheckCircle, FileText, Printer, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function ContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      id="contact-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full justify-between"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-display">Get In Touch</h2>
              <p className="text-xs text-gray-500 font-sans">Connect or schedule an interview</p>
            </div>
          </div>
        </div>

        {/* Action Button: Print Beautiful Resume */}
        <div className="p-4 bg-indigo-50/40 rounded-xl border border-indigo-50 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 text-xs font-display flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-indigo-500" />
              Dynamic Interactive CV
            </h3>
            <p className="text-[11px] text-gray-500 font-sans">
              Print or export this portfolio as a clean, professionally styled one-page resume.
            </p>
          </div>
          <button
            id="print-resume-btn"
            onClick={handlePrint}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold font-display text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print/PDF
          </button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="name-input" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-display">
                Your Name
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full text-xs px-3 py-2 border border-gray-150 focus:border-indigo-500 focus:outline-none rounded-lg bg-gray-50/50 font-sans transition-all text-gray-800"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email-input" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-display">
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full text-xs px-3 py-2 border border-gray-150 focus:border-indigo-500 focus:outline-none rounded-lg bg-gray-50/50 font-sans transition-all text-gray-800"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message-input" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-display">
              Message
            </label>
            <textarea
              id="message-input"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hi Dharanitha, let's schedule an interview..."
              className="w-full text-xs px-3 py-2 border border-gray-150 focus:border-indigo-500 focus:outline-none rounded-lg bg-gray-50/50 font-sans transition-all text-gray-800 resize-none"
            />
          </div>

          <button
            id="send-message-btn"
            type="submit"
            disabled={isSubmitting || submitted}
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold font-display rounded-lg transition-all shadow-sm cursor-pointer ${
              submitted
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-900 hover:bg-gray-800 text-white active:bg-black disabled:opacity-50'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
              </span>
            ) : submitted ? (
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-white" />
                Message Sent!
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                Send Message
                <Send className="w-3.5 h-3.5" />
              </span>
            )}
          </button>
        </form>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-sans">
        <span>Direct contact: {PERSONAL_INFO.phone}</span>
        <a
          id="direct-email-link"
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-indigo-500 font-semibold hover:underline cursor-pointer flex items-center gap-0.5"
        >
          Send Mail <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
