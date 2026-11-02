import { HeroProps } from "@/@types/homePageType";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { existsSync } from "node:fs";
import path from "node:path";
import HeroBackground from "./HeroBackground";

// Slides whose file isn't in /public yet are skipped, so new banner images can be added one at a time.
const inPublicFolder = (src: string) => existsSync(path.join(process.cwd(), "public", src));

// The highlight cards sit inside the banner only on wide screens (xl+). Below that they'd crowd the
// text and the slide controls, so they move to a light strip under the banner instead.
const Hero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  description,
  buttons,
  images,
  highlights,
}) => {
  return (
    <Section defaultPadding={false} className="relative w-full z-0">
      {/* No overflow-hidden here: it would stop the aspect ratio from growing to fit the text. */}
      <div className="relative flex items-center aspect-4/5 sm:aspect-16/11 md:aspect-16/10 lg:aspect-video xl:aspect-16/6.5">
        <div className="absolute inset-0 overflow-hidden">
          <HeroBackground images={images.filter(inPublicFolder)} alt={title} />
          <div className="absolute inset-0 bg-navy-deep/45 z-10" />
        </div>
        <Container className="relative z-20 py-14 md:py-20 space-y-12 text-white">
          <div className="max-w-3xl space-y-5">
            <p className="px-3 py-2.5 md:text-sm text-xs rounded-full backdrop-blur-xs bg-white/10 border border-white/[18.82%] w-fit ">
              {eyebrow}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl/tight font-semibold">
              {title}
            </h1>
            <p className="md:text-lg">{description}</p>
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
          <div className="max-w-3xl hidden xl:grid grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} {...highlight} />
            ))}
          </div>
        </Container>
      </div>

      <div className="xl:hidden bg-quaternary pt-8 md:pt-10">
        <Container className="grid md:grid-cols-3 gap-4 md:gap-5">
          {highlights.map((highlight, index) => (
            <Card key={index} {...highlight} variant="light" />
          ))}
        </Container>
      </div>
    </Section>
  );
};

export default Hero;

export const Card: React.FC<HeroProps["highlights"][0] & { variant?: "glass" | "light" }> = ({
  title,
  description,
  variant = "glass",
}) => {
  if (variant === "light") {
    return (
      <div className="p-5 space-y-1.5 rounded-[20px] bg-white border border-line border-l-4 border-l-beige shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{title}</p>
        <p className="text-base md:text-lg text-dark">{description}</p>
      </div>
    );
  }

  return (
    <div className="px-5.5 py-5.5 shadow-lg space-y-2 rounded-[20px] backdrop-blur-xs bg-white/[10.2%] border border-white/20">
      <p className="text-sm">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};
