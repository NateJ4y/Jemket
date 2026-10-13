import React from 'react';
import { motion } from 'motion/react';
import {
  Droplets,
  Zap,
  SunMedium,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  PhoneCall,
  FileText,
  Check,
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
      number: '01',
      icon: Droplets,
      title: 'Water systems',
      subtitle: 'Boreholes, pumping & storage',
      accent: '#65C7F7',
      detail: 'Reliable water, engineered from the ground up.',
    },
    {
      id: 'electrical-building' as const,
      number: '02',
      icon: Zap,
      title: 'Electrical & building',
      subtitle: 'Power, wiring & construction',
      accent: '#F36B63',
      detail: 'Safe installations. Solid foundations.',
    },
    {
      id: 'solar' as const,
      number: '03',
      icon: SunMedium,
      title: 'Solar energy',
      subtitle: 'Hybrid, backup & off-grid',
      accent: '#F5C451',
      detail: 'More energy independence, built around you.',
    },
  ];

  return (
    <section
      id="hero"
      className="jemket-hero relative isolate overflow-hidden bg-[#07152F] text-white pt-36 pb-16 sm:pt-40 md:pb-24"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-56 left-[22%] h-[30rem] w-[30rem] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 h-1 w-1/3 bg-[#E84A4A]" />
      <div className="absolute left-1/3 top-0 h-1 w-1/6 bg-[#F5C451]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="mb-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 sm:text-xs"
            >
              <span className="h-px w-8 bg-[#F5C451]" />
              JEMKET Engineering · Integrated solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
              className="max-w-4xl text-[clamp(3.25rem,7.4vw,7.2rem)] font-black leading-[0.91] tracking-[-0.075em] text-white"
            >
              WATER.
              <br />
              POWER.
              <br />
              <span className="text-[#F5C451]">PROGRESS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              Essential infrastructure, engineered to work together. From dependable water and safe electrical systems to solar energy and building works, one accountable team moves your project forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: 'easeOut' }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuote}
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Start your project
              </Button>
              <button
                onClick={() => navController.scrollToSection('services')}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C451]"
              >
                Explore capabilities
                <ArrowDownIcon />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-slate-300 sm:text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#F5C451]" /> One accountable partner
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#F5C451]" /> Clear, itemised quotes
              </span>
            </motion.div>

            <div className="mt-10 border-t border-white/15 pt-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 sm:text-sm">
                <span>Prefer to talk it through?</span>
                <a
                  href={contactService.getTelUri('0777132735')}
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#F5C451]"
                >
                  <PhoneCall className="h-4 w-4" />
                  0777 132 735
                </a>
                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center gap-2 font-semibold text-slate-300 transition-colors hover:text-white"
                >
                  <FileText className="h-4 w-4 text-[#F5C451]" />
                  Company profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="relative"
          >
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">What we bring together</p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">Three disciplines. One standard.</p>
              </div>
              <span className="pb-1 text-xs font-medium text-slate-500">01 — 03</span>
            </div>

            <div className="space-y-3">
              {divisions.map((division, index) => {
                const Icon = division.icon;
                return (
                  <motion.button
                    key={division.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.28 + index * 0.1 }}
                    onClick={() => {
                      onSelectDivision(division.id);
                      navController.scrollToSection('services');
                    }}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C451] sm:p-6"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 opacity-80 transition-all duration-300 group-hover:w-1.5" style={{ backgroundColor: division.accent }} />
                    <div className="flex items-center gap-4 pl-2 sm:gap-5">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]"
                        style={{ color: division.accent }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-[10px] font-bold tracking-[0.18em] text-slate-500">{division.number}</span>
                          <h2 className="text-base font-bold tracking-tight text-white sm:text-lg">{division.title}</h2>
                        </div>
                        <p className="text-xs leading-5 text-slate-400 sm:text-sm">{division.subtitle}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-4 pl-[4.25rem] text-xs text-slate-500 transition-colors group-hover:text-slate-300 sm:text-sm">{division.detail}</p>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3.5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#F5C451]" />
              <p className="text-xs leading-5 text-slate-400 sm:text-sm">Planned carefully. Installed professionally. Supported after handover.</p>
            </div>

            <div className="pointer-events-none absolute -right-5 -top-8 -z-10 h-24 w-24 rounded-full border border-white/10 sm:-right-8 sm:-top-10 sm:h-32 sm:w-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArrowDownIcon: React.FC = () => (
  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4v15m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
