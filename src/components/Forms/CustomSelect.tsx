"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { FieldVariant, fieldTheme, inputClass } from "./formStyles";

interface CustomSelectProps {
  id: string;
  name: string;
  options: string[];
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  hasError?: boolean;
  onInvalid?: () => void;
  variant?: FieldVariant;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  name,
  options,
  placeholder,
  value,
  defaultValue = "",
  onChange,
  required = false,
  hasError = false,
  onInvalid,
  variant = "light",
}) => {
  const listId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [missing, setMissing] = useState(false);

  const selected = value ?? innerValue;
  const showError = hasError || missing;
  const theme = fieldTheme(variant);

  const open = () => {
    setActiveIndex(Math.max(0, options.indexOf(selected)));
    setIsOpen(true);
  };

  const choose = (option: string) => {
    if (value === undefined) setInnerValue(option);
    setMissing(false);
    onChange?.(option);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (!isOpen) return open();
        const step = event.key === "ArrowDown" ? 1 : -1;
        setActiveIndex((index) => Math.min(last, Math.max(0, index + step)));
        return;
      }
      case "Home":
      case "End":
        if (!isOpen) return;
        event.preventDefault();
        setActiveIndex(event.key === "Home" ? 0 : last);
        return;
      case "Enter":
      case " ":
        event.preventDefault();
        if (isOpen && activeIndex >= 0) choose(options[activeIndex]);
        else open();
        return;
      case "Escape":
      case "Tab":
        setIsOpen(false);
        return;
      default:
        if (event.key.length === 1) {
          const match = options.findIndex((option) =>
            option.toLowerCase().startsWith(event.key.toLowerCase())
          );
          if (match >= 0) {
            if (!isOpen) setIsOpen(true);
            setActiveIndex(match);
          }
        }
    }
  };

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <input
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0"
        name={name}
        onChange={() => {}}
        onInvalid={() => {
          setMissing(true);
          onInvalid?.();
        }}
        required={required}
        tabIndex={-1}
        value={selected}
      />

      <button
        ref={triggerRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-activedescendant={isOpen && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
        aria-invalid={showError || undefined}
        className={`${inputClass(variant, showError)} flex items-center justify-between gap-3 text-left`}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={handleKeyDown}
      >
        <span className={`truncate ${selected ? "" : theme.placeholder}`}>
          {selected || placeholder}
        </span>
        <FiChevronDown
          aria-hidden="true"
          className={`size-4 shrink-0 transition-transform ${theme.icon} ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={id}
          className={`absolute z-30 mt-2 max-h-60 w-full overflow-y-auto rounded-[10px] border p-1 shadow-xl ${theme.menu}`}
        >
          {options.map((option, index) => {
            const isSelected = option === selected;

            return (
              <li
                key={option}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={isSelected}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  index === activeIndex ? theme.optionActive : theme.option
                } ${isSelected ? theme.optionSelected : ""}`}
              >
                {option}
                {isSelected && <FiCheck aria-hidden="true" className="size-4 shrink-0 text-accent" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
