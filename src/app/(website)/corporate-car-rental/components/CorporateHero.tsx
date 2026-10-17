import { CorporateHeroProps } from "@/@types/corporatePageType";
import Form5 from "@/components/Forms/Form5";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";

const CorporateHero: React.FC<CorporateHeroProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  image,
  points,
  stats,
  form,
}) => {
  return (
    <Section defaultPadding={false} className="relative">
      <Image src={image} alt={`${title} ${highlight}`} fill priority className="object-cover" />
      <div className="absolute inset-0 z-10 bg-linear-to-r from-dark via-dark/85 to-dark/50" />

      <Container className="relative z-20 grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_.85fr] lg:gap-16">
        <div className="space-y-6 text-white">
          <p className="flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-beige">
            <span className="h-0.5 w-8 bg-beige" />
            {eyebrow}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl/tight font-semibold">
            {title}
            <span className="block text-beige">{highlight}</span>
          </h1>
          <p className="max-w-xl text-white/80 md:text-lg">{description}</p>

          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm">
                <LuCircleCheck className="shrink-0 text-lg text-beige" />
                {point}
              </li>
            ))}
          </ul>

          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl md:text-3xl font-semibold">{stat.value}</dd>
                <dd className="text-xs text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="corporate-enquiry" className="scroll-mt-24">
          <Form5 {...form} />
        </div>
      </Container>
    </Section>
  );
};

export default CorporateHero;
