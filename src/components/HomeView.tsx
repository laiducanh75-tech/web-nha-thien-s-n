import React, { useState } from 'react';
import { Search, Ship, Truck, Plane, Warehouse, ShieldCheck, Mail, Phone, MapPin, CheckCircle, HelpCircle, Info } from 'lucide-react';
import { INITIAL_SHIPMENTS, SERVICES_DATA } from '../data';
import { Shipment, ContactRequest } from '../types';
import TrackingTimeline from './TrackingTimeline';
import PartnersSection from './PartnersSection';
import { useLanguage } from '../context/LanguageContext';

interface HomeViewProps {
  onNavigateToTab: (tab: string) => void;
}

export default function HomeView({ onNavigateToTab }: HomeViewProps) {
  const { t, language } = useLanguage();

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

  // Handle shipment tracking search
  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = trackingCode.trim().toUpperCase();
    
    if (!cleanCode) {
      setSearchError(language === 'en' ? 'Please enter a valid tracking code.' : 'Vui lòng nhập mã vận đơn.');
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
          type: Math.random() > 0.5 ? (language === 'en' ? 'Sea Freight' : 'Đường biển') : (language === 'en' ? 'Air Freight' : 'Hàng không'),
          origin: language === 'en' ? "Port of Singapore (Singapore)" : "Cảng Singapore (Singapore)",
          destination: language === 'en' ? "Danang Port (Danang, Vietnam)" : "Cảng Đà Nẵng (Đà Nẵng, Vietnam)",
          sender: "Singapore Global Logistics Ltd.",
          receiver: language === 'en' ? `Consignee (${cleanCode})` : `Khách hàng cá nhân (${cleanCode})`,
          status: language === 'en' ? "In transit - Final mile delivery" : "Đang vận chuyển nội địa chặng chốt",
          statusPercent: 90,
          estimatedDelivery: "25/07/2026",
          carrierName: "Nhat Thien Son Express Logistics",
          containerId: `CNT-CUSTOM-${cleanCode}`,
          weight: "85 kg",
          volume: "0.8 CBM",
          steps: [
            {
              title: language === 'en' ? "Shipment Order Created" : "Đã tạo đơn vận chuyển",
              description: language === 'en' ? "Shipment record logged into NTS tracking engine." : "Hệ thống ghi nhận thông tin lô hàng của khách hàng.",
              date: "17/07/2026",
              time: "09:00",
              status: "completed",
              location: "Singapore CFS Hub"
            },
            {
              title: language === 'en' ? "Export Customs Cleared" : "Hàng được thông quan xuất khẩu",
              description: language === 'en' ? "Port departure export documentation completed." : "Chứng từ thông quan đầu cảng đi đã hoàn tất.",
              date: "18/07/2026",
              time: "15:45",
              status: "completed",
              location: "Singapore Customs"
            },
            {
              title: language === 'en' ? "In Transit (International Transit)" : "Đang di chuyển trên biển/hàng không",
              description: language === 'en' ? "Cargo safely in international transit route." : "Lô hàng đang được vận chuyển quốc tế an toàn.",
              date: "19/07/2026",
              time: "10:30",
              status: "current",
              location: "International Waters"
            }
          ]
        };
        setSearchedShipment(mockGeneratedShipment);
        setSearchError(null);
        setTimeout(() => {
          document.getElementById('tracking-result-anchor')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setSearchError(language === 'en' ? 'Tracking code not found. Try: NTS123456, NTS789012 or NTS345678.' : 'Không tìm thấy mã vận đơn này. Thử lại với mã: NTS123456, NTS789012 hoặc NTS345678.');
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

    // Submit to Formspree to deliver directly to user's Gmail
    try {
      const response = await fetch("https://formspree.io/f/mqerlkap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Yêu cầu báo giá mới từ: ${fullName}`,
          "Họ và Tên": fullName,
          "Số điện thoại": phone,
          "Email / Gmail": email,
          "Hình thức vận chuyển": cargoType,
          "Nơi gửi (Origin)": origin,
          "Nơi nhận (Destination)": destination,
          "Nội dung lời nhắn": message,
        })
      });
      
      if (response.ok) {
        console.log("Gửi yêu cầu qua Formspree thành công");
      } else {
        console.warn("Lỗi từ Formspree:", response.statusText);
      }
    } catch (err) {
      console.error("Lỗi khi kết nối tới dịch vụ Formspree:", err);
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
      <section className="relative bg-[#001838] overflow-hidden min-h-[600px] flex flex-col justify-center" id="hero-banner">
        {/* Animated Looping Background Video for Busy Container Port & Logistics */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[1.5px] scale-105 pointer-events-none transition-opacity duration-1000"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-container-ship-sailing-in-the-sea-41228-large.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-container-ship-in-the-ocean-41230-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Dark gradient overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00122e]/90 via-[#002855]/75 to-[#00122e]/90 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slogan Banner */}
          <div className="lg:col-span-7 space-y-6 text-white text-left">
            <span className="inline-block bg-[#FF5A00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
              {t.heroBadge}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              {t.heroTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Tracking Widget Container Card */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
            <h3 className="text-[#002D62] font-bold text-lg uppercase tracking-wider mb-2 text-center">
              {t.trackingTab}
            </h3>
            <p className="text-xs text-gray-500 text-center mb-6">
              {language === 'en' ? 'Real-time tracking across ocean, air, and inland logistics routes' : 'Tra cứu thời gian thực hải trình tàu biển, hàng không và nội địa'}
            </p>

            <form onSubmit={handleTrackingSearch} className="space-y-4">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  placeholder={t.trackingPlaceholder}
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-100 border border-slate-300 rounded-xl focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] text-sm font-semibold outline-none text-slate-800 tracking-wide uppercase"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                {t.trackBtn}
              </button>
            </form>

            {/* Quick Testing Suggestions */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 text-xs">
              <span className="text-gray-500 block mb-2 font-medium">{t.quickTrackLabel}</span>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => handleQuickSearch('NTS123456')}
                  className="bg-[#002D62]/10 text-[#002D62] hover:bg-[#002D62]/20 font-mono font-bold px-2.5 py-1.5 rounded transition-all"
                >
                  NTS123456 ({t.filterSea})
                </button>
                <button 
                  onClick={() => handleQuickSearch('NTS789012')}
                  className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-mono font-bold px-2.5 py-1.5 rounded transition-all"
                >
                  NTS789012 ({t.filterAir})
                </button>
                <button 
                  onClick={() => handleQuickSearch('NTS345678')}
                  className="bg-amber-50 text-amber-800 hover:bg-amber-100 font-mono font-bold px-2.5 py-1.5 rounded transition-all"
                >
                  NTS345678 ({t.filterInland})
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

      {/* 4. Professional services list */}
      <section className="py-20 bg-slate-50" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FF5A00] font-bold text-sm tracking-widest uppercase">{t.servicesBadge}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] mt-2 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            {t.servicesSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {SERVICES_DATA.map((service) => {
              const localized = service.id === 'sea' ? { title: t.seaFreightTitle, desc: t.seaFreightDesc }
                : service.id === 'road' ? { title: t.truckingTitle, desc: t.truckingDesc }
                : service.id === 'air' ? { title: t.airFreightTitle, desc: t.airFreightDesc }
                : { title: t.warehouseTitle, desc: t.warehouseDesc };

              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#002D62] flex items-center justify-center mb-6 transition-all shadow-inner">
                      {renderServiceIcon(service.id)}
                    </div>
                    <h3 className="text-[#002D62] font-bold text-xl mb-3 group-hover:text-[#FF5A00] transition-colors">
                      {localized.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {localized.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
              {t.missionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFC72C] uppercase tracking-wider">
              {t.ourMissionTitle}
            </h2>
            <div className="space-y-4 text-gray-200 text-sm leading-relaxed font-light">
              <p>{t.missionP1}</p>
              <p>{t.missionP2}</p>
              <p>{t.missionP3}</p>
              <p>{t.missionP4}</p>
            </div>
          </div>

          {/* Vision Right block */}
          <div className="space-y-6 text-left lg:pl-4">
            <span className="bg-[#FF5A00] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
              {t.visionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFC72C] uppercase tracking-wider">
              {t.ourVisionTitle}
            </h2>
            <div className="space-y-4 text-gray-200 text-sm leading-relaxed font-light">
              <p>{t.visionP1}</p>
              <p>{t.visionP2}</p>
              <p>{t.visionP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5b. Clients & Partners Section */}
      <PartnersSection />

      {/* 6. Dynamic Contact and quoting Form Section */}
      <section className="py-20 bg-white" id="contact-section">
        <div id="contact-form-anchor" className="h-1"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Input Form Fields */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm text-left">
            <span className="text-[#FF5A00] font-bold text-xs uppercase tracking-widest">
              {language === 'en' ? 'LOGISTICS INQUIRY' : 'Tiếp nhận thông tin'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D62] mt-1 mb-2">
              {t.quoteTitle}
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              {t.quoteSubtitle}
            </p>

            {formSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl space-y-3 text-center">
                <CheckCircle className="mx-auto text-emerald-500" size={44} />
                <h3 className="font-bold text-lg">
                  {language === 'en' ? 'Quote Request Received!' : 'Gửi yêu cầu thành công!'}
                </h3>
                <p className="text-sm">
                  {t.quoteSuccessMsg}
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="bg-[#002D62] text-white hover:bg-[#001D40] text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                >
                  {language === 'en' ? 'Submit Another Inquiry' : 'Gửi thêm yêu cầu mới'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.fullNameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'John Doe' : 'Nguyễn Văn A'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      placeholder="0888.xxx.xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.emailLabel}</label>
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
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.cargoTypeLabel}</label>
                    <select
                      value={cargoType}
                      onChange={(e) => setCargoType(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800 font-semibold"
                    >
                      <option>{t.filterSea} (FCL/LCL)</option>
                      <option>{t.filterInland} (Trucking)</option>
                      <option>{t.filterAir}</option>
                      <option>{t.warehouseTitle}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.originLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'e.g., Singapore, Hai Phong, Danang...' : 'Ví dụ: Singapore, Hải Phòng, Đà Nẵng...'}
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.destLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'e.g., Ho Chi Minh City, Hanoi...' : 'Ví dụ: TPHCM, Hà Nội, Bình Dương...'}
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t.messageLabel}</label>
                  <textarea
                    rows={4}
                    placeholder={language === 'en' ? 'Shipment specifications, dimensions, weight, urgency...' : 'Thông tin thêm về quy cách hàng hóa, kích thước, khối lượng hoặc thời gian cần gấp...'}
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
                  {isSubmitting ? t.submittingText : t.submitQuoteBtn}
                </button>
              </form>
            )}
          </div>

          {/* Right side contact information blocks & Interactive map */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Contact info card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#002D62] border-b border-gray-100 pb-2 uppercase tracking-wide">
                {t.contactInfoTitle}
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5">
                  <span className="w-9 h-9 rounded-full bg-[#002D62]/10 flex items-center justify-center text-[#002D62] flex-shrink-0">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">{t.addressTitle}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">138/10 Khu Phố 57, Phường Thới An, Quận 12, TPHCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="w-9 h-9 rounded-full bg-[#002D62]/10 flex items-center justify-center text-[#002D62] flex-shrink-0">
                    <Phone size={18} />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">{t.phoneTitle}</h4>
                    <p className="text-gray-500 text-xs mt-0.5 font-mono">0888.447.239</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="w-9 h-9 rounded-full bg-[#002D62]/10 flex items-center justify-center text-[#002D62] flex-shrink-0">
                    <Mail size={18} />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">{t.emailTitle}</h4>
                    <p className="text-gray-500 text-xs mt-0.5 font-mono">nhatthienson@nhatthienson.vn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Interactive Google Map */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-80 flex flex-col">
              <iframe
                title="Bản đồ Nhất Thiên Sơn"
                src="https://maps.google.com/maps?q=138/10%20Khu%20Ph%E1%BB%91%2057%20Ph%C6%B0%E1%BB%9Dng%20Th%E1%BB%9Bi%20An%20Qu%E1%BA%ADn%2012%20TPHCM&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
