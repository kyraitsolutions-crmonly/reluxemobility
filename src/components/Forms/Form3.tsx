"use client";

import { EnquiryFormProps } from "@/@types/contactPageType";
import { TripDetails } from "@/@types/leadType";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { useId, useState, type FormEvent } from "react";
import { FiCheck } from "react-icons/fi";
import CustomSelect from "./CustomSelect";
import FormStatus from "./FormStatus";
import { darkSubmit, inputClass, labelClass, submitButtonClass, textareaClass } from "./formStyles";

type TextField = {
  name: "name" | "email" | "phone";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
};

const textFields: TextField[] = [
  { name: "name", label: "Full Name", placeholder: "e.g. Rahul Sharma", type: "text", autoComplete: "name" },
  { name: "email", label: "Email Address", placeholder: "rahul@example.com", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel", autoComplete: "tel" },
];

type FormValues = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  agreed: boolean;
};

const emptyValues = (serviceTypes: string[]): FormValues => ({
  name: "",
  email: "",
  phone: "",
  serviceType: serviceTypes[0] ?? "",
  message: "",
  agreed: true,
});

interface Form3Props extends EnquiryFormProps {
  /** trip chosen in the home page search; sent to the CRM along with the enquiry */
  trip?: TripDetails | null;
}

const Form3: React.FC<Form3Props> = ({ title, serviceTypes, trip }) => {
  const id = useId();
  const [values, setValues] = useState<FormValues>(() => emptyValues(serviceTypes));
  const { submitLead, status, error, isSubmitting, resetStatus } = useLeadSubmit();

  const updateField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== "submitting") resetStatus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sent = await submitLead({
      formName: trip ? "Home Trip Enquiry" : "Contact Page Enquiry",
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      customFields: {
        serviceType: values.serviceType,
        ...(trip && {
          pickupLocation: trip.from,
          dropLocation: trip.to,
          pickupDate: trip.date,
          pickupTime: trip.time,
        }),
      },
    });

    if (sent) setValues(emptyValues(serviceTypes));
  };

  return (
    <div className="w-full rounded-3xl border border-line/60 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgb(26_55_88/0.08)]">
      <h2 className="mb-6 text-xl font-semibold text-dark">{title}</h2>

      {trip && (
        <div className="mb-6 rounded-2xl border border-line bg-quaternary p-4 sm:p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary">Your Trip</p>
          <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {[
              ["From", trip.from],
              ["To", trip.to],
              ["Pick Up Date", trip.date],
              ["Pick Up Time", trip.time],
            ].map(([label, value]) => (
              <div className="min-w-0" key={label}>
                <dt className="text-xs text-secondary">{label}</dt>
                <dd className="font-semibold text-dark break-words">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {textFields.map((field) => {
            const fieldId = `${id}-${field.name}`;

            return (
              <div className="flex min-w-0 flex-col gap-2" key={field.name}>
                <label className={labelClass()} htmlFor={fieldId}>
                  {field.label}
                </label>
                <input
                  className={inputClass()}
                  id={fieldId}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  value={values[field.name]}
                  onChange={(event) => updateField(field.name, event.currentTarget.value)}
                  required
                />
              </div>
            );
          })}

          <div className="flex min-w-0 flex-col gap-2">
            <label className={labelClass()} htmlFor={`${id}-serviceType`}>
              Service Type
            </label>
            <CustomSelect
              id={`${id}-serviceType`}
              name="serviceType"
              options={serviceTypes}
              placeholder="Select service type"
              value={values.serviceType}
              onChange={(value) => updateField("serviceType", value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass()} htmlFor={`${id}-message`}>
            Your Message
          </label>
          <textarea
            className={textareaClass()}
            id={`${id}-message`}
            name="message"
            placeholder="How can we help you today?"
            rows={4}
            value={values.message}
            onChange={(event) => updateField("message", event.currentTarget.value)}
            required
          />
        </div>

        <label className="flex items-center gap-2.5 text-xs text-secondary" htmlFor={`${id}-agreed`}>
          <span className="relative flex size-4 shrink-0 items-center justify-center">
            <input
              className="peer size-4 appearance-none rounded border border-line-strong bg-white checked:border-dark checked:bg-dark"
              id={`${id}-agreed`}
              name="agreed"
              type="checkbox"
              checked={values.agreed}
              onChange={(event) => updateField("agreed", event.currentTarget.checked)}
              required
            />
            <FiCheck aria-hidden="true" className="pointer-events-none absolute size-3 text-white opacity-0 peer-checked:opacity-100" />
          </span>
          By sending this inquiry, you agree to our Privacy Policy.
        </label>

        <button className={`${submitButtonClass(darkSubmit)} disabled:opacity-60`} disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending…" : "Submit Message"}
        </button>

        <FormStatus status={status} error={error} />
      </form>
    </div>
  );
};

export default Form3;
