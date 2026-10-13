import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  FileSpreadsheet,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../common/Button';
import { ServiceCatalog } from '../../services/ServiceCatalog';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const serviceCatalog = ServiceCatalog.getInstance();
  const stages = serviceCatalog.getProcessStages();
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const stageIcons = [Compass, FileSpreadsheet, Cpu, ShieldCheck];

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1E4B]/5 text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Rigorous Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1E4B] tracking-tight uppercase">
            THE ENGINEERING PROCESS
          </h2>
          <div className="h-1 w-20 bg-[#FBBF24] mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every borehole, electrical network, and solar installation follows our structured four-phase
            engineering lifecycle—ensuring precise scoping, safety compliance, and verifiable performance.
          </p>
        </div>

        {/* 4 Process Step Cards with Progressive Connecting Line */}
        <div className="relative mb-12">
          {/* Desktop Connecting Graphic Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const IconComponent = stageIcons[idx];
              const isSelected = selectedStage === idx;

              return (
                <div
                  key={stage.number}
                  onClick={() => setSelectedStage(idx)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#0B1E4B] shadow-lg ring-2 ring-[#0B1E4B]/10 -translate-y-1'
                      : 'bg-white hover:bg-slate-50 border-slate-200 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Number Badge and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-10 h-10 rounded-lg bg-[#FBBF24] text-[#0B1E4B] font-black font-mono text-base flex items-center justify-center shadow-xs">
                        {stage.number}
                      </span>
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected
                            ? 'bg-[#0B1E4B] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-black text-[#0B1E4B] uppercase tracking-tight mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {stage.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D32F2F]">
                    <span>Phase Deliverables</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Stage Deliverables Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
                Phase {stages[selectedStage].number} Deep Dive
              </span>
              <h3 className="text-xl font-black text-[#0B1E4B] tracking-tight mt-0.5">
                {stages[selectedStage].title}
              </h3>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenQuote}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start at Step 01
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
            <div className="md:col-span-7">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                Operational Scope
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {stages[selectedStage].details}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1E4B] mb-2.5">
                Key Phase Deliverables:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {stages[selectedStage].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
