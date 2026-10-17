import { ContactSectionProps } from "@/@types/contactPageType";
import ContactEnquiryForm from "@/components/Forms/ContactEnquiryForm";
import Form3 from "@/components/Forms/Form3";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Suspense } from "react";

const ContactSection: React.FC<ContactSectionProps> = ({
  id,
  contactInformation,
  trustedClients,
  enquiryForm,
}) => {
  return (
    <SectionWithContainer sectionId={id} sectionClassName="scroll-mt-20">
      <div className="grid lg:grid-cols-[.6fr_1fr] gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark">
            {contactInformation.title}
          </h2>

          <ul className="flex flex-col gap-6">
            {contactInformation.items.map((item) => (
              <li key={item.id} className="grid grid-cols-[auto_1fr] gap-4 items-center">
                <span className="w-11 h-11 rounded-full flex items-center justify-center bg-tertiary text-dark text-lg">
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold text-dark">{item.title}</p>
                  <p className="text-sm text-secondary">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-line bg-quaternary p-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
              {trustedClients.eyebrow}
            </p>
            <p className="font-semibold text-dark">{trustedClients.title}</p>
            <p className="text-sm text-secondary">{trustedClients.description}</p>
          </div>
        </div>

        {/* the plain form is prerendered; the trip from the home page fills in once the page loads */}
        <Suspense fallback={<Form3 {...enquiryForm} />}>
          <ContactEnquiryForm {...enquiryForm} />
        </Suspense>
      </div>
    </SectionWithContainer>
  );
};

export default ContactSection;
