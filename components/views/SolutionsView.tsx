import React from 'react';
import { SOLUTIONS_DOMAINS } from '../../constants';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';

export const SolutionsView: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-purple/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Domain <span className="text-neon-purple">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            We don't just understand technology; we understand your industry. Our specialized solutions are pre-architected to solve the unique challenges of your sector.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DOMAINS.map((sol, index) => (
            <AnimatedSection key={sol.id} delay={index * 0.1} direction="up">
              <GlassCard className="h-full flex flex-col hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple">
                    <sol.icon className="w-8 h-8" />
                  </div>
                  {sol.stats && (
                    <span className="px-3 py-1 rounded-full bg-neon-green/10 text-neon-green text-xs font-bold border border-neon-green/20">
                      {sol.stats}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{sol.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  {sol.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  {sol.details?.map(detail => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                      {detail}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};
