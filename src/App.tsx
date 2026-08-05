import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectsView from './components/ProjectsView';
import CollectionDetailView from './components/CollectionDetailView';
import ServicesView from './components/ServicesView';
import SaleView from './components/SaleView';
import FloatingContactButtons from './components/FloatingContactButtons';
import { LanguageProvider } from './context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

// ScrollToTop component ensures page scrolls to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between selection:bg-[#FF5A00] selection:text-white" id="root-app-container">
        <div>
          {/* Navigation Header bar */}
          <Header />

          {/* Dynamic transition-animated main content wrapper with Routing */}
          <main className="w-full relative z-10" id="main-content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <Routes location={location}>
                  <Route path="/" element={<HomeView onNavigateToTab={() => {}} />} />
                  <Route path="/home" element={<HomeView onNavigateToTab={() => {}} />} />
                  <Route path="/about" element={<AboutView onNavigateToTab={() => {}} />} />
                  <Route path="/ve-chung-toi" element={<AboutView onNavigateToTab={() => {}} />} />
                  <Route path="/projects" element={<ProjectsView />} />
                  <Route path="/collection" element={<ProjectsView />} />
                  <Route path="/collection/:id" element={<CollectionDetailView />} />
                  <Route path="/product/:id" element={<CollectionDetailView />} />
                  <Route path="/services" element={<ServicesView />} />
                  <Route path="/services/:serviceId" element={<ServicesView />} />
                  <Route path="/sale" element={<SaleView />} />
                  <Route path="/uu-dai" element={<SaleView />} />
                  <Route path="/bao-gia" element={<SaleView />} />
                  {/* Fallback to Home */}
                  <Route path="*" element={<HomeView onNavigateToTab={() => {}} />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Structured footer block */}
        <Footer />

        {/* Floating Call & Zalo Quick Contact Buttons */}
        <FloatingContactButtons />
      </div>
    </LanguageProvider>
  );
}
