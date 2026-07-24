import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Send, Mail, Phone, MapPin } from 'lucide-react';
import NtsLogo from './NtsLogo';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      try {
        await fetch("https://formspree.io/f/mqerlkap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `Đăng ký Bản tin Logistics mới từ: ${email}`,
            "Đăng ký nhận bản tin": email
          })
        });
      } catch (err) {
        console.error("Lỗi khi kết nối tới Formspree:", err);
      }
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#041E42] text-gray-200 pt-12 font-sans" id="app-footer">
      {/* Top Main Footer Info Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
        
        {/* Brand Information Column */}
        <div className="space-y-4">
          <div 
            className="inline-block bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-200/80 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onTabChange('home')}
            title="Về trang chủ Nhất Thiên Sơn Sài Gòn Logistics"
          >
            <NtsLogo className="h-32 sm:h-40 md:h-48 max-h-[200px] w-auto max-w-none" />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
            Cung cấp giải pháp vận tải đa phương thức với hiệu quả cao nhất cho doanh nghiệp của bạn. Kết nối thị trường nội địa với chuỗi cung ứng toàn cầu an toàn và tối ưu chi phí.
          </p>
          {/* Social Links Icons */}
          <div className="flex items-center space-x-3 pt-1">
            <a 
              href="https://www.facebook.com/nhatthiensonsaigon.vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-[#1877F2] hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow-sm hover:scale-110"
              title="Facebook Fanpage Nhất Thiên Sơn Sài Gòn"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://zalo.me/0888447239" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-[#0068FF] hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow-sm hover:scale-110"
              title="Chat Zalo 0888.447.239"
            >
              <svg viewBox="0 0 48 48" className="w-5 h-5 fill-current">
                <path d="M24,4 C12.954,4 4,11.835 4,21.487 C4,26.793 7.025,31.488 11.826,34.708 C11.233,37.33 9.429,40.168 7.316,42.023 C7.023,42.28 7.21,42.753 7.595,42.711 C13.254,42.093 17.585,39.112 19.864,37.319 C21.198,37.731 22.58,37.974 24,37.974 C35.046,37.974 44,30.139 44,20.487 C44,10.835 35.046,4 24,4 Z M32.61,25.86 L28.23,25.86 C27.81,25.86 27.47,25.52 27.47,25.1 C27.47,24.68 27.81,24.34 28.23,24.34 L31.54,24.34 L27.68,18.82 C27.48,18.53 27.55,18.13 27.84,17.93 C28.13,17.73 28.53,17.8 28.73,18.09 L33.02,24.23 C33.16,24.43 33.15,24.7 33,24.89 C32.85,25.08 32.74,25.86 32.61,25.86 Z M17.5,17.5 C18.33,17.5 19,18.17 19,19 L19,25 C19,25.83 18.33,26.5 17.5,26.5 C16.67,26.5 16,25.83 16,25 L16,19 C16,18.17 16.67,17.5 17.5,17.5 Z" />
              </svg>
            </a>
            <a 
              href="tel:0888447239" 
              className="w-9 h-9 rounded-full bg-[#FF5A00] hover:bg-orange-600 flex items-center justify-center text-white transition-all shadow-sm hover:scale-110"
              title="Gọi hotline 0888.447.239"
            >
              <Phone size={18} />
            </a>
          </div>
          {/* Ministry of Industry and Trade Notification Seal */}
          <div className="pt-2">
            <a 
              href="http://online.gov.vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:scale-105 transition-transform"
              title="Website đã thông báo với Bộ Công Thương"
            >
              <svg width="220" height="66" viewBox="0 0 200 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 sm:h-14 w-auto">
                <defs>
                  <path id="onlineGovArcBrandCol" d="M 16 33 A 18 18 0 0 1 52 33" />
                </defs>
                <rect x="46" y="8" width="148" height="50" rx="10" fill="#0072CE" />
                <circle cx="33" cy="33" r="29" fill="#FFFFFF" />
                <circle cx="33" cy="33" r="22" fill="#0072CE" />
                <text fill="#FFFFFF" fontSize="5.5" fontWeight="bold" letterSpacing="0.4">
                  <textPath href="#onlineGovArcBrandCol" startOffset="50%" textAnchor="middle">
                    ONLINE.GOV.VN
                  </textPath>
                </text>
                <path d="M 21 33 L 29 41 L 46 22" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <text x="120" y="29" fill="#FFFFFF" fontSize="13.5" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="0.5">
                  ĐÃ THÔNG BÁO
                </text>
                <line x1="58" y1="35" x2="182" y2="35" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
                <text x="120" y="49" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="0.8">
                  BỘ CÔNG THƯƠNG
                </text>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 mb-3">
            Dịch vụ
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-0.5">
                Vận tải đường biển (FCL/LCL)
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-0.5">
                Vận tải hàng không
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-0.5">
                Vận tải đường bộ nội địa
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('home')} className="hover:text-[#FFC72C] transition-colors text-left py-0.5">
                Dịch vụ kho bãi thông minh
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 mb-3">
            Liên kết nhanh
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>
              <button onClick={() => onTabChange('about')} className="hover:text-[#FFC72C] transition-colors text-left py-0.5">
                Về chúng tôi
              </button>
            </li>
            <li>
              <button onClick={() => onTabChange('projects')} className="hover:text-[#FFC72C] transition-colors text-left py-0.5">
                Dự án tiêu biểu
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC72C] transition-colors block py-0.5">
                Bảng giá cước vận chuyển
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC72C] transition-colors block py-0.5">
                Chính sách bảo mật (Privacy Policy)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC72C] transition-colors block py-0.5">
                Điều khoản dịch vụ (Terms)
              </a>
            </li>
            <li className="pt-1.5 border-t border-gray-800 mt-1.5">
              <a 
                href="https://nhatthienson.nhatthienson.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FFC72C] hover:text-white transition-all py-0.5 font-bold flex items-center gap-1.5"
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
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 mb-3">
            Bản tin Logistics
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            Đăng ký để nhận tin tức logistics mới nhất và các ưu đãi cước vận chuyển định kỳ từ chúng tôi.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Email của bạn..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0a2540] text-white border border-gray-700 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-lg py-2 px-3 pr-10 text-xs sm:text-sm outline-none transition-all"
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

          <div className="pt-3 text-xs text-gray-400 space-y-1 border-t border-gray-800 mt-3">
            <div className="flex items-start space-x-1.5">
              <MapPin size={13} className="text-[#FFC72C] mt-0.5 flex-shrink-0" />
              <span>138/10 Khu Phố 57, Phường Thới An, Quận 12, TPHCM</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Phone size={13} className="text-[#FFC72C] flex-shrink-0" />
              <span>0888.447.239</span>
            </div>
          </div>
        </div>

      </div>

      {/* Under footer copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 border-t border-gray-800 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Nhất Thiên Sơn Sài Gòn (Saigon Logistics). All rights reserved.</p>
        <p className="text-gray-500 font-mono">Designed with efficiency for the global market.</p>
      </div>
    </footer>
  );
}
