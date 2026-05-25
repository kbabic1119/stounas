import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <div className={`relative ${className} flex-shrink-0 select-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
        <defs>
          {/* Gradients for polished stone faces */}
          <linearGradient id="greenTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#70b324" />
          </linearGradient>
          
          <linearGradient id="greyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4f4f5" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>

          <linearGradient id="blackRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>

          <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#70b324" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#18181b" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Outer Premium Hexagon Frame */}
        <polygon 
          points="50,4 90,27 90,73 50,96 10,73 10,27" 
          fill="#111315"
          stroke="url(#borderGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner thin highlight border */}
        <polygon 
          points="50,9 86,30 86,70 50,91 14,70 14,30" 
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.05"
        />

        {/* 3D Geometric Granite Block Monogram/Composition */}
        {/* Combining facets to represent abstract polished stone monuments */}
        <g transform="translate(0, 2)">
          {/* Top Face (Lime Green) */}
          <polygon 
            points="50,22 74,35 50,49 26,35" 
            fill="url(#greenTop)" 
          />
          
          {/* Left Face (Speckled Silver Grey) */}
          <polygon 
            points="26,35 50,49 50,77 26,63" 
            fill="url(#greyLeft)" 
          />
          
          {/* Right Face (Obsidian Charcoal Black) */}
          <polygon 
            points="50,49 74,35 74,63 50,77" 
            fill="url(#blackRight)" 
          />

          {/* Accent Line highlighting the central intersection */}
          <line 
            x1="50" y1="49" x2="50" y2="77" 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            opacity="0.3" 
            strokeLinecap="round"
          />
          <line 
            x1="26" y1="35" x2="50" y2="49" 
            stroke="#ffffff" 
            strokeWidth="1" 
            opacity="0.2" 
            strokeLinecap="round"
          />
          <line 
            x1="74" y1="35" x2="50" y2="49" 
            stroke="#111315" 
            strokeWidth="1" 
            opacity="0.4" 
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
