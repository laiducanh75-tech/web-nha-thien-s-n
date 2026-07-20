import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectsView from './components/ProjectsView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Auto-scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <HomeView onNavigateToTab={setCurrentTab} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <AboutView onNavigateToTab={setCurrentTab} />
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ProjectsView onNavigateToTab={setCurrentTab} />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <HomeView onNavigateToTab={setCurrentTab} />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between selection:bg-[#FF5A00] selection:text-white" id="root-app-container">
      <div>
        {/* Navigation Header bar */}
        <Header currentTab={currentTab} onTabChange={setCurrentTab} />

        {/* Dynamic transition-animated main content wrapper */}
        <main className="w-full relative z-10" id="main-content-wrapper">
          <AnimatePresence mode="wait">
            {renderActiveView()}
          </AnimatePresence>
        </main>
      </div>

      {/* Structured footer block */}
      <Footer onTabChange={setCurrentTab} />
    </div>
  );
}
