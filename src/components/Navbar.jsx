import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Compass, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Landmark },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'art-forms', label: 'Art Forms', icon: Compass },
    { id: 'map', label: 'Art Map', icon: MapPin },
    { id: 'facts', label: 'Did You Know', icon: Sparkles },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-museum-bg/90 backdrop-blur-md border-b border-museum-border/60 py-3.5 shadow-museum'
          : 'bg-gradient-to-b from-museum-dark/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-museum-terracotta to-museum-sandstone p-0.5 shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-museum-bg rounded-[7px] flex items-center justify-center">
              <span className="font-serif text-museum-gold text-xl font-bold tracking-wider">IA</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold text-museum-cream tracking-wider flex items-center gap-2">
              INDIAN ART
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-sans font-semibold tracking-widest text-museum-gold bg-museum-gold/10 border border-museum-gold/30 rounded">
                MUSEUM
              </span>
            </span>
            <span className="text-[10px] text-museum-muted tracking-widest uppercase font-mono">Through Time</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-museum-card/60 backdrop-blur-sm border border-museum-border/50 rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-museum-terracotta text-white shadow-terracotta-glow'
                    : 'text-museum-muted hover:text-museum-cream hover:bg-museum-border/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-museum-gold/70'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Explore Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('timeline')}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-museum-gold/20 via-museum-sandstone/20 to-museum-terracotta/20 hover:from-museum-terracotta hover:to-museum-sandstone text-museum-gold hover:text-white border border-museum-gold/40 hover:border-transparent text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm flex items-center gap-2 group"
          >
            Explore Timeline
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-museum-card border border-museum-border text-museum-cream hover:text-museum-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-museum-gold" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-museum-surface/95 backdrop-blur-xl border-b border-museum-border px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wider text-museum-cream hover:bg-museum-card hover:text-museum-gold transition-colors flex items-center gap-3 border border-transparent hover:border-museum-border/50"
              >
                <Icon className="w-4 h-4 text-museum-gold" />
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('timeline')}
              className="w-full py-3 rounded-lg bg-museum-terracotta text-white font-semibold text-xs uppercase tracking-widest text-center shadow-terracotta-glow"
            >
              Explore The Timeline →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
