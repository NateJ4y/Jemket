export type ServiceDivisionId = 'borehole' | 'electrical-building' | 'solar';

export interface ServiceItem {
  id: string;
  name: string;
  description?: string;
  category: 'core' | 'electrical' | 'building' | 'solar' | 'borehole';
}

export interface ServiceDivision {
  id: ServiceDivisionId;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  pageNumber: string;
  description: string;
  accentColor: string;
  iconName: string;
  ctaText: string;
  services: ServiceItem[];
  buildingServices?: ServiceItem[];
  benefits: string[];
  applications: string[];
  processSteps?: {
    step: string;
    title: string;
    description: string;
  }[];
}

export interface ProcessStage {
  number: string;
  title: string;
  shortDescription: string;
  details: string;
  deliverables: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CompanyPillar {
  title: string;
  description: string;
  badge: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  divisionId: ServiceDivisionId;
  divisionLabel: string;
  category: string;
  sector: 'Residential' | 'Commercial' | 'Agricultural' | 'Industrial' | 'Institutional';
  challenge: string;
  solution: string;
  outcome: string;
  specifications: { label: string; value: string }[];
  highlights: string[];
}

export interface CustomerSector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keySolutions: string[];
  iconName: string;
}

export interface ContactInfo {
  phoneNumbers: {
    display: string;
    raw: string;
    label: string;
  }[];
  email: string;
  website: string;
  serviceRadiusNotice: string;
}

export interface QuoteFormState {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  projectLocation: string;
  projectDescription: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
  sectorType: string;
}

export interface FormValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceRequired?: string;
  projectLocation?: string;
  projectDescription?: string;
}
