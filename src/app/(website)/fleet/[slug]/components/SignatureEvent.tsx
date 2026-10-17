import { SignatureEventProps } from "@/@types/fleetPageType";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

const SignatureEvent: React.FC<SignatureEventProps> = ({
  title,
  highlight,
  description,
  image,
  points,
  button,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-dark">
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2 lg:gap-16 md:py-8">
        <div className="relative mx-auto w-full max-w-sm aspect-square overflow-hidden rounded-[40px] shadow-2xl shadow-black/50">
          <Image src={image} alt={highlight} fill className="object-cover" />
        </div>

        <div className="space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl/tight font-semibold">
            {title}
            <span className="block text-beige">{highlight}</span>
          </h2>
          <p className="text-sm text-ivory/70">{description}</p>
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm">
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-beige">
                  <span className="size-1.5 rounded-full bg-white" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <LinkButton
            {...button}
            className="rounded-lg border-beige bg-beige px-6 py-3 text-xs uppercase text-dark"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SignatureEvent;
