import { FinalCtaSectionType } from "@/@types/homePage";
import { SectionWithContainer } from "../sectionComponants";
import Tagline from "../typography/Tagline";
import { SectionHeading } from "../typography";
import Image from "next/image";

const WelComeNote: React.FC<FinalCtaSectionType> = ({
  eyebrow,
  description,
  note,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-8 space-y-4" sectionClassName="relative bg-image  bg-bottom-left">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <Image
          src="/tagline.png"
          alt="tagline"
          width={74}
          height={17}
          className="mx-auto"
        />
        <SectionHeading title={eyebrow} />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4 max-w-xl mx-auto">
        <p className="text-light text-center">{description}</p>
        <Tagline eyebrow={note} showIcon={false} />
      </div>
    </SectionWithContainer>
  );
};

export default WelComeNote;
