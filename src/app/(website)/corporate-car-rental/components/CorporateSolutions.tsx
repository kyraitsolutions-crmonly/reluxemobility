import { CorporateSolutionsProps } from "@/@types/corporatePageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const CorporateSolutions: React.FC<CorporateSolutionsProps> = ({
  title,
  description,
  linkLabel,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <div className="space-y-2 max-w-xl">
        <SectionHeading
          title={title}
          titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
        />
        <p className="text-sm text-secondary">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative flex aspect-4/5 items-end overflow-hidden rounded-2xl bg-dark"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/50 to-transparent" />
            <div className="relative space-y-1 p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-white/70">{item.description}</p>
              <p className="pt-1 text-[10px] font-semibold uppercase tracking-wider text-beige">
                {linkLabel}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CorporateSolutions;
