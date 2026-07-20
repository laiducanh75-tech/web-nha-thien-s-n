import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Send, Mail, Phone, MapPin } from 'lucide-react';
import NtsLogo from './NtsLogo';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#041E42] text-gray-200 pt-16 pb-8 border-t-4 border-[#FF5A00] font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Information Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <NtsLogo className="w-12 h-12 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-bold text-white leading-tight uppercase tracking-wider">
                Nhất Thiên Sơn
              </h2>
              <span className="text-xs font-semibold text-[#FFC72C] uppercase tracking-widest leading-none block">
                Saigon Logistics
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed pt-2">
            Cung cấp giải pháp vận tải đa phương thức với hiệu quả cao nhất cho doanh nghiệp của bạn. Kết nối thị trường nội địa với chuỗi cung ứng toàn cầu an toàn và tối ưu chi phí.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-[#FF5A00] hover:scale-110 transition-all text-white">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-[#FF5A00] hover:scale-110 transition-all text-white">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-[#FF5A00] hover:scale-110 transition-all text-white">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-3 mb-4">
            Dịch vụ
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Vận tải đường biển (FCL/LCL)
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Vận tải hàng không liên lục địa
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Vận tải đường bộ nội địa & liên biên giới
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Dịch vụ kho bãi thông minh
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Khai báo Hải quan & Ủy thác XNK
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-3 mb-4">
            Liên kết nhanh
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <button onClick={() => onTabChange('about')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Về chúng tôi
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('projects')} className="hover:text-[#FFC72C] transition-colors text-left py-1">
                Dự án tiêu biểu
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC72C] transition-colors block py-1">
                Bảng giá cước vận chuyển
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC72C] transition-colors block py-1">
                Chính sách bảo mật (Privacy Policy)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC72C] transition-colors block py-1">
                Điều khoản dịch vụ (Terms)
              </a>
            </li>
            <li className="pt-1.5 border-t border-gray-800 mt-1.5">
              <a 
                href="https://nhatthienson.nhatthienson.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FFC72C] hover:text-white transition-all py-1 font-bold flex items-center gap-1.5"
                title="Hệ thống Email công vụ của Nhất Thiên Sơn"
              >
                <Mail size={14} className="text-[#FFC72C]" />
                <span>Webmail Nội Bộ (NTS Mail)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-3 mb-4">
            Bản tin Logistics
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            Đăng ký để nhận tin tức logistics, cảnh báo hải quan mới nhất và các ưu đãi cước vận chuyển định kỳ từ chúng tôi.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Email của bạn..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0a2540] text-white border border-gray-700 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-lg py-2.5 px-3 pr-10 text-sm outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF5A00] transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            {subscribed && (
              <span className="text-xs text-[#FFC72C] font-semibold animate-pulse block">
                ✓ Đăng ký thành công! Cảm ơn bạn.
              </span>
            )}
          </form>

          <div className="pt-4 text-xs text-gray-400 space-y-1 border-t border-gray-800 mt-4">
            <div className="flex items-start space-x-1">
              <MapPin size={12} className="text-[#FFC72C] mt-0.5 flex-shrink-0" />
              <span>138/12 Tô Ngọc Vân, Q.12, TPHCM</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={12} className="text-[#FFC72C] flex-shrink-0" />
              <span>0888.447.239 / 0919.417.239</span>
            </div>
          </div>
        </div>

      </div>

      {/* Under footer copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-12 border-t border-gray-800 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Nhất Thiên Sơn Sài Gòn (Saigon Logistics). All rights reserved.</p>
        <p className="text-gray-500 font-mono">Designed with efficiency for the global market.</p>
      </div>
    </footer>
  );
}
