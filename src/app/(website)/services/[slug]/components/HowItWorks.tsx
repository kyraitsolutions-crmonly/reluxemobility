import { HowItWorksProps } from "@/@types/servicesPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const HowItWorks: React.FC<HowItWorksProps> = ({ eyebrow, title, steps }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <div className="text-center space-y-2">
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <SectionHeading
          title={title}
          textCenter
          titleClassName="text-2xl! md:text-3xl!"
        />
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <li key={step.id} className="relative pt-10">
            <span
              aria-hidden="true"
              className="absolute -top-2 left-0 select-none text-7xl font-bold leading-none text-tertiary"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative space-y-2">
              <h3 className="font-semibold text-dark">{step.title}</h3>
              <p className="text-sm text-secondary">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionWithContainer>
  );
};

export default HowItWorks;
