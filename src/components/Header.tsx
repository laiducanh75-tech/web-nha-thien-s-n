import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';
import NtsLogo from './NtsLogo';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ currentTab, onTabChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'projects', label: t.navProjects },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 font-sans" id="app-header">
      {/* Top utility bar */}
      <div className="hidden md:flex bg-[#002D62] text-white text-xs py-2 px-6 justify-between items-center border-b border-blue-900">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <MapPin size={13} className="text-[#FFC72C]" />
            <span>{t.addressLabel}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Mail size={13} className="text-[#FFC72C]" />
            <span>nhatthienson@nhatthienson.vn</span>
          </span>
        </div>
        <div className="flex items-center space-x-5 font-semibold">
          <a 
            href="tel:0888447239" 
            className="flex items-center space-x-1 hover:text-[#FFC72C] transition-colors"
            title="Gọi ngay 0888.447.239"
          >
            <Phone size={13} className="text-[#FFC72C]" />
            <span>{t.hotlineLabel}</span>
          </a>
          <a 
            href="https://zalo.me/0888447239" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-[#0068FF] hover:bg-blue-600 transition-colors px-2 py-0.5 rounded text-[11px] text-white font-bold"
            title="Chat Zalo 0888.447.239"
          >
            <span>Zalo</span>
          </a>


          {/* Language Switcher in Utility Bar */}
          <div className="flex items-center bg-blue-950/80 p-0.5 rounded-full border border-blue-700/60 ml-2">
            <button
              onClick={() => setLanguage('vi')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                language === 'vi'
                  ? 'bg-[#FFC72C] text-[#002D62] shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="Tiếng Việt"
            >
              🇻🇳 VI
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#FFC72C] text-[#002D62] shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="English"
            >
              🇬🇧 EN
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group py-1"
          onClick={() => { onTabChange('home'); setIsOpen(false); }}
          title="Về trang chủ Nhất Thiên Sơn Sài Gòn Logistics"
        >
          {/* Official NTS Saigon Logistics Logo Image */}
          <NtsLogo className="h-10 sm:h-12 md:h-14 max-h-[60px] w-auto flex-shrink-0 group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col justify-center">
            <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight uppercase text-[#002D62] group-hover:text-[#D21F26] transition-colors leading-tight">
              {t.companyFullName}
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#D21F26] leading-none mt-0.5">
              {t.companyShortName}
            </span>
          </div>
        </div>

        {/* Desktop Navbar Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                currentTab === item.id
                  ? 'bg-[#002D62] text-[#FFC72C] shadow-sm'
                  : 'text-[#002D62] hover:bg-gray-100 hover:text-[#002D62]'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Primary Action Button */}
          <button 
            onClick={() => {
              onTabChange('home');
              setTimeout(() => {
                const el = document.getElementById('contact-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="ml-3 bg-[#FF5A00] hover:bg-[#e04f00] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-200 cursor-pointer"
          >
            {t.requestQuote}
          </button>
        </nav>

        {/* Mobile menu & language button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Quick Language Toggle */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setLanguage('vi')}
              className={`px-2 py-1 rounded text-xs font-bold ${
                language === 'vi' ? 'bg-[#002D62] text-[#FFC72C]' : 'text-slate-600'
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-xs font-bold ${
                language === 'en' ? 'bg-[#002D62] text-[#FFC72C]' : 'text-slate-600'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#002D62] hover:text-[#FF5A00] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-gray-200 py-3 px-4 shadow-inner">
          <div className="flex flex-col space-y-2">
            {/* Language Switcher Bar in Mobile Drawer */}
            <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-gray-200 mb-1">
              <span className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                <Globe size={14} className="text-[#002D62]" />
                <span>Ngôn ngữ / Language:</span>
              </span>
              <div className="flex space-x-1">
                <button
                  onClick={() => setLanguage('vi')}
                  className={`px-3 py-1 rounded-md text-xs font-extrabold ${
                    language === 'vi'
                      ? 'bg-[#002D62] text-[#FFC72C] shadow-sm'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  🇻🇳 Tiếng Việt
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-xs font-extrabold ${
                    language === 'en'
                      ? 'bg-[#002D62] text-[#FFC72C] shadow-sm'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  currentTab === item.id
                    ? 'bg-[#002D62] text-white font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:0888447239"
                className="flex items-center justify-center space-x-1.5 bg-[#22c55e] text-white py-2.5 rounded-lg font-bold text-sm shadow-sm"
              >
                <Phone size={16} />
                <span>{t.callNow}</span>
              </a>
              <a
                href="https://zalo.me/0888447239"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 bg-[#0068FF] text-white py-2.5 rounded-lg font-bold text-sm shadow-sm"
              >
                <span>{t.chatZalo}</span>
              </a>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onTabChange('home');
                setTimeout(() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="w-full text-center bg-[#FF5A00] text-white py-3 rounded-lg font-bold shadow-sm"
            >
              {t.requestQuote}
            </button>
            <div className="pt-3 border-t border-gray-200 mt-2 text-xs text-gray-500 space-y-1">
              <p>📍 Trụ sở: 138/10 KP 57, Thới An, Q.12, TPHCM</p>
              <p>📞 Hotline / Zalo: 0888.447.239</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
