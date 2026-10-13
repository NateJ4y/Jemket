import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileContactBar } from './components/layout/MobileContactBar';
import { HeroSection } from './components/sections/HeroSection';
import { TrustStrip } from './components/sections/TrustStrip';
import { CoreDivisionsSection } from './components/sections/CoreDivisionsSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { CustomerSectorsSection } from './components/sections/CustomerSectorsSection';
import { ValuesCommitmentSection } from './components/sections/ValuesCommitmentSection';
import { QuoteCalculatorSection } from './components/sections/QuoteCalculatorSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { BrochureModal } from './components/modals/BrochureModal';
import { NavigationController } from './services/NavigationController';
import { ServiceDivisionId } from './types';

export default function App() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<ServiceDivisionId>('borehole');
  const [prefilledService, setPrefilledService] = useState<string>('Borehole Services');

  const navController = NavigationController.getInstance();

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    navController.scrollToSection('quote');
  };

  const handleSelectDivision = (divisionId: ServiceDivisionId) => {
    setSelectedDivision(divisionId);
  };

  return (
    <div className="jemket-premium min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-[#E84A4A] selection:text-white">
      <Header
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main>
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onOpenBrochure={() => setBrochureOpen(true)}
          onSelectDivision={handleSelectDivision}
        />

        <TrustStrip />

        <CoreDivisionsSection
          activeDivisionId={selectedDivision}
          onSelectDivision={handleSelectDivision}
          onOpenQuoteWithService={(svc) => handleOpenQuote(svc)}
        />

        <PortfolioSection onOpenQuoteWithProject={(proj) => handleOpenQuote(proj)} />

        <WhyChooseSection onOpenQuote={() => handleOpenQuote()} />

        <ProcessSection onOpenQuote={() => handleOpenQuote()} />

        <CustomerSectorsSection onOpenQuoteWithSector={(sec) => handleOpenQuote(sec)} />

        <ValuesCommitmentSection />

        <QuoteCalculatorSection initialService={prefilledService} />

        <FinalCtaSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      <Footer
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <MobileContactBar onOpenQuote={() => handleOpenQuote()} />

      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        onSelectService={(svc) => handleOpenQuote(svc)}
      />
    </div>
  );
}
