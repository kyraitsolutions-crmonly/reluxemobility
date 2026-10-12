import { HeroProps } from "@/@types/homePageType";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";

const Hero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  description,
  buttons,
  img,
  highlights,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full aspect-4/3.5 xl:aspect-16/6.5 lg:aspect-16/9"
    >
      <Image src={img} alt={title} fill className="object-cover object-left" />
      <div className="absolute inset-0 bg-black/35 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5">
            <p className="px-3 py-2.5 text-sm rounded-full backdrop-blur-xs bg-white/10 border border-white/[18.82%] w-fit ">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl/tight font-semibold">
              {title}
            </h1>
            <p className="text-lg">{description}</p>
            <div className="grid grid-cols-2 gap-4 max-w-2xs">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  {...button}
                  className={`${index === 0 ? "bg-white text-dark" : "backdrop-blur-xs bg-white/10 border border-white"} justify-center rounded-xl w-full`}
                />
              ))}
            </div>
          </div>
          <div className="max-w-3xl grid grid-cols-3 gap-6 max-lg:">
            {highlights.map((highlight, index) => (
              <Card key={index} {...highlight} />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Hero;

export const Card: React.FC<HeroProps["highlights"][0]> = ({
  title,
  description,
}) => {
  return (
    <div className="px-5.5 py-5.5 shadow-lg space-y-2 rounded-[20px] backdrop-blur-xs bg-white/[10.2%] border border-white/20">
      <p className="text-sm">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};
