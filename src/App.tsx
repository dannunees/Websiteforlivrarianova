import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeHero } from './components/HomeHero';
import { WhatDefinesUs } from './components/WhatDefinesUs';
import { Universes } from './components/Universes';
import { Featured } from './components/Featured';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { CTAFinal } from './components/CTAFinal';
import { UniversoArtistico } from './components/UniversoArtistico';
import { Livraria } from './components/Livraria';
import { Novidades } from './components/Novidades';
import { Historia } from './components/Historia';
import { Contactos } from './components/Contactos';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Home Page */}
      {activeSection === 'home' && (
        <main>
          <HomeHero onNavigate={handleNavigate} />
          <WhatDefinesUs />
          <Universes onNavigate={handleNavigate} />
          <Featured onNavigate={handleNavigate} />
          <Services onNavigate={handleNavigate} />
          <Testimonials />
          <Location onNavigate={handleNavigate} />
          <CTAFinal onNavigate={handleNavigate} />
        </main>
      )}

      {/* Universo Artístico Page */}
      {activeSection === 'universo' && (
        <main>
          <UniversoArtistico onNavigate={handleNavigate} />
        </main>
      )}

      {/* Livraria & Papelaria Page */}
      {activeSection === 'livraria' && (
        <main>
          <Livraria onNavigate={handleNavigate} />
        </main>
      )}

      {/* Novidades & Eventos Page */}
      {activeSection === 'novidades' && (
        <main>
          <Novidades onNavigate={handleNavigate} />
        </main>
      )}

      {/* A Nossa História Page */}
      {activeSection === 'historia' && (
        <main>
          <Historia onNavigate={handleNavigate} />
        </main>
      )}

      {/* Contactos Page */}
      {activeSection === 'contactos' && (
        <main>
          <Contactos />
        </main>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
