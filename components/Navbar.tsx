import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { ViewName } from '../types';

interface NavbarProps {
  currentView: ViewName;
  onNavigate: (view: ViewName) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" />
      
      {/* Subtle Glow Line */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-50" />
      
      <div className="relative flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div 
          className="text-2xl font-bold font-display cursor-pointer flex items-center gap-1 group relative z-10"
          onClick={() => onNavigate('home')}
        >
          <motion.span 
            className="text-white"
            whileHover={{ x: -2 }}
          >
            CODISM
          </motion.span>
          <motion.span 
            className="text-neon-cyan"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            .IO
          </motion.span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-mono transition-colors duration-300 ${
                  isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button (Stylized) */}
        <button 
          className="md:hidden text-white relative z-10 p-2"
          onClick={() => {/* Mobile menu toggle logic would go here */}}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white/80"></span>
            <span className="block w-6 h-0.5 bg-neon-cyan/80"></span>
            <span className="block w-4 h-0.5 bg-white/80 ml-auto"></span>
          </div>
        </button>
      </div>
    </nav>
  );
};