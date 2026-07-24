import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingContactButtons() {
  const phoneNumber = '0888447239';
  const formattedPhone = '0888.447.239';
  const zaloUrl = `https://zalo.me/${phoneNumber}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans" id="floating-contact-widgets">
      {/* Zalo Button */}
      <a
        href={zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#0068FF] hover:bg-[#0052cc] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        title="Chat Zalo ngay (0888.447.239)"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-bold pr-0 group-hover:pr-2 hidden sm:inline-block">
          Chat Zalo: {formattedPhone}
        </span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 bg-white rounded-full text-[#0068FF]">
          {/* Zalo Vector Logo */}
          <svg viewBox="0 0 48 48" className="w-5 h-5 fill-current">
            <path d="M24,4 C12.954,4 4,11.835 4,21.487 C4,26.793 7.025,31.488 11.826,34.708 C11.233,37.33 9.429,40.168 7.316,42.023 C7.023,42.28 7.21,42.753 7.595,42.711 C13.254,42.093 17.585,39.112 19.864,37.319 C21.198,37.731 22.58,37.974 24,37.974 C35.046,37.974 44,30.139 44,20.487 C44,10.835 35.046,4 24,4 Z M32.61,25.86 L28.23,25.86 C27.81,25.86 27.47,25.52 27.47,25.1 C27.47,24.68 27.81,24.34 28.23,24.34 L31.54,24.34 L27.68,18.82 C27.48,18.53 27.55,18.13 27.84,17.93 C28.13,17.73 28.53,17.8 28.73,18.09 L33.02,24.23 C33.16,24.43 33.15,24.7 33,24.89 C32.85,25.08 32.74,25.86 32.61,25.86 Z M17.5,17.5 C18.33,17.5 19,18.17 19,19 L19,25 C19,25.83 18.33,26.5 17.5,26.5 C16.67,26.5 16,25.83 16,25 L16,19 C16,18.17 16.67,17.5 17.5,17.5 Z" />
          </svg>
        </div>
      </a>

      {/* Phone Call Button with Pulse Ring Effect */}
      <a
        href={callUrl}
        className="relative group flex items-center bg-gradient-to-r from-[#FF5A00] to-[#e02e00] hover:from-[#e04f00] hover:to-[#c02000] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        title="Gọi ngay 0888.447.239"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-orange-500/50 animate-ping pointer-events-none opacity-75"></span>

        <span className="relative z-10 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-extrabold pr-0 group-hover:pr-2 hidden sm:inline-block">
          Gọi ngay: {formattedPhone}
        </span>
        
        <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 bg-white rounded-full text-[#FF5A00]">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce fill-current" />
        </div>
      </a>
    </div>
  );
}
