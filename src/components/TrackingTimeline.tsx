import React from 'react';
import { Shipment, ShipmentStep } from '../types';
import { CheckCircle2, AlertCircle, Compass, Anchor, ShieldCheck, Box, Package, ArrowRight, MapPin, Calendar, Clock, Ship, Plane, Truck } from 'lucide-react';

interface TrackingTimelineProps {
  shipment: Shipment;
  onClose?: () => void;
}

export default function TrackingTimeline({ shipment, onClose }: TrackingTimelineProps) {
  
  // Icon picker for shipment type
  const getTypeIcon = () => {
    switch (shipment.type) {
      case 'Đường biển':
        return <Ship className="text-blue-600" size={24} />;
      case 'Hàng không':
        return <Plane className="text-indigo-600" size={24} />;
      case 'Đường bộ':
        return <Truck className="text-amber-600" size={24} />;
      default:
        return <Package className="text-gray-600" size={24} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden animate-fade-in font-sans" id={`tracking-${shipment.id}`}>
      {/* Shipment summary header */}
      <div className="bg-gradient-to-r from-[#002D62] to-[#0a3a75] p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-[#FFC72C] text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {shipment.type}
            </span>
            <span className="text-sm font-mono text-blue-200">ID: {shipment.id}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-1 text-white">
            {shipment.origin.split(' (')[0]} <ArrowRight className="inline-block mx-1" size={18} /> {shipment.destination.split(' (')[0]}
          </h2>
        </div>
        
        <div className="flex flex-col items-start md:items-end text-sm text-blue-100 bg-white/10 px-4 py-2 rounded-lg border border-white/10 w-full md:w-auto">
          <span className="text-xs text-blue-200">Trạng thái hiện tại:</span>
          <span className="font-bold text-white text-base flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00] animate-ping"></span>
            {shipment.status}
          </span>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: Key Information & SVG Interactive Route Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
            <h3 className="font-bold text-[#002D62] mb-3 flex items-center gap-1.5">
              <Compass size={18} /> Chi tiết thông hành
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Người gửi:</span>
                <span className="font-semibold text-gray-800 text-right">{shipment.sender}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Người nhận:</span>
                <span className="font-semibold text-gray-800 text-right">{shipment.receiver}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Phương tiện:</span>
                <span className="font-semibold text-gray-800 text-right flex items-center gap-1">
                  {getTypeIcon()}
                  {shipment.carrierName || "NTS Fleet"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Mã Container / Air Waybill:</span>
                <span className="font-mono font-semibold text-gray-800 text-right">{shipment.containerId}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Trọng lượng / Thể tích:</span>
                <span className="font-semibold text-gray-800 text-right">{shipment.weight} / {shipment.volume}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-gray-500">Dự kiến giao hàng:</span>
                <span className="font-bold text-[#FF5A00] flex items-center gap-1">
                  <Calendar size={14} /> {shipment.estimatedDelivery}
                </span>
              </div>
            </div>
          </div>

          {/* SVG Map Container representing real-time journey */}
          <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 text-white relative overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Hải trình vệ tinh</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold py-0.5 px-2 rounded border border-emerald-500/30">
                GPS LIVE
              </span>
            </div>

            {/* Simulated interactive sea-route SVG */}
            <div className="w-full h-44 bg-slate-950 rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-800">
              <svg viewBox="0 0 400 180" className="w-full h-full opacity-90">
                {/* Simulated islands / landmasses */}
                <path d="M10,20 Q40,5 90,25 T150,15 T210,35 T300,10 L350,5 L400,20 L400,180 L0,180 Z" fill="#1e293b" opacity="0.3" />
                <path d="M0,100 Q50,90 80,120 T150,130 T220,110 T300,140 L400,150 L400,180 L0,180 Z" fill="#1e293b" opacity="0.4" />
                
                {/* Sea Route Dashed Line */}
                <path 
                  id="route-path" 
                  d="M50,130 Q150,70 250,90 T350,110" 
                  fill="none" 
                  stroke="#FFC72C" 
                  strokeWidth="3" 
                  strokeDasharray="6,4" 
                />
                
                {/* Track Line Highlight (representing the covered path) */}
                <path 
                  d="M50,130 Q150,70 250,90 T350,110" 
                  fill="none" 
                  stroke="#4ade80" 
                  strokeWidth="3.5" 
                  strokeDasharray={`${shipment.statusPercent * 3.5}, 1000`} 
                />

                {/* Origin Pin */}
                <g transform="translate(50, 130)">
                  <circle cx="0" cy="0" r="6" fill="#ef4444" className="animate-pulse" />
                  <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  <text x="-15" y="-12" fill="#94a3b8" fontSize="9" fontWeight="bold">Gửi</text>
                </g>

                {/* Destination Pin */}
                <g transform="translate(350, 110)">
                  <circle cx="0" cy="0" r="6" fill="#10b981" />
                  <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  <text x="-10" y="-12" fill="#94a3b8" fontSize="9" fontWeight="bold">Nhận</text>
                </g>

                {/* Moving ship or plane depending on type */}
                {/* We can compute path coordinates roughly from shipment completion % */}
                {(() => {
                  const percent = shipment.statusPercent / 100;
                  // Bezier curve approximation coordinates
                  // M50,130 Q150,70 250,90 T350,110
                  // Simple quadratic/cubic interpolation for position
                  const x = 50 + (350 - 50) * percent;
                  const y = 130 + (110 - 130) * percent - Math.sin(percent * Math.PI) * 40;
                  
                  return (
                    <g transform={`translate(${x}, ${y})`}>
                      <circle cx="0" cy="0" r="14" fill="#FF5A00" fillOpacity="0.25" className="animate-ping" />
                      <circle cx="0" cy="0" r="8" fill="#FF5A00" />
                      {shipment.type === 'Hàng không' ? (
                        <path d="M-4,-2 L0,-5 L4,-2 L1,3 L-1,3 Z" fill="#ffffff" />
                      ) : (
                        <circle cx="0" cy="0" r="3" fill="#ffffff" />
                      )}
                    </g>
                  );
                })()}
              </svg>

              <div className="absolute bottom-2 left-3 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-gray-300 font-mono flex items-center gap-1">
                <span>Khởi hành: {shipment.origin.split(' (')[0]}</span>
              </div>
              <div className="absolute bottom-2 right-3 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-gray-300 font-mono flex items-center gap-1">
                <span>Đích: {shipment.destination.split(' (')[0]}</span>
              </div>
            </div>

            {/* Travel bar meter */}
            <div className="mt-3.5 space-y-1 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Hành trình hoàn tất</span>
                <span className="font-bold text-[#FFC72C]">{shipment.statusPercent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-[#FFC72C] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${shipment.statusPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Dynamic Timeline */}
        <div className="lg:col-span-7">
          <h3 className="font-bold text-[#002D62] text-lg mb-6 flex items-center gap-2">
            <Anchor size={20} className="text-[#FF5A00]" /> Lịch sử hành trình chi tiết
          </h3>

          <div className="relative border-l-2 border-gray-200 ml-3.5 space-y-8 pb-4">
            {shipment.steps.map((step, idx) => {
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';
              const isUpcoming = step.status === 'upcoming';

              return (
                <div key={idx} className="relative pl-8 group">
                  {/* Step status indicator dot */}
                  <span className={`absolute -left-[11px] top-0.5 flex items-center justify-center w-5 h-5 rounded-full border-2 bg-white transition-all ${
                    isCompleted 
                      ? 'border-emerald-500 text-emerald-500 shadow-sm' 
                      : isCurrent
                        ? 'border-[#FF5A00] text-[#FF5A00] scale-125 shadow-md'
                        : 'border-gray-300 text-gray-300'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 size={12} fill="currentColor" className="text-white" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-ping"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    )}
                  </span>

                  {/* Step time bubble for Desktop on left / absolute */}
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-1">
                    <h4 className={`text-base font-bold transition-colors ${
                      isCompleted 
                        ? 'text-gray-800' 
                        : isCurrent 
                          ? 'text-[#FF5A00] text-lg' 
                          : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h4>
                    
                    <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-0.5 bg-slate-100 px-2 py-0.5 rounded border border-gray-200">
                        <Calendar size={11} /> {step.date}
                      </span>
                      {step.time && (
                        <span className="flex items-center gap-0.5 bg-slate-100 px-2 py-0.5 rounded border border-gray-200">
                          <Clock size={11} /> {step.time}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location label */}
                  <div className="flex items-center space-x-1 mb-2 text-xs font-bold text-gray-600 uppercase tracking-wider">
                    <MapPin size={12} className="text-[#002D62]" />
                    <span>{step.location}</span>
                  </div>

                  {/* Description container */}
                  <p className={`text-sm leading-relaxed ${
                    isUpcoming ? 'text-gray-400 italic' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>

                  {/* Outer styling border for active step */}
                  {isCurrent && (
                    <div className="absolute inset-0 bg-[#FF5A00]/5 rounded-r-lg -my-2 -mx-3 border-r-4 border-[#FF5A00] pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {onClose && (
        <div className="bg-slate-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-sm"
          >
            Đóng bảng tra cứu
          </button>
        </div>
      )}
    </div>
  );
}
