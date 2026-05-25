import React from 'react';
import logoImage from './logo.png';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <div className={`relative ${className} flex-shrink-0 select-none`}>
      <img 
        src={logoImage} 
        alt="MB Stounas" 
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}
