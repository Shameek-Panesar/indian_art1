import React, { useState } from 'react';
import { FACTS } from '../data/artifacts';
import { Sparkles, RefreshCw, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FactSection() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const handleNextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % FACTS.length);
  };

  const currentFact = FACTS[currentFactIndex];

  return (
    <section id="facts" className="py-24 bg-museum-surface relative border-t border-museum-border/40 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-museum-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-gold/10 border border-museum-gold/30 text-museum-gold text-xs uppercase tracking-widest font-semibold shadow-gold-glow">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Interactive Museum Trivia</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-museum-cream tracking-tight">
            Did You <span className="text-gold-gradient italic">Know?</span>
          </h2>
        </div>

        {/* Fact Card Display */}
        <div className="relative bg-gradient-to-br from-museum-card via-museum-surface to-museum-bg border border-museum-gold/40 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Top Medallion Badge */}
          <div className="flex items-center justify-between border-b border-museum-border/60 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-museum-gold/10 border border-museum-gold/30 flex items-center justify-center text-museum-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-museum-terracotta font-semibold block">
                  {currentFact.category} • {currentFact.era}
                </span>
                <span className="text-xs font-mono text-museum-muted">Fact #{currentFact.id} of {FACTS.length}</span>
              </div>
            </div>

            <button
              onClick={handleNextFact}
              className="px-4 py-2 rounded-xl bg-museum-gold/10 hover:bg-museum-gold/20 border border-museum-gold/40 text-museum-gold text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center gap-2 group"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Discover Another Fact</span>
            </button>
          </div>

          {/* Animated Fact Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFact.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-museum-cream leading-snug">
                "{currentFact.title}"
              </h3>

              <p className="text-base sm:text-lg text-museum-muted font-sans font-light leading-relaxed">
                {currentFact.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 pt-8 mt-6 border-t border-museum-border/40">
            {FACTS.map((fact, idx) => (
              <button
                key={fact.id}
                onClick={() => setCurrentFactIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentFactIndex ? 'w-8 bg-museum-gold' : 'w-2 bg-museum-border hover:bg-museum-muted'
                }`}
                aria-label={`Go to fact ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
