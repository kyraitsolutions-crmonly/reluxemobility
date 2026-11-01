import { Container } from "@/components/sectionComponants";
import { tier1CityNames } from "@/utils/cities";

// Plain-text list of the services and cities we cover, shown above the footer for search engines.
const services = [
  { group: "Car Rental Services", label: (city: string) => `Car rental in ${city}` },
  { group: "Book Taxi Services", label: (city: string) => `${city} Taxi Service` },
  { group: "Airport Taxi Services", label: (city: string) => `Airport Taxi in ${city}` },
  { group: "Tempo Traveller & Minibus Services", label: (city: string) => `Tempo Traveller in ${city}` },
];

const SeoLinks = () => (
  <section aria-label="Services we offer" className="border-t border-line bg-white py-12 md:py-14">
    <Container className="space-y-8">
      <p className="text-sm text-secondary">
        Trust us when we say: <strong className="font-semibold text-dark">every journey is handled.</strong>
      </p>
      {services.map((service) => (
        <div key={service.group} className="space-y-3">
          <h2 className="text-base font-semibold text-dark">{service.group}</h2>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
            {tier1CityNames.map((city) => (
              <li key={city} className="text-sm text-secondary">
                {service.label(city)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  </section>
);

export default SeoLinks;
