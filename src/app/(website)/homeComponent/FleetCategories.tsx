import { FleetCategoriesProps } from "@/@types/homePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Link from "next/link";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-6 gap-4 mt-10">
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
> = ({ id, title, vehicles, className="" }) => {
  return (
    <Link
      href={`/fleet/${id}`}
      className="flex flex-col md:items-center md:text-center space-y-2 md:px-6 md:py-5 max-md:p-4 border-2 border-tertiary rounded-2xl transition hover:-translate-y-1 hover:border-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-secondary text-sm">{vehicles.join(", ")}</p>
    </Link>
  );
};
