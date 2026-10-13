import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Droplets,
  Zap,
  SunMedium,
  ArrowRight,
  SlidersHorizontal,
  Info,
} from 'lucide-react';
import { Button } from '../common/Button';
import { ServiceCatalog } from '../../services/ServiceCatalog';
import { ProjectShowcase, ServiceDivisionId } from '../../types';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';

interface PortfolioSectionProps {
  onOpenQuoteWithProject: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenQuoteWithProject,
}) => {
  const serviceCatalog = ServiceCatalog.getInstance();
  const allShowcases = serviceCatalog.getShowcases();

  const [activeFilter, setActiveFilter] = useState<'all' | ServiceDivisionId>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectShowcase | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? allShowcases
      : allShowcases.filter((p) => p.divisionId === activeFilter);

  const filterTabs = [
    { id: 'all' as const, label: 'All Capabilities' },
    { id: 'borehole' as const, label: 'Borehole Water', icon: Droplets },
    { id: 'electrical-building' as const, label: 'Electrical & Building', icon: Zap },
    { id: 'solar' as const, label: 'Solar Energy', icon: SunMedium },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1E4B]/5 text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-3">
              <span>Capability Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1E4B] tracking-tight uppercase">
              ENGINEERING IN ACTION.
            </h2>
            <div className="h-1 w-20 bg-[#FBBF24] mt-3 mb-3" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore documented engineering solutions across water security, commercial solar microgrids,
              and code-compliant electrical and building installations.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="outline"
              size="md"
              onClick={() => onOpenQuoteWithProject('General Engineering Project')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter by Division:</span>
          </span>

          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0B1E4B] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#0B1E4B]/50 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Strip with Division Color */}
                <div
                  className={`h-1.5 w-full ${
                    project.divisionId === 'borehole'
                      ? 'bg-sky-500'
                      : project.divisionId === 'electrical-building'
                      ? 'bg-[#D32F2F]'
                      : 'bg-[#FBBF24]'
                  }`}
                />

                <div className="p-6 space-y-4">
                  {/* Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B1E4B] text-white">
                      {project.divisionLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Sector: {project.sector}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#0B1E4B] group-hover:text-[#D32F2F] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Challenge Summary */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      The Challenge
                    </span>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Outcome Pill */}
                  <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs">
                    <span className="font-bold text-[#0B1E4B] block mb-0.5">
                      Verifiable Outcome:
                    </span>
                    <span className="text-slate-700 leading-snug font-medium">
                      {project.outcome}
                    </span>
                  </div>

                  {/* Key Spec Snippet */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    {project.specifications.slice(0, 2).map((spec, i) => (
                      <div key={i} className="p-2 rounded bg-slate-100">
                        <span className="text-[9px] text-slate-500 block uppercase font-semibold">
                          {spec.label}
                        </span>
                        <span className="font-bold text-[#0B1E4B]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="p-4 border-t border-slate-200/80 bg-slate-100/50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#0B1E4B] hover:text-[#D32F2F] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithProject(project.title)}
                    className="text-xs font-bold text-[#D32F2F] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Similar &rarr;</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Detail Dialog */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConsult={(title) => onOpenQuoteWithProject(title)}
        />

      </div>
    </section>
  );
};
