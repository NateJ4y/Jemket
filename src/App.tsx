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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#D32F2F] selection:text-white">
      {/* 1. Header & Navigation */}
      <Header
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main>
        {/* 2. Cinematic Hero */}
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onOpenBrochure={() => setBrochureOpen(true)}
          onSelectDivision={handleSelectDivision}
        />

        {/* 3. Credibility & Trust Strip */}
        <TrustStrip />

        {/* 4. Three Core Service Divisions */}
        <CoreDivisionsSection
          activeDivisionId={selectedDivision}
          onSelectDivision={handleSelectDivision}
          onOpenQuoteWithService={(svc) => handleOpenQuote(svc)}
        />

        {/* 5. Why Choose JEMKET Engineering */}
        <WhyChooseSection onOpenQuote={() => handleOpenQuote()} />

        {/* 6. The Engineering Process */}
        <ProcessSection onOpenQuote={() => handleOpenQuote()} />

        {/* 7. Project Portfolio */}
        <PortfolioSection onOpenQuoteWithProject={(proj) => handleOpenQuote(proj)} />

        {/* 8. Customer Sectors */}
        <CustomerSectorsSection onOpenQuoteWithSector={(sec) => handleOpenQuote(sec)} />

        {/* 9. Our Commitment & Core Values */}
        <ValuesCommitmentSection />

        {/* 10. Enquiry and Quote Request */}
        <QuoteCalculatorSection initialService={prefilledService} />

        {/* 11. Final Call to Action */}
        <FinalCtaSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Mobile Floating Sticky Contact Bar */}
      <MobileContactBar onOpenQuote={() => handleOpenQuote()} />

      {/* Official Company Profile Brochure Modal */}
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        onSelectService={(svc) => handleOpenQuote(svc)}
      />
    </div>
  );
}
