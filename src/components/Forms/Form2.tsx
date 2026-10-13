"use client";

import { useId, useState, type FormEvent } from "react";

 type TextField = {
  name: "name" | "email" | "phone";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
};

const textFields: TextField[] = [
  {
    name: "name",
    label: "Your Name",
    placeholder: "Your name",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Email address",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Phone number",
    type: "tel",
    autoComplete: "tel",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "Corporate Travel",
  "Airport Transfer",
  "Employee Transportation",
  "Event Transportation",
  "Other",
];

type FormValues = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  requirements: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  requirements: "",
};

const labelClassName = "block text-[10px] font-normal leading-[14px] text-[#374151]";
const inputClassName =
  "h-[38px] w-full rounded-[7px] border border-[#D1D5DB] bg-[#F9FAFB] px-3 text-[11px] text-[#111827] outline-none transition placeholder:text-[#6B7280] focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10";

export default function Form2() {
  const id = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [enquiryError, setEnquiryError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = <K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
    if (field === "enquiryType") setEnquiryError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.enquiryType) {
      setEnquiryError(true);
      setDropdownOpen(true);
      return;
    }

    // Connect your enquiry API here to send the values to your backend.
    setEnquiryError(false);
    setSubmitted(true);
  };

  return (
    <div className="w-full rounded-[20px] bg-white p-5 sm:p-7">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-3.5 gap-y-3 sm:grid-cols-2">
          {textFields.map((field) => {
            const fieldId = `${id}-${field.name}`;

            return (
              <div className="flex min-w-0 flex-col gap-1.5" key={field.name}>
                <label className={labelClassName} htmlFor={fieldId}>
                  {field.label}
                </label>
                <input
                  className={inputClassName}
                  id={fieldId}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  value={values[field.name]}
                  onChange={(event) =>
                    updateField(field.name, event.currentTarget.value)
                  }
                  required
                />
              </div>
            );
          })}

          <div className="flex min-w-0 flex-col gap-1.5">
            <span className={labelClassName} id={`${id}-enquiry-label`}>
              Enquiry Type
            </span>
            <div
              className="relative"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setDropdownOpen(false);
                }
              }}
            >
              <input
                aria-label="Enquiry Type"
                className="sr-only"
                name="enquiryType"
                tabIndex={-1}
                value={values.enquiryType}
                readOnly
              />
              <button
                id={`${id}-enquiry-trigger`}
                className={`${inputClassName} flex items-center justify-between text-left ${values.enquiryType ? "text-[#111827]" : "text-[#6B7280]"} ${enquiryError ? "border-red-500" : ""}`}
                type="button"
                aria-labelledby={`${id}-enquiry-label`}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                aria-controls={`${id}-enquiry-options`}
                aria-invalid={enquiryError}
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <span>{values.enquiryType || "Enquiry type"}</span>
                <svg
                  className={`ml-2 size-3.5 shrink-0 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m4 6 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <ul
                  id={`${id}-enquiry-options`}
                  className="absolute z-30 mt-1.5 max-h-52 w-full overflow-y-auto rounded-lg border border-[#D1D5DB] bg-white p-1 shadow-lg"
                  role="listbox"
                  aria-labelledby={`${id}-enquiry-label`}
                >
                  {enquiryTypes.map((option) => (
                    <li key={option} role="option" aria-selected={values.enquiryType === option}>
                      <button
                        className={`w-full rounded-md px-3 py-2 text-left text-xs text-[#374151] transition hover:bg-[#F3F4F6] focus:bg-[#F3F4F6] focus:outline-none ${values.enquiryType === option ? "bg-[#F3F4F6] font-medium" : ""}`}
                        type="button"
                        onClick={() => {
                          updateField("enquiryType", option);
                          setDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {enquiryError && (
              <span className="text-[11px] text-red-600" role="alert">
                Please select an enquiry type.
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={labelClassName} htmlFor={`${id}-requirements`}>
            Requirements
          </label>
          <textarea
            className="min-h-[87px] w-full resize-y rounded-[7px] border border-[#D1D5DB] bg-[#F9FAFB] p-3 text-[11px] leading-5 text-[#111827] outline-none transition placeholder:text-[#6B7280] focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
            id={`${id}-requirements`}
            name="requirements"
            placeholder="Tell us about your requirements..."
            rows={4}
            value={values.requirements}
            onChange={(event) => updateField("requirements", event.currentTarget.value)}
          />
        </div>

        <button
          className="mt-0.5 h-[40px] w-full rounded-[8px] bg-[#111827] px-5 text-[12px] font-semibold text-white transition hover:bg-[#1F2937] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111827]"
          type="submit"
        >
          Submit Request
        </button>

        {submitted && (
          <p className="text-xs text-[#374151]" role="status">
            Your details are ready. Connect the form to your enquiry API to submit them.
          </p>
        )}
      </form>
    </div>
  );
}
