"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const accordionListeners = new Set<(activeIndex: number) => void>();

const Accordion: React.FC<{
  q: string;
  a: string;
  i: number;
  image?: string;
  setSelectTitle: React.Dispatch<React.SetStateAction<string>>;
}> = ({ q: question, a: answer, i: index, setSelectTitle, image }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  useEffect(() => {
    const closeOtherItems = (activeIndex: number) => {
      if (activeIndex !== index) setIsOpen(false);
    };

    accordionListeners.add(closeOtherItems);
    return () => {
      accordionListeners.delete(closeOtherItems);
    };
  }, [index]);

  return (
    <div className="border-b border-secondary py-4 px-4">
      <button
        type="button"
        onClick={() => {
          const nextIsOpen = !isOpen;
          setIsOpen(nextIsOpen);
          if (nextIsOpen) {
            accordionListeners.forEach((listener) => listener(index));
          }
          setSelectTitle(question);
        }}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3
          className={clsx(
            `text-2xl font-secondary font-normal uppercase pr-4 flex items-center gap-3.5`,
            isOpen ? "text-primary" : "text-light"
          )}
        >
          {" "}
          <span className="font-body text-sm font-light">
            0{index + 1}
          </span>{" "}
          {question}
        </h3>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-40 text-primary" : "text-light"
          }`}
        >
          <DropDownIcon />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 text-start text-dark font-light ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative w-full aspect-square md:hidden mb-3">
            <Image
              src={image || ""}
              alt={question}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

export const DropDownIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.965 0.634216C11.2774 0.946632 11.2774 1.45317 10.965 1.76558L1.8984 10.8322C1.58598 11.1446 1.07945 11.1446 0.767027 10.8322C0.454611 10.5198 0.454611 10.0133 0.767027 9.70094L9.83374 0.634216C10.1461 0.3218 10.6526 0.3218 10.965 0.634216Z"
      fill="currentColor"
    />
    <path
      d="M1.95827e-06 1.20039C2.03552e-06 0.758567 0.358178 0.400391 0.800002 0.400391L10.4 0.400392C10.8418 0.400393 11.2 0.758569 11.2 1.20039L11.2 10.8004C11.2 11.2422 10.8418 11.6004 10.4 11.6004C9.95816 11.6004 9.6 11.2422 9.6 10.8004L9.6 2.00039L0.800002 2.00039C0.358178 2.00039 1.88102e-06 1.64221 1.95827e-06 1.20039Z"
      fill="currentColor"
    />
  </svg>
);
