"use client";

import { ServicePackagesProps } from "@/@types/servicesPageType";
import { useState } from "react";
import { LuCheck, LuChevronRight, LuCircleCheck } from "react-icons/lu";

const ServicePackages: React.FC<ServicePackagesProps> = ({
  title,
  items,
  inclusions,
}) => {
  // the middle package is highlighted by default, as in the design
  const [selectedId, setSelectedId] = useState(items[Math.floor(items.length / 2)]?.id);

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-dark">{title}</h3>

      <div role="radiogroup" aria-label={title} className="mt-5 space-y-3">
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelectedId(item.id)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${
                isSelected
                  ? "border-accent bg-white"
                  : "border-transparent bg-quaternary hover:border-line"
              }`}
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {item.label}
                </span>
                <span className="block text-sm text-dark">{item.value}</span>
              </span>
              {isSelected ? (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-white">
                  <LuCheck />
                </span>
              ) : (
                <LuChevronRight className="shrink-0 text-secondary" />
              )}
            </button>
          );
        })}
      </div>

      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {inclusions.map((inclusion) => (
          <li key={inclusion} className="flex items-center gap-2.5 text-xs text-secondary">
            <LuCircleCheck className="shrink-0 text-accent" />
            {inclusion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePackages;
