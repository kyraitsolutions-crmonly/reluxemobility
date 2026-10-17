import { PageHeroProps } from "@/@types/commonType";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  eyebrowVariant = "pill",
  breadcrumbs,
  title,
  highlight,
  description,
  image,
  buttons = [],
  className = "",
  accent = false,
}) => {
  const primaryClassName = accent
    ? "bg-beige text-dark border-beige"
    : "bg-white text-dark border-white";

  return (
    <Section
      defaultPadding={false}
      className={`relative w-full flex items-center min-h-80 md:min-h-96 ${className}`}
    >
      <Image src={image} alt={highlight ? `${title} ${highlight}` : title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/20 z-10" />
      <Container className="relative z-20 py-20 md:py-28 text-white">
        <div className="max-w-2xl space-y-5">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                {breadcrumbs.map((crumb, index) => (
                  <Fragment key={crumb.label}>
                    {index > 0 && <li aria-hidden="true" className="text-white/40">/</li>}
                    <li>
                      {crumb.href ? (
                        <Link href={crumb.href} className="text-beige hover:underline">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current="page" className="text-white/80">{crumb.label}</span>
                      )}
                    </li>
                  </Fragment>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && eyebrowVariant === "pill" && (
            <p className="px-3 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-full backdrop-blur-xs bg-white/10 border border-white/[18.82%] w-fit">
              {eyebrow}
            </p>
          )}
          {eyebrow && eyebrowVariant === "line" && (
            <p className="flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-beige">
              <span className="h-0.5 w-8 bg-beige" />
              {eyebrow}
            </p>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl/tight font-semibold">
            {title}
            {highlight && <span className="text-beige"> {highlight}</span>}
          </h1>
          <p className="md:text-lg text-white/85">{description}</p>
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-2">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  {...button}
                  className={`${index === 0 ? primaryClassName : "backdrop-blur-xs bg-white/10 border-white"} justify-center rounded-xl tracking-normal!`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default PageHero;
