import React, { useState } from 'react';
import {
  Home,
  Building2,
  Wheat,
  Factory,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { ServiceCatalog } from '../../services/ServiceCatalog';
import { Button } from '../common/Button';

interface CustomerSectorsSectionProps {
  onOpenQuoteWithSector: (sectorName: string) => void;
}

export const CustomerSectorsSection: React.FC<CustomerSectorsSectionProps> = ({
  onOpenQuoteWithSector,
}) => {
  const serviceCatalog = ServiceCatalog.getInstance();
  const sectors = serviceCatalog.getCustomerSectors();
  const [activeSectorId, setActiveSectorId] = useState<string>(sectors[0].id);

  const sectorIcons: Record<string, React.ElementType> = {
    residential: Home,
    commercial: Building2,
    agricultural: Wheat,
    industrial: Factory,
    institutional: GraduationCap,
  };

  const currentSector =
    sectors.find((s) => s.id === activeSectorId) || sectors[0];
  const CurrentIcon = sectorIcons[currentSector.id] || Home;

  return (
    <section id="sectors" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1E4B]/5 text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Market Relevance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1E4B] tracking-tight uppercase">
            SERVING DIVERSE INFRASTRUCTURE SECTORS
          </h2>
          <div className="h-1 w-20 bg-[#FBBF24] mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From rural farm irrigation and high-volume commercial centers to private residences and
            health institutions, our engineering systems adapt to demanding operational environments.
          </p>
        </div>

        {/* Sectors Interactive Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {sectors.map((sec) => {
            const Icon = sectorIcons[sec.id] || Home;
            const isActive = sec.id === activeSectorId;

            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectorId(sec.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0B1E4B] text-white border-[#0B1E4B] shadow-md -translate-y-1'
                    : 'bg-white hover:bg-slate-100 text-[#0B1E4B] border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isActive ? 'bg-[#1B2A5B] text-[#FBBF24]' : 'bg-slate-100 text-[#0B1E4B]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#1B2A5B] text-slate-300' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    0{sectors.indexOf(sec) + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-black leading-tight">
                    {sec.title.split('&')[0]}
                  </h3>
                  <span
                    className={`text-[10px] block mt-0.5 ${
                      isActive ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    Tailored Systems
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Editorial Sector Spotlight Showcase */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-red-50 text-[#D32F2F]">
                  <CurrentIcon className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">
                  Target Sector Specification
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E4B] tracking-tight">
                {currentSector.title}
              </h3>

              <p className="text-sm font-bold text-[#1B2A5B]">
                {currentSector.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentSector.description}
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenQuoteWithSector(currentSector.title)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request {currentSector.title.split(' ')[0]} Engineering Proposal
                </Button>
              </div>
            </div>

            {/* Right Engineered Scope Checklist */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1E4B]">
                Engineered Solutions for this Sector:
              </h4>

              <div className="space-y-2.5">
                {currentSector.keySolutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-slate-200/80 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {sol}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-medium">
                * All installations engineered to local climate and environmental load conditions.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
