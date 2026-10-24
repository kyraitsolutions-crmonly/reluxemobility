import { OtherServicesProps } from "@/@types/servicesPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import ArrowCarousel from "@/components/sliders/ArrowCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const OtherServices: React.FC<OtherServicesProps> = ({
  title,
  description,
  linkLabel,
  items,
}) => {
  return (
    <SectionWithContainer>
      <ArrowCarousel
        header={
          <div className="space-y-2 max-w-md">
            <SectionHeading
              title={title}
              titleClassName="text-2xl! md:text-3xl!"
            />
            <p className="text-sm text-secondary">{description}</p>
          </div>
        }
        slides={items.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="group relative flex aspect-4/3 items-end overflow-hidden rounded-2xl bg-quaternary"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top  mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-dark via-dark/80 to-transparent" />
            <div className="relative space-y-1 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-white/70">{item.description}</p>
              <p className="pt-1 text-[10px] font-semibold uppercase tracking-wider text-beige">
                {linkLabel}
              </p>
            </div>
          </Link>
        ))}
      />
    </SectionWithContainer>
  );
};

export default OtherServices;
