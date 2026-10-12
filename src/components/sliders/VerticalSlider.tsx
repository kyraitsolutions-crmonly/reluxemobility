"use client";

import Image from "next/image";
import clsx from "clsx";

interface VerticalSliderProps {
  slides: {
    image: string;
    alt: string;
  }[];
  activeIndex: number;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

export default function VerticalSlider({
  slides,
  activeIndex,
  className,
  overlayClassName,
  children,
}: VerticalSliderProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden w-full h-[700px] md:h-screen",
        className
      )}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[700px] md:h-screen"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "absolute inset-0 z-10 p-6 md:p-12",
          overlayClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}