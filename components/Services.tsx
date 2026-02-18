import React, { useState, useRef, useEffect } from 'react';
import { SERVICES } from '../constants';
import { AnimatedSection } from './ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// Spotlight Effect Card Wrapper
const SpotlightCard = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group border border-white/10 bg-black/50 overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(112, 0, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export const Services: React.FC = () => {
  // Show a subset of services on the homepage to avoid clutter
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <section className="py-24 bg-dark-bg relative" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-neon-purple">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1} direction="up">
              <SpotlightCard className="h-full">
                <div className="p-8 h-full flex flex-col relative z-20">
                  {/* Floating Icon */}
                  <motion.div 
                    className="mb-8 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent w-fit border border-white/5 shadow-lg backdrop-blur-sm transition-colors duration-300 group-hover:border-neon-cyan/30 group-hover:bg-white/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon 
                        className="w-10 h-10 text-white transition-all duration-300 group-hover:text-neon-cyan" 
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-gray-400 group-hover:border-neon-purple/30 group-hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="text-neon-cyan w-6 h-6" />
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};