import React from 'react';
import { PERIODS } from '../data/artifacts';
import TimelinePeriod from './TimelinePeriod';
import FilterBar from './FilterBar';
import ArtifactCard from './ArtifactCard';
import { Compass, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Timeline({
  artifacts,
  allArtifactsCount,
  selectedPeriod,
  setSelectedPeriod,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedMaterial,
  setSelectedMaterial,
  onArtifactClick,
  onResetFilters
}) {
  const currentPeriodObj = PERIODS.find((p) => p.id === selectedPeriod);

  const currentIndex = PERIODS.findIndex((p) => p.id === selectedPeriod);
  const hasPreviousPeriod = currentIndex > 0;
  const hasNextPeriod = currentIndex !== -1 && currentIndex < PERIODS.length - 1;

  const handlePreviousPeriod = () => {
    if (hasPreviousPeriod) {
      setSelectedPeriod(PERIODS[currentIndex - 1].id);
    }
  };

  const handleNextPeriod = () => {
    if (hasNextPeriod) {
      setSelectedPeriod(PERIODS[currentIndex + 1].id);
    }
  };

  return (
    <section id="timeline" className="py-24 bg-museum-bg relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-museum-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-museum-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-gold/10 border border-museum-gold/30 text-museum-gold text-xs uppercase tracking-widest font-semibold shadow-gold-glow">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Exhibition</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-museum-cream tracking-tight">
            Timeline of <span className="text-gold-gradient italic">Indian Art</span>
          </h2>

          <p className="text-base sm:text-lg text-museum-muted font-sans font-light leading-relaxed">
            Select a historical era below to travel through 5,000 years of masterpieces, or filter by category, region, and materials.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-museum-gold to-transparent mx-auto rounded-full" />
        </div>

        {/* Horizontal Interactive Period Nodes Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="flex items-center gap-3 min-w-max px-2">
            {/* Show All Eras Button Node */}
            <button
              onClick={() => setSelectedPeriod('ALL')}
              className={`px-4 py-3 rounded-2xl border text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 ${
                selectedPeriod === 'ALL'
                  ? 'bg-museum-terracotta text-white border-museum-terracotta shadow-terracotta-glow scale-105'
                  : 'bg-museum-card/80 border-museum-border text-museum-cream hover:border-museum-gold/60 hover:text-museum-gold'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All 8 Eras</span>
            </button>

            {/* Era Node Buttons */}
            {PERIODS.map((period) => {
              const isSelected = selectedPeriod === period.id;
              return (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-3 rounded-2xl border transition-all duration-300 text-left shrink-0 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-gradient-to-r from-museum-card to-museum-surface border-museum-gold shadow-gold-glow scale-105'
                      : 'bg-museum-card/60 border-museum-border/70 hover:border-museum-gold/50 hover:bg-museum-card'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                      isSelected
                        ? 'bg-museum-gold text-museum-dark'
                        : 'bg-museum-border/40 text-museum-muted'
                    }`}
                  >
                    {period.number}
                  </span>
                  <div className="flex flex-col">
                    <span
                      className={`font-serif text-sm font-bold tracking-tight ${
                        isSelected ? 'text-museum-gold' : 'text-museum-cream'
                      }`}
                    >
                      {period.name}
                    </span>
                    <span className="text-[10px] font-mono text-museum-muted">
                      {period.dates}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Period Info Banner (if a single period is chosen) */}
        {selectedPeriod !== 'ALL' && currentPeriodObj && (
          <TimelinePeriod
            period={currentPeriodObj}
            onPreviousPeriod={handlePreviousPeriod}
            onNextPeriod={handleNextPeriod}
            hasPreviousPeriod={hasPreviousPeriod}
            hasNextPeriod={hasNextPeriod}
            onSelectAllPeriods={() => setSelectedPeriod('ALL')}
          />
        )}

        {/* Interactive Filter Control Bar */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          totalCount={allArtifactsCount}
          filteredCount={artifacts.length}
          onResetFilters={onResetFilters}
        />

        {/* Artifact Cards Grid */}
        {artifacts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {artifacts.map((artifact) => (
                <ArtifactCard
                  key={artifact.id}
                  artifact={artifact}
                  onClick={onArtifactClick}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search Filter State */
          <div className="bg-museum-card/80 border border-museum-border/60 rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-museum-terracotta/10 border border-museum-terracotta/30 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="text-2xl font-serif font-bold text-museum-cream">No Artifacts Match Your Search</h3>
            <p className="text-sm text-museum-muted font-sans">
              Try adjusting your query, clearing active category filters, or selecting "All Eras" to view more collection exhibits.
            </p>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-xl bg-museum-terracotta text-white text-xs uppercase font-mono font-semibold tracking-wider hover:bg-museum-sandstone transition-colors shadow-terracotta-glow inline-block"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
