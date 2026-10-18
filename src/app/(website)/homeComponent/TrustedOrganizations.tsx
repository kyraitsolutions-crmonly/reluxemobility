import { TrustedOrganizationsProps } from "@/@types/homePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { SectionHeading } from "@/components/typography";

const TrustedOrganizations: React.FC<TrustedOrganizationsProps> = ({
  title,
  description,
  organizations,
}) => {
  console.log("logos", organizations.length);
  return (
    <SectionWithContainer containerClassName="md:space-y-16 space-y-10">
      <div className="text-center space-y-3">
        <SectionHeading title={title} />
        <p className="text-secondary">{description}</p>
      </div>
      <SlidingTitle items={organizations} />
    </SectionWithContainer>
  );
};

export default TrustedOrganizations;
