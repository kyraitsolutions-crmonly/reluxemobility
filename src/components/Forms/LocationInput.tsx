"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { errorTextClass, fieldTheme, inputClass, type FieldVariant } from "./formStyles";

interface LocationInputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  showError?: boolean;
  near?: { lat: number; lon: number };
  cityOnly?: boolean;
  variant?: FieldVariant;
}

type PhotonFeature = {
  properties: {
    name?: string;
    street?: string;
    district?: string;
    city?: string;
    county?: string;
    state?: string;
    osm_key?: string;
    osm_value?: string;
  };
};

const PLACE_SEARCH_URL = "https://photon.komoot.io/api/";
const INDIA_BBOX = "68.1,6.5,97.4,35.7";

const toLabel = ({ properties: p }: PhotonFeature) =>
  [...new Set([p.name, p.street, p.district ?? p.city, p.state].filter(Boolean))].join(", ");
const toCityLabel = ({ properties: p }: PhotonFeature) => p.name ?? p.city ?? "";
const isCity = ({ properties: p }: PhotonFeature) =>
  p.osm_key === "place" && ["city", "town", "village", "municipality"].includes(p.osm_value ?? "");

const LocationInput: React.FC<LocationInputProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  showError = false,
  near,
  cityOnly = false,
  variant = "light",
}) => {
  const listId = useId();
  const theme = fieldTheme(variant);
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const requestRef = useRef<AbortController>(undefined);

  const [lastValue, setLastValue] = useState(value);
  if (value !== lastValue) {
    setLastValue(value);
    setQuery(value);
  }

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
      requestRef.current?.abort();
    },
    []
  );

  const search = async (text: string) => {
    requestRef.current?.abort();
    const controller = new AbortController();
    requestRef.current = controller;
    setIsLoading(true);
    setIsOpen(true);

    try {
      const params = new URLSearchParams({ q: text, limit: cityOnly ? "20" : "6", lang: "en", bbox: INDIA_BBOX });
      if (near) {
        params.set("lat", String(near.lat));
        params.set("lon", String(near.lon));
      }
      const response = await fetch(`${PLACE_SEARCH_URL}?${params}`, { signal: controller.signal });
      const data: { features: PhotonFeature[] } = await response.json();
      const features = cityOnly ? data.features.filter(isCity) : data.features;
      const labels = [...new Set(features.map(cityOnly ? toCityLabel : toLabel).filter(Boolean))];

      setSuggestions(labels);
      setActiveIndex(labels.length ? 0 : -1);
      setIsOpen(true);
    } catch (error) {
      if ((error as Error).name !== "AbortError") setSuggestions([]);
    } finally {
      if (requestRef.current === controller) setIsLoading(false);
    }
  };

  const handleType = (text: string) => {
    setQuery(text);
    if (value) onChange("");

    clearTimeout(timerRef.current);
    if (text.trim().length < 3) {
      requestRef.current?.abort();
      setSuggestions([]);
      setIsOpen(false);
      setIsLoading(false);
      return;
    }
    timerRef.current = setTimeout(() => search(text.trim()), 300);
  };

  const choose = (place: string) => {
    setQuery(place);
    setLastValue(place);
    onChange(place);
    setIsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || !suggestions.length) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((index) => Math.min(suggestions.length - 1, Math.max(0, index + step)));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      choose(suggestions[activeIndex]);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const errorId = `${id}-error`;

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <FiSearch aria-hidden="true" className={`pointer-events-none absolute left-4 top-6 size-4 -translate-y-1/2 ${theme.icon}`} />
      <input
        id={id}
        name={name}
        type="text"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-activedescendant={isOpen && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
        aria-invalid={showError || undefined}
        aria-describedby={showError ? errorId : undefined}
        className={`${inputClass(variant, showError)} pl-11`}
        placeholder={placeholder}
        value={query}
        onChange={(event) => handleType(event.currentTarget.value)}
        onFocus={() => suggestions.length && !value && setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {showError && (
        <p id={errorId} className={`mt-1.5 ${errorTextClass}`}>
          {cityOnly ? "Please select a city from the dropdown" : "Please select a location from the dropdown"}
        </p>
      )}

      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          className={`absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-[10px] border p-1 shadow-xl ${theme.menu}`}
        >
          {suggestions.length ? (
            suggestions.map((place, index) => (
              <li
                key={place}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(place)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-start gap-2.5 rounded-lg px-3 py-2.5 text-sm transition ${
                  index === activeIndex ? theme.optionActive : theme.option
                }`}
              >
                <FiMapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {place}
              </li>
            ))
          ) : (
            <li className={`px-3 py-2.5 text-sm ${theme.option}`}>{isLoading ? "Searching…" : "No places found"}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
