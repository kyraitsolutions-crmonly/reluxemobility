"use client";

import dynamic from "next/dynamic";
import { useState, type ComponentType } from "react";
import type { DatePickerProps } from "react-datepicker";
import { FiCalendar, FiClock } from "react-icons/fi";
import { fieldTheme, inputClass, type FieldVariant } from "./formStyles";

const DatePicker = dynamic(() => import("react-datepicker").then((mod) => mod.default as unknown as ComponentType<DatePickerProps>), {
  ssr: false,
  loading: () => <input aria-hidden="true" className={`${inputClass()} pr-11`} placeholder="DD-MM-YYYY" readOnly tabIndex={-1} />,
});

export const formatDate = (date: Date) =>
  [date.getDate(), date.getMonth() + 1].map((part) => String(part).padStart(2, "0")).join("-") + `-${date.getFullYear()}`;

export const formatTime = (time: Date) =>
  `${time.getHours() % 12 || 12}:${String(time.getMinutes()).padStart(2, "0")} ${time.getHours() < 12 ? "AM" : "PM"}`;

interface DateInputProps {
  id: string;
  name: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  getMinDate?: () => Date | undefined;
  hasError?: boolean;
  variant?: FieldVariant;
}

export const DateInput: React.FC<DateInputProps> = ({
  id,
  name,
  value,
  onChange,
  getMinDate = () => new Date(),
  hasError = false,
  variant = "light",
}) => {
  const [minDate, setMinDate] = useState<Date | undefined>(undefined);

  return (
    <div className="relative">
      <DatePicker
        calendarClassName="form-datepicker-calendar"
        className={`${inputClass(variant, hasError)} pr-11`}
        dateFormat="dd-MM-yyyy"
        dayClassName={() => "form-datepicker-day"}
        dropdownMode="select"
        id={id}
        minDate={minDate}
        name={name}
        onChange={(date: Date | null) => onChange(date)}
        onFocus={() => setMinDate(getMinDate())}
        placeholderText="DD-MM-YYYY"
        popperClassName="z-[9999]"
        selected={value}
        showMonthDropdown
        showPopperArrow={false}
        showYearDropdown
        wrapperClassName="relative  block w-full"
      />
      <FiCalendar aria-hidden="true" className={`pointer-events-none absolute right-4 top-6 size-4 -translate-y-1/2 ${fieldTheme(variant).icon}`} />
    </div>
  );
};

interface TimeInputProps {
  id: string;
  name: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  hasError?: boolean;
  variant?: FieldVariant;
}

export const TimeInput: React.FC<TimeInputProps> = ({ id, name, value, onChange, hasError = false, variant = "light" }) => (
  <div className="relative">
    <DatePicker
      calendarClassName="form-datepicker-calendar"
      className={`${inputClass(variant, hasError)} pr-11`}
      dateFormat="h:mm aa"
      id={id}
      name={name}
      onChange={(time: Date | null) => onChange(time && new Date(time))}
      placeholderText="Enter time"
      popperClassName="z-[9999]"
      selected={value}
      showPopperArrow={false}
      showTimeInput
      showTimeSelectOnly
      timeInputLabel="Pick Up Time"
      wrapperClassName="relative  block w-full"
    />
    <FiClock aria-hidden="true" className={`pointer-events-none absolute right-4 top-6 size-4 -translate-y-1/2 ${fieldTheme(variant).icon}`} />
  </div>
);
