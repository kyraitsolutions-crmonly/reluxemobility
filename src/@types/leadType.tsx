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
  // Cab category picked in Plan Your Journey (optional filter for Explore Cars).
  category?: string;
  // Car chosen on Explore Cars, e.g. "Tempo Traveller (12+1)".
  car?: string;
}
