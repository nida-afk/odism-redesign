import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'GitHub', url: '#' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold tracking-tighter">
          CODISM<span className="text-neon-cyan">.IO</span>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Codism. All rights reserved.
        </div>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="text-gray-400 relative"
              whileHover={{ scale: 1.1, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-px bg-neon-cyan origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};