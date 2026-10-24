import { BrowseFleetProps } from "@/@types/homePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const BrowseFleet: React.FC<BrowseFleetProps> = ({
  title,
  description,
  collections: items,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-14 space-y-10">
      <div className="space-y-3">
        <SectionHeading title={title} />
        <p className="text-secondary">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {items.map((item) => (
          <BrowseFleetCard key={item.id} {...item} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default BrowseFleet;

export const BrowseFleetCard: React.FC<BrowseFleetProps["collections"][0]> = ({
  id,
  category,
  title,
  tier,
  description,
  image,
}) => {
  return (
    <div>
      <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-quaternary">
        <Image src={image} alt={title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain px-6 pt-4 pb-16 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-0% via-50% to-100% from-navy-deep/0 via-navy-deep/0 to-navy-deep z-10" />
        <div className="bg-dark text-white absolute z-10 bottom-4 left-4 px-3 py-2 rounded-md">
          <p className="text-ivory/70 text-xs">{category}</p>
          <p className="">{title}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{tier}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};
