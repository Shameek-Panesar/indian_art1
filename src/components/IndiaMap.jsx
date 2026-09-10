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
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-museum-terracotta/5 rounded-full blur-3xl pointer-events-none" />

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
            Click on any historical site marker across the historical map of India to discover its iconic masterpieces and artistic legacy.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-museum-gold to-transparent mx-auto rounded-full" />
        </div>

        {/* Map & Info Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-museum-card/90 border border-museum-border/70 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Left Column: Vintage Map of India */}
          <div className="lg:col-span-7 relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center bg-[#131110] rounded-2xl border border-museum-gold/30 p-3 sm:p-4 overflow-hidden shadow-2xl">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#3D332C_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            {/* Compass Ornament */}
            <div className="absolute top-4 left-4 z-20 opacity-60 pointer-events-none flex items-center gap-2 text-museum-gold font-mono text-[11px] uppercase tracking-wider bg-museum-dark/70 px-3 py-1 rounded-md border border-museum-gold/20 backdrop-blur-sm">
              <Compass className="w-4 h-4 animate-spin-slow text-museum-gold" />
              <span>Historical Map of India</span>
            </div>

            {/* Container for Vintage Map Image and SVG Marker Overlay */}
            <div className="relative w-full h-full max-h-[540px] flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-museum-border/50">
              {/* Vintage Map Image */}
              <img
                src="./vintage-india-map.png"
                alt="Historical Vintage Map of India"
                className="w-full h-full object-contain max-h-[540px] rounded-xl filter contrast-[1.05] brightness-[0.95] sepia-[0.1]"
              />

              {/* Interactive Location Marker Pins Overlay */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full max-h-[540px] pointer-events-auto select-none"
              >
                {MAP_LOCATIONS.map((loc) => {
                  const isActive = activeLocation?.id === loc.id;
                  return (
                    <g key={loc.id} className="cursor-pointer group" onClick={() => setActiveLocation(loc)}>
                      {/* Invisible hit-area circle */}
                      <circle
                        cx={loc.coords.x}
                        cy={loc.coords.y}
                        r="6"
                        fill="transparent"
                      />

                      {/* Active Pulsing Ring */}
                      {isActive && (
                        <circle
                          cx={loc.coords.x}
                          cy={loc.coords.y}
                          r="4.5"
                          fill="none"
                          stroke="#C85A32"
                          strokeWidth="0.8"
                          className="animate-ping opacity-85 pointer-events-none"
                        />
                      )}

                      {/* Outer Glow Circle */}
                      <circle
                        cx={loc.coords.x}
                        cy={loc.coords.y}
                        r={isActive ? "3.2" : "2.2"}
                        fill={isActive ? "rgba(200, 90, 50, 0.4)" : "rgba(212, 175, 55, 0.3)"}
                        className="transition-all duration-300"
                      />

                      {/* Core Pin Circle */}
                      <circle
                        cx={loc.coords.x}
                        cy={loc.coords.y}
                        r={isActive ? "2.2" : "1.6"}
                        fill={isActive ? "#C85A32" : "#D4AF37"}
                        stroke="#0D0C0B"
                        strokeWidth="0.5"
                        style={{
                          transformOrigin: `${loc.coords.x}% ${loc.coords.y}%`
                        }}
                        className="transition-transform duration-300 group-hover:scale-125 drop-shadow-md"
                      />

                      {/* Inner White Core */}
                      <circle
                        cx={loc.coords.x}
                        cy={loc.coords.y}
                        r={isActive ? "0.7" : "0.5"}
                        fill="#FFFFFF"
                        className="pointer-events-none"
                      />

                      {/* Pin Label Text */}
                      <g className="pointer-events-none transition-all duration-300 group-hover:translate-x-0.5">
                        <text
                          x={loc.coords.x + 2.8}
                          y={loc.coords.y + 0.8}
                          fontSize="2.4"
                          fontFamily="Cormorant Garamond, serif"
                          fontWeight="700"
                          fill={isActive ? "#FFFFFF" : "#1A1410"}
                          stroke="#FFFFFF"
                          strokeWidth="0.6"
                          paintOrder="stroke"
                          className="select-none transition-colors duration-200 group-hover:fill-museum-terracotta"
                        >
                          {loc.name}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
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
                  <div className="w-10 h-10 rounded-full bg-museum-gold/10 border border-museum-gold/30 flex items-center justify-center text-museum-gold shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-mono text-museum-muted tracking-wider block">
                    Historical Period
                  </span>
                  <span className="inline-block px-3 py-1 rounded-md bg-museum-bg border border-museum-border text-xs font-mono text-museum-gold font-semibold shadow-sm">
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
                        className="px-2.5 py-1 rounded-lg bg-museum-surface border border-museum-border/70 text-xs font-sans text-museum-cream shadow-sm"
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
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-museum-terracotta to-museum-sandstone text-white text-xs font-mono font-semibold uppercase tracking-widest hover:shadow-terracotta-glow transition-all flex items-center justify-center gap-2 group cursor-pointer"
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
