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
      <div className="grid lg:grid-cols-[.7fr_1fr] gap-4">
        <div className="flex flex-col gap-6">
          <SectionHeading title={title} titleColor="text-white" />
          <p className="text-ivory/70">{description}</p>
          <ul className="flex flex-col gap-4">
            {contactDetails.map((detail, index) => (
              <li key={index} className="text-ivory/70 font-semibold">
                <Link href={detail.href} className="grid grid-cols-[auto_1fr] gap-2 items-center">
                  <span>{detail.icon}</span>
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
