import React, { useState } from 'react';
import { MAP_LOCATIONS } from '../data/artifacts';
import { MapPin, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IndiaMap({ onSelectLocationFilter }) {
  const [activeLocation, setActiveLocation] = useState(MAP_LOCATIONS[0]);

  return (
    <section id="map" className="py-24 bg-museum-bg relative border-t border-museum-border/40 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-museum-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-gold/10 border border-museum-gold/30 text-museum-gold text-xs uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Geographic Heritage</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-museum-cream tracking-tight">
            Where Art <span className="text-gold-gradient italic">Came From</span>
          </h2>

          <p className="text-base sm:text-lg text-museum-muted font-sans font-light leading-relaxed">
            Click on any historical site marker across the Indian subcontinent to discover its iconic masterpieces and artistic legacy.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-museum-gold to-transparent mx-auto rounded-full" />
        </div>

        {/* Map & Info Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-museum-card/80 border border-museum-border/70 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Left Column: Interactive Stylized Vector Map */}
          <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center bg-museum-dark/60 rounded-2xl border border-museum-border/50 p-4 overflow-hidden">
            {/* Background Grid & Compass Rose */}
            <div className="absolute inset-0 bg-[radial-gradient(#3D332C_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

            {/* Compass Ornament */}
            <div className="absolute top-4 left-4 opacity-30 pointer-events-none flex items-center gap-2 text-museum-gold font-mono text-[10px] uppercase">
              <Compass className="w-6 h-6 animate-spin-slow" />
              <span>N Subcontinent Map</span>
            </div>

            {/* Stylized SVG Outline Map of Subcontinent */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full max-h-[480px] text-museum-border/60 drop-shadow-[0_0_15px_rgba(212,175,55,0.1)]"
            >
              {/* Simplified Artistic Subcontinent Path */}
              <path
                d="M 20 25 
                   C 25 15, 45 10, 65 12 
                   C 80 15, 90 30, 85 45 
                   C 80 55, 75 60, 68 70 
                   C 60 80, 52 92, 50 95 
                   C 48 92, 42 78, 38 72 
                   C 32 62, 28 55, 25 45 
                   C 18 40, 15 30, 20 25 Z"
                fill="#181412"
                stroke="#3D332C"
                strokeWidth="0.75"
                strokeDasharray="2 1"
              />

              {/* Decorative Rivers Lines */}
              <path d="M 22 30 Q 35 38 56 38 Q 68 45 74 50" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.4" />
              <path d="M 50 15 Q 52 35 50 85" fill="none" stroke="#C85A32" strokeWidth="0.3" opacity="0.3" />

              {/* Location Pins */}
              {MAP_LOCATIONS.map((loc) => {
                const isActive = activeLocation?.id === loc.id;
                return (
                  <g key={loc.id} className="cursor-pointer group" onClick={() => setActiveLocation(loc)}>
                    {/* Invisible hit box area to ensure mouse pointer remains continuously hovered */}
                    <circle
                      cx={loc.coords.x}
                      cy={loc.coords.y}
                      r="5"
                      fill="transparent"
                      className="cursor-pointer"
                    />

                    {/* Pulsing outer ring if active */}
                    {isActive && (
                      <circle
                        cx={loc.coords.x}
                        cy={loc.coords.y}
                        r="3.5"
                        fill="none"
                        stroke="#C85A32"
                        strokeWidth="0.5"
                        className="animate-ping pointer-events-none"
                      />
                    )}

                    {/* Pin Circle */}
                    <circle
                      cx={loc.coords.x}
                      cy={loc.coords.y}
                      r={isActive ? "2.4" : "1.8"}
                      fill={isActive ? "#C85A32" : "#D4AF37"}
                      stroke="#12100E"
                      strokeWidth="0.4"
                      style={{
                        transformOrigin: `${loc.coords.x}px ${loc.coords.y}px`
                      }}
                      className="transition-transform duration-300 group-hover:scale-125"
                    />

                    {/* Pin Label Text */}
                    <text
                      x={loc.coords.x + 3.5}
                      y={loc.coords.y + 1}
                      fontSize="2.4"
                      fontFamily="Cormorant Garamond"
                      fontWeight="bold"
                      fill={isActive ? "#F5EBE6" : "#A3968C"}
                      className="transition-colors duration-200 group-hover:fill-museum-gold select-none pointer-events-none"
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right Column: Location Detail Card */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between border-b border-museum-border/60 pb-4">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-museum-terracotta font-semibold">
                      {activeLocation.state}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-museum-cream mt-1">
                      {activeLocation.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-museum-gold/10 border border-museum-gold/30 flex items-center justify-center text-museum-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-mono text-museum-muted tracking-wider block">
                    Historical Period
                  </span>
                  <span className="inline-block px-3 py-1 rounded-md bg-museum-bg border border-museum-border text-xs font-mono text-museum-gold font-semibold">
                    {activeLocation.period}
                  </span>
                </div>

                <p className="text-sm text-museum-muted font-sans leading-relaxed">
                  {activeLocation.description}
                </p>

                {/* Famous Artworks at Site */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs uppercase font-mono text-museum-gold font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Iconic Masterpieces from Site:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeLocation.artworks.map((art, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-museum-surface border border-museum-border/70 text-xs font-sans text-museum-cream"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Filter Collection Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectLocationFilter(activeLocation.name)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-museum-terracotta to-museum-sandstone text-white text-xs font-mono font-semibold uppercase tracking-widest hover:shadow-terracotta-glow transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>View Artworks from {activeLocation.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
