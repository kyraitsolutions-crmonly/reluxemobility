import { MarqueeCollectionProps } from "@/@types/fleetPageType";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const MarqueeCollection: React.FC<MarqueeCollectionProps> = ({
  title,
  description,
  vehicles,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-quaternary"
      containerClassName="md:space-y-12 space-y-8"
    >
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <SectionHeading
          title={title}
          titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
        />
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((vehicle) => (
          <MarqueeCard key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default MarqueeCollection;

export const MarqueeCard: React.FC<MarqueeCollectionProps["vehicles"][0]> = ({
  category,
  name,
  image,
  highlights,
  button,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-dark text-white">
      <div className="relative aspect-16/9 bg-quaternary">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain p-6 mix-blend-multiply"
        />
      </div>

      <div className="relative flex-1 space-y-5 p-6 md:p-8">
        <div className="space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
            {category}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold">{name}</h3>
        </div>
        <ul className="grid grid-cols-3 gap-4">
          {highlights.map((highlight) => (
            <li key={highlight.label}>
              <p className="font-semibold">{highlight.value}</p>
              <p className="text-xs text-white/60">{highlight.label}</p>
            </li>
          ))}
        </ul>
        <LinkButton
          {...button}
          className="rounded-xl border-white bg-white text-sm text-dark tracking-normal!"
        />
      </div>
    </div>
  );
};
