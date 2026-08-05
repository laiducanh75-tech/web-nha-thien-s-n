import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data';
import { Ship, Truck, Plane, Warehouse, ShieldCheck, ArrowRight, CheckCircle, FileText, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PartnersSection from './PartnersSection';

export default function ServicesView() {
  const { serviceId } = useParams<{ serviceId?: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship':
        return <Ship size={32} className="text-[#002D62]" />;
      case 'Truck':
        return <Truck size={32} className="text-[#002D62]" />;
      case 'Plane':
        return <Plane size={32} className="text-[#002D62]" />;
      case 'Warehouse':
        return <Warehouse size={32} className="text-[#002D62]" />;
      default:
        return <Ship size={32} className="text-[#002D62]" />;
    }
  };

  useEffect(() => {
    if (serviceId) {
      const el = document.getElementById(`service-card-${serviceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [serviceId]);

  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20" id="services-page-view">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#002D62] font-medium">{t.navHome}</Link>
          <span>&gt;</span>
          <span className="text-gray-800 font-semibold">{t.servicesTitle}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#002D62] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <span className="text-[#FFC72C] text-xs font-black uppercase tracking-widest block mb-2">
            NHẤT THIÊN SƠN LOGISTICS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4">
            {t.servicesTitle}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>
      </div>

      {/* Services Showcase Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv) => {
            const isSelected = serviceId === srv.id;
            return (
              <div
                key={srv.id}
                id={`service-card-${srv.id}`}
                className={`bg-white rounded-3xl p-6 sm:p-8 shadow-md border transition-all flex flex-col justify-between ${
                  isSelected ? 'border-[#FF5A00] ring-2 ring-[#FF5A00]/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                      {getServiceIcon(srv.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">
                      SERVICE #{srv.id.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-[#002D62] mb-3">
                    {srv.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-semibold">
                    {srv.desc}
                  </p>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    {srv.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => navigate('/sale')}
                    className="bg-[#FF5A00] hover:bg-[#e04f00] text-white py-2.5 px-5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer"
                  >
                    <FileText size={16} />
                    <span>{language === 'en' ? 'Get Quote' : 'Báo giá dịch vụ này'}</span>
                  </button>

                  <a
                    href="tel:0888447239"
                    className="text-xs font-bold text-[#002D62] hover:text-[#FF5A00] flex items-center space-x-1"
                  >
                    <Phone size={14} className="text-[#FF5A00]" />
                    <span>0888.447.239</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PartnersSection />
    </div>
  );
}
