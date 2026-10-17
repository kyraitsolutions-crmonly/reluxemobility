import { CorePillarsProps } from "@/@types/aboutPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const CorePillars: React.FC<CorePillarsProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-quaternary"
      containerClassName="md:space-y-12 space-y-8"
    >
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <SectionHeading title={title} />
        <p className="text-secondary">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <PillarCard key={item.id} {...item} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CorePillars;

export const PillarCard: React.FC<CorePillarsProps["items"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white border border-line lg:p-8 p-6 rounded-2xl shadow-sm">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-dark text-white text-xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-dark">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
};
