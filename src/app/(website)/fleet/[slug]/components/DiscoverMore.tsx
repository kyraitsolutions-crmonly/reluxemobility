import { DiscoverMoreProps } from "@/@types/fleetPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const DiscoverMore: React.FC<DiscoverMoreProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <div className="text-center space-y-2">
        <SectionHeading
          title={title}
          textCenter
          titleClassName="text-2xl! md:text-3xl!"
        />
        <p className="text-sm italic text-secondary">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/fleet/${item.slug}`}
            className="group relative flex aspect-16/10 items-end overflow-hidden rounded-2xl bg-quaternary"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-dark via-dark/80 to-transparent" />
            <div className="relative p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-beige">
                {item.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default DiscoverMore;
