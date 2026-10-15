import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Droplets, Zap, Sun, ShieldCheck, CheckCircle2, MessageCircle, ClipboardCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { ContactService } from '../../services/ContactService';
import { NavigationController } from '../../services/NavigationController';

interface LandingPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onOpenBrochure: () => void;
}

const services = [
  {
    number: '01',
    title: 'Water systems',
    summary: 'Borehole services, pumping, storage and practical water solutions.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85',
    alt: 'Infrastructure and construction work on site',
    accent: 'text-sky-600',
  },
  {
    number: '02',
    title: 'Electrical & building',
    summary: 'Electrical installations, maintenance, building and renovation work.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85',
    alt: 'Technical professional working with engineering equipment',
    accent: 'text-red-600',
  },
  {
    number: '03',
    title: 'Solar energy',
    summary: 'Solar power, backup systems and off-grid energy options.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85',
    alt: 'Solar panels in a renewable energy installation',
    accent: 'text-amber-600',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenQuote, onOpenBrochure }) => {
  const contact = ContactService.getInstance();
  const navigation = NavigationController.getInstance();

  return (
    <>
      <section id="hero" className="relative isolate overflow-hidden bg-[#07152F] pt-32 text-white sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 opacity-20 hero-grid" aria-hidden="true" />
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-12 lg:pb-24">
          <div className="relative z-10">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 sm:text-xs">
              <span className="h-px w-8 bg-[#F5C451]" /> JEMKET ENGINEERING
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="max-w-3xl text-[clamp(3.25rem,7vw,6.8rem)] font-black leading-[0.92] tracking-[-0.07em]">
              WATER.<br />POWER.<br /><span className="text-[#F5C451]">PROGRESS.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Practical engineering and installation services for homes, farms and businesses. Bring your water, electrical, building or solar project to one team.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.button type="button" onClick={() => onOpenQuote()} whileHover={{ scale: 1.035, y: -2, boxShadow: '0 14px 35px rgba(245,196,81,0.22)' }} whileTap={{ scale: 0.97 }} className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F5C451] px-7 py-4 text-sm font-black text-[#07152F] shadow-[0_8px_24px_rgba(245,196,81,0.15)] transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07152F]">
                Tell us about your project <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              <motion.button type="button" onClick={() => navigation.scrollToSection('services')} whileHover={{ x: 3 }} whileTap={{ scale: 0.98 }} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white/60 hover:bg-white/5">
                Explore services <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#F5C451]" /> Clear next steps</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#F5C451]" /> Itemised project discussions</span>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 24, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.16 }} className="relative">
            <div className="relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:min-h-[430px]">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=90" alt="Engineering professional inspecting technical equipment" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152F] via-[#07152F]/20 to-[#07152F]/5" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C451]">One team. Connected solutions.</span>
                <p className="mt-2 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">Let’s work out what your project needs.</p>
                <button type="button" onClick={() => onOpenQuote()} className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#F5C451]">
                  Start an enquiry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden rounded-xl border border-white/10 bg-[#102348] px-4 py-3 shadow-xl sm:block lg:-left-6">
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#F5C451]" /><div><p className="text-xs font-bold text-white">From planning to installation</p><p className="mt-0.5 text-[10px] text-slate-400">A clear point of contact</p></div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">What we do</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1E4B] sm:text-4xl lg:text-5xl">The essentials, handled.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Start with the service you need. We’ll help you understand the next step and the details your project requires.</p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -5 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:border-slate-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52">
                    <img src={service.image} alt={service.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/60 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">{service.number} / JEMKET</span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3"><h3 className="text-xl font-black tracking-tight text-[#0B1E4B]">{service.title}</h3><Icon className={`h-5 w-5 shrink-0 ${service.accent}`} /></div>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-600">{service.summary}</p>
                    <motion.button type="button" onClick={() => onOpenQuote(service.title)} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} className="group/link mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-[#0B1E4B] transition-colors hover:text-red-600">
                      Enquire about this service <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:p-6">
            <p className="max-w-2xl text-sm leading-6 text-slate-700">Not sure which service fits? Tell us what you’re trying to achieve and we can start with the basics.</p>
            <motion.button type="button" onClick={() => onOpenQuote('General Enquiry')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0B1E4B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D32F2F]">
              Help me choose <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </section>

      <section id="why-us" className="scroll-mt-28 bg-[#07152F] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[360px]">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Engineering and project team discussing work together" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/75 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">People. Planning. Precision.</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F5C451]">Why Jemket</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">Good work starts with a clear plan.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">Every project starts with understanding the need, talking through the scope and agreeing on practical next steps before work moves forward.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C451]" /><div><h3 className="text-sm font-bold">One point of contact</h3><p className="mt-1 text-xs leading-5 text-slate-400">Discuss connected services with one team.</p></div></div>
              <div className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C451]" /><div><h3 className="text-sm font-bold">Clear scope</h3><p className="mt-1 text-xs leading-5 text-slate-400">Understand the work and requirements involved.</p></div></div>
              <div className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C451]" /><div><h3 className="text-sm font-bold">Practical guidance</h3><p className="mt-1 text-xs leading-5 text-slate-400">Talk through options before deciding.</p></div></div>
              <div className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C451]" /><div><h3 className="text-sm font-bold">Next steps made clear</h3><p className="mt-1 text-xs leading-5 text-slate-400">Know what information is needed to proceed.</p></div></div>
            </div>
            <motion.button type="button" onClick={() => onOpenQuote()} whileHover={{ scale: 1.025, x: 2 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F5C451] px-6 py-3 text-sm font-black text-[#07152F] transition-colors hover:bg-amber-300">
              Talk through your project <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">How it starts</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1E4B] sm:text-4xl">Three steps. No guesswork.</h2></div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">You don’t need to know every technical detail before reaching out. Start with what you need and we’ll take it from there.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              { number: '01', title: 'Tell us the goal', text: 'Share the service, site and the result you are looking for.', icon: MessageCircle },
              { number: '02', title: 'Discuss the scope', text: 'Talk through requirements, options and useful details.', icon: ClipboardCheck },
              { number: '03', title: 'Plan the next step', text: 'Clarify the information needed for a suitable proposal.', icon: CheckCircle2 },
            ].map((step, index) => {
              const Icon = step.icon;
              return <motion.div key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-xs font-black tracking-[0.18em] text-red-600">{step.number}</span><Icon className="h-5 w-5 text-[#0B1E4B]" /></div><h3 className="mt-5 text-lg font-black text-[#0B1E4B]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p></motion.div>;
            })}
          </div>
          <div className="mt-8 text-center"><motion.button type="button" onClick={() => onOpenQuote()} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#D32F2F] px-8 py-4 text-sm font-black text-white shadow-lg shadow-red-900/15 transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E4B] focus-visible:ring-offset-2">Start with a quick enquiry <ArrowRight className="h-5 w-5" /></motion.button></div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#F5C451] py-14 sm:py-18">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#07152F]/10" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B1E4B]/70">Have a project in mind?</p><h2 className="mt-2 text-3xl font-black tracking-tight text-[#07152F] sm:text-4xl">Let’s talk through it.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#07152F]/80">A short enquiry is enough to get the conversation started. No need to have every detail figured out.</p></div>
          <motion.button type="button" onClick={() => onOpenQuote()} whileHover={{ scale: 1.045, y: -3, boxShadow: '0 16px 32px rgba(7,21,47,0.2)' }} whileTap={{ scale: 0.97 }} className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#07152F] px-8 py-4 text-sm font-black text-white shadow-xl transition-colors hover:bg-[#D32F2F] sm:w-auto">Enquire with Jemket <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></motion.button>
        </div>
      </section>
    </>
  );
};
