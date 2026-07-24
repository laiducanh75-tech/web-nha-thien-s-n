import React from 'react';

export default function PartnersSection() {
  const partnerLogos = [
    {
      id: 'huegatex',
      name: 'CÔNG TY CỔ PHẦN DỆT MAY HUẾ (HDM)',
      svg: (
        <svg viewBox="0 0 360 140" className="h-20 sm:h-24 w-auto">
          {/* White Card with Cyan Stadium Pill Border */}
          <rect x="6" y="6" width="348" height="128" rx="64" fill="#ffffff" stroke="#00AEEF" strokeWidth="4" />
          
          {/* Registered Trademark ® Top Right */}
          <g transform="translate(284, 22)">
            <circle cx="8" cy="8" r="8" fill="none" stroke="#00AEEF" strokeWidth="1.3" />
            <text x="8" y="11.5" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#00AEEF" textAnchor="middle">R</text>
          </g>

          {/* HDM Monogram */}
          <g fill="#00AEEF">
            {/* === LETTER H === */}
            {/* Left Vertical Pillar */}
            <rect x="58" y="26" width="22" height="60" />
            {/* Right Vertical Pillar */}
            <rect x="120" y="26" width="22" height="60" />
            {/* Center Pinched Thread Spool Bridge */}
            <path d="M 80,38 Q 100,45 120,38 L 120,74 Q 100,67 80,74 Z" />
            {/* Spool Vertical White Threads */}
            <g stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round">
              <line x1="87" y1="41" x2="87" y2="71" />
              <line x1="93.5" y1="43" x2="93.5" y2="69" />
              <line x1="100" y1="44" x2="100" y2="68" />
              <line x1="106.5" y1="43" x2="106.5" y2="69" />
              <line x1="113" y1="41" x2="113" y2="71" />
            </g>

            {/* === LETTER D === */}
            <path d="M 149,26 L 175,26 C 196,26 210,38 210,56 C 210,74 196,86 175,86 L 149,86 Z" />
            {/* Center Circular Hole */}
            <circle cx="154" cy="56" r="16" fill="#ffffff" />

            {/* === LETTER M (Fabric Ribbon Wave) === */}
            <rect x="216" y="26" width="22" height="60" />
            <path d="M 238,26 L 256,26 C 256,26 260,56 278,56 C 292,56 300,42 307,62 C 310,70 302,86 284,86 C 260,86 244,50 238,26 Z" />
            <path d="M 298,54 C 304,44 310,50 308,58 C 306,64 298,66 298,54 Z" />
          </g>

          {/* Subtext: CONG TY CO PHAN DET MAY HUE */}
          <text x="180" y="112" fontFamily="'Arial', 'Helvetica Neue', sans-serif" fontSize="11" fontWeight="700" fill="#00AEEF" textAnchor="middle" letterSpacing="2.5">
            CONG TY CO PHAN DET MAY HUE
          </text>
        </svg>
      )
    },
    {
      id: 'itl-logistics',
      name: 'ITL LOGISTICS',
      svg: (
        <svg viewBox="0 0 280 120" className="h-20 sm:h-24 w-auto">
          <rect width="280" height="120" fill="#ffffff" rx="14" />
          <g transform="translate(12, 16)">
            {/* === RED WING SWOOP EMBLEM (LEFT) === */}
            <path 
              d="M 2,0 C 15,20 32,38 58,46 C 36,38 18,22 18,8 Z" 
              fill="#E31B23" 
            />
            <path 
              d="M 58,46 C 42,52 20,62 4,74 C 22,64 45,58 55,48 Z" 
              fill="#E31B23" 
            />

            {/* === ITL SLANTED MONOGRAM === */}
            <g fill="#00529C">
              {/* Lower Stem of 'i' */}
              <polygon points="52,70 63,26 80,21 69,70" />
              {/* 'T' Letter */}
              <polygon points="85,15 152,15 146,27 125,27 114,70 94,70 105,27 89,27" />
              {/* 'L' Letter */}
              <polygon points="152,15 172,15 160,58 198,58 194,70 140,70" />
            </g>

            {/* Red Cap on 'i' */}
            <polygon points="69,14 88,14 82,21 64,21" fill="#E31B23" />

            {/* Red Horizontal Cross-Line */}
            <rect x="74" y="52" width="138" height="3" fill="#E31B23" />

            {/* Subtext: LOGISTICS */}
            <text x="132" y="89" fontFamily="'Arial Black', Arial, sans-serif" fontSize="15" fontWeight="900" fontStyle="italic" fill="#000000" textAnchor="middle" letterSpacing="3">
              LOGISTICS
            </text>
          </g>
        </svg>
      )
    },
    {
      id: 'maersk',
      name: 'MAERSK Ocean Shipping',
      svg: (
        <svg viewBox="0 0 260 110" className="h-20 sm:h-24 w-auto">
          <rect width="260" height="110" fill="#ffffff" rx="14" />
          <g transform="translate(16, 22)">
            <rect x="0" y="0" width="66" height="66" fill="#42B0D8" rx="12" />
            <polygon points="33,10 38,24 52,18 44,31 57,39 42,43 43,58 33,47 23,58 24,43 9,39 22,31 14,18 28,24" fill="#ffffff" />
            <text x="80" y="47" fontFamily="'Arial Black', Gadget, sans-serif" fontSize="28" fontWeight="900" fill="#000000" letterSpacing="1">
              MAERSK
            </text>
          </g>
        </svg>
      )
    },
    {
      id: 'one-line',
      name: 'ONE - Ocean Network Express',
      svg: (
        <svg viewBox="0 0 240 120" className="h-20 sm:h-24 w-auto">
          <rect width="240" height="120" fill="#ffffff" rx="14" />
          <g transform="translate(20, 25)">
            <text x="100" y="52" fontFamily="'Arial Black', Impact, sans-serif" fontSize="56" fontWeight="900" fill="#D10074" textAnchor="middle" letterSpacing="-1">
              ONE
            </text>
            <text x="100" y="73" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="800" fill="#D10074" textAnchor="middle" letterSpacing="1">
              OCEAN NETWORK EXPRESS
            </text>
          </g>
        </svg>
      )
    },
    {
      id: 'cosco',
      name: 'COSCO SHIPPING',
      svg: (
        <svg viewBox="0 0 240 120" className="h-20 sm:h-24 w-auto">
          <rect width="240" height="120" fill="#ffffff" rx="14" />
          <g transform="translate(20, 30)">
            <circle cx="32" cy="30" r="26" fill="#003399" />
            <path d="M 12,30 C 12,16 52,16 52,30 C 52,44 12,44 12,30 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
            <line x1="32" y1="4" x2="32" y2="56" stroke="#ffffff" strokeWidth="2" />
            <path d="M 10,20 L 54,40 M 10,40 L 54,20" stroke="#D11219" strokeWidth="2.5" />
            <text x="68" y="32" fontFamily="'Arial Black', sans-serif" fontSize="22" fontWeight="900" fill="#003399" letterSpacing="0.5">
              COSCO
            </text>
            <text x="68" y="50" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="800" fill="#D11219" letterSpacing="1.5">
              SHIPPING
            </text>
          </g>
        </svg>
      )
    },
    {
      id: 'cma-cgm',
      name: 'CMA CGM Group',
      svg: (
        <svg viewBox="0 0 240 120" className="h-20 sm:h-24 w-auto">
          <rect width="240" height="120" fill="#ffffff" rx="14" />
          <g transform="translate(20, 35)">
            <path d="M 5,8 L 48,8 L 26,52 Z" fill="#E21B23" />
            <path d="M 26,8 L 68,8 L 46,52 Z" fill="#002B66" />
            <text x="76" y="38" fontFamily="'Arial Black', sans-serif" fontSize="23" fontWeight="900" fill="#002B66">
              CMA CGM
            </text>
          </g>
        </svg>
      )
    }
  ];

  const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-12 bg-slate-50 border-t border-b border-slate-200/80 overflow-hidden" id="partners-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8B1E22] uppercase tracking-wider flex items-center justify-center gap-3">
            <span className="w-8 sm:w-12 h-0.5 bg-[#8B1E22]/40 rounded"></span>
            KHÁCH HÀNG VÀ ĐỐI TÁC
            <span className="w-8 sm:w-12 h-0.5 bg-[#8B1E22]/40 rounded"></span>
          </h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Đồng hành cùng các tập đoàn Vận tải &amp; Logistics hàng đầu thế giới và Việt Nam
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-3 bg-white/60 backdrop-blur-sm shadow-inner">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-6 sm:gap-8 pl-4">
          {marqueeLogos.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              className="flex-none flex items-center justify-center p-1.5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-white border border-slate-200/80"
              title={partner.name}
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
