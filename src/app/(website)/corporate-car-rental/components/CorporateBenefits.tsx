import { CorporateBenefitsProps } from "@/@types/corporatePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const CorporateBenefits: React.FC<CorporateBenefitsProps> = ({
  eyebrow,
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
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <SectionHeading
          title={title}
          textCenter
          titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
        />
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-sm"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-dark text-lg text-white">
              {item.icon}
            </div>
            <h3 className="font-semibold text-dark">{item.title}</h3>
            <p className="text-sm text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CorporateBenefits;
