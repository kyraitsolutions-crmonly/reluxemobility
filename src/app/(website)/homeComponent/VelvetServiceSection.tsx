import { VelvetServiceSectionProps } from "@/@types/homePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const VelvetServiceSection: React.FC<VelvetServiceSectionProps> = ({
  id,
  title,
  description,
  features,
  image,
}) => {
  return (
    <SectionWithContainer
      sectionId={id}
      sectionClassName="bg-dark"
    >
      <div className="grid lg:grid-cols-2 gap-16 md:p-16 p-6 items-center bg-[#0A0F1A66] border border-[#3741510D] lg:rounded-[64px] rounded-3xl">
        <div className="space-y-6 ">
          <SectionHeading
            title={title}
            titleColor="text-white"
            wrapperClassName="max-w-lg"
          />
          <div className="w-full relative aspect-4/3 rounded-3xl overflow-hidden lg:hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <p className="text-white">{description}</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] items-center gap-4 text-white"
              >
                <div className="w-12 aspect-square rounded-full flex items-center justify-center bg-dark">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <p className=" font-semibold">{feature.title}</p>
                  <p className="text-secondary text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full relative aspect-4/3 rounded-3xl overflow-hidden max-lg:hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default VelvetServiceSection;
