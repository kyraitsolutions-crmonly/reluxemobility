import { LocationMapProps } from "@/@types/contactPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { LuMapPin } from "react-icons/lu";

const LocationMap: React.FC<LocationMapProps> = ({
  title,
  description,
  address,
  addressLink,
  mapEmbedUrl,
}) => {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="pb-12 md:pb-16">
      <div className="relative overflow-hidden rounded-3xl lg:rounded-[40px] bg-line aspect-4/3 md:aspect-16/6">
        {mapEmbedUrl ? (
          <>
            <iframe
              src={mapEmbedUrl}
              title={`${title} location map`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 flex items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm transition hover:bg-white sm:right-auto sm:max-w-sm"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-dark text-white">
                <LuMapPin />
              </span>
              <span>
                <span className="block font-semibold text-dark">{title}</span>
                <span className="block text-sm text-secondary">{address}</span>
              </span>
            </a>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F1F5F9_0%,#E2E8F0_45%,#DCE3EC_100%)]" />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="flex items-center gap-2 rounded-full bg-dark px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                {title}
              </span>
              <LuMapPin className="text-2xl text-dark" />
              <div>
                <p className="font-semibold text-dark">{description}</p>
                <p className="text-sm text-secondary">{address}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default LocationMap;
