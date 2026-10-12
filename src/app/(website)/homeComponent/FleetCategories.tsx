import { FleetCategoriesProps } from "@/@types/homePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const FleetCategories: React.FC<FleetCategoriesProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-10 space-y-4">
      <div className="space-y-3">
        <SectionHeading title={title} />
        <p className="text-secondary">{description}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
        {items.map((item) => (
          <FleetCategoriesCard key={item.id} {...item} className={""} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default FleetCategories;

export const FleetCategoriesCard: React.FC<
  FleetCategoriesProps["items"][0] & { className?: string }
> = ({ title, vehicles, className="" }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2 px-6 py-5 border-2 border-tertiary rounded-2xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-secondary text-sm">{vehicles.join(", ")}</p>
    </div>
  );
};
