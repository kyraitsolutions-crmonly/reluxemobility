import { VelvetStandardsProps } from "@/@types/servicesPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const VelvetStandards: React.FC<VelvetStandardsProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-dark"
      containerClassName="md:space-y-12 space-y-8"
    >
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <SectionHeading
          title={title}
          titleColor="text-white"
          titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
        />
        <p className="text-ivory/70 text-sm">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-beige text-lg text-dark">
              {item.icon}
            </div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-ivory/70">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default VelvetStandards;
