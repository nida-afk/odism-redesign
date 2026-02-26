import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-dark-bg overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-mono tracking-widest uppercase mb-8">
            Agile in Nature
          </span>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white leading-tight">
            Digital Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Made Real
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Codism is a premier software development company delivering cutting-edge digital solutions. We have mastered the art of translating complex business requirements into elegant, scalable software.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neon-cyan transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Start Project <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:border-white transition-colors duration-300"
            >
              Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};