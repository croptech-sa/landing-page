import React from 'react';

const LogoStrip: React.FC = () => {
  const logos = [
    { id: 1, name: 'شريك 1' },
    { id: 2, name: 'شريك 2' },
    { id: 3, name: 'شريك 3' },
    { id: 4, name: 'شريك 4' },
    { id: 5, name: 'شريك 5' },
    { id: 6, name: 'شريك 6' },
  ];

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="flex animate-scroll-rtl">
        {/* First set of logos */}
        {logos.map((logo) => (
          <div
            key={`first-${logo.id}`}
            className="flex-shrink-0 w-32 h-16 mx-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center"
          >
            <span className="text-white/60 text-sm font-medium">{logo.name}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo) => (
          <div
            key={`second-${logo.id}`}
            className="flex-shrink-0 w-32 h-16 mx-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center"
          >
            <span className="text-white/60 text-sm font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;