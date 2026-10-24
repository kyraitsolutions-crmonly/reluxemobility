"use client";

import { ReactNode, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { Swiper as SwiperInstance } from "swiper";
import SwiperCarousel from "./SwiperCarousel";

interface ArrowCarouselProps {
  header: ReactNode;
  slides: ReactNode[];
  dark?: boolean;
  perView?: 2 | 3;
}

const ArrowCarousel: React.FC<ArrowCarouselProps> = ({
  header,
  slides,
  dark = false,
  perView = 3,
}) => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [edges, setEdges] = useState({ isBeginning: true, isEnd: false });

  const updateEdges = (instance: SwiperInstance) =>
    setEdges({ isBeginning: instance.isBeginning, isEnd: instance.isEnd });

  const arrowClassName = `flex size-10 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-40 ${
    dark
      ? "border-white/20 text-white hover:border-white"
      : "border-line bg-white text-dark hover:border-accent hover:text-accent"
  }`;

  return (
    <div className="md:space-y-10 space-y-6">
      <div className="flex items-end justify-between gap-6">
        <div className="min-w-0">{header}</div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            className={arrowClassName}
            disabled={edges.isBeginning}
            onClick={() => swiper?.slidePrev()}
          >
            <LuChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className={arrowClassName}
            disabled={edges.isEnd}
            onClick={() => swiper?.slideNext()}
          >
            <LuChevronRight />
          </button>
        </div>
      </div>

      <SwiperCarousel
        data={slides}
        renderSlide={(slide) => slide}
        className="overflow-visible!"
        swiperSlideClassName="h-auto!"
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: perView },
        }}
        onSwiper={(instance) => {
          setSwiper(instance);
          updateEdges(instance);
        }}
        onSlideChange={updateEdges}
        onResize={updateEdges}
      />
    </div>
  );
};

export default ArrowCarousel;
