import React from 'react';
import { TECH_STACK } from '../constants';
import { AnimatedSection } from './ui/AnimatedSection';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h3 className="text-3xl font-display font-bold mb-4">
              Agile in <span className="text-neon-green">Nature</span>
            </h3>
            <p className="text-gray-400">
              We leverage a robust stack of modern technologies to build scalable, secure, and high-performance applications.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {TECH_STACK.map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.1} direction="right">
                <div className="p-4 border border-white/10 rounded-lg bg-white/5 flex items-center justify-center gap-3 hover:border-neon-green/50 transition-colors cursor-default">
                  <span className="font-mono text-sm font-bold text-gray-200">{tech.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
