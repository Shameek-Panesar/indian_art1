import React from 'react';
import { ART_FORMS } from '../data/artifacts';
import { Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArtFormExplorer({ onSelectArtForm }) {
  return (
    <section id="art-forms" className="py-24 bg-museum-surface border-t border-b border-museum-border/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-museum-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-terracotta/10 border border-museum-terracotta/30 text-museum-terracotta text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Category Explorer</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-museum-cream tracking-tight">
            Explore by <span className="text-gold-gradient italic">Art Form</span>
          </h2>

          <p className="text-base sm:text-lg text-museum-muted font-sans font-light leading-relaxed">
            Discover artifacts classified by medium—from monumental granite temples to delicate lost-wax bronzes and court miniature paintings.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-museum-terracotta to-museum-gold mx-auto rounded-full" />
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ART_FORMS.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectArtForm(form.id)}
              className="group relative bg-museum-card border border-museum-border/60 hover:border-museum-gold/60 rounded-2xl p-6 sm:p-8 cursor-pointer shadow-museum hover:shadow-gold-glow transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Background Subtle Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${form.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
                    {form.icon}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-museum-dark/70 border border-museum-border text-xs font-mono text-museum-gold font-semibold">
                    {form.count} Exhibits
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-museum-cream group-hover:text-museum-gold transition-colors duration-300">
                  {form.name}
                </h3>

                <p className="text-xs sm:text-sm text-museum-muted font-sans leading-relaxed">
                  {form.description}
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-4 border-t border-museum-border/40 flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-museum-gold group-hover:text-white transition-colors">
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
