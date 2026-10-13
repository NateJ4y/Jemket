import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { ContactService } from '../../services/ContactService';

interface MobileContactBarProps {
  onOpenQuote: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenQuote }) => {
  const contactService = ContactService.getInstance();
  const primaryNumber = contactService.verifiedNumbers[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Direct Call Button */}
        <a
          href={contactService.getTelUri(primaryNumber.nationalRaw)}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0B1E4B] transition-colors active:scale-95"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-[#D32F2F] mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href={contactService.getWhatsAppUri()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Request Quote Button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white transition-colors active:scale-95 cursor-pointer"
          aria-label="Request a Quote"
        >
          <FileText className="w-4 h-4 text-[#FBBF24] mb-0.5" />
          <span className="text-[11px] font-bold">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
