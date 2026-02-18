import React from 'react';
import { SERVICES } from '../../constants';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ServicesView: React.FC = () => {
  // Group services by category
  const groupedServices = SERVICES.reduce((acc, service) => {
    const category = service.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  const categories = Object.keys(groupedServices);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our <span className="text-neon-cyan">Capabilities</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end development services engineered for scalability, performance, and future-readiness.
          </p>
        </AnimatedSection>

        <div className="space-y-24">
          {categories.map((category, catIndex) => (
            <div key={category}>
              <AnimatedSection delay={catIndex * 0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 border-l-4 border-neon-cyan pl-4 text-white">
                  {category}
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {groupedServices[category].map((service, index) => (
                  <AnimatedSection key={service.id} delay={index * 0.05}>
                    <GlassCard className="flex flex-col h-full hover:border-neon-cyan/30 transition-all duration-300">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 flex items-center justify-center border border-white/5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-7 h-7 text-neon-cyan" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
                          <div className="text-sm font-mono text-gray-400">{service.description}</div>
                        </div>
                      </div>
                      
                      {service.longDescription && (
                         <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                          {service.longDescription}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};