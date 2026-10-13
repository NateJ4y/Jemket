import React from 'react';
import {
  Layers,
  Sparkles,
  HardHat,
  Wrench,
  HeadphonesIcon,
  Building,
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const credentials = [
    {
      icon: Layers,
      title: 'Integrated Engineering',
      description: 'One company coordinating water, electricity, solar, and building works.',
    },
    {
      icon: Sparkles,
      title: 'Quality Spec Materials',
      description: 'Tier-1 solar modules, heavy-duty pumps, certified copper cabling & fittings.',
    },
    {
      icon: HardHat,
      title: 'Safety-Conscious Standards',
      description: 'Strict adherence to electrical protection, structural integrity & safety codes.',
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Executed with modern drilling rigs, calibrated multimeters & skilled technicians.',
    },
    {
      icon: HeadphonesIcon,
      title: 'After-Sales & Maintenance',
      description: 'Routine servicing, system diagnostics, and long-term technical support.',
    },
    {
      icon: Building,
      title: 'Cross-Sector Capability',
      description: 'Proven solutions for residential, commercial, agricultural & institutional projects.',
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D32F2F]">
            ENGINEERING CREDIBILITY &amp; ASSURANCE
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#0B1E4B]">
            Substantiated Engineering Standards on Every Site
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#0B1E4B]/40 hover:shadow-sm transition-all text-center flex flex-col items-center"
              >
                <div className="w-9 h-9 rounded-full bg-[#0B1E4B]/5 flex items-center justify-center text-[#0B1E4B] mb-2.5">
                  <Icon className="w-5 h-5 text-[#D32F2F]" />
                </div>
                <h3 className="text-xs font-bold text-[#0B1E4B] mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
