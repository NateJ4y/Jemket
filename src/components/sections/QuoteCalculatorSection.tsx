import React, { useState } from 'react';
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Button } from '../common/Button';
import { QuoteFormController } from '../../services/QuoteFormController';
import { ContactService } from '../../services/ContactService';
import { QuoteFormState, FormValidationErrors } from '../../types';

interface QuoteCalculatorSectionProps {
  initialService?: string;
}

export const QuoteCalculatorSection: React.FC<QuoteCalculatorSectionProps> = ({
  initialService,
}) => {
  const formController = new QuoteFormController();
  const contactService = ContactService.getInstance();

  const [formState, setFormState] = useState<QuoteFormState>({
    ...formController.getInitialState(),
    serviceRequired: initialService || 'Borehole Services',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [targetNumberIndex, setTargetNumberIndex] = useState(0);

  const serviceOptions = [
    'Borehole Services',
    'Electrical Services',
    'Building & Renovations',
    'Solar Energy',
    'Solar Water Pumping',
    'Multiple Services',
    'Other Enquiry',
  ];

  const sectorOptions = [
    'Residential Home',
    'Commercial Business',
    'Agricultural Farm',
    'Industrial Facility',
    'Institutional / School',
  ];

  const contactMethods: ('WhatsApp' | 'Phone Call' | 'Email')[] = [
    'WhatsApp',
    'Phone Call',
    'Email',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = formController.validate(formState);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate clean synchronous processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleSendViaWhatsApp = () => {
    const url = formController.generateWhatsAppUrl(formState, targetNumberIndex);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = () => {
    const url = formController.generateMailToUrl(formState);
    window.location.href = url;
  };

  const handleCopySummary = () => {
    const text = contactService.formatQuoteForWhatsApp(formState);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setFormState(formController.getInitialState());
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-[#0B1E4B] text-white relative overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#1B2A5B] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D32F2F] rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B2A5B] text-[#FBBF24] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            LET&apos;S BUILD YOUR NEXT SOLUTION.
          </h2>
          <div className="h-1 w-20 bg-[#FBBF24] mx-auto mt-4 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tell us what you need. Our team can help you discuss the right engineering solution
            for your project—providing transparent technical sizing and itemised scope estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Column (Cols 8) */}
          <div className="lg:col-span-8 bg-white text-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            {isSubmitted ? (
              /* Success State with Instant Dispatch Actions */
              <div className="py-6 space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#D32F2F]">
                    Quote Request Prepared
                  </span>
                  <h3 className="text-2xl font-black text-[#0B1E4B]">
                    Thank you, {formState.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto">
                    Your project details for <strong className="text-[#0B1E4B]">{formState.serviceRequired}</strong> in <strong className="text-[#0B1E4B]">{formState.projectLocation}</strong> have been formatted.
                  </p>
                </div>

                {/* Dispatch Choice Buttons */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-left max-w-lg mx-auto space-y-3">
                  <div className="text-xs font-bold text-[#0B1E4B] uppercase tracking-wider">
                    Send directly to JEMKET Engineering via:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="p-3 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      onClick={handleSendViaEmail}
                      className="p-3 rounded-lg bg-[#0B1E4B] hover:bg-[#1B2A5B] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={handleCopySummary}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Summary Copied!' : 'Copy Summary to Clipboard'}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#D32F2F] hover:underline cursor-pointer"
                    >
                      New Request
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500">
                  Prefer a direct call? Phone our office at <strong className="text-slate-800">0777 132 735</strong>.
                </div>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formState.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Moyo"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#0B1E4B] focus:ring-blue-100'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0777 000 000"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#0B1E4B] focus:ring-blue-100'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. client@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#0B1E4B] focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formState.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#0B1E4B] focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sector Type */}
                  <div>
                    <label htmlFor="sectorType" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                      Application Sector
                    </label>
                    <select
                      id="sectorType"
                      name="sectorType"
                      value={formState.sectorType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#0B1E4B] focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      {sectorOptions.map((sec) => (
                        <option key={sec} value={sec}>
                          {sec}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label htmlFor="projectLocation" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                      Site / Project Location *
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      value={formState.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Borrowdale, Harare / Farm in Mazowe"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.projectLocation
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#0B1E4B] focus:ring-blue-100'
                      }`}
                    />
                    {errors.projectLocation && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.projectLocation}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-1.5">
                    Project Description &amp; Technical Requirements *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formState.projectDescription}
                    onChange={handleChange}
                    placeholder="Describe what you require (e.g. Need deep borehole drilling and 10,000L tank setup; 8kVA solar inverter with lithium storage for a 4-bedroom house; or full factory distribution board wiring)."
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                      errors.projectDescription
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-slate-300 focus:border-[#0B1E4B] focus:ring-blue-100'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div className="pt-1">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#0B1E4B] mb-2">
                    Preferred Contact Method
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {contactMethods.map((method) => (
                      <label key={method} className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formState.preferredContact === method}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#D32F2F] focus:ring-[#D32F2F]"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Itemised scoping. Zero obligation.</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Preparing Quote...' : 'Request My Quote'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Contact Alternatives Column (Cols 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Phone Numbers Card */}
            <div className="p-6 rounded-2xl bg-[#1B2A5B] border border-blue-400/20 shadow-lg space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FBBF24]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Direct Verified Telephone Lines
                </h3>
              </div>

              <div className="space-y-3">
                {contactService.verifiedNumbers.map((num, idx) => (
                  <div
                    key={num.nationalRaw}
                    className="p-3.5 rounded-xl bg-[#0B1E4B] border border-blue-400/15 flex items-center justify-between group hover:border-[#FBBF24]/50 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        {num.carrierLabel}
                      </span>
                      <a
                        href={contactService.getTelUri(num.nationalRaw)}
                        className="text-base font-black font-mono text-white group-hover:text-[#FBBF24] transition-colors"
                      >
                        {num.display}
                      </a>
                    </div>

                    <a
                      href={contactService.getTelUri(num.nationalRaw)}
                      className="p-2 rounded-lg bg-[#1B2A5B] text-slate-300 hover:text-white hover:bg-[#D32F2F] transition-colors"
                      title={`Call ${num.display}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Email Address */}
              <div className="pt-2 border-t border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                  Official Email Enquiries
                </span>
                <a
                  href={contactService.getMailToUri()}
                  className="text-xs font-bold text-white hover:text-[#FBBF24] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{contactService.email}</span>
                </a>
              </div>
            </div>

            {/* Instant WhatsApp Support Card */}
            <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
                <h3 className="text-xs font-black uppercase tracking-wider">
                  Instant WhatsApp Desk
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our engineering team for instant technical queries, photo sharing of your site, or rapid estimates.
              </p>
              <a
                href={contactService.getWhatsAppUri()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
