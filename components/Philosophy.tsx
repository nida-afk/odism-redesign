import React from 'react';
import { PHILOSOPHY } from '../constants';
import { AnimatedSection } from './ui/AnimatedSection';
import { Quote } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-32 bg-black relative flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <Quote className="w-12 h-12 text-neon-cyan mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8 max-w-4xl mx-auto">
            "{PHILOSOPHY.title}"
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light">
            {PHILOSOPHY.description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
