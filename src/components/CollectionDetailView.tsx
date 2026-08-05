import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data';
import { ArrowLeft, ShieldCheck, MapPin, Cpu, Package, CheckCircle, Phone, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PartnersSection from './PartnersSection';

export default function CollectionDetailView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Find project by id or fallback to first
  const project = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[0];

  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20" id="collection-detail-view">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#002D62] font-medium">{t.navHome}</Link>
          <span>&gt;</span>
          <Link to="/collection" className="hover:text-[#002D62] font-medium">{t.navProjects}</Link>
          <span>&gt;</span>
          <span className="text-gray-800 font-semibold truncate max-w-[200px] sm:max-w-none">{project.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/collection')}
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#002D62] hover:text-[#FF5A00] transition-colors mb-6 cursor-pointer bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200"
        >
          <ArrowLeft size={18} />
          <span>{language === 'en' ? 'Back to Collection' : 'Quay lại Bộ sưu tập & Năng lực'}</span>
        </button>

        {/* Main Product / Collection Item Showcase */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Image Gallery Column */}
          <div className="lg:col-span-6 bg-slate-900 relative min-h-[320px] lg:min-h-[480px] flex items-center justify-center overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-[#002D62]/90 text-[#FFC72C] text-xs font-black uppercase px-3 py-1.5 rounded-lg shadow-md border border-blue-500/30">
              {project.subtitle}
            </div>
          </div>

          {/* Details & Specs Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map((tag, idx) => (
                  <span key={idx} className="bg-blue-50 text-[#002D62] text-xs font-bold px-2.5 py-1 rounded-md border border-blue-100">
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#002D62] leading-tight mb-3">
                {project.title}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {project.fullDesc || project.desc}
              </p>

              {/* Technical Specifications Grid */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-6 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-2">
                  {language === 'en' ? 'Technical Specifications' : 'Thông số năng lực kỹ thuật'}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-start space-x-2">
                    <ShieldCheck size={16} className="text-[#FF5A00] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[11px] font-semibold">{language === 'en' ? 'Standard' : 'Tiêu chuẩn'}</span>
                      <span className="font-bold text-slate-800">{project.specs?.standard || 'AEO Certified'}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="text-[#FF5A00] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[11px] font-semibold">{language === 'en' ? 'Operating Hub' : 'Địa điểm triển khai'}</span>
                      <span className="font-bold text-slate-800">{project.specs?.location || 'Sài Gòn & Hải Phòng'}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Package size={16} className="text-[#FF5A00] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[11px] font-semibold">{language === 'en' ? 'Capacity' : 'Năng lực xử lý'}</span>
                      <span className="font-bold text-slate-800">{project.specs?.capacity || 'Chất lượng cao'}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Cpu size={16} className="text-[#FF5A00] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[11px] font-semibold">{language === 'en' ? 'Tech System' : 'Công nghệ tích hợp'}</span>
                      <span className="font-bold text-slate-800">{project.specs?.technology || 'GPS & WMS'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate('/sale')}
                className="flex-1 bg-[#FF5A00] hover:bg-[#e04f00] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <FileText size={18} />
                <span>{language === 'en' ? 'Request Quote for Similar Project' : 'Yêu cầu Báo giá Dịch vụ này'}</span>
              </button>

              <a
                href="tel:0888447239"
                className="bg-[#002D62] hover:bg-blue-900 text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Phone size={18} className="text-[#FFC72C]" />
                <span>0888.447.239</span>
              </a>
            </div>

          </div>
        </div>

        {/* Other Projects Recommendations */}
        <div className="mt-14">
          <h2 className="text-xl font-extrabold text-[#002D62] mb-6">
            {language === 'en' ? 'Other Capabilities in Collection' : 'Năng lực khác trong Bộ Sưu Tập'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.filter((p) => p.id !== project.id).map((other) => (
              <div
                key={other.id}
                onClick={() => navigate(`/collection/${other.id}`)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={other.img}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#002D62]/90 text-[#FFC72C] text-[10px] font-extrabold uppercase px-2 py-1 rounded">
                    {other.subtitle}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#002D62] text-base group-hover:text-[#FF5A00] transition-colors mb-1">
                      {other.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-2">{other.desc}</p>
                  </div>
                  <span className="mt-3 text-xs font-bold text-[#FF5A00] inline-flex items-center space-x-1">
                    <span>{language === 'en' ? 'View Details' : 'Xem chi tiết'}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <PartnersSection />
    </div>
  );
}
