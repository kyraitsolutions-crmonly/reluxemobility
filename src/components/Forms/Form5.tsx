"use client";

import { CorporateLeadFormProps } from "@/@types/corporatePageType";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { useId, useState, type FocusEvent, type FormEvent } from "react";
import CustomSelect from "./CustomSelect";
import FormStatus from "./FormStatus";
import { accentSubmit, errorTextClass, inputClass, labelClass, submitButtonClass } from "./formStyles";

type FieldName = "name" | "company" | "email" | "phone" | "businessVolume";

type TextField = {
  name: Exclude<FieldName, "businessVolume">;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  pattern?: string;
  error: string;
};

const textFields: TextField[] = [
  { name: "name", label: "Full Name", placeholder: "Your name", type: "text", autoComplete: "name", error: "Please enter your name." },
  { name: "company", label: "Company Name", placeholder: "Organization / PSU", type: "text", autoComplete: "organization", error: "Please enter your company name." },
  { name: "email", label: "Work Email", placeholder: "name@company.com", type: "email", autoComplete: "email", error: "Please enter a valid email address." },
  { name: "phone", label: "Phone Number", placeholder: "10-digit mobile number", type: "tel", autoComplete: "tel", pattern: "[6-9][0-9]{9}", error: "Please enter a valid 10-digit phone number." },
];

const Form5: React.FC<CorporateLeadFormProps> = ({ title, description, businessVolumes, submitLabel }) => {
  const id = useId();
  const [errors, setErrors] = useState<Partial<Record<FieldName, boolean>>>({});
  const { submitLead, status, error, isSubmitting, resetStatus } = useLeadSubmit();
  // Editing the form again clears the last "sent" or error message.
  const clearStatus = () => status !== "submitting" && resetStatus();

  const setError = (name: string, hasError: boolean) =>
    setErrors((current) => ({ ...current, [name]: hasError }));

  const checkField = (event: FocusEvent<HTMLInputElement>) =>
    setError(event.currentTarget.name, !event.currentTarget.validity.valid);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) ?? "");
    const sent = await submitLead({
      formName: "Corporate Account Request",
      name: read("name"),
      email: read("email"),
      phone: read("phone"),
      company: read("company"),
      customFields: { businessVolume: read("businessVolume") },
    });

    if (sent) form.reset();
  };

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-8">
      <h2 className="text-xl font-semibold text-dark">{title}</h2>
      <p className="mt-1 text-sm text-secondary">{description}</p>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={handleSubmit}
        onInvalidCapture={(event) => setError((event.target as HTMLInputElement).name, true)}
        onChange={() => clearStatus()}
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {textFields.map((field) => {
            const fieldId = `${id}-${field.name}`;
            const hasError = !!errors[field.name];

            return (
              <div className="flex min-w-0 flex-col gap-2" key={field.name}>
                <label className={labelClass()} htmlFor={fieldId}>
                  {field.label}*
                </label>
                <input
                  className={inputClass("light", hasError)}
                  id={fieldId}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  inputMode={field.type === "tel" ? "numeric" : undefined}
                  maxLength={field.type === "tel" ? 10 : undefined}
                  pattern={field.pattern}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? `${fieldId}-error` : undefined}
                  onBlur={checkField}
                  required
                />
                {hasError && (
                  <span id={`${fieldId}-error`} className={errorTextClass}>
                    {field.error}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass()} htmlFor={`${id}-businessVolume`}>
            Monthly Travel Budget*
          </label>
          <CustomSelect
            id={`${id}-businessVolume`}
            name="businessVolume"
            options={businessVolumes}
            placeholder="Select approximate monthly spend"
            onChange={() => {
              setError("businessVolume", false);
              clearStatus();
            }}
            hasError={!!errors.businessVolume}
            required
          />
          {errors.businessVolume && (
            <span className={errorTextClass}>Please select your monthly travel budget.</span>
          )}
        </div>

        <button className={`mt-1 uppercase tracking-wider ${submitButtonClass(accentSubmit)} disabled:opacity-60`} disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending…" : submitLabel}
        </button>

        <FormStatus status={status} error={error} />
      </form>
    </div>
  );
};

export default Form5;
