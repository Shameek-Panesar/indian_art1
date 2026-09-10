import React from 'react';
import { motion } from 'framer-motion';
import { History, Layers, Landmark, Sparkles } from 'lucide-react';

export default function Introduction() {
  const stats = [
    {
      icon: History,
      value: '5000+ Years',
      label: 'Artistic Heritage',
      description: 'Unbroken legacy of creativity from Indus bronzes to modern digital canvases.'
    },
    {
      icon: Layers,
      value: 'Multiple Traditions',
      label: 'Sculpture & Painting',
      description: 'Seamless synthesis of Buddhist, Hindu, Jain, Islamic, and European aesthetics.'
    },
    {
      icon: Landmark,
      value: '28+ Heritage Sites',
      label: 'Monuments & Ateliers',
      description: 'Spread across rock-cut cave sanctuaries, imperial capitals, and regional studios.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-museum-surface relative border-t border-b border-museum-border/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-museum-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-terracotta/10 border border-museum-terracotta/30 text-museum-terracotta text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cultural Overview</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-museum-cream leading-tight">
              India's <span className="text-gold-gradient italic">Artistic Journey</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-museum-terracotta to-museum-gold rounded-full" />

            <p className="text-base sm:text-lg text-museum-muted font-sans font-light leading-relaxed">
              Indian art evolved across thousands of years and reflects changing civilizations, religions, technologies, cultures, and social structures. From early pre-historic steatite seals and lost-wax bronze idols to classical cave frescoes, imperial Mughal miniature manuscripts, and avant-garde modern masterworks, India’s visual culture remains one of the world's most rich and continuous creative legacies.
            </p>

            <p className="text-sm sm:text-base text-museum-cream/80 font-serif italic leading-relaxed border-l-2 border-museum-gold pl-4 py-1">
              "Art in India was never merely decorative; it was a sacred language, an architectural science, and a mirror of cosmic order."
            </p>
          </div>

          {/* Right Column: 3 Statistic Cards */}
          <div className="lg:col-span-5 space-y-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-museum-card/90 border border-museum-border/60 rounded-xl p-5 hover:border-museum-gold/40 hover:shadow-gold-glow transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-museum-gold/10 border border-museum-gold/20 text-museum-gold group-hover:bg-museum-terracotta group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-bold text-gold-gradient tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-museum-cream mb-1">
                        {stat.label}
                      </div>
                      <p className="text-xs text-museum-muted leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
