import { ServiceDetail, ServiceDetailsProps } from "@/@types/servicesPageType";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ items }) => {
  return (
    <SectionWithContainer containerClassName="space-y-16 md:space-y-24">
      {items.map((item, index) => (
        <ServiceRow key={item.id} {...item} reverse={index % 2 === 1} />
      ))}
    </SectionWithContainer>
  );
};

export default ServiceDetails;

export const ServiceRow: React.FC<ServiceDetail & { reverse: boolean }> = ({
  id,
  eyebrow,
  title,
  description,
  points,
  button,
  image,
  stats,
  reverse,
}) => {
  return (
    <div
      id={id}
      className="scroll-mt-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <div className={`space-y-5 ${reverse ? "lg:order-2" : ""}`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl/tight font-semibold text-dark">
          {title}
        </h2>
        <p className="text-secondary">{description}</p>
        <ul className="space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm font-medium text-dark">
              <span className="size-2 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
        <LinkButton
          {...button}
          className="rounded-lg border-dark bg-dark text-sm text-white tracking-normal!"
        />
      </div>

      {image && (
        <div className="relative w-full aspect-4/3 overflow-hidden rounded-3xl bg-quaternary shadow-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-6"
          />
        </div>
      )}

      {stats && (
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-quaternary p-6 md:p-10">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-2xl font-semibold text-accent">{stat.value}</p>
              <p className="text-xs text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
