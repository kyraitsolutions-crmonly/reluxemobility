import { TrustedEntitiesProps } from "@/@types/aboutPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import SlidingTitle from "@/components/sliders/SlidingTitle";

const TrustedEntities: React.FC<TrustedEntitiesProps> = ({
  title,
  description,
  organizations,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <div className="text-center space-y-3">
        <SectionHeading title={title} titleClassName="text-2xl! md:text-3xl!" />
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <SlidingTitle items={organizations} />
    </SectionWithContainer>
  );
};

export default TrustedEntities;
