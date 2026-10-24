"use client";

import { useId, useState, type FormEvent } from "react";
import CustomSelect from "./CustomSelect";
import { darkSubmit, errorTextClass, inputClass, labelClass, submitButtonClass, textareaClass } from "./formStyles";

type TextField = {
  name: "name" | "email" | "phone";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
};

const textFields: TextField[] = [
  { name: "name", label: "Your Name", placeholder: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email Address", placeholder: "Email address", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone Number", placeholder: "Phone number", type: "tel", autoComplete: "tel" },
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

export default function Form2() {
  const id = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [enquiryError, setEnquiryError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
    if (field === "enquiryType") setEnquiryError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full rounded-3xl bg-white p-6 sm:p-8">
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
            <label className={labelClass()} htmlFor={`${id}-enquiryType`}>
              Enquiry Type
            </label>
            <CustomSelect
              id={`${id}-enquiryType`}
              name="enquiryType"
              options={enquiryTypes}
              placeholder="Select enquiry type"
              value={values.enquiryType}
              onChange={(value) => updateField("enquiryType", value)}
              onInvalid={() => setEnquiryError(true)}
              hasError={enquiryError}
              required
            />
            {enquiryError && (
              <span className={errorTextClass} role="alert">
                Please select an enquiry type.
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass()} htmlFor={`${id}-requirements`}>
            Requirements
          </label>
          <textarea
            className={textareaClass()}
            id={`${id}-requirements`}
            name="requirements"
            placeholder="Tell us about your requirements..."
            rows={4}
            value={values.requirements}
            onChange={(event) => updateField("requirements", event.currentTarget.value)}
          />
        </div>

        <button className={submitButtonClass(darkSubmit)} type="submit">
          Submit Request
        </button>

        {submitted && (
          <p className="text-xs text-dark" role="status">
            Your details are ready. Connect the form to your enquiry API to submit them.
          </p>
        )}
      </form>
    </div>
  );
}
