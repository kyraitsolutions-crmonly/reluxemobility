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
      <div className="grid lg:grid-cols-2 gap-16 md:p-16 p-6 items-center bg-navy-deep/40 border border-[#3741510D] lg:rounded-[64px] rounded-3xl">
        <div className="space-y-6 ">
          <SectionHeading
            title={title}
            titleColor="text-white"
            wrapperClassName="max-w-lg"
          />
          <div className="w-full relative aspect-4/3 rounded-3xl overflow-hidden lg:hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <p className="text-ivory/80">{description}</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-7 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] items-start gap-4 text-white"
              >
                <div className="w-12 aspect-square rounded-full flex items-center justify-center bg-beige/10 ring-1 ring-beige/30 text-beige text-xl">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-ivory/70 text-sm leading-relaxed">
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
