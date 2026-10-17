import { JourneySectionProps } from "@/@types/homePageType";
import Form1 from "@/components/Forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const JourneySection: React.FC<JourneySectionProps> = ({
  title,
  description,
  benefits,
}) => {
  return (
    <SectionWithContainer sectionId="booking" sectionClassName="bg-quaternary scroll-mt-20">
      <div className="grid lg:grid-cols-[.7fr_1fr] gap-4">
        <div className="flex flex-col gap-6">
          <SectionHeading title={title} />
          <p className="text-secondary">{description}</p>
          <div className="flex flex-col gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-[auto_1fr] gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-dark">
                  {benefit.icon}
                </div>
                <div className="">
                  <p className="text-lg font-semibold">{benefit.title}</p>
                  <p className="text-secondary text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Form1 />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default JourneySection;
