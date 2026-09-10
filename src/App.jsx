import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import TimelineProgress from './components/TimelineProgress';
import ArtFormExplorer from './components/ArtFormExplorer';
import IndiaMap from './components/IndiaMap';
import FactSection from './components/FactSection';
import Footer from './components/Footer';
import ArtifactModal from './components/ArtifactModal';
import { ARTIFACTS } from './data/artifacts';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Filter States
  const [selectedPeriod, setSelectedPeriod] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [selectedMaterial, setSelectedMaterial] = useState('ALL');

  // Modal State
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  // Filter Logic
  const filteredArtifacts = useMemo(() => {
    return ARTIFACTS.filter((artifact) => {
      // Period filter
      if (selectedPeriod !== 'ALL' && artifact.periodId !== selectedPeriod) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'ALL' && artifact.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      // Region filter
      if (selectedRegion !== 'ALL' && artifact.region.toLowerCase() !== selectedRegion.toLowerCase()) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== 'ALL' && !artifact.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = artifact.name.toLowerCase().includes(query);
        const matchesPeriod = artifact.period.toLowerCase().includes(query);
        const matchesLocation = artifact.location.toLowerCase().includes(query);
        const matchesCategory = artifact.category.toLowerCase().includes(query);
        const matchesMaterial = artifact.material.toLowerCase().includes(query);
        const matchesDesc = artifact.shortDescription.toLowerCase().includes(query);
        if (!matchesName && !matchesPeriod && !matchesLocation && !matchesCategory && !matchesMaterial && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedPeriod, selectedCategory, selectedRegion, selectedMaterial, searchTerm]);

  // Modal Navigation Logic
  const currentModalIndex = selectedArtifact
    ? filteredArtifacts.findIndex((a) => a.id === selectedArtifact.id)
    : -1;
  const hasPreviousArtifact = currentModalIndex > 0;
  const hasNextArtifact = currentModalIndex !== -1 && currentModalIndex < filteredArtifacts.length - 1;

  const handlePreviousArtifact = () => {
    if (hasPreviousArtifact) {
      setSelectedArtifact(filteredArtifacts[currentModalIndex - 1]);
    }
  };

  const handleNextArtifact = () => {
    if (hasNextArtifact) {
      setSelectedArtifact(filteredArtifacts[currentModalIndex + 1]);
    }
  };

  // Reset Filters Handler
  const handleResetFilters = () => {
    setSelectedPeriod('ALL');
    setSearchTerm('');
    setSelectedCategory('ALL');
    setSelectedRegion('ALL');
    setSelectedMaterial('ALL');
  };

  // Select Art Form Category from ArtFormExplorer section
  const handleSelectArtForm = (categoryName) => {
    handleResetFilters();
    setSelectedCategory(categoryName);
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select Location from IndiaMap section
  const handleSelectLocation = (locationName) => {
    handleResetFilters();
    setSearchTerm(locationName);
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Navigation Handler
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section scroll spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'timeline', 'art-forms', 'map', 'facts'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-museum-bg text-museum-cream relative font-sans">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Section */}
      <Hero onExploreClick={() => handleNavigate('timeline')} />

      {/* Introduction Section */}
      <Introduction />

      {/* Timeline Section (Interactive Timeline, Filters, Artifact Cards) */}
      <Timeline
        artifacts={filteredArtifacts}
        allArtifactsCount={ARTIFACTS.length}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={setSelectedMaterial}
        onArtifactClick={(artifact) => setSelectedArtifact(artifact)}
        onResetFilters={handleResetFilters}
      />

      {/* Sticky Floating Progress Tracker */}
      <TimelineProgress
        activePeriodId={selectedPeriod}
        onSelectPeriod={(periodId) => setSelectedPeriod(periodId)}
      />

      {/* Art Form Explorer Section */}
      <ArtFormExplorer onSelectArtForm={handleSelectArtForm} />

      {/* India Map Section */}
      <IndiaMap onSelectLocationFilter={handleSelectLocation} />

      {/* Did You Know Facts Section */}
      <FactSection />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Artifact Detail Modal */}
      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
          onPrevious={handlePreviousArtifact}
          onNext={handleNextArtifact}
          hasPrevious={hasPreviousArtifact}
          hasNext={hasNextArtifact}
        />
      )}
    </div>
  );
}
