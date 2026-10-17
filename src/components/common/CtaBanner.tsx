import { CtaBannerProps } from "@/@types/commonType";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const CtaBanner: React.FC<CtaBannerProps> = ({
  title,
  description,
  buttons,
  backgroundImage,
  accent = false,
}) => {
  const primaryClassName = accent
    ? "bg-beige text-dark border-beige"
    : "bg-white text-dark border-white";
  const secondaryClassName = accent
    ? "bg-white text-dark border-white"
    : "bg-white/5 border-white/30 text-white";

  return (
    <SectionWithContainer>
      <div className="relative overflow-hidden rounded-3xl lg:rounded-[40px] bg-dark px-6 py-14 md:px-16 md:py-20 text-center text-white">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-r from-dark via-dark/85 to-dark/40" />
          </>
        ) : (
          <>
            <div className="absolute -top-24 -right-24 size-80 rounded-full bg-beige/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-beige/20 blur-3xl" />
          </>
        )}

        <div className="relative z-10 mx-auto max-w-2xl space-y-5">
          <SectionHeading title={title} titleColor="text-white" textCenter />
          <p className="text-ivory/70 md:text-lg">{description}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                {...button}
                className={`${index === 0 ? primaryClassName : secondaryClassName} justify-center rounded-xl px-6 py-3 tracking-normal!`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CtaBanner;
