import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProjectShowcase } from '../../types';
import { Button } from '../common/Button';

interface ProjectDetailModalProps {
  project: ProjectShowcase | null;
  onClose: () => void;
  onConsult: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onConsult,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1E4B]/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 z-10"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-start justify-between gap-4 sticky top-0 z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#0B1E4B] text-white">
                  {project.divisionLabel}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Sector: {project.sector}
                </span>
              </div>
              <h3 className="text-xl font-black text-[#0B1E4B] tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6">
            
            {/* The Challenge & Solution */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-1">
                  The Engineering Challenge:
                </h4>
                <p className="text-sm text-amber-950 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1E4B] mb-1">
                  JEMKET Solution Delivered:
                </h4>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-1">
                  Verifiable Outcome:
                </h4>
                <p className="text-sm text-emerald-950 font-semibold leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1E4B] mb-3">
                Key Technical Specifications:
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {project.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col"
                  >
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-[#0B1E4B]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
              {project.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D32F2F]" />
                  <span>{h}</span>
                </span>
              ))}
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 hidden sm:inline flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full compliance with engineering safety codes.</span>
            </span>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                onConsult(project.title);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss a Similar Project
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
