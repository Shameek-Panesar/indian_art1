import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArtifactCard({ artifact, onClick }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // SVG Fallback Artwork Generator if image fails to load
  const renderFallbackSVG = () => (
    <div className="w-full h-full bg-gradient-to-br from-museum-card via-museum-surface to-museum-bg flex flex-col items-center justify-center p-6 text-center border-b border-museum-border/40">
      <div className="w-16 h-16 rounded-full bg-museum-gold/10 border border-museum-gold/30 flex items-center justify-center mb-3">
        <span className="text-2xl">🏛️</span>
      </div>
      <span className="font-serif text-sm font-semibold text-museum-gold mb-1">{artifact.name}</span>
      <span className="text-[10px] text-museum-muted font-mono uppercase">{artifact.category} • {artifact.date}</span>
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(artifact)}
      className="group relative bg-museum-card/90 border border-museum-border/60 hover:border-museum-gold/60 rounded-2xl overflow-hidden shadow-museum hover:shadow-gold-glow transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Image Header Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-museum-dark/80">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-museum-border/30 animate-pulse flex items-center justify-center text-museum-muted text-xs font-mono">
            Loading Exhibit...
          </div>
        )}

        {imageError ? (
          renderFallbackSVG()
        ) : (
          <img
            src={artifact.image}
            alt={artifact.name}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-top transform group-hover:scale-108 transition-transform duration-700 ease-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Category & Period Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-museum-dark/80 backdrop-blur-md border border-museum-gold/40 text-[10px] uppercase font-mono font-semibold text-museum-gold tracking-wider shadow-md">
            {artifact.category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-museum-terracotta/90 text-white text-[10px] font-mono font-medium tracking-wider shadow-md">
            {artifact.date}
          </span>
        </div>

        {/* View Artifact Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <span className="text-xs uppercase font-mono tracking-widest text-museum-gold font-semibold flex items-center gap-1.5">
            View Exhibit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
        <div>
          {/* Era Title */}
          <div className="text-[11px] font-mono uppercase tracking-widest text-museum-terracotta mb-1 font-semibold">
            {artifact.period}
          </div>

          {/* Artifact Name */}
          <h3 className="font-serif text-xl font-bold text-museum-cream group-hover:text-museum-gold transition-colors duration-300 line-clamp-1">
            {artifact.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-museum-muted font-sans line-clamp-2 mt-2 leading-relaxed">
            {artifact.shortDescription}
          </p>
        </div>

        {/* Card Footer Metadata */}
        <div className="pt-3 border-t border-museum-border/40 flex items-center justify-between text-[11px] text-museum-muted font-mono">
          <span className="flex items-center gap-1 truncate max-w-[65%]">
            <MapPin className="w-3 h-3 text-museum-gold shrink-0" />
            <span className="truncate">{artifact.location}</span>
          </span>
          <span className="flex items-center gap-1 text-museum-cream/80 font-medium">
            <Tag className="w-3 h-3 text-museum-terracotta shrink-0" />
            <span className="truncate">{artifact.material.split(' ')[0]}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
