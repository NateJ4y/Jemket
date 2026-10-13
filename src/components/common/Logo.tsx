import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = true,
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric SVG Emblem based on the JEMKET Brochure */}
      <div className={`relative shrink-0 ${emblemSizes[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Gear Teeth (12 teeth) */}
          <g transform="translate(50, 50)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <rect
                key={deg}
                x="-5"
                y="-48"
                width="10"
                height="10"
                rx="2"
                fill="#1B2A5B"
                stroke="#7C4DFF"
                strokeWidth="1.5"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* Gear Body Circle */}
            <circle r="41" fill="#0B1E4B" stroke="#7C4DFF" strokeWidth="2.5" />
            <circle r="36" fill="url(#metallicGradient)" />
            <circle r="34" fill="#0B1E4B" />
            {/* Inner Metallic Bezel */}
            <circle r="30" fill="url(#coreGradient)" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />

            {/* High Voltage Dynamic Lightning Bolt in Center */}
            <path
              d="M3 -24 L-15 2 L-2 2 L-6 24 L16 -3 L3 -3 Z"
              fill="url(#boltGradient)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Inner highlight core of bolt */}
            <path
              d="M2 -20 L-10 1 L-1 1 L-4 18 L11 -2 L2 -2 Z"
              fill="#FBBF24"
              opacity="0.9"
            />
          </g>

          {/* Gradients */}
          <defs>
            <radialGradient id="metallicGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8A99AD" />
              <stop offset="60%" stopColor="#4A5568" />
              <stop offset="100%" stopColor="#1A202C" />
            </radialGradient>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D32F2F" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#7C4DFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0B1E4B" />
            </radialGradient>
            <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#FFC107" />
              <stop offset="70%" stopColor="#E53935" />
              <stop offset="100%" stopColor="#B71C1C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Wordmark & Engineering Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-[#D32F2F] ${textSizes[size]}`}>
            JEMKET
          </span>
          <span
            className={`font-extrabold tracking-widest text-[0.65em] uppercase ${
              isDark ? 'text-white' : 'text-[#0B1E4B]'
            }`}
          >
            ENGINEERING
          </span>
        </div>

        {showTagline && (
          <span
            className={`font-semibold tracking-wider text-[10px] mt-0.5 uppercase ${
              isDark ? 'text-slate-400' : 'text-[#1B2A5B]/80'
            } ${subTextSizes[size]}`}
          >
            Professional Engineering &amp; Installation Services
          </span>
        )}
      </div>
    </div>
  );
};
