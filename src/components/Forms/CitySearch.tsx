"use client";

import { tier1CityNames } from "@/utils/cities";
import { useId, useState, type KeyboardEvent } from "react";
import { FiCheck, FiMapPin } from "react-icons/fi";
import { fieldTheme, inputClass, type FieldVariant } from "./formStyles";

interface CitySearchProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  // Cities to search. The tier-1 cities are what shows before anything is typed.
  options: string[];
  // PAN-India fields also accept a city that isn't in the list.
  allowCustom?: boolean;
  // Cities already used elsewhere in the trip: shown as taken and can't be picked again.
  taken?: string[];
  hasError?: boolean;
  variant?: FieldVariant;
}

const MAX_RESULTS = 8;

const matchCities = (options: string[], query: string) => {
  const text = query.trim().toLowerCase();
  if (!text) return options.filter((city) => (tier1CityNames as string[]).includes(city));

  const starts = options.filter((city) => city.toLowerCase().startsWith(text));
  const contains = options.filter((city) => !starts.includes(city) && city.toLowerCase().includes(text));
  return [...starts, ...contains].slice(0, MAX_RESULTS);
};

const CitySearch: React.FC<CitySearchProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  options,
  allowCustom = false,
  taken = [],
  hasError = false,
  variant = "light",
}) => {
  const listId = useId();
  const theme = fieldTheme(variant);
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Follow outside changes (swap, reset) without an effect.
  const [lastValue, setLastValue] = useState(value);
  if (value !== lastValue) {
    setLastValue(value);
    setQuery(value);
  }

  const typed = query.trim();
  const searchText = query === value ? "" : query;
  const matches = matchCities(options, searchText);
  const exact = matches.some((city) => city.toLowerCase() === typed.toLowerCase());
  const results = allowCustom && searchText.trim() && !exact ? [...matches, `Use “${typed}”`] : matches;
  const isTaken = (city: string) => taken.some((used) => used.toLowerCase() === city.toLowerCase());
  const cityAt = (index: number) => (index === matches.length ? typed : matches[index]);

  const choose = (index: number) => {
    const city = cityAt(index);
    if (!city || isTaken(city)) return;
    setQuery(city);
    setLastValue(city);
    onChange(city);
    setIsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) return setIsOpen(true);
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((index) => Math.min(results.length - 1, Math.max(0, index + step)));
    } else if (event.key === "Enter" && isOpen && results.length) {
      event.preventDefault();
      choose(activeIndex);
    } else if (event.key === "Escape" || event.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
        setIsOpen(false);
        // Leaving the field half-typed puts the last chosen city back.
        if (query !== value) setQuery(value);
      }}
    >
      <FiMapPin aria-hidden="true" className={`pointer-events-none absolute left-4 top-6 size-4 -translate-y-1/2 ${theme.icon}`} />
      <input
        id={id}
        name={name}
        type="text"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-activedescendant={isOpen && results.length ? `${listId}-${activeIndex}` : undefined}
        aria-invalid={hasError || undefined}
        className={`${inputClass(variant, hasError)} pl-11`}
        placeholder={placeholder}
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setActiveIndex(0);
          setIsOpen(true);
        }}
        onFocus={(event) => {
          event.currentTarget.select();
          setActiveIndex(0);
          setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />

      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          className={`absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-[10px] border p-1 shadow-xl ${theme.menu}`}
        >
          {!searchText.trim() && (
            <li className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted" role="presentation">
              Popular cities
            </li>
          )}
          {results.length ? (
            results.map((label, index) => {
              const city = cityAt(index);
              const isCurrent = city.toLowerCase() === value.toLowerCase();
              const disabled = isTaken(city);

              return (
                <li
                  key={label}
                  id={`${listId}-${index}`}
                  role="option"
                  aria-selected={isCurrent}
                  aria-disabled={disabled || undefined}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition ${
                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                  } ${index === activeIndex && !disabled ? theme.optionActive : theme.option} ${isCurrent ? theme.optionSelected : ""}`}
                >
                  <FiMapPin aria-hidden="true" className="size-4 shrink-0 text-accent" />
                  {/* The "already in trip" note sits under the name so narrow fields (stops on phones) still show the city. */}
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate">{label}</span>
                    {disabled && <span className="text-[11px] font-medium text-muted">Already in trip</span>}
                  </span>
                  {(isCurrent || disabled) && <FiCheck aria-hidden="true" className="size-4 shrink-0 text-accent" />}
                </li>
              );
            })
          ) : (
            <li className={`px-3 py-2.5 text-sm ${theme.option}`}>No matching city</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
