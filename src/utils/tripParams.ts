import { TripDetails } from "@/@types/leadType";


const MAX_LENGTH = 200;

const requiredKeys: (keyof TripDetails)[] = ["serviceType", "from", "date", "time"];

export const tripToSearchParams = (trip: TripDetails) => {
  return new URLSearchParams(Object.entries(trip).filter(([, value]) => value)).toString();
};

export const tripFromSearchParams = (params: URLSearchParams): TripDetails | null => {
  const read = (key: keyof TripDetails) => (params.get(key) ?? "").trim().slice(0, MAX_LENGTH);
  const trip: TripDetails = {
    serviceType: read("serviceType"),
    from: read("from"),
    stop: read("stop"),
    to: read("to"),
    package: read("package"),
    date: read("date"),
    returnDate: read("returnDate"),
    time: read("time"),
  };

  return requiredKeys.every((key) => trip[key]) ? trip : null;
};
