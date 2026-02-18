import React from 'react';
import { Hero } from '../Hero';
import { Stats } from '../Stats';
import { TechStack } from '../TechStack';
import { Philosophy } from '../Philosophy';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SERVICES, SOLUTIONS_DOMAINS } from '../../constants';
import { GlassCard } from '../ui/GlassCard';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { ViewName } from '../../types';

interface HomeViewProps {
  onNavigate: (view: ViewName) => void;
  onOpenContact?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero onOpenContact={onOpenContact || (() => {})} />
      <Stats />
      
      {/* Featured Services Teaser */}
      <section className="py-32 bg-dark-bg relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">Services</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-lg">
                High-performance digital architecture for scalability and speed.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <button 
                onClick={() => onNavigate('services')}
                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group font-mono text-sm"
              >
                Explore Capability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.15} direction="up">
                <GlassCard className="h-full group cursor-pointer" hoverEffect={true}>
                  <div onClick={() => onNavigate('services')} className="h-full flex flex-col">
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <service.icon className="w-12 h-12 text-gray-300 group-hover:text-neon-cyan transition-colors relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                    <div className="flex items-center text-neon-cyan text-sm font-bold opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
      
      {/* Solutions Teaser */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(112,0,255,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
           <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-neon-purple">Services</span>
            </h2>
            <p className="text-gray-400 text-lg">Tailored digital ecosystems for your specific domain.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SOLUTIONS_DOMAINS.slice(0, 4).map((sol, i) => (
              <AnimatedSection key={sol.id} delay={i * 0.1}>
                 <div 
                   onClick={() => onNavigate('solutions')}
                   className="aspect-square flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-purple/50 hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden"
                 >
                   <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <sol.icon className="w-10 h-10 mb-6 text-gray-400 group-hover:text-neon-purple transition-colors relative z-10 transform group-hover:scale-110 duration-300" />
                   <h3 className="font-bold text-sm text-center relative z-10">{sol.title}</h3>
                 </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Philosophy />

      {/* Blog Teaser Section */}
      <section className="py-24 bg-dark-bg border-t border-white/5 flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <BookOpen className="w-10 h-10 text-neon-pink mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6">Latest from our <span className="text-neon-pink">Blog</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Stay updated with the latest trends in React Native, AI, Cloud Computing, and Enterprise Architecture.
            </p>
            <button 
              onClick={() => onNavigate('blog')}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,153,0.3)]"
            >
              Read Our Blog
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};