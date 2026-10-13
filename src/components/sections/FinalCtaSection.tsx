import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';
import { ContactService } from '../../services/ContactService';

interface FinalCtaSectionProps {
  onOpenQuote: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuote }) => {
  const contactService = ContactService.getInstance();
  const primaryNumber = contactService.verifiedNumbers[0];

  return (
    <section className="py-20 md:py-24 bg-[#0B1E4B] text-white relative overflow-hidden border-t border-[#1B2A5B]">
      {/* Precision Graphic Details */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D32F2F] rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <span className="inline-block text-xs font-black uppercase tracking-widest text-[#FBBF24]">
          Engineering Partner for Life
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          WATER. POWER. <span className="text-[#D32F2F]">PROGRESS.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Partner with JEMKET Engineering for dependable solutions that support homes, businesses,
          farms, and communities. One engineering standard. Zero compromises.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenQuote}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Request a Quote
          </Button>

          <a
            href={contactService.getTelUri(primaryNumber.nationalRaw)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-bold text-sm bg-[#1B2A5B] hover:bg-[#25376F] border border-blue-400/30 text-white transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#FBBF24]" />
            <span>Call {primaryNumber.display}</span>
          </a>

          <a
            href={contactService.getWhatsAppUri()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-bold text-sm bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};
