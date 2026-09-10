import React from 'react';
import { ChevronLeft, ChevronRight, Layers, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TimelinePeriod({
  period,
  onPreviousPeriod,
  onNextPeriod,
  hasPreviousPeriod,
  hasNextPeriod,
  onSelectAllPeriods
}) {
  if (!period) return null;

  return (
    <motion.div
      key={period.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-museum-card via-museum-surface to-museum-bg border border-museum-gold/40 rounded-2xl p-6 sm:p-8 shadow-2xl mb-10 relative overflow-hidden"
    >
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-museum-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Era Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-museum-terracotta/20 border border-museum-terracotta/40 text-museum-terracotta font-mono text-xs font-semibold uppercase tracking-widest">
              PERIOD {period.number} • {period.eraBadge}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-museum-gold font-semibold">
              <Clock className="w-3.5 h-3.5" />
              {period.dates}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-museum-cream tracking-tight">
            {period.name}
          </h3>

          <p className="text-sm sm:text-base text-museum-muted font-sans font-light leading-relaxed">
            {period.description}
          </p>

          {/* Key Artistic Features Pills */}
          <div className="pt-2 flex items-center gap-2 flex-wrap">
            <span className="text-xs uppercase font-mono text-museum-gold/70 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-museum-gold" /> Key Features:
            </span>
            {period.keyFeatures.map((feature, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-museum-bg/80 border border-museum-border/60 text-xs font-sans text-museum-cream/90"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Era Switcher Controls */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-museum-border/50">
          <div className="flex items-center gap-2">
            <button
              onClick={onPreviousPeriod}
              disabled={!hasPreviousPeriod}
              className={`px-3 py-2 rounded-xl border text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                hasPreviousPeriod
                  ? 'bg-museum-bg border-museum-border hover:border-museum-gold text-museum-cream hover:text-museum-gold'
                  : 'bg-museum-bg/40 border-transparent text-museum-muted/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Era</span>
            </button>

            <button
              onClick={onNextPeriod}
              disabled={!hasNextPeriod}
              className={`px-3 py-2 rounded-xl border text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                hasNextPeriod
                  ? 'bg-museum-bg border-museum-border hover:border-museum-gold text-museum-cream hover:text-museum-gold'
                  : 'bg-museum-bg/40 border-transparent text-museum-muted/30 cursor-not-allowed'
              }`}
            >
              <span>Next Era</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onSelectAllPeriods}
            className="px-4 py-2 rounded-xl bg-museum-gold/10 hover:bg-museum-gold/20 border border-museum-gold/40 text-museum-gold text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <Layers className="w-3.5 h-3.5" />
            Show All Eras
          </button>
        </div>
      </div>
    </motion.div>
  );
}
