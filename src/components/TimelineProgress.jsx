import React, { useState, useEffect } from 'react';
import { PERIODS } from '../data/artifacts';

export default function TimelineProgress({ activePeriodId, onSelectPeriod }) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setScrolledPastHero(rect.bottom < 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolledPastHero) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 bg-museum-surface/90 backdrop-blur-md border border-museum-border/60 p-3 rounded-full shadow-museum animate-fadeIn">
      <span className="text-[9px] font-mono text-museum-gold uppercase font-bold tracking-widest rotate-90 my-2">
        TIMELINE
      </span>

      <div className="w-px h-8 bg-museum-border" />

      {PERIODS.map((period) => {
        const isActive = activePeriodId === period.id;
        return (
          <button
            key={period.id}
            onClick={() => onSelectPeriod(period.id)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            title={`${period.number}. ${period.name} (${period.dates})`}
          >
            {/* Tooltip Hover Badge */}
            <div className="absolute right-full mr-3 px-3 py-1 bg-museum-card border border-museum-gold/40 rounded-lg text-xs font-serif text-museum-cream whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              <span className="text-museum-gold font-bold mr-1">{period.number}.</span>
              {period.name}
            </div>

            {/* Indicator Dot */}
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-museum-terracotta ring-4 ring-museum-terracotta/30 scale-125'
                  : 'bg-museum-border hover:bg-museum-gold'
              }`}
            />
          </button>
        );
      })}

      <div className="w-px h-8 bg-museum-border" />

      <span className="text-[9px] font-mono text-museum-muted uppercase font-semibold">
        NOW
      </span>
    </div>
  );
}
