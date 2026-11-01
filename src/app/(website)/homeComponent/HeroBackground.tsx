"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// The slideshow loads in the browser only, on top of a plain first image. That plain image is in the
// server HTML, so it stays the page's fast-loading main (LCP) image.
const HeroSwiper = dynamic(() => import("./HeroSwiper"), { ssr: false });

const HeroBackground: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => (
  <>
    <Image
      src={images[0]}
      alt={alt}
      fill
      preload
      fetchPriority="high"
      sizes="100vw"
      className="object-cover lg:object-left max-lg:object-right/[55%]"
    />
    {images.length > 1 && <HeroSwiper images={images} alt={alt} />}
  </>
);

export default HeroBackground;
