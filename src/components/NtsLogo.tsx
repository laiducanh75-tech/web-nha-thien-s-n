import React from 'react';

interface NtsLogoProps {
  className?: string;
  alt?: string;
}

export default function NtsLogo({ 
  className = "h-12 w-auto", 
  alt = "Nhất Thiên Sơn Sài Gòn Logistics" 
}: NtsLogoProps) {
  return (
    <img 
      src="https://i.postimg.cc/fL1w7gQw/Logo-Nhat-Thien-Son-Sai-Gon.png" 
      alt={alt}
      className={`${className} object-contain select-none`}
      loading="eager"
    />
  );
}
