import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag, Globe, Sparkles, BookOpen, Award, Maximize2 } from 'lucide-react';

export default function ArtifactModal({ artifact, onClose, onPrevious, onNext, hasPrevious, hasNext }) {
  const [imageError, setImageError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [artifact]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!artifact) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-museum-dark/90 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-museum-card border border-museum-gold/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-museum-surface/90 border-b border-museum-border/60 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-museum-terracotta animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-widest text-museum-gold font-semibold">
                MUSEUM EXHIBIT • {artifact.periodId.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1 border-r border-museum-border/60 pr-3">
                <button
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  className={`p-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1 ${
                    hasPrevious
                      ? 'border-museum-border text-museum-cream hover:border-museum-gold hover:text-museum-gold'
                      : 'border-transparent text-museum-muted/30 cursor-not-allowed'
                  }`}
                  title="Previous Artifact (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className={`p-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1 ${
                    hasNext
                      ? 'border-museum-border text-museum-cream hover:border-museum-gold hover:text-museum-gold'
                      : 'border-transparent text-museum-muted/30 cursor-not-allowed'
                  }`}
                  title="Next Artifact (Right Arrow)"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-museum-bg border border-museum-border text-museum-muted hover:text-museum-gold hover:border-museum-gold transition-colors focus:outline-none"
                aria-label="Close Exhibit Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Body (Scrollable Split View) */}
          <div className="overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Image & Quick Specs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-museum-dark border border-museum-border/70 group shadow-museum">
                {imageError ? (
                  <div className="w-full h-full bg-gradient-to-br from-museum-card via-museum-surface to-museum-bg flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-4xl mb-2">🏛️</span>
                    <span className="font-serif text-lg text-museum-gold font-bold">{artifact.name}</span>
                    <span className="text-xs text-museum-muted font-mono mt-1">{artifact.date}</span>
                  </div>
                ) : (
                  <img
                    src={artifact.image}
                    alt={artifact.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-500"
                  />
                )}

                {/* Medium Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-museum-dark/90 backdrop-blur-md border border-museum-gold/30 rounded-lg p-2.5 text-xs text-museum-cream font-mono flex items-center justify-between">
                  <span className="text-museum-gold font-semibold">Medium:</span>
                  <span className="truncate ml-2">{artifact.material}</span>
                </div>
              </div>

              {/* Quick Spec Metadata Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-museum-bg/70 p-3 rounded-lg border border-museum-border/50">
                  <span className="text-museum-muted block text-[10px] uppercase">Category</span>
                  <span className="text-museum-gold font-semibold">{artifact.category}</span>
                </div>
                <div className="bg-museum-bg/70 p-3 rounded-lg border border-museum-border/50">
                  <span className="text-museum-muted block text-[10px] uppercase">Approx Date</span>
                  <span className="text-museum-terracotta font-semibold">{artifact.date}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information Exhibit Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Title & Period */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-museum-terracotta font-semibold">
                  {artifact.period}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-museum-cream mt-1 leading-tight">
                  {artifact.name}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-museum-muted mt-2 flex-wrap">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-museum-gold" />
                    {artifact.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-museum-terracotta" />
                    {artifact.region}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-museum-border/60" />

              {/* Section 1: Historical Context */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-semibold text-museum-gold">
                  <BookOpen className="w-4 h-4 text-museum-gold" />
                  <span>Historical Context</span>
                </div>
                <p className="text-sm sm:text-base text-museum-cream/90 font-sans leading-relaxed font-light">
                  {artifact.historicalContext}
                </p>
              </div>

              {/* Section 2: Why It Matters */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-semibold text-museum-terracotta">
                  <Award className="w-4 h-4 text-museum-terracotta" />
                  <span>Why It Matters in Indian Art History</span>
                </div>
                <p className="text-sm sm:text-base text-museum-cream/90 font-sans leading-relaxed font-light">
                  {artifact.significance}
                </p>
              </div>

              {/* Section 3: Did You Know? */}
              <div className="bg-gradient-to-r from-museum-gold/10 via-museum-sandstone/10 to-transparent border-l-4 border-museum-gold p-4 rounded-r-xl space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-semibold text-museum-gold">
                  <Sparkles className="w-4 h-4" />
                  <span>Did You Know?</span>
                </div>
                <p className="text-xs sm:text-sm text-museum-cream font-serif italic leading-relaxed">
                  "{artifact.funFact}"
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-3 bg-museum-surface/90 border-t border-museum-border/60 flex items-center justify-between text-xs font-mono text-museum-muted shrink-0">
            <span>Use Left & Right Arrow keys to navigate</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
