import { CategoryHighlightsProps } from "@/@types/fleetPageType";
import { SectionWithContainer } from "@/components/sectionComponants";

const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({ items }) => {
  return (
    <SectionWithContainer sectionClassName="bg-quaternary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {items.map((item) => (
          <div key={item.id} className="space-y-3">
            <span className="block h-0.5 w-8 bg-accent" />
            <h2 className="text-lg font-semibold text-dark">{item.title}</h2>
            <p className="text-sm text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CategoryHighlights;
