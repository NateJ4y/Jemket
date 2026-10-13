import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MessageSquare, Menu, X, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { ContactService } from '../../services/ContactService';
import { NavigationController } from '../../services/NavigationController';

interface HeaderProps {
  onOpenBrochure: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrochure, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const contactService = ContactService.getInstance();
  const navController = NavigationController.getInstance();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'services', 'why-us', 'process', 'projects', 'sectors', 'about', 'quote'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    navController.scrollToSection(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Utility Bar (Substantiated Contact Strip) */}
        <div className="bg-[#0B1E4B] text-slate-200 text-xs py-2 px-4 border-b border-[#1B2A5B]/80 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Professional Engineering &amp; Installation Services</span>
              </span>
              <div className="h-3 w-px bg-slate-700" />
              <div className="flex items-center gap-4">
                <span className="text-slate-400">Call / WhatsApp:</span>
                {contactService.verifiedNumbers.map((num, i) => (
                  <a
                    key={num.nationalRaw}
                    href={contactService.getTelUri(num.nationalRaw)}
                    className="hover:text-[#FBBF24] font-semibold text-white transition-colors"
                    title={`Call ${num.display}`}
                  >
                    {num.display}
                    {i < contactService.verifiedNumbers.length - 1 && (
                      <span className="text-slate-600 ml-4 font-normal">|</span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={contactService.getMailToUri()}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{contactService.email}</span>
              </a>
              <div className="h-3 w-px bg-slate-700" />
              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-1.5 text-[#FBBF24] hover:text-amber-300 font-semibold cursor-pointer transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Company Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
              : 'bg-white py-4 border-b border-slate-100'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="focus-visible:ring-2 focus-visible:ring-[#0B1E4B] rounded-sm"
              aria-label="JEMKET Engineering Home"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navController.navLinks.slice(0, 7).map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm font-bold tracking-tight transition-colors cursor-pointer py-1 relative ${
                      isActive ? 'text-[#D32F2F]' : 'text-[#0B1E4B] hover:text-[#D32F2F]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D32F2F]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={contactService.getWhatsAppUri()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#0B1E4B] hover:bg-slate-100 rounded-md transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <Button
                variant="primary"
                size="md"
                onClick={onOpenQuote}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenQuote}
                className="sm:hidden text-xs px-2.5 py-1.5"
              >
                Quote
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0B1E4B] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B1E4B] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0B1E4B]/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <Logo size="sm" showTagline={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-700 hover:bg-slate-200 rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto p-5 space-y-1">
                {navController.navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 px-3 rounded-md text-base font-bold text-[#0B1E4B] hover:bg-slate-100 hover:text-[#D32F2F] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBrochure();
                    }}
                    className="w-full py-2.5 px-3 rounded-md text-sm font-semibold text-[#0B1E4B] bg-amber-50 hover:bg-amber-100 border border-amber-200 flex items-center gap-2 mb-3"
                  >
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    <span>View Official Company Profile</span>
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2 mt-4 text-xs text-slate-700">
                  <div className="font-bold text-[#0B1E4B] uppercase tracking-wider text-[11px]">
                    Direct Verified Lines:
                  </div>
                  {contactService.verifiedNumbers.map((num) => (
                    <a
                      key={num.nationalRaw}
                      href={contactService.getTelUri(num.nationalRaw)}
                      className="flex items-center justify-between font-mono font-bold text-slate-900 py-1 border-b border-slate-200 last:border-none"
                    >
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#D32F2F]" />
                        {num.display}
                      </span>
                      <span className="text-[10px] text-slate-500">{num.carrierLabel}</span>
                    </a>
                  ))}
                  <div className="pt-1">
                    <a
                      href={contactService.getMailToUri()}
                      className="flex items-center gap-1.5 text-slate-700 hover:text-[#0B1E4B] font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>{contactService.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-2">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Formal Quote
                </Button>
                <a
                  href={contactService.getWhatsAppUri()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
