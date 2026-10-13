import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Droplets,
  Zap,
  SunMedium,
  Check,
  ArrowRight,
  ShieldAlert,
  Sliders,
  CheckCircle2,
  Sparkles,
  Wrench,
  Building,
} from 'lucide-react';
import { Button } from '../common/Button';
import { ServiceCatalog } from '../../services/ServiceCatalog';
import { ServiceDivisionId } from '../../types';

interface CoreDivisionsSectionProps {
  activeDivisionId: ServiceDivisionId;
  onSelectDivision: (id: ServiceDivisionId) => void;
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const CoreDivisionsSection: React.FC<CoreDivisionsSectionProps> = ({
  activeDivisionId,
  onSelectDivision,
  onOpenQuoteWithService,
}) => {
  const serviceCatalog = ServiceCatalog.getInstance();
  const divisions = serviceCatalog.getDivisions();

  const currentDivision =
    divisions.find((d) => d.id === activeDivisionId) || divisions[0];

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1E4B]/5 text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Integrated Service Offering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1E4B] tracking-tight uppercase">
            ONE PARTNER. THREE CORE ENGINEERING DIVISIONS.
          </h2>
          <div className="h-1 w-20 bg-[#FBBF24] mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate fragmented contractors and mismatched installations. JEMKET coordinates
            borehole water systems, electrical &amp; building works, and solar microgrids under one
            accountable engineering management team.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-12">
          {divisions.map((div) => {
            const isActive = div.id === activeDivisionId;
            const IconComponent =
              div.id === 'borehole'
                ? Droplets
                : div.id === 'electrical-building'
                ? Zap
                : SunMedium;

            return (
              <button
                key={div.id}
                onClick={() => onSelectDivision(div.id)}
                className={`w-full sm:w-auto px-5 py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-3 transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B1E4B] text-white border-[#0B1E4B] shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <IconComponent
                  className={`w-4 h-4 ${
                    isActive ? 'text-[#FBBF24]' : 'text-[#0B1E4B]'
                  }`}
                />
                <span>{div.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive ? 'bg-[#1B2A5B] text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {div.pageNumber}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real-world visual for the selected engineering discipline */}
        <motion.div
          key={`division-image-${currentDivision.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative mb-6 h-56 overflow-hidden rounded-2xl bg-[#07152F] sm:h-72 lg:h-80"
        >
          <img
            src={
              currentDivision.id === 'borehole'
                ? 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85'
                : currentDivision.id === 'electrical-building'
                ? 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=85'
                : 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85'
            }
            alt={
              currentDivision.id === 'borehole'
                ? 'Construction and infrastructure work on site'
                : currentDivision.id === 'electrical-building'
                ? 'Technical professional working with engineering equipment'
                : 'Solar panels installed for renewable energy generation'
            }
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152F]/90 via-[#07152F]/35 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-end p-6 sm:p-9">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C451]">JEMKET / FIELD WORK</span>
            <p className="max-w-lg text-2xl font-black tracking-tight text-white sm:text-3xl">{currentDivision.headline}</p>
            <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">Practical engineering, planned around the needs of each site.</p>
          </div>
        </motion.div>

        {/* Division Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDivision.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 lg:p-10 shadow-xs"
          >
            {/* Division Top Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#D32F2F] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    Official Brochure {currentDivision.pageNumber}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {currentDivision.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E4B] tracking-tight">
                  {currentDivision.headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                  {currentDivision.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenQuoteWithService(currentDivision.title)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {currentDivision.ctaText}
                </Button>
              </div>
            </div>

            {/* Division Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              
              {/* Primary Service Items Scope (Cols 7 or 8) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Regular Services List */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#0B1E4B] flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#D32F2F]" />
                      <span>
                        {currentDivision.id === 'electrical-building'
                          ? 'Electrical Installation & Maintenance Scope'
                          : `${currentDivision.title} Scope of Work`}
                      </span>
                    </h4>
                    <span className="text-xs text-slate-500 font-semibold">
                      {currentDivision.services.length} Core Services
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentDivision.services.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#0B1E4B] hover:shadow-xs transition-all flex items-start gap-2.5 group"
                      >
                        <Check className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-semibold text-[#0B1E4B] leading-tight">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specific Building Services list (For Electrical & Building division) */}
                {currentDivision.buildingServices && (
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-black uppercase tracking-wider text-[#0B1E4B] flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#0B1E4B]" />
                        <span>Building, Finishing &amp; Conduiting Services</span>
                      </h4>
                      <span className="text-xs text-slate-500 font-semibold">
                        {currentDivision.buildingServices.length} Disciplines
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentDivision.buildingServices.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#0B1E4B] hover:shadow-xs transition-all flex items-start gap-2.5 group"
                        >
                          <Check className="w-4 h-4 text-[#0B1E4B] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4-Step Borehole Specific Workflow (if Borehole division) */}
                {currentDivision.processSteps && (
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#0B1E4B] mb-3">
                      Borehole Execution Methodology
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {currentDivision.processSteps.map((step) => (
                        <div
                          key={step.step}
                          className="p-3.5 rounded-lg bg-white border border-slate-200"
                        >
                          <span className="text-xs font-black font-mono text-[#D32F2F]">
                            {step.step}.
                          </span>
                          <h5 className="text-xs font-bold text-[#0B1E4B] mt-0.5 mb-1">
                            {step.title}
                          </h5>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar: Benefits & Cross-Applications (Cols 4) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Benefits Card */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FBBF24]" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1E4B]">
                      Verified Operational Benefits
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentDivision.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Applications Card */}
                <div className="p-5 rounded-xl bg-[#0B1E4B] text-white shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#FBBF24]" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#FBBF24]">
                      Target Deployment Sectors
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {currentDivision.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                        <span className="font-medium">{app}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenQuoteWithService(currentDivision.title)}
                      className="w-full py-2 px-3 rounded bg-[#1B2A5B] hover:bg-[#25376F] border border-blue-400/30 text-xs font-bold text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Get Custom Engineering Spec</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
