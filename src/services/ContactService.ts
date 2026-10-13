export interface VerifiedContactNumber {
  display: string;
  nationalRaw: string;
  defaultInternational: string; // +263777132735
  carrierLabel: string;
  isPrimary?: boolean;
}

export class ContactService {
  private static instance: ContactService;

  public readonly email = 'info@jemketengineering.com';
  public readonly website = 'www.jemketengineering.com';
  public readonly websiteUrl = 'https://www.jemketengineering.com';

  // The 3 official company contact numbers verified from Page 03 & Page 07
  public readonly verifiedNumbers: VerifiedContactNumber[] = [
    {
      display: '0777 132 735',
      nationalRaw: '0777132735',
      defaultInternational: '263777132735',
      carrierLabel: 'Direct Line & WhatsApp',
      isPrimary: true,
    },
    {
      display: '0771 682 487',
      nationalRaw: '0771682487',
      defaultInternational: '263771682487',
      carrierLabel: 'Operations & Quotations',
    },
    {
      display: '0710 372 703',
      nationalRaw: '0710372703',
      defaultInternational: '263710372703',
      carrierLabel: 'Technical Enquiries & Field Support',
    },
  ];

  public static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService();
    }
    return ContactService.instance;
  }

  /**
   * Generates a standard tel: URI.
   * On mobile phones, this dials the national number directly.
   */
  public getTelUri(nationalNumber: string = '0777132735'): string {
    const clean = nationalNumber.replace(/\s+/g, '');
    return `tel:${clean}`;
  }

  /**
   * Constructs an accessible WhatsApp Click-to-Chat URL
   * with custom pre-filled message.
   */
  public getWhatsAppUri(
    message: string = 'Hello JEMKET Engineering, I would like to enquire about your engineering and installation services.',
    contactIndex: number = 0,
    customCountryCode: string = '263'
  ): string {
    const contact = this.verifiedNumbers[contactIndex] || this.verifiedNumbers[0];
    // Strip leading 0 from national number and prefix with country code
    const digitsOnly = contact.nationalRaw.replace(/\D/g, '');
    const numberWithoutLeadingZero = digitsOnly.startsWith('0')
      ? digitsOnly.substring(1)
      : digitsOnly;
    const internationalNumber = `${customCountryCode.replace(/\D/g, '')}${numberWithoutLeadingZero}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
  }

  /**
   * Constructs a mailto: link with structured subject and body
   */
  public getMailToUri(subject: string = 'Engineering Project Enquiry - JEMKET Engineering', body: string = ''): string {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (body) params.set('body', body);
    const queryString = params.toString();
    return `mailto:${this.email}${queryString ? `?${queryString}` : ''}`;
  }

  /**
   * Formats a formal enquiry payload into clean WhatsApp message text
   */
  public formatQuoteForWhatsApp(data: {
    fullName: string;
    phone: string;
    email?: string;
    serviceRequired: string;
    projectLocation: string;
    projectDescription: string;
    preferredContact: string;
  }): string {
    return [
      `*NEW QUOTE REQUEST - JEMKET ENGINEERING*`,
      `---------------------------------------`,
      `👤 *Client Name:* ${data.fullName}`,
      `📞 *Phone Number:* ${data.phone}`,
      data.email ? `✉️ *Email:* ${data.email}` : null,
      `🔧 *Service Required:* ${data.serviceRequired}`,
      `📍 *Project Location:* ${data.projectLocation}`,
      `💬 *Preferred Contact:* ${data.preferredContact}`,
      `---------------------------------------`,
      `📋 *Project Scope / Requirements:*`,
      `${data.projectDescription}`,
      `---------------------------------------`,
      `Sent via jemketengineering.com web portal`,
    ]
      .filter(Boolean)
      .join('\n');
  }
}
