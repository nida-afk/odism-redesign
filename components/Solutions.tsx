import React from 'react';
import { SOLUTIONS_DOMAINS } from '../constants';
import { AnimatedSection } from './ui/AnimatedSection';

export const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-neon-pink/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Multiskilled <span className="text-neon-pink">Staff</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering specialized solutions across critical business domains.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTIONS_DOMAINS.map((sol, i) => (
            <AnimatedSection key={sol.title} delay={i * 0.2} direction="up">
              <div className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 hover:border-neon-pink/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-neon-pink/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <sol.icon className="text-neon-pink w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{sol.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                    {sol.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};