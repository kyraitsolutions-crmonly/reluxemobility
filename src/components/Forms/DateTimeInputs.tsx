"use client";

import dynamic from "next/dynamic";
import { useState, type ComponentType } from "react";
import type { DatePickerProps } from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import CustomSelect from "./CustomSelect";
import { fieldTheme, inputClass, type FieldVariant } from "./formStyles";

// The date picker (with date-fns and floating-ui) is the heaviest script on the forms, so it only loads
// once someone reaches for a date field; until then a look-alike input stands in.
// Its stylesheet comes along with it, so it isn't part of the page CSS that blocks the first paint.
const loadDatePicker = () =>
  Promise.all([import("react-datepicker"), import("react-datepicker/dist/react-datepicker.css")]).then(([mod]) => mod);
const DatePicker = dynamic(
  () =>
    loadDatePicker().then(
      (mod) => mod.default as unknown as ComponentType<DatePickerProps>,
    ),
  {
    ssr: false,
    loading: () => (
      <input
        aria-hidden="true"
        className={`${inputClass()} pr-11`}
        placeholder="DD-MM-YYYY"
        readOnly
        tabIndex={-1}
      />
    ),
  },
);

export const formatDate = (date: Date) =>
  [date.getDate(), date.getMonth() + 1]
    .map((part) => String(part).padStart(2, "0"))
    .join("-") + `-${date.getFullYear()}`;

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
  const [isActive, setIsActive] = useState(false);
  const fieldClassName = `${inputClass(variant, hasError)} cursor-pointer caret-transparent pr-11`;

  const activate = () => {
    setMinDate(getMinDate());
    setIsActive(true);
  };

  return (
    <div className="relative">
      {!isActive ? (
        <input
          className={fieldClassName}
          id={id}
          inputMode="none"
          name={name}
          onFocus={activate}
          onPointerDown={activate}
          onPointerEnter={() => void loadDatePicker()}
          placeholder="DD-MM-YYYY"
          readOnly
          value={value ? formatDate(value) : ""}
        />
      ) : (
        <DatePicker
          autoFocus
          startOpen
          calendarClassName="form-datepicker-calendar"
          className={fieldClassName}
          dateFormat="dd-MM-yyyy"
          dayClassName={() => "form-datepicker-day"}
          dropdownMode="select"
          id={id}
          minDate={minDate}
          name={name}
          onChange={(date: Date | null) => onChange(date)}
          onFocus={() => setMinDate(getMinDate())}
          // Calendar only: typing is blocked, and phones get no on-screen keyboard
          // (it pushes the page up and hides the calendar).
          customInput={
            <input
              inputMode="none"
              className="cursor-pointer caret-transparent"
            />
          }
          onChangeRaw={(event) => event?.preventDefault()}
          placeholderText="DD-MM-YYYY"
          popperClassName="z-[9999]"
          selected={value}
          showMonthDropdown
          showPopperArrow={false}
          showYearDropdown
          wrapperClassName="relative  block w-full"
        />
      )}
      <FiCalendar
        aria-hidden="true"
        className={`pointer-events-none absolute right-4 top-6 size-4 -translate-y-1/2 ${fieldTheme(variant).icon}`}
      />
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
  // Earliest slot offered (e.g. for a pickup today); earlier slots are left out of the list.
  minTime?: Date | null;
}

// 12:00 AM, 12:15 AM, 12:30 AM, 12:45 AM … 11:45 PM
const timeSlots = Array.from(
  { length: 96 },
  (_, index) => new Date(2000, 0, 1, Math.floor(index / 4), (index % 4) * 15),
);
const timeOptions = timeSlots.map(formatTime);

const minutesOf = (time: Date) => time.getHours() * 60 + time.getMinutes();

export const TimeInput: React.FC<TimeInputProps> = ({
  id,
  name,
  value,
  onChange,
  hasError = false,
  variant = "light",
  minTime,
}) => {
  const options = minTime
    ? timeOptions.filter(
        (_, index) => minutesOf(timeSlots[index]) >= minutesOf(minTime),
      )
    : timeOptions;

  return (
    <CustomSelect
      id={id}
      name={name}
      options={options}
      placeholder={options.length ? "Select time" : "No slots left today"}
      value={value ? formatTime(value) : ""}
      onChange={(option) =>
        onChange(new Date(timeSlots[timeOptions.indexOf(option)]))
      }
      hasError={hasError}
      variant={variant}
    />
  );
};
