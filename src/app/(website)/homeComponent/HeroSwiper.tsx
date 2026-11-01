"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const SLIDE_MS = 6000;
const pad = (value: number) => String(value).padStart(2, "0");

// Home banner slideshow: Swiper cross-fade with a slow zoom on the active slide (see .hero-swiper in globals.css),
// and custom controls: a slide counter plus one bar per slide that fills in gold while that slide is showing.
// Browser-only (Swiper reads the clock while rendering); HeroBackground shows the first image until it's ready.
const HeroSwiper: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Written straight to the bar every frame, so the timer doesn't re-render the slideshow.
  const showProgress = (index: number, progress: number) =>
    fillRefs.current.forEach((fill, i) => fill?.style.setProperty("transform", `scaleX(${i === index ? progress : 0})`));

  return (
    <>
      <Swiper
        className="hero-swiper absolute! inset-0 h-full w-full"
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        loop
        autoplay={{ delay: SLIDE_MS, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onRealIndexChange={(swiper) => setActive(swiper.realIndex)}
        onAutoplayTimeLeft={(swiper, _timeLeft, percentage) => showProgress(swiper.realIndex, 1 - percentage)}
      >
        {images.map((src, index) => (
          <SwiperSlide key={src} className="relative h-full w-full">
            <Image
              src={src}
              alt={index === 0 ? alt : ""}
              fill
              fetchPriority={index === 0 ? "high" : "low"}
              sizes="100vw"
              className="object-cover lg:object-left max-lg:object-right/[55%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-3 rounded-full border border-white/15 bg-navy-deep/40 py-1.5 pl-4 pr-3 text-white backdrop-blur-sm md:bottom-8 md:right-10">
        <span className="text-sm font-semibold tabular-nums text-beige" aria-live="polite">
          {pad(active + 1)}
        </span>
        <div className="flex items-center">
          {images.map((src, index) => (
            <button
              key={src}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === active}
              className="group flex h-7 items-center px-1"
              onClick={() => swiperRef.current?.slideToLoop(index)}
              type="button"
            >
              <span
                className={`relative block h-0.75 overflow-hidden rounded-full transition-all duration-500 ${
                  index === active ? "w-10 bg-white/30" : "w-5 bg-white/30 group-hover:bg-white/60"
                }`}
              >
                <span
                  ref={(fill) => {
                    fillRefs.current[index] = fill;
                  }}
                  className="absolute inset-0 origin-left scale-x-0 rounded-full bg-beige"
                />
              </span>
            </button>
          ))}
        </div>
        <span className="text-xs font-medium tabular-nums text-white/60">{pad(images.length)}</span>
      </div>
    </>
  );
};

export default HeroSwiper;
