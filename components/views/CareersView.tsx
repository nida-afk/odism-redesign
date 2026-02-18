import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Send, Upload, CheckCircle, Loader2 } from 'lucide-react';

export const CareersView: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate complex submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark-bg relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Join the <span className="text-neon-green">Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are always looking for exceptional talent. Submit your profile, and if your skills match our futuristic vision, we will contact you.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.2} direction="up">
            <GlassCard className="border-t-4 border-t-neon-green">
              {isSuccess ? (
                <div className="py-20 text-center flex flex-col items-center">
                   <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-neon-green/10 text-neon-green rounded-full flex items-center justify-center mb-6 border border-neon-green/30"
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold mb-4">Application Received</h3>
                  <p className="text-gray-400 max-w-md">
                    Your profile has been secured in our database. Our recruitment algorithms are processing your data. We will reach out within 48 hours.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="mt-8 text-neon-green hover:text-white transition-colors underline underline-offset-4"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                    <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                    <span className="font-mono text-neon-green text-sm tracking-wider">TALENT_ACQUISITION_PROTOCOL_V2.0</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Full Name</label>
                      <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all text-white" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Email Address</label>
                      <input type="email" required className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all text-white" placeholder="jane@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Phone Number</label>
                      <input type="tel" required className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all text-white" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Area of Expertise</label>
                      <select className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all text-white">
                        <option>Mobile Development (React Native/Flutter)</option>
                        <option>Backend Development (Node/Go/PHP)</option>
                        <option>Frontend Development (React/Angular)</option>
                        <option>UI/UX Design</option>
                        <option>QA Engineering</option>
                        <option>Project Management</option>
                        <option>Sales & Marketing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                   <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Portfolio / LinkedIn URL</label>
                      <input type="url" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all text-white" placeholder="https://linkedin.com/in/..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Upload Resume (PDF)</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center hover:border-neon-green/50 hover:bg-white/5 transition-all cursor-pointer group relative overflow-hidden">
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
                      <Upload className="w-8 h-8 text-gray-500 group-hover:text-neon-green mb-2 transition-colors" />
                      <span className="text-sm text-gray-400">Click to upload or drag and drop</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-green text-black font-bold text-lg py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Transmitting Data...
                      </>
                    ) : (
                      <>
                        Submit Application <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};