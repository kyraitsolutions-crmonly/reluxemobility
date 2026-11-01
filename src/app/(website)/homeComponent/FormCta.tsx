import { FinalCtaProps } from "@/@types/homePageType";
import Form2 from "@/components/Forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Link from "next/link";

const FormCta: React.FC<FinalCtaProps> = ({
  title,
  description,
  contactDetails,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-dark">
      <div className="grid lg:grid-cols-[.7fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading title={title} titleColor="text-white" />
          <p className="text-ivory/70">{description}</p>
          <ul className="flex flex-col gap-5">
            {contactDetails.map((detail, index) => (
              <li key={index} className="text-ivory/90 font-semibold">
                <Link href={detail.href} className="grid grid-cols-[auto_1fr] gap-3 items-center transition hover:text-white">
                  <span className="flex size-10 items-center justify-center rounded-full bg-beige/10 text-lg text-beige ring-1 ring-beige/30">{detail.icon}</span>
                  {detail.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <Form2 />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FormCta;
