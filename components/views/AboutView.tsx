import React from 'react';
import { COMPANY_INFO, STATS } from '../../constants';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { MapPin, Mail, Phone, Globe, Building2, Crosshair, Map as MapIcon } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              {COMPANY_INFO.name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">
                {COMPANY_INFO.tagline}
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {COMPANY_INFO.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="border-l border-white/10 pl-4">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-neon-cyan font-mono uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} direction="left">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-green opacity-20 blur-[100px] rounded-full group-hover:opacity-40 transition-opacity duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team Collaboration" 
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:rotate-y-2"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Locations Section */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-10">
            <Globe className="text-neon-purple animate-pulse w-8 h-8" />
            <h2 className="text-3xl font-display font-bold">Global Location</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {COMPANY_INFO.locations?.map((loc, index) => (
              <GlassCard key={index} className="flex flex-col h-full hover:border-neon-cyan/50 transition-colors relative overflow-hidden group">
                
                {/* Radar Scan Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute w-full h-[2px] bg-neon-cyan/50 top-0 animate-scan-line shadow-[0_0_10px_#00f0ff]" />
                </div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-neon-cyan/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-ping" />
                    <Building2 className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display tracking-wide">{loc.label}</h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase mt-1">
                      <Crosshair className="w-3 h-3 text-neon-green" />
                      {loc.country}
                    </div>
                  </div>
                </div>
                
                <address className="not-italic text-gray-300 leading-loose mb-8 flex-grow border-l-2 border-white/10 pl-6 relative z-10">
                  {loc.address}
                </address>
                
                <div className="space-y-4 pt-6 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="p-2 bg-white/5 rounded-lg group-hover/item:bg-neon-green/20 transition-colors">
                      <Mail className="w-4 h-4 text-neon-green" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">contact@codism.io</span>
                  </div>
                  {loc.phone && (
                    <div className="flex items-center gap-4 group/item cursor-pointer">
                      <div className="p-2 bg-white/5 rounded-lg group-hover/item:bg-neon-green/20 transition-colors">
                        <Phone className="w-4 h-4 text-neon-green" />
                      </div>
                      <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{loc.phone}</span>
                    </div>
                  )}
                </div>

                {/* Decorative Map Grid Element */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M0 100 L100 100 L100 0" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                    <circle cx="80" cy="80" r="15" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" />
                  </svg>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Google Map Section */}
          <GlassCard className="w-full p-2 h-[450px] relative overflow-hidden group">
             <div className="absolute top-4 left-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <MapIcon className="w-4 h-4 text-neon-green" />
                <span className="text-xs font-mono text-white">LIVE_SATELLITE_FEED :: PUNE_HQ</span>
             </div>
             
             {/* Map Iframe with Dark Mode Filter */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576082498704!2d73.8876!3d18.4575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea7d8b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sManish%20Plaza%2C%20NIBM%20Rd%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%) grayscale(20%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Overlay grid for tech feel */}
              <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          </GlassCard>
        </AnimatedSection>
        
        <style>{`
          @keyframes scan-line {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          .animate-scan-line {
            animation: scan-line 3s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};