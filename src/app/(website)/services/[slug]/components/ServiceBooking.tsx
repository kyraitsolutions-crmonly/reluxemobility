import { ServiceBookingProps } from "@/@types/servicesPageType";
import Form4 from "@/components/Forms/Form4";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const ServiceBooking: React.FC<ServiceBookingProps> = ({
  id,
  title,
  description,
  assurances,
  form,
}) => {
  return (
    <SectionWithContainer
      sectionId={id}
      sectionClassName="bg-navy-deep scroll-mt-20"
      containerClassName="max-w-4xl! space-y-10 md:py-8"
    >
      <div className="space-y-5 text-white">
        <SectionHeading
          title={title}
          titleColor="text-white"
          wrapperClassName="max-w-sm"
          titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
        />
        <p className="max-w-xl text-sm text-ivory/70">{description}</p>
        <ul className="space-y-4 pt-2">
          {assurances.map((assurance) => (
            <li key={assurance.id} className="grid grid-cols-[auto_1fr] items-center gap-4">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-beige">
                {assurance.icon}
              </span>
              <div>
                <p className="text-sm font-semibold">{assurance.title}</p>
                <p className="text-xs text-ivory/70">{assurance.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Form4 {...form} />
    </SectionWithContainer>
  );
};

export default ServiceBooking;
