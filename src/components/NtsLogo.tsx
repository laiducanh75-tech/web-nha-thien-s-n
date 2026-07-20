import React from 'react';

interface NtsLogoProps {
  className?: string;
}

export default function NtsLogo({ className = "w-12 h-12" }: NtsLogoProps) {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={`${className} select-none`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id="nts-official-logo"
    >
      {/* Solid White Background Circle for high contrast on all page backgrounds */}
      <circle 
        cx="250" 
        cy="250" 
        r="225" 
        fill="#FFFFFF" 
      />

      {/* Concentric Teal/Blue-Green Rings */}
      <circle 
        cx="250" 
        cy="250" 
        r="225" 
        stroke="#318F9C" 
        strokeWidth="6" 
        className="opacity-95"
      />
      <circle 
        cx="250" 
        cy="250" 
        r="215" 
        stroke="#318F9C" 
        strokeWidth="2.5" 
        className="opacity-90"
      />

      {/* Central Graphic Container */}
      <g transform="translate(15, 5)">
        
        {/* Exhaust pipe (behind cab) */}
        <rect x="187" y="145" width="6" height="42" fill="#D21F26" rx="1" />
        <path d="M 187,145 L 195,140 L 195,145 Z" fill="#D21F26" />

        {/* Truck Cabin (forms the left stem of the 'N') */}
        {/* Cab Main Red Body */}
        <path 
          d="M 115,232 L 115,212 Q 115,202 125,202 L 135,202 L 152,175 Q 157,170 165,170 L 192,170 L 192,232 Z" 
          fill="#D21F26" 
        />
        
        {/* Windshield & Side Window */}
        <path 
          d="M 152,176 L 180,176 L 180,195 L 142,195 Z" 
          fill="#FFFFFF" 
        />
        {/* Window Divider Line */}
        <line x1="166" y1="176" x2="166" y2="195" stroke="#D21F26" strokeWidth="2" />

        {/* Chrome Front Grille Details */}
        <rect x="115" y="210" width="10" height="2.5" fill="#FFFFFF" rx="0.5" />
        <rect x="115" y="215" width="10" height="2.5" fill="#FFFFFF" rx="0.5" />
        <rect x="115" y="220" width="10" height="2.5" fill="#FFFFFF" rx="0.5" />

        {/* Bumper */}
        <path d="M 110,227 L 122,227 L 122,232 L 110,232 Z" fill="#718096" />

        {/* Wheels */}
        <circle cx="134" cy="232" r="11" fill="#1A202C" />
        <circle cx="134" cy="232" r="5" fill="#FFFFFF" />
        
        <circle cx="178" cy="232" r="11" fill="#1A202C" />
        <circle cx="178" cy="232" r="5" fill="#FFFFFF" />

        {/* Letter 'N' - Diagonal & Right vertical pillar */}
        <polygon 
          points="192,170 216,170 265,232 241,232" 
          fill="#D21F26" 
        />
        <rect x="241" y="170" width="24" height="62" fill="#D21F26" />

        {/* Winding Road that sweeps dynamically through N, T, S */}
        <path 
          d="M 192,216 Q 235,145 295,190 T 365,195" 
          fill="none" 
          stroke="#FFB100" 
          strokeWidth="14" 
          strokeLinecap="round" 
        />
        <path 
          d="M 192,216 Q 235,145 295,190 T 365,195" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeDasharray="6,5" 
        />

        {/* Letter 'T' in gold-yellow */}
        <rect x="270" y="170" width="50" height="13" fill="#FFB100" rx="1.5" />
        <rect x="288" y="183" width="14" height="49" fill="#FFB100" rx="1" />

        {/* Letter 'S' in gold-yellow */}
        <path 
          d="M 360,182 C 360,166 325,166 325,188 C 325,208 360,202 360,220 C 360,236 325,236 325,220" 
          fill="none" 
          stroke="#FFB100" 
          strokeWidth="14" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </g>

      {/* Text Area: NHAT THIEN SON SAi GON */}
      <g transform="translate(0, -25)">
        <text 
          x="250" 
          y="318" 
          textAnchor="middle" 
          fontFamily="&quot;Outfit&quot;, &quot;Inter&quot;, sans-serif" 
          fontWeight="900" 
          fontSize="26.5" 
          letterSpacing="0.5"
        >
          <tspan fill="#FFB100">NHAT THiEN SON</tspan>
          <tspan fill="#FFFFFF" fontSize="24"> </tspan>
          <tspan fill="#D21F26">SAi GON</tspan>
        </text>

        {/* Underline bar */}
        {/* Solid Red Bar (left) */}
        <rect x="115" y="328" width="162" height="9" fill="#D21F26" />
        
        {/* Transition Yellow Bar with Slanted White Stripes (right) */}
        <g>
          <rect x="281" y="328" width="104" height="9" fill="#FFB100" />
          {/* Slanted lines cutting the yellow bar to form stripes */}
          <line x1="290" y1="328" x2="295" y2="337" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="305" y1="328" x2="310" y2="337" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="320" y1="328" x2="325" y2="337" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="335" y1="328" x2="340" y2="337" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="350" y1="328" x2="355" y2="337" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="365" y1="328" x2="370" y2="337" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="380" y1="328" x2="385" y2="337" stroke="#FFFFFF" strokeWidth="3" />
        </g>
      </g>
    </svg>
  );
}
