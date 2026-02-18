import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-dark-card border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)] relative"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-white/10 relative z-10">
              <div>
                <h2 className="text-3xl font-display font-bold text-white">Start Your Project</h2>
                <p className="text-gray-400 mt-1">Get a free quote for your next digital innovation.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 relative z-10">
              {isSuccess ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-neon-green/20 text-neon-green rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Our team will analyze your requirements and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-400 uppercase">Full Name</label>
                      <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white placeholder-gray-600" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-400 uppercase">Email Address</label>
                      <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white placeholder-gray-600" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-400 uppercase">Phone (Optional)</label>
                      <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white placeholder-gray-600" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-400 uppercase">Project Type</label>
                      <select className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white">
                        <option>Mobile App Development</option>
                        <option>Web Development</option>
                        <option>E-Commerce Solution</option>
                        <option>AI / IoT / Emerging Tech</option>
                        <option>Staff Augmentation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-gray-400 uppercase">Project Details</label>
                    <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white placeholder-gray-600" placeholder="Tell us about your idea, requirements, and timeline..." />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Free Quote <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      By submitting, you agree to our Privacy Policy. We reply within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};