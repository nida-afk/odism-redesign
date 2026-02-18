import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-cyan font-mono text-sm tracking-[0.2em] mb-4 uppercase">
            Codism.io Redesigned
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
            Digital Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Made Real
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            We don't just build software. We engineer digital excellence for the future using React, AI, and Cloud technologies.
          </p>

          <motion.button
            onClick={onOpenContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 0px rgba(0, 240, 255, 0)",
                "0 0 20px rgba(0, 240, 255, 0.3)",
                "0 0 0px rgba(0, 240, 255, 0)"
              ]
            }}
            transition={{ 
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-2 mx-auto"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </section>
  );
};