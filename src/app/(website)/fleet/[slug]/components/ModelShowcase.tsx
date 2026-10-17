import { ModelShowcaseProps } from "@/@types/fleetPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import ArrowCarousel from "@/components/sliders/ArrowCarousel";
import { SectionHeading } from "@/components/typography";
import ModelCard from "./ModelCard";

const ModelShowcase: React.FC<ModelShowcaseProps> = ({
  eyebrow,
  title,
  models,
}) => {
  return (
    <SectionWithContainer>
      <ArrowCarousel
        header={
          <div className="space-y-2">
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-accent">
              {eyebrow}
            </p>
            <SectionHeading
              title={title}
              titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
            />
          </div>
        }
        slides={models.map((model) => (
          <ModelCard key={model.id} {...model} />
        ))}
        perView={2}
      />
    </SectionWithContainer>
  );
};

export default ModelShowcase;
