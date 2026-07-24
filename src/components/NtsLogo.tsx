import React from 'react';

interface NtsLogoProps {
  className?: string;
  alt?: string;
  showText?: boolean;
  textClassName?: string;
}

export default function NtsLogo({ 
  className = "h-12 w-auto", 
  alt = "Nhất Thiên Sơn Sài Gòn Logistics",
  showText = false,
  textClassName = ""
}: NtsLogoProps) {
  if (showText) {
    return (
      <div className="inline-flex items-center space-x-2.5 sm:space-x-3">
        <img 
          src="https://i.postimg.cc/fL1w7gQw/Logo-Nhat-Thien-Son-Sai-Gon.png" 
          alt={alt}
          className={`${className} object-contain select-none`}
          loading="eager"
        />
        <div className={`flex flex-col justify-center ${textClassName}`}>
          <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight uppercase text-[#002D62] leading-tight">
            Nhất Thiên Sơn Sài Gòn
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#D21F26] leading-none mt-0.5">
            Logistics
          </span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src="https://i.postimg.cc/fL1w7gQw/Logo-Nhat-Thien-Son-Sai-Gon.png" 
      alt={alt}
      className={`${className} object-contain select-none`}
      loading="eager"
    />
  );
}
