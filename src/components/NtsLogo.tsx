import React from 'react';
import logoImg from './assets/images/logonts1.png';

interface NtsLogoProps {
  className?: string;
}

export default function NtsLogo({ className = "w-12 h-12" }: NtsLogoProps) {
  return (
    <div className={`${className} aspect-square overflow-hidden rounded-full flex items-center justify-center bg-white flex-shrink-0 relative`}>
      <img 
        src={logoImg} 
        alt="NTS Saigon Logistics Logo" 
        className="w-full h-full object-cover scale-[1.35] select-none"
        referrerPolicy="no-referrer"
        id="nts-official-logo"
      />
    </div>
  );
}


