import React from 'react';
import {
  Phone,
  Mail,
  Globe,
  MessageSquare,
  BookOpen,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { ContactService } from '../../services/ContactService';
import { NavigationController } from '../../services/NavigationController';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenQuote }) => {
  const contactService = ContactService.getInstance();
  const navController = NavigationController.getInstance();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#071330] text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-[#1B2A5B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              JEMKET ENGINEERING is a trusted engineering and installation partner
              specializing in integrated borehole water systems, certified electrical &amp; building works,
              and clean solar energy solutions.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1B2A5B] hover:bg-[#243872] border border-blue-400/20 text-xs font-bold text-[#FBBF24] transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Official Company Profile</span>
              </button>
            </div>
          </div>

          {/* Core Services Links (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Engineering Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Borehole Survey &amp; Drilling
                </button>
              </li>
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Submersible Pump &amp; Tank Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  House Wiring &amp; Electrical Installations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Distribution Boards &amp; Surge Protection
                </button>
              </li>
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Building Finishing, Ceilings &amp; Conduiting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hybrid &amp; Off-Grid Solar Energy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navController.scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Solar Water Pumping Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Company (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              {navController.navLinks.slice(0, 6).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navController.scrollToSection(link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-[#FBBF24] hover:underline font-bold"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact Details (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Official Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="text-slate-400 font-medium">Telephone / WhatsApp:</div>
              {contactService.verifiedNumbers.map((num) => (
                <div key={num.nationalRaw} className="flex items-center justify-between">
                  <a
                    href={contactService.getTelUri(num.nationalRaw)}
                    className="font-mono font-bold text-white hover:text-[#FBBF24] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D32F2F]" />
                    <span>{num.display}</span>
                  </a>
                  <a
                    href={contactService.getWhatsAppUri(undefined, undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Chat</span>
                  </a>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href={contactService.getMailToUri()}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{contactService.email}</span>
                </a>
              </div>

              <div>
                <a
                  href={contactService.websiteUrl}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>{contactService.website}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>&copy; {new Date().getFullYear()} JEMKET ENGINEERING. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Professional Engineering &amp; Installation Services</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#1B2A5B] text-slate-300 hover:text-white hover:bg-[#243872] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
