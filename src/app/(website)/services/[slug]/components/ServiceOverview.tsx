import { ServiceOverviewProps } from "@/@types/servicesPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ServicePackages from "./ServicePackages";

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  title,
  paragraphs,
  features,
  packages,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-quaternary">
      <div className="grid lg:grid-cols-[1fr_.55fr] gap-10 lg:gap-16 items-start">
        <div className="space-y-5">
          <SectionHeading
            title={title}
            titleClassName="text-2xl! md:text-3xl!"
          />
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base text-secondary">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-6">
            {features.map((feature) => (
              <div key={feature.id} className="space-y-2">
                <span className="block text-lg text-accent">{feature.icon}</span>
                <h3 className="font-semibold text-dark">{feature.title}</h3>
                <p className="text-sm text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <ServicePackages {...packages} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ServiceOverview;
