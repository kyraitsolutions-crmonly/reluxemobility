import { BookingProcessProps } from "@/@types/servicesPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const BookingProcess: React.FC<BookingProcessProps> = ({
  title,
  description,
  steps,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-quaternary"
      containerClassName="md:space-y-12 space-y-8"
    >
      <div className="space-y-3 max-w-lg">
        <SectionHeading
          title={title}
          titleClassName="text-2xl! md:text-3xl! lg:text-4xl/tight!"
        />
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {steps.map((step, index) => (
          <li key={step.id} className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-semibold text-accent shadow-md">
                {index + 1}
              </span>
              {index < steps.length - 1 && (
                <span className="hidden md:block h-0.5 flex-1 rounded-full bg-line" />
              )}
            </div>
            <h3 className="font-semibold text-dark">{step.title}</h3>
            <p className="text-sm text-secondary">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionWithContainer>
  );
};

export default BookingProcess;
