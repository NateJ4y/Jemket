import React from 'react';
import {
  Layers,
  Wrench,
  ShieldCheck,
  Compass,
  Clock,
  Receipt,
  LifeBuoy,
  PhoneCall,
  Check,
} from 'lucide-react';
import { Button } from '../common/Button';
import { ContactService } from '../../services/ContactService';

interface WhyChooseSectionProps {
  onOpenQuote: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenQuote }) => {
  const contactService = ContactService.getInstance();

  const strengths = [
    {
      number: '01',
      title: 'Integrated Service Provision',
      summary:
        'Coordinate borehole drilling, electrical tubing, power distribution, and solar backup through a single engineering point of contact.',
      benefit: 'Eliminates subcontractor blaming, delays, and incompatible piping or wiring.',
      icon: Layers,
    },
    {
      number: '02',
      title: 'Skilled Professional Workmanship',
      summary:
        'Qualified electricians, certified hydrogeological technicians, and experienced solar installers who respect strict engineering best practices.',
      benefit: 'Peace of mind that your infrastructure is built to code, not makeshift shortcuts.',
      icon: Wrench,
    },
    {
      number: '03',
      title: 'Appropriate Equipment & Quality Materials',
      summary:
        'Modern drilling rigs, high-thrust submersible pumps, pure copper cabling, and Tier-1 solar modules with documented factory specifications.',
      benefit: 'Prevents premature pump burnouts, circuit overheating, and panel degradation.',
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Site Consultation & Precise Planning',
      summary:
        'Hydrological surveys, water detection assessments, and electrical load auditing before a single drill bit or cable is laid.',
      benefit: 'Prevents dry boreholes and undersized inverters before you invest capital.',
      icon: Compass,
    },
    {
      number: '05',
      title: 'Safety-Conscious Installation Standards',
      summary:
        'Rigorous earthing, surge protection devices (SPDs), correct pipe pressure ratings, and certified circuit breakers.',
      benefit: 'Protects expensive appliances, building structures, and human safety.',
      icon: ShieldCheck,
    },
    {
      number: '06',
      title: 'Timely Project Delivery Commitment',
      summary:
        'Systematic scheduling, realistic milestones, and transparent progress updates throughout survey, drilling, and installation phases.',
      benefit: 'Your residential or agricultural project proceeds on predictable schedules.',
      icon: Clock,
    },
    {
      number: '07',
      title: 'Transparent, Itemised Quotations',
      summary:
        'Zero hidden charges. Every quotation clearly specifies pump ratings, pipe meters, cable gauges, and labor scope line-by-line.',
      benefit: 'Complete budget clarity and honest financial accountability.',
      icon: Receipt,
    },
    {
      number: '08',
      title: 'Maintenance & Dedicated After-Sales Support',
      summary:
        'Routine servicing, pump recovery diagnostics, solar string testing, and responsive troubleshooting when you need it.',
      benefit: 'Long-term reliability with technicians who know your exact installation history.',
      icon: LifeBuoy,
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0B1E4B] text-white relative overflow-hidden">
      {/* Decorative Technical Geometry */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1B2A5B] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D32F2F] rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B2A5B] text-[#FBBF24] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engineering Integrity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            ENGINEERED FOR RELIABILITY.{' '}
            <span className="text-[#D32F2F]">BUILT AROUND YOUR NEEDS.</span>
          </h2>
          <div className="h-1 w-20 bg-[#FBBF24] mt-4 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineering excellence is not about slogans; it is about proven execution, quality components,
            and honest accountability from initial site survey to long-term post-commissioning support.
          </p>
        </div>

        {/* Executive Quote Callout Banner (From Page 03) */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-[#1B2A5B]/80 border-l-4 border-[#FBBF24] border-y border-r border-blue-400/20 backdrop-blur-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FBBF24]">
              Corporate Philosophy
            </span>
            <p className="text-lg sm:text-xl font-bold italic text-white leading-snug">
              &ldquo;We don&apos;t just complete projects, we build trust, deliver value, and create long-term relationships.&rdquo;
            </p>
            <p className="text-xs text-slate-400">
              — JEMKET ENGINEERING Statement of Commitment
            </p>
          </div>
          <div className="shrink-0">
            <Button
              variant="yellow"
              size="md"
              onClick={onOpenQuote}
            >
              Talk to Our Team
            </Button>
          </div>
        </div>

        {/* People behind the work: field teams and technical coordination */}
        <div className="mb-12 grid overflow-hidden rounded-2xl border border-white/10 bg-[#07152F] md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-64 sm:min-h-80">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
              alt="A team collaborating on a technical project"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07152F]/35 md:bg-gradient-to-l" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C451]">People. Planning. Precision.</span>
            <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">Good engineering is a team effort.</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">From the first site conversation to installation and handover, clear coordination keeps the work moving and the details connected.</p>
          </div>
        </div>

        {/* 8 Substantiated Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="p-5 rounded-xl bg-[#1B2A5B]/50 hover:bg-[#1B2A5B] border border-blue-400/20 hover:border-blue-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black font-mono text-[#FBBF24] px-2 py-0.5 rounded bg-[#0B1E4B]">
                      {item.number}
                    </span>
                    <IconComponent className="w-5 h-5 text-slate-300 group-hover:text-[#FBBF24] transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 mt-2">
                  <div className="flex items-start gap-1.5 text-[11px] text-[#FBBF24]">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                    <span className="leading-tight text-slate-200">{item.benefit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Quick Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <span>Need technical advice on your borehole, power or solar requirement?</span>
          <div className="flex items-center gap-3">
            <a
              href={contactService.getTelUri('0777132735')}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#FBBF24] font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>0777 132 735</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={contactService.getWhatsAppUri()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-bold"
            >
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
