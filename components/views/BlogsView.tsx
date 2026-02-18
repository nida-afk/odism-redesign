import React from 'react';
import { BLOG_POSTS } from '../../constants';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export const BlogsView: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Latest <span className="text-neon-pink">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dives into technology, architecture, and the future of digital solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col p-0 overflow-hidden group hover:border-neon-pink/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold bg-black/80 text-neon-cyan rounded-full border border-neon-cyan/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-pink transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-neon-cyan transition-colors mt-auto group/btn">
                    Read Article <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};