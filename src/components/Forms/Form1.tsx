"use client";

import { useState, type ComponentType } from "react";
import dynamic from "next/dynamic";
import type { DatePickerProps } from "react-datepicker";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

type FormField = {
  name: "name" | "email" | "phone" | "travellers" | "city" | "date" | "message";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "number" | "dropdown" | "date" | "textarea";
  autoComplete?: string;
  inputMode?: "tel";
  options?: string[];
};

const formFields: FormField[] = [
  { name: "name", label: "Name", placeholder: "Enter your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", placeholder: "Enter email address", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", placeholder: "Phone number", type: "tel", autoComplete: "tel", inputMode: "tel" },
  { name: "travellers", label: "Travellers", placeholder: "No. of travellers", type: "number" },
  {
    name: "city",
    label: "City",
    placeholder: "Select city",
    type: "dropdown",
    options: ["Delhi NCR", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata", "Pune", "Other"],
  },
  { name: "date", label: "Date", placeholder: "DD-MM-YYYY", type: "date" },
  { name: "message", label: "Message", placeholder: "Enter your message", type: "textarea" },
];

const inputClassName =
  "h-[52px] w-full rounded-[10px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 text-[15px] text-[#111827] outline-none transition placeholder:text-[#6B7280] focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/15";

const labelClassName = "text-sm font-semibold leading-5 text-[#374151]";

// react-datepicker reads the current date while rendering, which Next.js rejects during prerender,
// so it's rendered on the client only, with a matching placeholder input in the meantime.
const DatePicker = dynamic(() => import("react-datepicker").then((mod) => mod.default as unknown as ComponentType<DatePickerProps>), {
  ssr: false,
  loading: () => <input aria-hidden="true" className={`${inputClassName} pr-11`} placeholder="DD-MM-YYYY" readOnly tabIndex={-1} />,
});

const Form1 = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [journeyDate, setJourneyDate] = useState<Date | null>(null);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  // Read "today" on interaction rather than during render, so it isn't frozen into the prerendered HTML.
  const [minDate, setMinDate] = useState<Date | undefined>(undefined);

  const renderField = (field: FormField) => {
    if (field.type === "dropdown") {
      return (
        <div
          className="relative"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsCityMenuOpen(false);
          }}
        >
          <input name={field.name} type="hidden" value={selectedCity} />
          <button
            aria-controls="city-options"
            aria-expanded={isCityMenuOpen}
            aria-haspopup="listbox"
            className={`${inputClassName} flex items-center justify-between text-left ${selectedCity ? "text-[#111827]" : "text-[#6B7280]"}`}
            id={field.name}
            onClick={() => setIsCityMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span>{selectedCity || field.placeholder}</span>
            <FiChevronDown aria-hidden="true" className={`size-4 shrink-0 transition-transform ${isCityMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {isCityMenuOpen && (
            <ul aria-labelledby={field.name} className="absolute z-20 mt-2 max-h-56 w-full overflow-y-auto rounded-[10px] border border-[#D1D5DB] bg-white p-1 shadow-lg" id="city-options" role="listbox">
              {field.options?.map((city) => (
                <li aria-selected={selectedCity === city} key={city} role="option">
                  <button
                    className="w-full rounded-lg px-3 py-2 text-left text-[15px] text-[#374151] transition hover:bg-[#F3F4F6] focus:bg-[#F3F4F6] focus:outline-none"
                    onClick={() => {
                      setSelectedCity(city);
                      setIsCityMenuOpen(false);
                    }}
                    type="button"
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    if (field.type === "date") {
      return (
        <div className="relative">
          <DatePicker
            calendarClassName="form-datepicker-calendar"
            className={`${inputClassName} pr-11`}
            dateFormat="dd-MM-yyyy"
            dayClassName={() => "form-datepicker-day"}
            id={field.name}
            minDate={minDate}
            name={field.name}
            onChange={(date: Date | null) => setJourneyDate(date)}
            onFocus={() => setMinDate(new Date())}
            placeholderText={field.placeholder}
            selected={journeyDate}
            showPopperArrow={false}
            wrapperClassName="block w-full"
          />
          <FiCalendar aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#6B7280]" />
        </div>
      );
    }

    if (field.type === "textarea") {
      return (
        <textarea
          className="min-h-[108px] w-full resize-y rounded-[10px] border border-[#D1D5DB] bg-[#F9FAFB] p-4 text-[15px] leading-6 text-[#111827] outline-none transition placeholder:text-[#6B7280] focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/15"
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
        />
      );
    }

    return (
      <input
        autoComplete={field.autoComplete}
        className={inputClassName}
        id={field.name}
        inputMode={field.inputMode}
        min={field.type === "number" ? "1" : undefined}
        name={field.name}
        placeholder={field.placeholder}
        type={field.type}
      />
    );
  };

  return (
    <form className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-10" onSubmit={(event) => event.preventDefault()}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {formFields.map((field) => (
          <div className={`flex flex-col gap-2 ${field.type === "textarea" ? "md:col-span-2 xl:col-span-3" : ""}`} key={field.name}>
            <label className={labelClassName} htmlFor={field.name}>
              {field.label}
            </label>
            {renderField(field)}
          </div>
        ))}
      </div>

      <button className="mt-8 h-14 w-full rounded-xl bg-dark px-6 text-[17px] font-bold text-white transition hover:bg-[#1F2937] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form1;
