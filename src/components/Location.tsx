import { MapPin, Train, Plane, School, Hospital, ShoppingBag } from "lucide-react";

const Location = () => {
  const nearbyPlaces = [
    {
      icon: School,
      name: "Educational Institutions",
      places: ["SGT University", "Drona Public School", "Top Schools & Colleges"],
    },
    {
      icon: Hospital,
      name: "Healthcare",
      places: ["Signature Advanced Super Speciality Hospital", "Multi-specialty Hospitals"],
    },
    {
      icon: ShoppingBag,
      name: "Shopping & Entertainment",
      places: ["Tau Devilal Stadium", "Shopping Malls", "Entertainment Centers"],
    },
    {
      icon: Train,
      name: "Connectivity",
      places: ["Southern Peripheral Road", "National Highway", "Metro Stations"],
    },
    {
      icon: Plane,
      name: "Transport Hubs",
      places: ["IGI Airport", "Railway Stations", "Bus Terminals"],
    },
  ];

  const landmarks = [
    "Vatika Chowk",
    "Subhash Chowk",
    "Hero Honda Chowk",
    "Golf Course Extension Road",
    "Toll Plaza",
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Prime Location</h2>
            <p className="section-subtitle mt-4">
              Strategically located in Sector 71, Gurugram with excellent connectivity
            </p>
          </div>

          {/* Address Card */}
          <div className="mb-12 animate-fade-in-up">
            <div className="premium-card bg-gradient-gold text-white text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 font-serif">Site Address</h3>
              <p className="text-xl">Signature Cloverdale</p>
              <p className="text-lg">Sector 71, Gurugram, Haryana 122004</p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mb-12 animate-fade-in-up">
            <div className="premium-card p-0 overflow-hidden">
              <div className="h-96 w-full bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.232!2d77.0467!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjAiTiA3N8KwMDInNDguMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Signature Cloverdale Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Nearby Places Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nearbyPlaces.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="premium-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-gold p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{category.name}</h3>
                      <ul className="space-y-1">
                        {category.places.map((place, placeIndex) => (
                          <li key={placeIndex} className="text-muted-foreground text-sm">
                            • {place}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Landmarks */}
          <div className="animate-fade-in-up">
            <div className="premium-card text-center">
              <h3 className="text-2xl font-bold mb-6 font-serif">Key Landmarks Nearby</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {landmarks.map((landmark, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {landmark}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                Commute hassle-free with excellent connectivity to major roads, highways, and transport hubs. 
                Everything you need is just minutes away from Signature Cloverdale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
