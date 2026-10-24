import { StorySectionProps } from "@/@types/aboutPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const StorySection: React.FC<StorySectionProps> = ({
  id,
  eyebrow,
  title,
  paragraphs,
  image,
  statistics,
}) => {
  return (
    <SectionWithContainer sectionId={id} sectionClassName="scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="w-full relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
          <SectionHeading
            title={title}
            titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
          />
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-secondary">
              {paragraph}
            </p>
          ))}
          {/* <div className="grid grid-cols-2 gap-6 pt-4">
            {statistics.map((stat) => (
              <div key={stat.id} className="space-y-1">
                <p className="text-3xl md:text-4xl font-semibold text-dark">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StorySection;
