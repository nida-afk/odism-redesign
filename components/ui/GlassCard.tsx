import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <motion.div 
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden group ${className}`}
      whileHover={hoverEffect ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </motion.div>
  );
};
