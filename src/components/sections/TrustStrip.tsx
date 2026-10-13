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
      title: 'Integrated engineering',
      description: 'Water, electricity, solar and building works coordinated by one team.',
    },
    {
      icon: Sparkles,
      title: 'Quality materials',
      description: 'Specified pumps, solar modules, cabling and installation components.',
    },
    {
      icon: HardHat,
      title: 'Safety-led standards',
      description: 'Attention to electrical protection, structural integrity and site safety.',
    },
    {
      icon: Wrench,
      title: 'Professional installation',
      description: 'Skilled technicians and appropriate equipment for the work at hand.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing support',
      description: 'Maintenance, diagnostics and technical support beyond installation.',
    },
    {
      icon: Building,
      title: 'Multi-sector experience',
      description: 'Solutions for residential, commercial, agricultural and institutional needs.',
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D32F2F] sm:text-xs">
              The standard behind every project
            </p>
            <h2 className="text-2xl font-bold tracking-[-0.045em] text-[#07152F] sm:text-3xl">
              Good work starts before installation.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Clear planning, suitable materials and accountable delivery are built into the way we work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex gap-4 border-t border-slate-200 py-5 sm:py-6 ${idx > 2 ? 'lg:border-t-0' : ''}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#07152F] transition-colors duration-300 group-hover:bg-[#07152F] group-hover:text-white">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-[#07152F]">{item.title}</h3>
                  <p className="max-w-sm text-xs leading-5 text-slate-500 sm:text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
