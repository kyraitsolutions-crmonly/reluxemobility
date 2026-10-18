import { TrustedEntitiesProps } from "@/@types/aboutPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {organizations.map((organization) => (
          <div
            key={organization.id}
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-tertiary/70 px-4 py-6 text-center min-h-24"
          >
            <Image
              src={organization.logo}
              alt={organization.name}
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-xl font-semibold text-dark">
              {organization.name}
            </p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default TrustedEntities;
