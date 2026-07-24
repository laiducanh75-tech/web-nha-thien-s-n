import React from 'react';
import { PROJECTS_DATA } from '../data';
import { ShieldCheck, Box, Package, HelpCircle, ArrowUpRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsViewProps {
  onNavigateToTab: (tab: string) => void;
}

export default function ProjectsView({ onNavigateToTab }: ProjectsViewProps) {
  const { t, language } = useLanguage();

  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20" id="projects-view">
      {/* 1. Breadcrumbs bar */}
      <div className="bg-slate-100 py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <button onClick={() => onNavigateToTab('home')} className="hover:text-[#002D62] font-medium">{t.navHome}</button>
          <span>&gt;</span>
          <span className="text-gray-800 font-semibold">{t.navProjects}</span>
        </div>
      </div>

      {/* 2. Hero Banner Card layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="bg-[#002D62] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden text-center shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800")' }}></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block border border-[#FFC72C]/40 text-[#FFC72C] text-[10px] sm:text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
              {language === 'en' ? 'LOGISTICS PROJECTS' : 'DỰ ÁN LOGISTICS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
              {t.projectsHeroTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {t.projectsHeroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Project Detail Cards - Structured block list as shown in Screenshot #2 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {PROJECTS_DATA.map((proj, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/60 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 text-left"
          >
            {/* Project Image Header with high-aspect-ratio */}
            <div className="h-64 sm:h-80 w-full relative overflow-hidden">
              <img 
                src={proj.img} 
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                ✓ {proj.subtitle}
              </div>
            </div>

            {/* Project Text Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#002D62] tracking-tight group-hover:text-[#FF5A00]">
                {proj.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {proj.desc}
              </p>

              {/* Render tech tags if available (like Pallet & Cargo management card) */}
              {proj.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Supplementary Pink Container Visual Block showing ONE Marine Box (matches Screenshot #2) */}
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-md overflow-hidden p-6 sm:p-8 text-left space-y-6">
          <h4 className="text-lg font-bold text-[#002D62] uppercase tracking-wider border-b border-gray-100 pb-2">
            {language === 'en' ? 'Operating Container Fleet & Cargo Space' : 'Đội tàu và Vỏ container vận hành thực tế'}
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ONE Container trailer box */}
            <div className="h-48 rounded-xl overflow-hidden relative shadow border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
                alt="ONE Container"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="absolute bottom-3 left-3 bg-[#e83d8a] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                ONE Container FCL
              </span>
            </div>

            {/* Empty container space trailer box */}
            <div className="h-48 rounded-xl overflow-hidden relative shadow border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" 
                alt="Empty shipping container inside"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="absolute bottom-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                {language === 'en' ? 'Volumetric Space Optimization' : 'Tối ưu hóa dung tích'}
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 italic">
            {language === 'en' 
              ? '* All NTS depot containers undergo thorough cleaning, sanitization, and leak-proof inspection before being dispatched for packing.'
              : '* Toàn bộ vỏ container lưu kho bãi Nhất Thiên Sơn đều trải qua quy trình phun rửa vệ sinh, khửi khuẩn nghiêm ngặt, đảm bảo không bám bẩn hoặc có khe hở rò rỉ nước trước khi cấp vỏ đi đóng hàng.'}
          </p>
        </div>
      </section>

      {/* 4. Orange Call to Action Block as shown at bottom of Screenshot #2 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#B34700] rounded-2xl p-8 text-white text-center space-y-6 shadow-lg border border-orange-500/10">
          <h3 className="text-xl sm:text-2xl font-bold uppercase">
            {language === 'en' ? 'DO YOU HAVE A SHIPMENT TO TRANSPORT?' : 'Bạn có lô hàng cần vận chuyển?'}
          </h3>
          <p className="text-sm text-orange-100 max-w-xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Let our logistics experts consult the most optimal routing for your business, saving up to 25% on international freight costs.'
              : 'Hãy để các chuyên gia của chúng tôi tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn, tiết kiệm đến 25% chi phí logistics chặng quốc tế.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => {
                onNavigateToTab('home');
                setTimeout(() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white hover:bg-orange-50 text-[#B34700] px-6 py-3 rounded-lg font-bold text-sm shadow transition-all active:scale-95 cursor-pointer"
            >
              {t.requestQuote}
            </button>
            <button 
              onClick={() => {
                onNavigateToTab('home');
                setTimeout(() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all active:scale-95 cursor-pointer"
            >
              {t.contactConsultation}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
