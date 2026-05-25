import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <div className={`relative ${className} flex-shrink-0 select-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        {/* Outer Solid dark Hexagon Base to stand out on dark backgrounds */}
        <polygon 
          points="50,2 93,27 93,73 50,98 7,73 7,27" 
          fill="#17181c"
        />

        {/* Double layered sharp borders like in the image */}
        {/* Outer thick hexagon line */}
        <polygon 
          points="50,4 91,28 91,72 50,96 9,72 9,28" 
          fill="none" 
          stroke="#1e2229" 
          strokeWidth="4" 
        />
        
        {/* Inner thin gap line */}
        <polygon 
          points="50,7 88,29 88,71 50,93 12,71 12,29" 
          fill="#f4f4f5" 
          stroke="none"
        />
        
        {/* Inner dark frame */}
        <polygon 
          points="50,11 83,30 83,70 50,89 17,70 17,30" 
          fill="#ffffff" 
          stroke="#1e2229" 
          strokeWidth="3.5" 
        />

        {/* 3D Isometric granite blocks layout */}
        {/* BLOCK 1: Top-Right GREEN Granite Block */}
        {/* Top face */}
        <polygon 
          points="50,28 69,17 80,24 61,35" 
          fill="#65a30d" 
        />
        {/* Front-Left face */}
        <polygon 
          points="50,28 61,35 61,48 50,41" 
          fill="#3f6212" 
        />
        {/* Front-Right face */}
        <polygon 
          points="61,35 80,24 80,37 61,48" 
          fill="#4d7c0f" 
        />

        {/* BLOCK 2: Center LIGHT GREY Granite slab */}
        {/* Top face */}
        <polygon 
          points="39,36 67,20 74,24 46,40" 
          fill="#e4e4e7" 
        />
        {/* Front-Left face */}
        <polygon 
          points="39,36 46,40 46,54 39,50" 
          fill="#a1a1aa" 
        />
        {/* Front-Right face */}
        <polygon 
          points="46,40 74,24 74,38 46,54" 
          fill="#cbd5e1" 
        />

        {/* BLOCK 3: Lower-Left DARK GREY/CHARCOAL slab */}
        {/* Top face */}
        <polygon 
          points="32,46 59,30 66,34 39,50" 
          fill="#52525b" 
        />
        {/* Front-Left face */}
        <polygon 
          points="32,46 39,50 39,64 32,60" 
          fill="#27272a" 
        />
        {/* Front-Right face */}
        <polygon 
          points="39,50 66,34 66,48 39,64" 
          fill="#3f3f46" 
        />

        {/* BLOCK 4: Bottom DARK BASALT step base */}
        {/* Top face */}
        <polygon 
          points="32,60 59,44 66,48 39,64" 
          fill="#3f3f46" 
        />
        {/* Front-Left face */}
        <polygon 
          points="32,60 39,64 39,78 32,74" 
          fill="#18181b" 
        />
        {/* Front-Right face */}
        <polygon 
          points="39,64 66,48 66,62 39,78" 
          fill="#27272a" 
        />
      </svg>
    </div>
  );
}
