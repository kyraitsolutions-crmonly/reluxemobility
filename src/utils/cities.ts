// Tier-1 cities: shown first in every city field, and the only choices for Local rentals and airports.
export const tier1Cities = {
  Delhi: { lat: 28.6139, lon: 77.209 },
  Mumbai: { lat: 19.076, lon: 72.8777 },
  Bengaluru: { lat: 12.9716, lon: 77.5946 },
  Hyderabad: { lat: 17.385, lon: 78.4867 },
  Chennai: { lat: 13.0827, lon: 80.2707 },
  Kolkata: { lat: 22.5726, lon: 88.3639 },
  Pune: { lat: 18.5204, lon: 73.8567 },
  Ahmedabad: { lat: 23.0225, lon: 72.5714 },
};
export type Tier1City = keyof typeof tier1Cities;
export const tier1CityNames = Object.keys(tier1Cities) as Tier1City[];

export const airportsByCity: Record<Tier1City, string[]> = {
  Delhi: [
    "Terminal 1, Indira Gandhi International Airport, Delhi",
    "Terminal 2, Indira Gandhi International Airport, Delhi",
    "Terminal 3, Indira Gandhi International Airport, Delhi",
  ],
  Mumbai: [
    "Terminal 1, Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    "Terminal 2, Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    "Navi Mumbai International Airport, Mumbai",
  ],
  Bengaluru: ["Terminal 1, Kempegowda International Airport, Bengaluru", "Terminal 2, Kempegowda International Airport, Bengaluru"],
  Hyderabad: ["Rajiv Gandhi International Airport, Hyderabad"],
  Chennai: ["Chennai International Airport, Chennai"],
  Kolkata: ["Netaji Subhas Chandra Bose International Airport, Kolkata"],
  Pune: ["Pune International Airport, Pune"],
  Ahmedabad: ["Sardar Vallabhbhai Patel International Airport, Ahmedabad"],
};
export const allAirports = Object.values(airportsByCity).flat();
export const airportCity = (airport: string) => tier1CityNames.find((city) => airportsByCity[city].includes(airport));

// Searchable list for PAN-India fields (drops and stops). Anything not listed can still be typed in.
export const indianCities = [
  ...tier1CityNames,
  ...`Gurugram|Noida|Greater Noida|Ghaziabad|Faridabad|Navi Mumbai|Thane|Agra|Mathura|Vrindavan|Jaipur|Udaipur|Jodhpur|Ajmer|Pushkar|Bikaner|Jaisalmer|Kota|Mount Abu|Chandigarh|Mohali|Panchkula|Amritsar|Ludhiana|Jalandhar|Patiala|Bathinda|Shimla|Manali|Dharamshala|McLeod Ganj|Dalhousie|Kasauli|Kullu|Solan|Dehradun|Mussoorie|Rishikesh|Haridwar|Nainital|Jim Corbett|Almora|Ranikhet|Kedarnath|Badrinath|Lucknow|Kanpur|Varanasi|Prayagraj|Ayodhya|Gorakhpur|Bareilly|Meerut|Aligarh|Moradabad|Jhansi|Srinagar|Jammu|Katra|Gulmarg|Pahalgam|Leh|Bhopal|Indore|Ujjain|Gwalior|Jabalpur|Khajuraho|Omkareshwar|Pachmarhi|Raipur|Bilaspur|Patna|Gaya|Bodh Gaya|Ranchi|Jamshedpur|Dhanbad|Bhubaneswar|Puri|Cuttack|Konark|Siliguri|Darjeeling|Kalimpong|Durgapur|Asansol|Digha|Guwahati|Shillong|Kaziranga|Gangtok|Pelling|Lachung|Agartala|Imphal|Aizawl|Kohima|Itanagar|Tawang|Surat|Vadodara|Rajkot|Gandhinagar|Dwarka|Somnath|Bhavnagar|Jamnagar|Kutch|Bhuj|Saputara|Nashik|Nagpur|Aurangabad|Shirdi|Lonavala|Khandala|Mahabaleshwar|Panchgani|Kolhapur|Satara|Solapur|Ratnagiri|Alibaug|Matheran|Igatpuri|Goa|Panaji|Margao|Mysuru|Coorg|Madikeri|Chikmagalur|Hampi|Mangaluru|Udupi|Hubballi|Belagavi|Gokarna|Ooty|Kodaikanal|Coimbatore|Madurai|Tiruchirappalli|Pondicherry|Mahabalipuram|Kanchipuram|Vellore|Rameswaram|Kanyakumari|Thanjavur|Salem|Tirupati|Visakhapatnam|Vijayawada|Guntur|Nellore|Kurnool|Srisailam|Warangal|Karimnagar|Nizamabad|Kochi|Thiruvananthapuram|Kozhikode|Munnar|Alappuzha|Thekkady|Wayanad|Kovalam|Varkala|Thrissur|Kumarakom`.split("|"),
];
