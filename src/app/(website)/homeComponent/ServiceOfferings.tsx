import { ServiceOfferingsProps } from "@/@types/homePageType";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const ServiceOfferings: React.FC<ServiceOfferingsProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-8 space-y-4">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <SectionHeading title={title} />
        <p className="text-secondary">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">
        {items.map((item) => (
          <ServiceOfferingCard key={item.id} {...item} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ServiceOfferings;

export const ServiceOfferingCard: React.FC<
  ServiceOfferingsProps["items"][0]
> = (props) => {
  return (
    <Link
      href={props.href}
      className="group flex flex-col gap-2 bg-quaternary border border-[#E5E7EB0D] lg:p-7 p-4 rounded-2xl shadow transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
    >
      <p className="text-4xl font-semibold text-dark">{props.number}</p>
      <h3 className="text-xl font-semibold text-dark">{props.title}</h3>
      <p className="text-secondary">{props.description}</p>
      <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-dark">
        Book now
        <FiArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};
