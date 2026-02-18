import React from 'react';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <div className="w-full bg-black border-y border-white/10 py-12 overflow-hidden relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">
              <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:to-white transition-all duration-500">
                {stat.value}
              </span>
              <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase mt-3 mb-1">{stat.label}</span>
              <span className="text-gray-600 text-xs font-medium group-hover:text-gray-400 transition-colors">{stat.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};