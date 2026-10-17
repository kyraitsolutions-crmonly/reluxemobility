import { VelvetStandardProps } from "@/@types/aboutPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";

const VelvetStandard: React.FC<VelvetStandardProps> = ({
  id,
  eyebrow,
  title,
  description,
  image,
  features,
  testimonial,
}) => {
  return (
    <SectionWithContainer sectionId={id} sectionClassName="bg-dark">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-ivory/70">
            {eyebrow}
          </p>
          <SectionHeading title={title} titleColor="text-white" />
          <p className="text-ivory/70">{description}</p>
          <ul className="space-y-5 pt-2">
            {features.map((feature) => (
              <li key={feature.id} className="grid grid-cols-[auto_1fr] gap-3">
                <LuCircleCheck className="text-beige text-xl mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-sm text-ivory/70">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-lg:mb-16">
          <div className="w-full relative aspect-4/3 rounded-3xl overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="absolute -bottom-12 left-4 md:-left-6 max-w-60 rounded-2xl bg-white p-5 shadow-xl space-y-2">
            <p className="font-semibold text-dark text-sm">
              {testimonial.eyebrow}
            </p>
            <p className="text-xs italic text-secondary">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default VelvetStandard;
