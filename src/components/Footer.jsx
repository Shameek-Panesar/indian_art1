import React from 'react';
import { Landmark, Heart, BookOpen, Compass, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollTo = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-museum-dark border-t border-museum-border/60 text-museum-muted pt-16 pb-12 parchment-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-museum-border/50">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-museum-terracotta to-museum-gold p-0.5 shadow-gold-glow">
                <div className="w-full h-full bg-museum-bg rounded-[7px] flex items-center justify-center">
                  <span className="font-serif text-museum-gold text-lg font-bold">IA</span>
                </div>
              </div>
              <span className="font-serif text-2xl font-bold text-museum-cream tracking-wide">
                INDIAN ART THROUGH TIME
              </span>
            </div>

            <p className="text-sm font-sans font-light text-museum-muted max-w-md leading-relaxed">
              "Preserving the past. Understanding the present. Inspiring the future." An interactive digital museum project documenting 5,000 years of Indian art history across 8 major historical eras.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-museum-gold/10 border border-museum-gold/30 text-museum-gold text-xs font-mono font-semibold uppercase tracking-wider">
              <span>Educational Exhibition Project</span>
            </div>
          </div>

          {/* Nav Links Col 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-museum-cream tracking-wide">
              Exhibition Sections
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-museum-gold transition-colors flex items-center gap-2">
                  <span>•</span> Home / Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('timeline')} className="hover:text-museum-gold transition-colors flex items-center gap-2">
                  <span>•</span> Interactive Timeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('art-forms')} className="hover:text-museum-gold transition-colors flex items-center gap-2">
                  <span>•</span> Art Form Explorer
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('map')} className="hover:text-museum-gold transition-colors flex items-center gap-2">
                  <span>•</span> Subcontinent Art Map
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('facts')} className="hover:text-museum-gold transition-colors flex items-center gap-2">
                  <span>•</span> Did You Know Facts
                </button>
              </li>
            </ul>
          </div>

          {/* Sources & References Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-museum-cream tracking-wide">
              Academic Sources & Repositories
            </h4>
            <p className="text-xs text-museum-muted leading-relaxed font-sans">
              Imagery and historical documentation courtesy of public domain collections including the Archaeological Survey of India (ASI), National Museum New Delhi, Wikimedia Commons, and the Metropolitan Museum of Art.
            </p>
            <div className="pt-2 text-xs font-mono text-museum-gold flex items-center gap-4">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> ASI Archives
              </span>
              <span className="flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" /> UNESCO World Heritage
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-museum-muted">
          <span>© {new Date().getFullYear()} Indian Art Through Time • Educational Digital Museum</span>
          <span className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-museum-terracotta fill-current" /> for Indian Art History
          </span>
        </div>
      </div>
    </footer>
  );
}
