import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Users,
  HeartHandshake,
  Target,
  Compass,
  Sparkles,
} from 'lucide-react';
import { ServiceCatalog } from '../../services/ServiceCatalog';

export const ValuesCommitmentSection: React.FC = () => {
  const serviceCatalog = ServiceCatalog.getInstance();
  const pillars = serviceCatalog.getCompanyPillars();
  const values = serviceCatalog.getCoreValues();

  const valueIcons: Record<string, React.ElementType> = {
    professionalism: Award,
    integrity: ShieldCheck,
    quality: CheckCircle2,
    innovation: Lightbulb,
    teamwork: Users,
    'customer-focus': HeartHandshake,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1E4B]/5 text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Corporate Governance &amp; Ethics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1E4B] tracking-tight uppercase">
            OUR COMMITMENT TO EVERY PROJECT
          </h2>
          <div className="h-1 w-20 bg-[#FBBF24] mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate with zero fabricated claims. Our foundation rests upon authentic engineering
            principles, uncompromising safety conduct, and transparent technical accountability.
          </p>
        </div>

        {/* 4 Foundational Pillars (Vision, Mission, Purpose, Commitment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-[#0B1E4B]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#0B1E4B]">
                    {pillar.badge}
                  </span>
                  <Target className="w-4 h-4 text-[#D32F2F]" />
                </div>
                <h3 className="text-base font-black text-[#0B1E4B] uppercase tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 mt-4 text-[10px] font-mono text-slate-400">
                JEMKET Engineering Charter
              </div>
            </div>
          ))}
        </div>

        {/* 6 Core Values Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1E4B] uppercase tracking-tight">
              OUR SIX CORE VALUES
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding how our engineers, technicians, and project managers work on site every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val) => {
              const Icon = valueIcons[val.id] || Compass;
              return (
                <div
                  key={val.id}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#D32F2F] hover:shadow-xs transition-all flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-red-50 text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0B1E4B] tracking-tight uppercase mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
