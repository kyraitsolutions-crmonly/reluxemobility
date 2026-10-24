export interface LeadInput {
  formName: string;
  name: string;
  email?: string;
  phone: string;
  message?: string;
  company?: string;
  customFields?: Record<string, string>;
}

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  mobile: string;
  description: string;
  company: string;
  title: string;
  website: string;
  customFields: Record<string, string>;
}

export interface TripDetails {
  serviceType: string;
  from: string;
  stop: string;
  to: string;
  package: string;
  date: string;
  returnDate: string;
  time: string;
}
