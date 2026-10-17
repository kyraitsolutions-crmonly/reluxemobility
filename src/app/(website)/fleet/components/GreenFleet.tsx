import { GreenFleetProps } from "@/@types/fleetPageType";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { LuLeaf } from "react-icons/lu";

const GreenFleet: React.FC<GreenFleetProps> = ({
  id,
  eyebrow,
  title,
  description,
  image,
  stats,
  button,
}) => {
  return (
    <SectionWithContainer sectionId={id} sectionClassName="bg-dark">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 text-white">
          <p className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 w-fit">
            <LuLeaf />
            {eyebrow}
          </p>
          <SectionHeading title={title} titleColor="text-white" />
          <p className="text-ivory/70">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-2xl font-semibold text-emerald-400">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold">{stat.title}</p>
                <p className="text-xs text-ivory/70">{stat.description}</p>
              </div>
            ))}
          </div>

          <LinkButton
            {...button}
            className="rounded-xl border-emerald-500 bg-emerald-500 text-sm text-white tracking-normal!"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-10 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="relative w-full aspect-4/3 overflow-hidden rounded-3xl border border-white/10">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GreenFleet;
