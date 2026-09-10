import React from 'react';
import { Search, Filter, RotateCcw, X } from 'lucide-react';
import { PERIODS } from '../data/artifacts';

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedPeriod,
  setSelectedPeriod,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedMaterial,
  setSelectedMaterial,
  totalCount,
  filteredCount,
  onResetFilters
}) {
  const categories = ['All Categories', 'Sculpture', 'Painting', 'Architecture', 'Manuscripts', 'Pottery', 'Metalwork'];
  const regions = ['All Regions', 'North-West Subcontinent', 'North India', 'South India', 'East India', 'Central India', 'West India'];
  const materials = ['All Materials', 'Bronze', 'Sandstone', 'Marble', 'Pigments/Watercolors', 'Terracotta', 'Granite', 'Oil on Canvas'];

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedPeriod !== 'ALL' ||
    selectedCategory !== 'ALL' ||
    selectedRegion !== 'ALL' ||
    selectedMaterial !== 'ALL';

  return (
    <div className="bg-museum-card/90 border border-museum-border/70 rounded-2xl p-4 sm:p-6 shadow-museum mb-8">
      {/* Top Bar: Search Input & Count Badge */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5 pb-5 border-b border-museum-border/50">
        {/* Search Field */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-museum-gold" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search artifacts, dates, sites, mediums..."
            className="w-full pl-10 pr-9 py-2.5 bg-museum-bg border border-museum-border/80 focus:border-museum-gold rounded-xl text-sm text-museum-cream placeholder-museum-muted/60 focus:outline-none focus:ring-1 focus:ring-museum-gold transition-all duration-300"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-museum-muted hover:text-museum-cream"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter & Reset Button */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="text-xs uppercase tracking-wider font-mono text-museum-muted font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-museum-gold inline-block" />
            <span>Showing <strong className="text-museum-gold font-sans text-sm">{filteredCount}</strong> of {totalCount} artifacts</span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-3 py-1.5 rounded-lg bg-museum-terracotta/20 hover:bg-museum-terracotta text-museum-terracotta hover:text-white border border-museum-terracotta/40 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Bottom Bar: Dropdown Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Period Filter */}
        <div>
          <label className="block text-[11px] font-mono text-museum-muted uppercase tracking-wider mb-1.5 font-medium">
            Historical Period
          </label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full py-2 px-3 bg-museum-bg border border-museum-border/80 rounded-xl text-xs text-museum-cream focus:border-museum-gold focus:outline-none transition-colors cursor-pointer"
          >
            <option value="ALL">All 8 Eras (2500 BCE – Present)</option>
            {PERIODS.map((period) => (
              <option key={period.id} value={period.id}>
                {period.number}. {period.name}
              </option>
            ))}
          </select>
        </div>

        {/* Art Form Category Filter */}
        <div>
          <label className="block text-[11px] font-mono text-museum-muted uppercase tracking-wider mb-1.5 font-medium">
            Art Form / Medium
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full py-2 px-3 bg-museum-bg border border-museum-border/80 rounded-xl text-xs text-museum-cream focus:border-museum-gold focus:outline-none transition-colors cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat === 'All Categories' ? 'ALL' : cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Region Filter */}
        <div>
          <label className="block text-[11px] font-mono text-museum-muted uppercase tracking-wider mb-1.5 font-medium">
            Geographic Region
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full py-2 px-3 bg-museum-bg border border-museum-border/80 rounded-xl text-xs text-museum-cream focus:border-museum-gold focus:outline-none transition-colors cursor-pointer"
          >
            {regions.map((reg) => (
              <option key={reg} value={reg === 'All Regions' ? 'ALL' : reg}>
                {reg}
              </option>
            ))}
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="block text-[11px] font-mono text-museum-muted uppercase tracking-wider mb-1.5 font-medium">
            Key Material
          </label>
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="w-full py-2 px-3 bg-museum-bg border border-museum-border/80 rounded-xl text-xs text-museum-cream focus:border-museum-gold focus:outline-none transition-colors cursor-pointer"
          >
            {materials.map((mat) => (
              <option key={mat} value={mat === 'All Materials' ? 'ALL' : mat}>
                {mat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
