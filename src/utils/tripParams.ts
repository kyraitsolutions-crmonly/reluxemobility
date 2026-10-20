import { TripDetails } from "@/@types/leadType";

// The home page trip search hands its values to the contact page through the URL,
// e.g. /contact-us?from=…&to=…&date=18-10-2026&time=7:00+AM#contact

const MAX_LENGTH = 200;

export const tripToSearchParams = (trip: TripDetails) => {
  return new URLSearchParams({ ...trip }).toString();
};

/** Returns the trip only when the link carries all required details; incomplete links are ignored. */
export const tripFromSearchParams = (params: URLSearchParams): TripDetails | null => {
  const read = (key: keyof TripDetails) => (params.get(key) ?? "").trim().slice(0, MAX_LENGTH);
  const trip: TripDetails = { from: read("from"), to: read("to"), date: read("date"), time: read("time") };

  return Object.values(trip).every(Boolean) ? trip : null;
};
