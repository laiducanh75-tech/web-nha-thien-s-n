import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import NtsLogo from './NtsLogo';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ currentTab, onTabChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'projects', label: 'Dự án tiêu biểu' },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 font-sans" id="app-header">
      {/* Top utility bar */}
      <div className="hidden md:flex bg-[#002D62] text-white text-xs py-2 px-6 justify-between items-center border-b border-blue-900">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <MapPin size={13} className="text-[#FFC72C]" />
            <span>138/12 Tô Ngọc Vân, Thới An, Q.12, TPHCM</span>
          </span>
          <span className="flex items-center space-x-1">
            <Mail size={13} className="text-[#FFC72C]" />
            <span>nhatthienson@nhatthienson.vn</span>
          </span>
        </div>
        <div className="flex items-center space-x-6 font-semibold">
          <span className="flex items-center space-x-1">
            <Phone size={13} className="text-[#FFC72C]" />
            <span>Hỗ trợ 24/7: 0888.447.239</span>
          </span>
          <a 
            href="https://nhatthienson.nhatthienson.vn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-blue-800/60 hover:bg-[#FF5A00] transition-all duration-200 px-2.5 py-1 rounded text-[11px] text-white font-bold border border-blue-700/50 hover:border-transparent"
            title="Dành cho nhân viên Nhất Thiên Sơn"
          >
            <Mail size={12} className="text-[#FFC72C]" />
            <span>Đăng nhập Webmail</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => { onTabChange('home'); setIsOpen(false); }}
        >
          {/* Official Saigon Logistics Circular Logo */}
          <NtsLogo className="w-14 h-14 flex-shrink-0 group-hover:scale-105 transition-transform duration-300" />
          
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-extrabold text-[#002D62] leading-tight tracking-tight uppercase">
              Nhất Thiên Sơn
            </h1>
            <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest leading-none">
              Saigon Logistics
            </span>
          </div>
        </div>

        {/* Desktop Navbar Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                currentTab === item.id
                  ? 'bg-[#002D62] text-[#FFC72C] shadow-sm'
                  : 'text-[#002D62] hover:bg-gray-100 hover:text-[#002D62]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              onTabChange('home');
              setTimeout(() => {
                const el = document.getElementById('contact-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="ml-4 bg-[#FF5A00] hover:bg-[#e04f00] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-200"
          >
            Yêu cầu báo giá
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
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
              Liên hệ báo giá ngay
            </button>
            <div className="pt-3 border-t border-gray-200 mt-2 text-xs text-gray-500 space-y-1">
              <p>📍 Trụ sở: Thới An, Quận 12, TPHCM</p>
              <p>📞 Hotline: 0888.447.239 / 0919.417.239</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
