import { QuoteFormState, FormValidationErrors } from '../types';
import { ContactService } from './ContactService';

export class QuoteFormController {
  private contactService = ContactService.getInstance();

  public getInitialState(): QuoteFormState {
    return {
      fullName: '',
      phone: '',
      email: '',
      serviceRequired: 'Borehole Services',
      projectLocation: '',
      projectDescription: '',
      preferredContact: 'WhatsApp',
      sectorType: 'Residential',
    };
  }

  public validate(state: QuoteFormState): { isValid: boolean; errors: FormValidationErrors } {
    const errors: FormValidationErrors = {};

    if (!state.fullName.trim()) {
      errors.fullName = 'Please provide your full name.';
    } else if (state.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters.';
    }

    if (!state.phone.trim()) {
      errors.phone = 'Please provide a valid phone number.';
    } else {
      const cleanPhone = state.phone.replace(/[\s\-()]/g, '');
      if (cleanPhone.length < 8) {
        errors.phone = 'Please enter a valid phone number (at least 8 digits).';
      }
    }

    if (state.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.email.trim())) {
        errors.email = 'Please provide a valid email address.';
      }
    }

    if (!state.projectLocation.trim()) {
      errors.projectLocation = 'Please provide your project or site location (e.g., Harare, Bulawayo, Farm site).';
    }

    if (!state.projectDescription.trim()) {
      errors.projectDescription = 'Please briefly describe what you need (e.g., 80m borehole drilling, 5kVA solar backup, house wiring).';
    } else if (state.projectDescription.trim().length < 10) {
      errors.projectDescription = 'Please provide a bit more detail (at least 10 characters).';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  public generateWhatsAppUrl(state: QuoteFormState, contactIndex: number = 0, countryCode: string = '263'): string {
    const formattedMessage = this.contactService.formatQuoteForWhatsApp(state);
    return this.contactService.getWhatsAppUri(formattedMessage, contactIndex, countryCode);
  }

  public generateMailToUrl(state: QuoteFormState): string {
    const subject = `New Quote Request: ${state.serviceRequired} - ${state.projectLocation} (${state.fullName})`;
    const body = [
      `Client Name: ${state.fullName}`,
      `Phone Number: ${state.phone}`,
      `Email: ${state.email || 'Not provided'}`,
      `Service Required: ${state.serviceRequired}`,
      `Sector: ${state.sectorType}`,
      `Site Location: ${state.projectLocation}`,
      `Preferred Contact: ${state.preferredContact}`,
      ``,
      `Project Scope / Requirements:`,
      `${state.projectDescription}`,
      ``,
      `Sent via jemketengineering.com web portal`,
    ].join('\n');

    return this.contactService.getMailToUri(subject, body);
  }
}
