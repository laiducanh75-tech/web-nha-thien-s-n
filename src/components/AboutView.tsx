import React from 'react';
import { ShieldCheck, Zap, Lightbulb, Users, Eye, Rocket, ArrowRight, HelpCircle, MapPin } from 'lucide-react';
import { CORE_VALUES } from '../data';

interface AboutViewProps {
  onNavigateToTab: (tab: string) => void;
}

export default function AboutView({ onNavigateToTab }: AboutViewProps) {
  
  const getCoreIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <ShieldCheck className="text-emerald-600" size={28} />;
      case 'Zap':
        return <Zap className="text-amber-500" size={28} />;
      case 'Lightbulb':
        return <Lightbulb className="text-blue-500" size={28} />;
      case 'Users':
        return <Users className="text-[#FF5A00]" size={28} />;
      default:
        return <ShieldCheck size={28} />;
    }
  };

  return (
    <div className="font-sans" id="about-view">
      {/* 1. Breadcrumbs bar */}
      <div className="bg-slate-100 py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <button onClick={() => onNavigateToTab('home')} className="hover:text-[#002D62] font-medium">Trang chủ</button>
          <span>&gt;</span>
          <span className="text-gray-800 font-semibold">Giới thiệu</span>
        </div>
      </div>

      {/* 2. Hero banner */}
      <section className="relative bg-slate-900 py-24 text-white overflow-hidden text-center">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-50 scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200")' }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[#FFC72C] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            NHẤT THIÊN SƠN SAIGON LOGISTICS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Nhất Thiên Sơn Sài Gòn là đối tác logistics tin cậy, kết nối Việt Nam với chuỗi cung ứng toàn cầu thông qua sự đổi mới, tốc độ và cam kết không ngừng nghỉ về chất lượng dịch vụ.
          </p>
        </div>
      </section>

      {/* 3. Journey and Side stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Text block */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#FF5A00] font-bold text-xs uppercase tracking-widest block">Câu Chuyện Của Chúng Tôi</span>
            <h3 className="text-3xl font-extrabold text-[#002D62] tracking-tight leading-tight">
              Hành Trình Kiến Tạo Sự Tin Cậy
            </h3>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Bắt đầu từ khát vọng đơn giản là kết nối các doanh nghiệp trong nước với thị trường quốc tế, Nhất Thiên Sơn Sài Gòn đã phát triển thành một đơn vị vận chuyển đa phương thức hàng đầu. Chúng tôi hiểu rằng mỗi kiện hàng không chỉ là hàng hóa, mà là niềm tin của khách hàng gửi gắm.
              </p>
              <p>
                Trải qua nhiều thập kỷ, chúng tôi đã không ngừng đầu tư vào công nghệ và con người để xây dựng một mạng lưới vận chuyển thông minh, linh hoạt và luôn đúng hẹn, bất chấp mọi thách thức của thị trường toàn cầu.
              </p>
              <p>
                Mọi quy trình từ thu gom hàng, phân loại kiểm tra an ninh, quy trình chứng từ giao nhận, đến phân phối chặng cuối đều được theo dõi chặt chẽ bằng phần mềm tối tân, nâng cao hiệu quả khai thác và cắt giảm tối đa chi phí phát sinh cho quý doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Graphical floating cards right */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#FF5A00] to-[#FF8C00] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-48 hover:scale-[1.02] transition-transform">
              <span className="text-4xl sm:text-5xl font-black">150+</span>
              <div>
                <h4 className="font-bold text-lg leading-tight text-white">Đối tác toàn cầu</h4>
                <p className="text-xs text-orange-100 mt-1">Kết nối các hải cảng, sân bay và hãng tàu hàng đầu thế giới.</p>
              </div>
            </div>

            <div className="bg-[#002D62] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-48 hover:scale-[1.02] transition-transform">
              <span className="text-4xl sm:text-5xl font-black text-[#FFC72C]">2025</span>
              <div>
                <h4 className="font-bold text-lg leading-tight text-white">Năm thành lập</h4>
                <p className="text-xs text-blue-200 mt-1">Cột mốc khởi đầu hành trình logistics thế hệ mới, hiện đại và tin cậy.</p>
              </div>
            </div>

            {/* Visual Team Stock Image in grid */}
            <div className="sm:col-span-2 h-44 rounded-2xl overflow-hidden border border-slate-100 relative shadow-inner">
              <div 
                className="absolute inset-0 bg-cover bg-center filter saturate-75 hover:saturate-100 transition-all"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1553413719-8758712747d5?auto=format&fit=crop&q=80&w=800")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
              <div className="absolute bottom-3 left-4 text-white z-20">
                <span className="text-xs bg-[#FF5A00] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Đội ngũ NTS</span>
                <p className="text-xs text-gray-200 mt-1 font-semibold">Tâm huyết - Chuyên nghiệp - Minh bạch</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Elegant Vision and Mission outline cards */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Tầm nhìn card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm text-left flex gap-5">
            <span className="w-14 h-14 rounded-full bg-[#FFC72C]/10 flex items-center justify-center text-[#FFC72C] flex-shrink-0">
              <Eye size={28} className="stroke-[2.5]" />
            </span>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#002D62] uppercase tracking-wide">Tầm Nhìn</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trở thành biểu tượng của sự hiệu quả và tin cậy trong ngành logistics khu vực, dẫn đầu trong việc ứng dụng công nghệ số để tối ưu hóa dòng chảy hàng hóa toàn cầu.
              </p>
            </div>
          </div>

          {/* Sứ mệnh card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm text-left flex gap-5">
            <span className="w-14 h-14 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] flex-shrink-0">
              <Rocket size={28} className="stroke-[2.5]" />
            </span>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#002D62] uppercase tracking-wide">Sứ Mệnh</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Đơn giản hóa thương mại quốc tế bằng cách cung cấp các giải pháp vận chuyển toàn diện, minh bạch và bền vững, giúp khách hàng tập trung hoàn toàn vào việc phát triển kinh doanh cốt lõi.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FF5A00] font-bold text-xs uppercase tracking-widest">Nền tảng phát triển</span>
          <h2 className="text-3xl font-extrabold text-[#002D62] mt-2 mb-4">
            Giá Trị Cốt Lõi
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Những nguyên tắc định hướng mọi hành động và quyết định của chúng tôi tại Nhất Thiên Sơn Sài Gòn.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white p-6 rounded-2xl text-left transition-all hover:shadow-lg space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  {getCoreIcon(val.icon)}
                </div>
                <div>
                  <h3 className="font-extrabold text-[#002D62] text-lg mb-1">{val.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-impact bottom CTA */}
      <section className="bg-[#002D62] text-white py-16 relative overflow-hidden" id="about-cta">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-color-burn opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200")' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Bạn đã sẵn sàng kết nối với toàn cầu?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-base font-light">
            Hãy để chúng tôi giúp bạn tối ưu hóa chuỗi cung ứng và đưa hàng hóa đến mọi nơi trên thế giới một cách an toàn và nhanh chóng nhất.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigateToTab('home')}
              className="bg-[#FF5A00] hover:bg-[#e04f00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all uppercase tracking-wider cursor-pointer active:scale-95"
            >
              Xem dịch vụ
            </button>
            <button
              onClick={() => {
                onNavigateToTab('home');
                setTimeout(() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="border-2 border-white hover:bg-white hover:text-[#002D62] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all uppercase tracking-wider cursor-pointer active:scale-95"
            >
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
