import React from 'react';

interface NtsLogoProps {
  className?: string;
}

export default function NtsLogo({ className = "w-12 h-12" }: NtsLogoProps) {
  return (
    <div className={`${className} aspect-square select-none flex-shrink-0 relative`} id="nts-official-logo">
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* White background circle inside the sketchy border */}
        <circle cx="250" cy="250" r="235" fill="#ffffff" />

        {/* Beautiful hand-drawn/sketchy circular borders in teal (#2A8D9C) */}
        <circle cx="250" cy="250" r="212" fill="none" stroke="#2A8D9C" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
        <circle cx="248.5" cy="251.5" r="208" fill="none" stroke="#2A8D9C" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
        <circle cx="251.5" cy="248.5" r="215" fill="none" stroke="#2A8D9C" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="180 30 120 15 250 25" opacity="0.8" />
        <circle cx="249.5" cy="250" r="210" fill="none" stroke="#2A8D9C" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="90 20 160 40" opacity="0.65" />

        {/* Central Logo Elements - Mathematically scaled to be wide and tall without overflowing the borders */}
        <g transform="translate(-58.55, -33.5) scale(1.21, 1.50)">
          
          {/* Stylized Red Semi-Truck Cab (Facing Left) */}
          {/* Exhaust Stack */}
          <rect x="194" y="130" width="4" height="42" fill="#D11219" rx="1" />
          <path d="M 194,130 Q 196,124 199,126" fill="none" stroke="#D11219" strokeWidth="2.0" strokeLinecap="round" />

          {/* Truck Body */}
          <path 
            d="M 105,220 
               L 105,206 
               C 105,202 108,200 112,200 
               L 142,200 
               C 146,200 148,193 151,187
               L 161,170
               C 163,167 167,167 171,167
               L 205,167
               L 205,220
               Z" 
            fill="#D11219" 
          />

          {/* Low Bumper Guard */}
          <path d="M 102,220 L 205,220" stroke="#D11219" strokeWidth="4" strokeLinecap="round" />

          {/* Front Wheel */}
          <circle cx="130" cy="220" r="11" fill="#1e293b" />
          <circle cx="130" cy="220" r="7.5" fill="#ffffff" />
          <circle cx="130" cy="220" r="4.5" fill="#D11219" />
          <circle cx="130" cy="220" r="2" fill="#ffffff" />

          {/* Rear Wheel */}
          <circle cx="180" cy="220" r="11" fill="#1e293b" />
          <circle cx="180" cy="220" r="7.5" fill="#ffffff" />
          <circle cx="180" cy="220" r="4.5" fill="#D11219" />
          <circle cx="180" cy="220" r="2" fill="#ffffff" />

          {/* Windshield & Windows */}
          <polygon points="156,172 169,172 165,186 152,186" fill="#ffffff" />
          <polygon points="173,172 191,172 191,186 173,186" fill="#ffffff" />

          {/* Grill details */}
          <line x1="105" x2="115" y1="205" y2="205" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="105" x2="115" y1="209" y2="209" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="105" x2="115" y1="213" y2="213" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

          {/* White Accent Stripes */}
          <path d="M 125,204 L 191,204" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <path d="M 130,208 L 180,208" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

          {/* Vector Letter 'N' (Red) - Solid paths for cross-platform visual perfection */}
          <rect x="205" y="170" width="24" height="50" fill="#D11219" />
          <rect x="265" y="170" width="24" height="50" fill="#D11219" />
          <polygon points="205,170 229,170 289,220 265,220" fill="#D11219" />

          {/* Vector Letter 'T' (Yellow) */}
          <rect x="296" y="170" width="56" height="14" fill="#F1B51C" />
          <rect x="313" y="184" width="22" height="36" fill="#F1B51C" />

          {/* Vector Letter 'S' (Yellow) */}
          <path 
            d="M 408,180 
               L 388,180 
               C 388,177 384,176 380,176 
               C 374,176 370,178 370,182 
               C 370,186 378,188 388,191 
               C 398,194 408,198 408,206 
               C 408,214 398,220 380,220 
               C 362,220 354,213 354,204 
               L 374,204 
               C 374,208 378,210 382,210 
               C 388,210 392,208 392,204 
               C 392,200 384,198 374,195 
               C 364,192 354,188 354,180 
               C 354,172 364,170 382,170 
               C 400,170 408,176 408,180 
               Z" 
            fill="#F1B51C" 
          />

          {/* NHAT THIEN SON & SAI GON Text (Positioned nicely above the stripe) */}
          <text 
            x="105" 
            y="242" 
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
            fontWeight="900" 
            fontSize="18" 
            textLength="303" 
            lengthAdjust="spacingAndGlyphs"
          >
            <tspan fill="#F1B51C">NHAT THiEN SON </tspan>
            <tspan fill="#D11219">SAi GON</tspan>
          </text>

          {/* Bottom Stripe */}
          <rect x="105" y="248" width="205" height="5" fill="#D11219" rx="1.5" />
          <rect x="315" y="248" width="93" height="5" fill="#F1B51C" rx="1.5" />
          
          {/* Diagonal White Slashes on Yellow Part */}
          <line x1="325" y1="247" x2="330" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="337" y1="247" x2="342" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="349" y1="247" x2="354" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="361" y1="247" x2="366" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="373" y1="247" x2="378" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="385" y1="247" x2="390" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="397" y1="247" x2="402" y2="254" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}



