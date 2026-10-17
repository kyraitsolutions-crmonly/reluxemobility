import { FaqSectionProps } from "@/@types/contactPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const FaqSection: React.FC<FaqSectionProps> = ({
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
        <SectionHeading
          title={title}
          titleClassName="text-2xl! md:text-3xl!"
        />
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {items.map((item) => (
          <FaqCard key={item.id} {...item} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;

export const FaqCard: React.FC<FaqSectionProps["items"][0]> = ({
  question,
  answer,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-white border border-line/60 p-6 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-dark">{question}</h3>
      <p className="text-sm text-secondary">{answer}</p>
    </div>
  );
};
