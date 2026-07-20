import React, { useState } from 'react';
import { Search, Ship, Truck, Plane, Warehouse, ArrowRight, ShieldCheck, Mail, Phone, MapPin, CheckCircle, HelpCircle, Info } from 'lucide-react';
import { INITIAL_SHIPMENTS, SERVICES_DATA } from '../data';
import { Shipment, ContactRequest } from '../types';
import TrackingTimeline from './TrackingTimeline';

interface HomeViewProps {
  onNavigateToTab: (tab: string) => void;
}

export default function HomeView({ onNavigateToTab }: HomeViewProps) {
  // Tracking states
  const [trackingCode, setTrackingCode] = useState('');
  const [searchedShipment, setSearchedShipment] = useState<Shipment | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Form states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cargoType, setCargoType] = useState('Đường biển');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Expanded services state
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Handle shipment tracking search
  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = trackingCode.trim().toUpperCase();
    
    if (!cleanCode) {
      setSearchError('Vui lòng nhập mã vận đơn.');
      setSearchedShipment(null);
      return;
    }

    if (INITIAL_SHIPMENTS[cleanCode]) {
      setSearchedShipment(INITIAL_SHIPMENTS[cleanCode]);
      setSearchError(null);
      
      // Auto-scroll to tracking timeline
      setTimeout(() => {
        document.getElementById('tracking-result-anchor')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Dynamic generation of a simulated shipment for custom codes starting with NTS
      if (cleanCode.startsWith('NTS') && cleanCode.length >= 6) {
        const mockGeneratedShipment: Shipment = {
          id: cleanCode,
          type: Math.random() > 0.5 ? 'Đường biển' : 'Hàng không',
          origin: "Cảng Singapore (Singapore)",
          destination: "Cảng Đà Nẵng (Đà Nẵng, Vietnam)",
          sender: "Singapore Global Logistics Ltd.",
          receiver: "Khách hàng cá nhân (" + cleanCode + ")",
          status: "Đang vận chuyển nội địa chặng chốt",
          statusPercent: 90,
          estimatedDelivery: "25/07/2026",
          carrierName: "Hãng chuyển phát nhanh Nhất Thiên Sơn",
          containerId: `CNT-CUSTOM-${cleanCode}`,
          weight: "85 kg",
          volume: "0.8 CBM",
          steps: [
            {
              title: "Đã tạo đơn vận chuyển",
              description: "Hệ thống ghi nhận thông tin lô hàng của khách hàng.",
              date: "17/07/2026",
              time: "09:00",
              status: "completed",
              location: "Kho CFS Singapore"
            },
            {
              title: "Hàng được thông quan xuất khẩu",
              description: "Chứng từ thông quan đầu cảng đi đã hoàn tất.",
              date: "18/07/2026",
              time: "15:45",
              status: "completed",
              location: "Hải quan Singapore"
            },
            {
              title: "Đang di chuyển trên biển/hàng không",
              description: "Lô hàng đang được vận chuyển quốc tế an toàn.",
              date: "19/07/2026",
              time: "10:30",
              status: "current",
              location: "Hải phận quốc tế"
            }
          ]
        };
        setSearchedShipment(mockGeneratedShipment);
        setSearchError(null);
        setTimeout(() => {
          document.getElementById('tracking-result-anchor')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setSearchError('Không tìm thấy mã vận đơn này. Thử lại với mã: NTS123456, NTS789012 hoặc NTS345678.');
        setSearchedShipment(null);
      }
    }
  };

  const handleQuickSearch = (code: string) => {
    setTrackingCode(code);
    setSearchedShipment(INITIAL_SHIPMENTS[code]);
    setSearchError(null);
    setTimeout(() => {
      document.getElementById('tracking-result-anchor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle contact form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save submission to localStorage so it stays persistent
    const newRequest: ContactRequest = {
      id: `REQ-${Date.now().toString().slice(-6)}`,
      fullName,
      phone,
      email,
      cargoType,
      origin,
      destination,
      message,
      submittedAt: new Date().toLocaleDateString('vi-VN'),
      status: 'Đang chờ'
    };

    try {
      const existing = localStorage.getItem('nts_contact_requests');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newRequest);
      localStorage.setItem('nts_contact_requests', JSON.stringify(list));
    } catch (err) {
      console.error(err);
    }

    // Submit to Web3Forms to deliver directly to user's registered email
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "5d82b96c-a441-46aa-b351-fcb42a15e2c5",
          subject: `Yêu cầu báo giá mới từ: ${fullName}`,
          from_name: "Nhất Thiên Sơn Sài Gòn Logistics",
          "Họ và Tên": fullName,
          "Số điện thoại": phone,
          "Email": email,
          "Hình thức vận chuyển": cargoType,
          "Nơi gửi (Origin)": origin,
          "Nơi nhận (Destination)": destination,
          "Nội dung lời nhắn": message,
        })
      });
      
      const result = await response.json();
      if (result.success) {
        console.log("Gửi yêu cầu qua Web3Forms thành công:", result);
      } else {
        console.warn("Lỗi từ Web3Forms:", result);
      }
    } catch (err) {
      console.error("Lỗi khi kết nối tới dịch vụ Web3Forms:", err);
    } finally {
      setIsSubmitting(false);
      setFormSuccess(true);
      // Reset fields
      setFullName('');
      setPhone('');
      setEmail('');
      setOrigin('');
      setDestination('');
      setMessage('');
    }
  };

  // Service helper to render icons
  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'sea':
        return <Ship className="text-[#002D62] group-hover:text-white transition-colors" size={28} />;
      case 'road':
        return <Truck className="text-[#002D62] group-hover:text-white transition-colors" size={28} />;
      case 'air':
        return <Plane className="text-[#002D62] group-hover:text-white transition-colors" size={28} />;
      case 'warehouse':
        return <Warehouse className="text-[#002D62] group-hover:text-white transition-colors" size={28} />;
      default:
        return <Warehouse size={28} />;
    }
  };

  return (
    <div className="font-sans" id="home-view">
      
      {/* 1. Hero banner with track & trace widget */}
      <section className="relative bg-slate-900 overflow-hidden min-h-[600px] flex flex-col justify-center" id="hero-banner">
        {/* Professional Logistics Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-55 scale-105 transition-transform duration-[10000ms]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920")' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slogan Banner */}
          <div className="lg:col-span-7 space-y-6 text-white text-left">
            <span className="inline-block bg-[#FF5A00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
              Thành lập từ 2025 • Uy tín Hàng đầu
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Giải pháp Logistics <br />
              <span className="text-[#FFC72C]">Thông minh</span> – Nhanh chóng, <br />
              Đáng tin cậy, Toàn cầu
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
              Nhất Thiên Sơn Sài Gòn tự hào là cầu nối tin cậy cho chuỗi cung ứng của quý khách hàng với công nghệ số hiện đại và đội ngũ chuyên gia tận tâm.
            </p>
          </div>

          {/* Tracking Widget Container Card */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
            <h3 className="text-[#002D62] font-bold text-lg uppercase tracking-wider mb-2 text-center">
              Nhập mã để kiểm tra trạng thái
            </h3>
            <p className="text-xs text-gray-500 text-center mb-6">
              Tra cứu thời gian thực hải trình tàu biển, hàng không và nội địa
            </p>

            <form onSubmit={handleTrackingSearch} className="space-y-4">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Mã vận đơn (e.g. NTS123456)"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-100 border border-slate-300 rounded-xl focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] text-sm font-semibold outline-none text-slate-800 tracking-wide uppercase"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                Theo dõi lô hàng
              </button>
            </form>

            {/* Quick Testing Suggestions */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 text-xs">
              <span className="text-gray-500 block mb-2 font-medium">Bấm thử nhanh mã kiểm mẫu:</span>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => handleQuickSearch('NTS123456')}
                  className="bg-[#002D62]/10 text-[#002D62] hover:bg-[#002D62]/20 font-mono font-bold px-2.5 py-1.5 rounded transition-all"
                >
                  NTS123456 (Đường Biển)
                </button>
                <button 
                  onClick={() => handleQuickSearch('NTS789012')}
                  className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-mono font-bold px-2.5 py-1.5 rounded transition-all"
                >
                  NTS789012 (Hàng Không)
                </button>
                <button 
                  onClick={() => handleQuickSearch('NTS345678')}
                  className="bg-amber-50 text-amber-800 hover:bg-amber-100 font-mono font-bold px-2.5 py-1.5 rounded transition-all"
                >
                  NTS345678 (Đường Bộ)
                </button>
              </div>
            </div>

            {searchError && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-xs font-semibold flex items-start gap-2 border border-red-100 animate-shake">
                <Info size={14} className="mt-0.5 flex-shrink-0" />
                <span>{searchError}</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Anchor point to scroll when search submits */}
      <div id="tracking-result-anchor" className="h-1"></div>

      {/* 2. Interactive Search Results Timeline container */}
      {searchedShipment && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <TrackingTimeline 
            shipment={searchedShipment} 
            onClose={() => setSearchedShipment(null)} 
          />
        </section>
      )}

      {/* 3. Statistics indicators bar */}
      <section className="bg-white border-y border-slate-200 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#002D62]">1,248+</span>
            <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Lô Hàng Đang Hoạt Động</span>
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#002D62]">42</span>
            <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Tàu Đang Vận Hành</span>
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#002D62]">4.2d</span>
            <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Thời Gian Giao Hàng TB</span>
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-600">99.8%</span>
            <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Đơn Hàng Hoàn Tất</span>
          </div>
        </div>
      </section>

      {/* 4. Professional services list */}
      <section className="py-20 bg-slate-50" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FF5A00] font-bold text-sm tracking-widest uppercase">Danh mục nghiệp vụ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] mt-2 mb-4">
            Dịch vụ vận tải chuyên nghiệp
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Chúng tôi cung cấp các giải pháp chuỗi cung ứng toàn diện, từ khâu đóng gói đến giao nhận chặng chốt an toàn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {SERVICES_DATA.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#002D62] flex items-center justify-center mb-6 transition-all shadow-inner">
                    {renderServiceIcon(service.id)}
                  </div>
                  <h3 className="text-[#002D62] font-bold text-xl mb-3 group-hover:text-[#FF5A00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                
                <div>
                  {expandedService === service.id && (
                    <div className="text-xs text-gray-600 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 animate-fade-in">
                      {service.details}
                    </div>
                  )}

                  <button 
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="text-[#002D62] font-bold text-sm flex items-center gap-1.5 hover:text-[#FF5A00] transition-colors"
                  >
                    <span>{expandedService === service.id ? 'Thu gọn' : 'Tìm hiểu thêm'}</span>
                    <ArrowRight size={15} className={`transition-transform ${expandedService === service.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision - Deep Blue backdrop matching Saigon Logistics standard style */}
      <section className="bg-[#002D62] text-white py-20 relative overflow-hidden" id="mission-section">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-color-burn opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200")' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission Left block */}
          <div className="space-y-6 text-left border-b lg:border-b-0 lg:border-r border-blue-900 pb-12 lg:pb-0 lg:pr-12">
            <span className="bg-[#FF5A00] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
              Cam kết hành động
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFC72C] uppercase tracking-wider">
              SỨ MỆNH
            </h2>
            <div className="space-y-4 text-gray-200 text-sm leading-relaxed font-light">
              <p>
                Sứ mệnh của Nhất Thiên Sơn Sài Gòn là mang đến cho khách hàng những giải pháp logistics và vận tải toàn diện, an toàn và tối ưu chi phí, góp phần nâng cao năng lực cạnh tranh cho doanh nghiệp Việt trên thị trường quốc tế.
              </p>
              <p>
                Chúng tôi không chỉ là đơn vị vận tải đơn thuần, mà là người đồng hành đáng tin cậy giúp kết nối thông suốt mọi mắt xích trong chuỗi cung ứng toàn cầu từ vận chuyển đa phương thức đến dịch vụ kho bãi thông minh.
              </p>
              <p>
                Với đội ngũ chuyên gia tận tâm, am hiểu sâu sắc quy trình vận hành và hải quan, chúng tôi cam kết bảo đảm an toàn tối đa cho mọi chuyến hàng và luôn đúng hẹn trong mọi tình huống.
              </p>
              <p>
                Chúng tôi lấy sự hài lòng và thành công của khách hàng làm thước đo giá trị cốt lõi, không ngừng cải tiến công nghệ và tối ưu quy trình để đem lại trải nghiệm dịch vụ logistics chất lượng cao nhất.
              </p>
            </div>
          </div>

          {/* Vision Right block */}
          <div className="space-y-6 text-left lg:pl-4">
            <span className="bg-[#FF5A00] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
              Tương lai bứt phá
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFC72C] uppercase tracking-wider">
              TẦM NHÌN
            </h2>
            <div className="space-y-4 text-gray-200 text-sm leading-relaxed font-light">
              <p>
                Tại Nhất Thiên Sơn Sài Gòn, chúng tôi hướng tới mục tiêu trở thành một thương hiệu logistics hàng đầu, tiên phong trong việc chuyển đổi số và ứng dụng các giải pháp chuỗi cung ứng xanh, bền vững tại Việt Nam.
              </p>
              <p>
                Chúng tôi liên tục hoàn thiện và mở rộng mạng lưới liên kết với các đối tác vận tải hàng không, hàng hải và đường bộ hàng đầu thế giới để gia tăng năng lực tiếp cận thị trường và mở ra những tuyến đường kết nối trực tiếp hiệu quả hơn.
              </p>
              <p>
                Với phương châm "Uy tín – Chuyên nghiệp – Chất lượng – Hiệu quả", Nhất Thiên Sơn Sài Gòn mong muốn trở thành cánh tay nối dài bền vững của các nhà sản xuất, xuất nhập khẩu và phân phối lớn nhỏ trong và ngoài nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Contact and quoting Form Section */}
      <section className="py-20 bg-white" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Input Form Fields */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm text-left">
            <span className="text-[#FF5A00] font-bold text-xs uppercase tracking-widest">Tiếp nhận thông tin</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D62] mt-1 mb-2">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Gửi yêu cầu của bạn để nhận báo giá chi tiết và tư vấn giải pháp logistics tối ưu hoàn toàn miễn phí.
            </p>

            {formSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl space-y-3 text-center">
                <CheckCircle className="mx-auto text-emerald-500" size={44} />
                <h3 className="font-bold text-lg">Gửi yêu cầu thành công!</h3>
                <p className="text-sm">
                  Cảm ơn quý khách đã gửi thông tin. Đội ngũ tư vấn viên của Nhất Thiên Sơn Sài Gòn sẽ trực tiếp gọi điện báo giá trong vòng 15-30 phút.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="bg-[#002D62] text-white hover:bg-[#001D40] text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                >
                  Gửi thêm yêu cầu mới
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Họ và Tên</label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Số điện thoại</label>
                    <input
                      type="tel"
                      required
                      placeholder="0919.xxx.xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Loại hàng</label>
                    <select
                      value={cargoType}
                      onChange={(e) => setCargoType(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800 font-semibold"
                    >
                      <option>Đường biển (FCL/LCL)</option>
                      <option>Đường bộ (Xe tải/Container)</option>
                      <option>Hàng không (Sân bay)</option>
                      <option>Kho bãi & Lưu trữ</option>
                      <option>Thủ tục Hải quan</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Nơi đi (Origin)</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Singapore, Hải Phòng, Đà Nẵng..."
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Nơi đến (Destination)</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: TPHCM, Hà Nội, Bình Dương..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Lời nhắn hoặc yêu cầu đặc biệt</label>
                  <textarea
                    rows={4}
                    placeholder="Thông tin thêm về quy cách hàng hóa, kích thước, khối lượng hoặc thời gian cần gấp..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#002D62] hover:bg-[#001D40] text-[#FFC72C] py-4 rounded-xl font-bold uppercase tracking-wider shadow transition-all duration-200 text-center cursor-pointer disabled:opacity-55 active:scale-[0.98]"
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi yêu cầu ngay'}
                </button>
              </form>
            )}
          </div>

          {/* Right side contact information blocks & Interactive map placeholder */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Contact info card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#002D62] border-b border-gray-100 pb-2 uppercase tracking-wide">
                Thông tin liên lạc
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5">
                  <span className="w-9 h-9 rounded-full bg-[#002D62]/10 flex items-center justify-center text-[#002D62] flex-shrink-0">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Địa chỉ trụ sở</h4>
                    <p className="text-gray-500 text-xs mt-0.5">138/10 Khu Phố 57, Phường Thới An, TPHCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="w-9 h-9 rounded-full bg-[#002D62]/10 flex items-center justify-center text-[#002D62] flex-shrink-0">
                    <Phone size={18} />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Điện thoại hỗ trợ</h4>
                    <p className="text-gray-500 text-xs mt-0.5 font-mono">0888.447.239 / 0919.417.239</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="w-9 h-9 rounded-full bg-[#002D62]/10 flex items-center justify-center text-[#002D62] flex-shrink-0">
                    <Mail size={18} />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Hòm thư điện tử</h4>
                    <p className="text-gray-500 text-xs mt-0.5 font-mono">nhatthienson@nhatthienson.vn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Map Display card */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative h-64 flex flex-col justify-end">
              {/* Fake visual map graphic */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-70"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800")' }}
              ></div>
              
              {/* Visual Grid Lines and Map Coordinates Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent z-10"></div>
              
              {/* Map pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <span className="w-4 h-4 rounded-full bg-red-500 animate-ping absolute"></span>
                <MapPin size={38} className="text-red-600 filter drop-shadow-md relative" />
                <span className="bg-[#002D62] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow mt-1 whitespace-nowrap">
                  NTS Saigon Logistics
                </span>
              </div>

              {/* Address tag on top of the Map */}
              <div className="relative z-20 p-4 bg-white/95 backdrop-blur-sm m-3 rounded-lg border border-slate-200 text-xs">
                <div className="flex items-center space-x-2 text-[#002D62] font-semibold mb-1">
                  <MapPin size={14} className="text-[#FF5A00]" />
                  <span>Văn phòng Nhất Thiên Sơn</span>
                </div>
                <p className="text-gray-500">138/12 Tô Ngọc Vân, Q.12, TPHCM</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
