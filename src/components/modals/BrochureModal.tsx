import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Zap,
  SunMedium,
  Building,
  Phone,
  Mail,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { ContactService } from '../../services/ContactService';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contactService = ContactService.getInstance();

  if (!isOpen) return null;

  const pages = [
    {
      pageNo: 1,
      title: 'Company Profile Cover',
      pageLabel: 'Cover Page',
      content: (
        <div className="bg-[#0B1E4B] text-white p-8 rounded-xl space-y-6 text-center">
          <div className="inline-block p-4 rounded-full bg-[#1B2A5B]/80 mx-auto">
            <Logo variant="dark" size="lg" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-black tracking-tight text-white uppercase">
              COMPANY PROFILE
            </h3>
            <div className="h-1 w-20 bg-[#FBBF24] mx-auto" />
            <p className="text-lg font-bold text-[#FBBF24] italic">
              &ldquo;Powering Development Through Engineering Excellence&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 rounded-lg bg-[#1B2A5B] border border-blue-400/20">
              <span className="text-xs font-bold text-[#FBBF24] block">Division 01</span>
              <strong className="text-sm block">BOREHOLE SERVICES</strong>
              <span className="text-xs text-slate-300">Surveys, drilling &amp; pumping</span>
            </div>
            <div className="p-4 rounded-lg bg-[#1B2A5B] border border-blue-400/20">
              <span className="text-xs font-bold text-[#FBBF24] block">Division 02</span>
              <strong className="text-sm block">ELECTRICAL &amp; BUILDING</strong>
              <span className="text-xs text-slate-300">Wiring, DBs, ceilings &amp; finishing</span>
            </div>
            <div className="p-4 rounded-lg bg-[#1B2A5B] border border-blue-400/20">
              <span className="text-xs font-bold text-[#FBBF24] block">Division 03</span>
              <strong className="text-sm block">SOLAR INSTALLATION</strong>
              <span className="text-xs text-slate-300">Clean power, hybrid inverters &amp; lithium</span>
            </div>
          </div>
          <div className="text-xs text-slate-400 pt-2 font-mono">
            Official Website: www.jemketengineering.com
          </div>
        </div>
      ),
    },
    {
      pageNo: 2,
      title: 'Table of Contents',
      pageLabel: 'Page No - 02',
      content: (
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-black text-[#0B1E4B] uppercase">TABLE OF CONTENTS</h3>
            <p className="text-xs text-slate-600">Navigate through the official company brochure sections.</p>
          </div>
          <div className="space-y-3">
            {[
              { num: '01', page: 'Page 03', title: 'ABOUT COMPANY', desc: 'Get to know who we are, our mission, vision and values.' },
              { num: '02', page: 'Page 04', title: 'BOREHOLE SERVICES', desc: 'Expert borehole survey, drilling and installation solutions.' },
              { num: '03', page: 'Page 05', title: 'ELECTRICAL & BUILDING SERVICES', desc: 'Reliable electrical installations and building services.' },
              { num: '04', page: 'Page 06', title: 'SOLAR SERVICE', desc: 'Sustainable solar solutions for a brighter future.' },
              { num: '05', page: 'Page 07', title: 'THANK YOU MESSAGE', desc: 'A note of appreciation and contact details for our clients.' },
            ].map((item, idx) => (
              <div
                key={item.num}
                onClick={() => setCurrentPage(idx + 3 > 7 ? 7 : idx + 3)}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-[#0B1E4B] hover:bg-slate-50 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-[#0B1E4B] text-[#FBBF24] font-black text-sm flex items-center justify-center font-mono group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-[#0B1E4B] group-hover:text-[#D32F2F] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono">{item.page}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      pageNo: 3,
      title: 'About Our Company',
      pageLabel: 'Page No - 03',
      content: (
        <div className="space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#D32F2F]">Company Profile</span>
            <h3 className="text-2xl font-black text-[#0B1E4B] uppercase">ABOUT OUR COMPANY.</h3>
            <p className="text-xs font-bold text-[#1B2A5B] mt-1">
              ENGINEERING SOLUTIONS THAT EMPOWER LIFE AND DRIVE PROGRESS.
            </p>
          </div>

          <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
            <p>
              JEMKET ENGINEERING is a trusted provider of professional engineering and installation services committed to delivering high-quality, reliable, and sustainable solutions for residential, commercial, agricultural, industrial, and institutional clients.
            </p>
            <p>
              With a strong foundation built on integrity, innovation, and technical excellence, we specialize in Borehole Services, Electrical &amp; Building Services, and Solar Installation Solutions that meet today&apos;s needs and support a greener, more sustainable future.
            </p>
            <p>
              Our experienced team combines modern equipment, industry best practices, and a customer-first approach to deliver projects that are safe, efficient, and built to last.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs italic text-amber-950 font-semibold">
            &ldquo;We don&apos;t just complete projects, we build trust, deliver value, and create long-term relationships.&rdquo;
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <strong className="text-[#0B1E4B] block mb-1">OUR VISION:</strong>
              <p className="text-slate-600">To be a leading engineering company recognized for excellence, innovation, reliability, and exceptional service across the region.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <strong className="text-[#0B1E4B] block mb-1">OUR MISSION:</strong>
              <p className="text-slate-600">To deliver high-quality engineering and installation solutions that empower communities and create lasting value.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNo: 4,
      title: 'Borehole Services',
      pageLabel: 'Page No - 04',
      content: (
        <div className="space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-sky-600">Water Infrastructure</span>
            <h3 className="text-2xl font-black text-[#0B1E4B] uppercase">BOREHOLE SERVICES.</h3>
            <p className="text-xs font-bold text-[#1B2A5B] mt-1">
              RELIABLE WATER SOLUTIONS. SUSTAINABLE FUTURE.
            </p>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            At JEMKET ENGINEERING, we specialize in providing complete borehole water solutions for residential, commercial, agricultural, and industrial clients. Our borehole services are designed to deliver clean, safe, and dependable underground water all year round.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { step: '01', title: 'BOREHOLE SURVEY', text: 'We conduct professional site surveys and water detection assessments to identify locations with high water potential.' },
              { step: '02', title: 'BOREHOLE DRILLING', text: 'Using modern drilling equipment and experienced technicians, we drill deep, high-quality boreholes that ensure maximum water yield.' },
              { step: '03', title: 'BOREHOLE INSTALLATION', text: 'We install complete borehole systems including pumps, pipes, tanks, and control systems for efficient and reliable water supply.' },
              { step: '04', title: 'BOREHOLE MAINTENANCE', text: 'We provide routine maintenance, repairs, and system optimization to ensure long-term performance and water reliability.' },
            ].map((s) => (
              <div key={s.step} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <span className="font-mono font-black text-[#D32F2F] text-xs block">{s.step}. {s.title}</span>
                <p className="text-slate-600 mt-1">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-950">
            <strong className="block mb-1">BENEFITS OF OUR BOREHOLE SOLUTIONS:</strong>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              <span>✓ Access to clean and safe water</span>
              <span>✓ Reliable water supply all year</span>
              <span>✓ Cost-effective solution</span>
              <span>✓ Low maintenance &amp; long-lasting</span>
              <span>✓ Environmentally friendly</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNo: 5,
      title: 'Electrical & Building Services',
      pageLabel: 'Page No - 05',
      content: (
        <div className="space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#D32F2F]">Infrastructure Works</span>
            <h3 className="text-2xl font-black text-[#0B1E4B] uppercase">ELECTRICAL &amp; BUILDING SERVICES</h3>
            <p className="text-xs font-bold text-[#1B2A5B] mt-1">
              Professional. Reliable. Safe. Powering Your World.
            </p>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            We provide high-quality electrical and building solutions for residential, commercial, industrial, and institutional projects. Our services are driven by safety standards, modern techniques, and a commitment to excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <strong className="text-[#0B1E4B] block uppercase">Electrical Services:</strong>
              <ul className="space-y-1 text-slate-600 text-[11px]">
                <li>• House Wiring &amp; Installations</li>
                <li>• Electrical Upgrades &amp; Repairs</li>
                <li>• Distribution Board Installation</li>
                <li>• Lighting &amp; Power Sockets</li>
                <li>• Fault Diagnosis &amp; Surge Protection</li>
                <li>• Energy-Efficient Solutions</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <strong className="text-[#0B1E4B] block uppercase">Building Services:</strong>
              <ul className="space-y-1 text-slate-600 text-[11px]">
                <li>• Electrical Tubing &amp; Conduiting</li>
                <li>• Building Finishing &amp; Partitioning</li>
                <li>• Ceiling Installations</li>
                <li>• Wall &amp; Floor Finishing</li>
                <li>• Painting &amp; Decorating</li>
                <li>• Renovations &amp; Improvements</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNo: 6,
      title: 'Solar Services',
      pageLabel: 'Page No - 06',
      content: (
        <div className="space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600">Clean Power Systems</span>
            <h3 className="text-2xl font-black text-[#0B1E4B] uppercase">SOLAR SERVICES</h3>
            <p className="text-xs font-bold text-[#1B2A5B] mt-1">
              Clean Energy. Reliable Power. Bright Future.
            </p>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            We design, supply and install high quality solar systems that provide clean, affordable and reliable electricity for homes, businesses, farms and institutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold">
              CLEAN &amp; GREEN ENERGY
            </div>
            <div className="p-2.5 rounded bg-blue-50 text-blue-900 border border-blue-200 font-bold">
              RELIABLE POWER
            </div>
            <div className="p-2.5 rounded bg-amber-50 text-amber-900 border border-amber-200 font-bold">
              LOWER ENERGY COSTS
            </div>
            <div className="p-2.5 rounded bg-purple-50 text-purple-900 border border-purple-200 font-bold">
              ENERGY INDEPENDENCE
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <strong className="text-[#0B1E4B] block uppercase">Our Solar Services:</strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700 text-[11px]">
              <span>✓ Solar System Design &amp; Consultation</span>
              <span>✓ Solar Panel Installation</span>
              <span>✓ Inverter Installation</span>
              <span>✓ Battery Installation</span>
              <span>✓ Solar Water Pumping Systems</span>
              <span>✓ Off-Grid Solar Solutions</span>
              <span>✓ Hybrid Solar Systems</span>
              <span>✓ System Maintenance &amp; Support</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNo: 7,
      title: 'Thank You Message & Official Contacts',
      pageLabel: 'Page No - 07',
      content: (
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-black text-[#0B1E4B]">Thank You!</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              We truly appreciate your trust in JEMKET Engineering. Your satisfaction drives us to continue delivering reliable, innovative and high-quality engineering solutions. We look forward to working with you!
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0B1E4B] text-white text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              GET IN TOUCH — VERIFIED DIRECT LINES
            </span>

            <div className="space-y-2.5">
              {contactService.verifiedNumbers.map((num) => (
                <div key={num.nationalRaw} className="flex items-center justify-between text-xs font-mono">
                  <a
                    href={contactService.getTelUri(num.nationalRaw)}
                    className="font-bold text-white hover:text-[#FBBF24] flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D32F2F]" />
                    <span>{num.display}</span>
                  </a>
                  <span className="text-[10px] text-slate-400">{num.carrierLabel}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-700 text-xs space-y-1 text-slate-300">
              <div>Email: <a href={contactService.getMailToUri()} className="text-white hover:underline">{contactService.email}</a></div>
              <div>Website: <a href={contactService.websiteUrl} className="text-white hover:underline">{contactService.website}</a></div>
            </div>
          </div>

          <div className="text-[11px] font-bold text-[#0B1E4B] uppercase tracking-wider">
            PROFESSIONAL ENGINEERING &amp; INSTALLATION SERVICES
          </div>
        </div>
      ),
    },
  ];

  const currentPageData = pages[currentPage - 1];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1E4B]/80 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-slate-200 z-10"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-[#0B1E4B] text-[#FBBF24]">
                <BookOpen className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-black text-[#0B1E4B] leading-none">
                  JEMKET Engineering Official Brochure
                </h3>
                <span className="text-xs text-slate-500 font-semibold font-mono">
                  {currentPageData.pageLabel} of 07
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close brochure viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Viewer */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {currentPageData.content}
          </div>

          {/* Footer Controls */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-[#0B1E4B]"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="text-xs font-mono font-bold text-slate-700">
                Page {currentPage} / {pages.length}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(pages.length, p + 1))}
                disabled={currentPage === pages.length}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-[#0B1E4B]"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onSelectService(currentPageData.title);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Quote for this Scope
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
