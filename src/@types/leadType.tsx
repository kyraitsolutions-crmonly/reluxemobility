/** What a form hands to useLeadSubmit */
export interface LeadInput {
  /** Which form sent the lead, e.g. "Contact Page Enquiry" — stored as the lead title */
  formName: string;
  name: string;
  email?: string;
  phone: string;
  message?: string;
  company?: string;
  /** Anything else the form collects (service, vehicle class, trip details…) */
  customFields?: Record<string, string>;
}

/** Shape the lead webhook expects */
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

/** Trip chosen on the home page and carried to the contact page */
export interface TripDetails {
  from: string;
  to: string;
  date: string;
  time: string;
}
