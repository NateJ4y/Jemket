import React from 'react';
import { motion } from 'motion/react';
import {
  Droplets,
  Zap,
  SunMedium,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  CheckCircle,
  FileText,
} from 'lucide-react';
import { Button } from '../common/Button';
import { ContactService } from '../../services/ContactService';
import { NavigationController } from '../../services/NavigationController';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenBrochure: () => void;
  onSelectDivision: (divisionId: 'borehole' | 'electrical-building' | 'solar') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onOpenBrochure,
  onSelectDivision,
}) => {
  const contactService = ContactService.getInstance();
  const navController = NavigationController.getInstance();

  const divisions = [
    {
      id: 'borehole' as const,
      icon: Droplets,
      title: 'Borehole Services',
      subtitle: 'Reliable water solutions. Sustainable future.',
      summary: 'Hydrogeological surveys, deep drilling, solar water pumping, pump & tank installation.',
      accentColor: '#38BDF8',
      tag: 'Water Security',
    },
    {
      id: 'electrical-building' as const,
      icon: Zap,
      title: 'Electrical & Building',
      subtitle: 'Professional. Reliable. Safe. Powering your world.',
      summary: 'House wiring, distribution boards, lighting, tubing, conduiting, ceilings & finishing.',
      accentColor: '#F87171',
      tag: 'Certified Workmanship',
    },
    {
      id: 'solar' as const,
      icon: SunMedium,
      title: 'Solar Energy Solutions',
      subtitle: 'Clean energy. Reliable power. Bright future.',
      summary: 'Turnkey solar design, hybrid inverters, lithium batteries, off-grid systems & pumping.',
      accentColor: '#FBBF24',
      tag: 'Clean Resilience',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0B1E4B] text-white"
    >
      {/* Precision Engineering Geometric Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Dynamic Angular Architectural Accents (Matches JEMKET Brochure Geometry) */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#1B2A5B] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#D32F2F] rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      {/* Yellow Wedge Accent line */}
      <div className="absolute top-0 right-1/4 w-32 h-2 bg-[#FBBF24] hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Editorial Column (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1B2A5B] border border-blue-400/20 text-xs font-bold uppercase tracking-wider text-[#FBBF24]"
            >
              <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
              <span>Integrated Engineering &amp; Installation Partner</span>
            </motion.div>

            {/* Core Master Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.1] uppercase text-white">
                POWERING DEVELOPMENT THROUGH{' '}
                <span className="text-[#D32F2F] block sm:inline">ENGINEERING EXCELLENCE.</span>
              </h1>
              <div className="h-1.5 w-24 bg-[#FBBF24] rounded-sm mt-3" />
            </motion.div>

            {/* Supporting Headline / Intro Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Integrated engineering solutions for reliable water, dependable power, and lasting infrastructure.
              One trusted partner coordinating borehole drilling, certified electrical &amp; building works,
              and high-yield solar energy installations for homes, farms, businesses, and institutions.
            </motion.p>

            {/* Credibility Bullet Strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-300 font-semibold"
            >
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle className="w-4 h-4 text-[#FBBF24]" />
                <span>Single Accountable Engineering Partner</span>
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle className="w-4 h-4 text-[#FBBF24]" />
                <span>Modern Rigs &amp; Spec-Grade Components</span>
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle className="w-4 h-4 text-[#FBBF24]" />
                <span>Transparent Itemised Quotations</span>
              </span>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuote}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Request a Quote
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navController.scrollToSection('services')}
                className="bg-[#1B2A5B] hover:bg-[#25376F] border border-blue-400/30 text-white"
              >
                Explore Our Services
              </Button>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FBBF24]" />
                <span>View Company Profile</span>
              </button>
            </motion.div>

            {/* Direct Calling & WhatsApp Touchpoint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-4 text-xs"
            >
              <span className="text-slate-400 font-medium">Need immediate consultation?</span>
              <div className="flex items-center gap-3">
                <a
                  href={contactService.getTelUri('0777132735')}
                  className="inline-flex items-center gap-1.5 text-[#FBBF24] hover:underline font-bold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call 0777 132 735</span>
                </a>
                <span className="text-slate-600">|</span>
                <a
                  href={contactService.getWhatsAppUri()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-bold"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Three Core Division Cards (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Engineering Capabilities
              </span>
              <span className="text-xs font-semibold text-[#FBBF24]">3 Integrated Disciplines</span>
            </div>

            {divisions.map((div, index) => {
              const Icon = div.icon;
              return (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  onClick={() => {
                    onSelectDivision(div.id);
                    navController.scrollToSection('services');
                  }}
                  className="group relative p-4 sm:p-5 rounded-lg bg-[#1B2A5B]/90 hover:bg-[#1F316C] border border-blue-400/20 hover:border-blue-400/50 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  {/* Subtle Accent Stripe on Left */}
                  <div
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r"
                    style={{ backgroundColor: div.accentColor }}
                  />

                  <div className="flex items-start justify-between gap-3 pl-2">
                    <div className="flex items-start gap-3.5">
                      <div
                        className="p-2.5 rounded-md text-white shrink-0 shadow-sm"
                        style={{ backgroundColor: '#0B1E4B' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: div.accentColor }} />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h2 className="text-base font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                            {div.title}
                          </h2>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {div.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium">{div.subtitle}</p>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed pt-1">
                          {div.summary}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Summary Banner */}
            <div className="p-3 rounded-lg bg-[#071330] border border-blue-950/60 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero contractor miscommunication. Built to last.</span>
              </span>
              <button
                onClick={() => navController.scrollToSection('why-us')}
                className="text-xs text-[#FBBF24] hover:underline font-bold cursor-pointer shrink-0 ml-2"
              >
                Why Choose Us &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
