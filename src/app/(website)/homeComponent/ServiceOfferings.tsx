import { ServiceOfferingsProps } from "@/@types/homePageType";
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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
    <div className="flex flex-col gap-2 bg-quaternary border border-[#E5E7EB0D] p-7 rounded-2xl shadow">
      <p className="text-4xl font-semibold text-dark">{props.number}</p>
      <h3 className="text-xl font-semibold text-dark">{props.title}</h3>
      <p className="text-secondary">{props.description}</p>
    </div>
  );
};
