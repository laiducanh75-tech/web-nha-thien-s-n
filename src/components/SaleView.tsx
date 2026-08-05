import React, { useState } from 'react';
import { Tag, Zap, ShieldCheck, CheckCircle, Calculator, Send, Phone, Mail, ArrowRight, Percent, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import PartnersSection from './PartnersSection';

export default function SaleView() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Form states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cargoType, setCargoType] = useState('Đường biển');
  const [promoCode, setPromoCode] = useState('NTS2026');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formspree.io/f/mqerlkap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Yêu cầu Báo giá & Ưu đãi Mới từ ${fullName} (${cargoType})`,
          "Mã Ưu đãi": promoCode,
          "Họ tên": fullName,
          "Số điện thoại": phone,
          "Email": email,
          "Loại hình vận chuyển": cargoType,
          "Điểm đi (Origin)": origin || "Chưa xác định",
          "Điểm đến (Destination)": destination || "Chưa xác định",
          "Ghi chú bổ sung": message || "Không có"
        })
      });
      setFormSuccess(true);
    } catch (err) {
      console.error("Lỗi gửi form báo giá:", err);
      setFormSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20" id="sale-view">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#002D62] font-medium">{t.navHome}</Link>
          <span>&gt;</span>
          <span className="text-gray-800 font-semibold">{language === 'en' ? 'Promotions & Quote Request' : 'Ưu đãi & Yêu cầu Báo giá'}</span>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#004085] to-[#002D62] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-6">
          <Percent size={320} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#FF5A00] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-4 shadow-sm animate-bounce">
              <Zap size={14} />
              <span>Chương trình tri ân 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              {language === 'en' ? 'Special Rates & Volume Discounts' : 'Chương Trình Ưu Đãi Cước Vận Tải Quốc Tế'}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {language === 'en' 
                ? 'Get up to 15% discount on FCL sea freight and expedited air shipments. Instant response within 15 minutes!'
                : 'Giảm ngay 15% cước vận chuyển đường biển FCL và ưu tiên miễn phí kiểm hóa hải quan cho khách hàng mới. Nhận báo giá tức thì trong 15 phút!'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center min-w-[280px]">
            <span className="text-xs uppercase tracking-widest text-[#FFC72C] font-bold block mb-1">MÃ ƯU ĐÃI ĐẶC BIỆT</span>
            <div className="text-3xl font-black text-white font-mono bg-black/30 py-2 px-4 rounded-xl border border-white/10 mb-2">
              NTS2026
            </div>
            <span className="text-[11px] text-slate-300 block">Áp dụng cho mọi đơn hàng khởi tạo hôm nay</span>
          </div>
        </div>
      </div>

      {/* Active Special Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col justify-between hover:border-[#FF5A00] transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF5A00] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                <Percent size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] mb-2">
                {language === 'en' ? 'First-Time Shipper Discount' : 'Giảm 15% Khách Hàng Mới'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Áp dụng cho hợp đồng vận chuyển đường biển hoặc đường hàng không đầu tiên với Nhất Thiên Sơn.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF5A00]">
              <span>Áp dụng đến 31/12/2026</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col justify-between hover:border-[#FF5A00] transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#002D62] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] mb-2">
                {language === 'en' ? 'Free Customs Clearance Consultation' : 'Miễn Phí Tư Vấn Hải Quan'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hỗ trợ tra cứu mã HS Code chính xác, kiểm tra thuế suất nhập khẩu và tối ưu hóa thủ tục thông quan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62]">
              <span>Miễn phí 100%</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col justify-between hover:border-[#FF5A00] transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] mb-2">
                {language === 'en' ? 'Express 15-Min Quote Return' : 'Báo Giá Nhanh Trong 15 Phút'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cam kết phản hồi thông tin cước và tư vấn lộ trình tối ưu cho doanh nghiệp ngay khi nhận yêu cầu.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>Hỗ trợ 24/7 Hotline/Zalo</span>
              <ArrowRight size={14} />
            </div>
          </div>

        </div>
      </div>

      {/* Main Quote Calculator & Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12" id="quote-form-section">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Form Left Branding Column */}
          <div className="lg:col-span-5 bg-[#002D62] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#FFC72C] text-xs font-extrabold uppercase mb-3">
                <Calculator size={16} />
                <span>Báo giá tức thì</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Gửi Thông Tin Nhận Báo Giá Ưu Đãi
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Điền thông tin lô hàng của bạn bên dưới. Chuyên viên Logistics của Nhất Thiên Sơn sẽ tính toán cước phí tối ưu và gửi báo giá chi tiết qua email hoặc Zalo.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC72C]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Hotline / Zalo hỗ trợ:</span>
                    <a href="tel:0888447239" className="font-bold text-white hover:text-[#FFC72C]">0888.447.239</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC72C]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Email phòng kinh doanh:</span>
                    <span className="font-bold text-white">nhatthienson@nhatthienson.vn</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-900/80 text-xs text-slate-400">
              📍 Trụ sở chính: 138/10 Khu Phố 57, Phường Thới An, Quận 12, TPHCM
            </div>
          </div>

          {/* Form Right Inputs Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10">
            {formSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">
                  Gửi Yêu Cầu Báo Giá Thành Công!
                </h3>
                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                  Cảm ơn bạn! Đội ngũ tư vấn Nhất Thiên Sơn đã tiếp nhận thông tin và sẽ liên hệ gửi bảng giá ưu đãi riêng trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="mt-4 bg-[#002D62] hover:bg-blue-900 text-white py-2.5 px-6 rounded-xl font-bold text-xs uppercase transition-colors cursor-pointer"
                >
                  Gửi yêu cầu báo giá khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0888 447 239"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email nhận báo giá
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Hình thức vận chuyển
                    </label>
                    <select
                      value={cargoType}
                      onChange={(e) => setCargoType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    >
                      <option value="Đường biển">Đường biển (FCL / LCL)</option>
                      <option value="Hàng không">Hàng không (Air Freight)</option>
                      <option value="Đường bộ">Đường bộ (Xe tải / Container)</option>
                      <option value="Kho bãi">Kho bãi & Lưu trữ</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Điểm đi (Origin)
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="VD: Cảng Singapore / Kho TPHCM"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Điểm đến (Destination)
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="VD: Cảng Hải Phòng / Hà Nội"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Ghi chú chi tiết lô hàng (Kích thước, trọng lượng, mã ưu đãi)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập thông tin như loại hàng hóa, tổng số lượng CBM/Kg, thời gian dự kiến..."
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Đang gửi thông tin...' : 'GỬI YÊU CẦU BÁO GIÁ TỨC THÌ'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <PartnersSection />
    </div>
  );
}
