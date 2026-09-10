import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden parchment-bg">
      {/* Background Indian Architectural & Mandala Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing ambient gold & terracotta blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-museum-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-museum-terracotta/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-museum-sandstone/10 rounded-full blur-[130px]" />

        {/* Central Rotating Mandala Pattern Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] animate-pulse-slow">
          <svg width="800" height="800" viewBox="0 0 400 400" className="w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] text-museum-gold stroke-current fill-none">
            <circle cx="200" cy="200" r="180" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="140" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="100" strokeWidth="0.8" />
            <circle cx="200" cy="200" r="60" strokeWidth="1.5" />
            {/* Rays */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="200"
                y1="200"
                x2={200 + 180 * Math.cos((deg * Math.PI) / 180)}
                y2={200 + 180 * Math.sin((deg * Math.PI) / 180)}
                strokeWidth="0.75"
              />
            ))}
            {/* Inner Star Motif */}
            <path d="M 200 60 L 235 165 L 340 200 L 235 235 L 200 340 L 165 235 L 60 200 L 165 165 Z" strokeWidth="1" />
          </svg>
        </div>

        {/* Decorative Side Architectural Arch Borders */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 border-r border-museum-border/30 hidden lg:block opacity-40">
          <div className="h-full w-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px]" />
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 border-l border-museum-border/30 hidden lg:block opacity-40">
          <div className="h-full w-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center justify-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-museum-gold/10 border border-museum-gold/30 text-museum-gold text-xs uppercase tracking-widest font-semibold mb-6 shadow-gold-glow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Digital Museum</span>
          <span className="w-1.5 h-1.5 rounded-full bg-museum-terracotta" />
          <span className="text-museum-cream font-mono">5,000 BCE – Present</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-museum-cream tracking-tight leading-[1.08] mb-6"
        >
          INDIAN ART <br />
          <span className="text-gold-gradient font-serif italic">THROUGH TIME</span>
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-48 h-0.5 bg-gradient-to-r from-transparent via-museum-gold to-transparent my-4"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-museum-muted font-sans font-light leading-relaxed mb-8"
        >
          Explore thousands of years of creativity, culture, spirituality, and craftsmanship through an interactive journey across Indian art history.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onExploreClick}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-museum-terracotta via-museum-sandstone to-museum-gold text-white font-sans text-sm font-semibold tracking-widest uppercase shadow-terracotta-glow hover:shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
          >
            <Compass className="w-5 h-5 text-museum-gold-light group-hover:rotate-45 transition-transform duration-500" />
            <span>EXPLORE THE TIMELINE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Hero Footer Breadcrumb Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto px-4 w-full"
      >
        <div className="bg-museum-surface/80 backdrop-blur-md border border-museum-border/60 rounded-2xl py-3.5 px-6 shadow-museum flex items-center justify-between flex-wrap gap-3">
          <span className="text-[11px] font-mono text-museum-gold uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-museum-terracotta animate-pulse" />
            CHRONOLOGICAL SPAN
          </span>
          <div className="text-xs sm:text-sm font-serif text-museum-cream tracking-wide flex items-center gap-2 sm:gap-4 flex-wrap justify-center font-medium">
            <span className="hover:text-museum-gold transition-colors">Ancient India</span>
            <span className="text-museum-terracotta">→</span>
            <span className="hover:text-museum-gold transition-colors">Medieval India</span>
            <span className="text-museum-terracotta">→</span>
            <span className="hover:text-museum-gold transition-colors">Colonial Era</span>
            <span className="text-museum-terracotta">→</span>
            <span className="hover:text-museum-gold transition-colors">Modern India</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
