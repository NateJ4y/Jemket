import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileContactBar } from './components/layout/MobileContactBar';
import { LandingPage } from './components/sections/LandingPage';
import { QuoteCalculatorSection } from './components/sections/QuoteCalculatorSection';
import { BrochureModal } from './components/modals/BrochureModal';
import { NavigationController } from './services/NavigationController';

export default function App() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('General Enquiry');
  const navController = NavigationController.getInstance();

  const handleOpenQuote = (serviceName?: string) => {
    setPrefilledService(serviceName || 'General Enquiry');
    navController.scrollToSection('quote');
  };

  return (
    <div className="jemket-premium min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-[#E84A4A] selection:text-white">
      <Header
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main>
        <LandingPage
          onOpenQuote={handleOpenQuote}
          onOpenBrochure={() => setBrochureOpen(true)}
        />
        <QuoteCalculatorSection key={prefilledService} initialService={prefilledService} />
      </main>

      <Footer
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <MobileContactBar onOpenQuote={() => handleOpenQuote()} />

      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        onSelectService={(service) => handleOpenQuote(service)}
      />
    </div>
  );
}
