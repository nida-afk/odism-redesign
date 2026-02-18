import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectPlanner } from './components/ProjectPlanner';
import { ContactModal } from './components/ContactModal';
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { SolutionsView } from './components/views/SolutionsView';
import { AboutView } from './components/views/AboutView';
import { CareersView } from './components/views/CareersView';
import { BlogsView } from './components/views/BlogsView';
import { ViewName } from './types';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState<ViewName>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  if (!mounted) return null;

  return (
    <main className="bg-dark-bg min-h-screen text-white selection:bg-neon-cyan selection:text-black font-sans">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          {currentView === 'home' && <HomeView onNavigate={setCurrentView} onOpenContact={() => setIsContactOpen(true)} />}
          {currentView === 'services' && <ServicesView />}
          {currentView === 'solutions' && <SolutionsView />}
          {currentView === 'about' && <AboutView />}
          {currentView === 'careers' && <CareersView />}
          {currentView === 'blog' && <BlogsView />}
        </motion.div>
      </AnimatePresence>

      <Footer />
      <ProjectPlanner />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Global styles for scan animation */}
      <style>{`
        @keyframes scan {
          0% { background-position: 0% -100%; }
          100% { background-position: 0% 200%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default App;