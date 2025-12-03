import {
  Home,
  Waves,
  Dumbbell,
  TreePine,
  Baby,
  Gamepad2,
  Users,
  Shield,
  Zap,
  BookOpen,
  Heart,
  Footprints
} from "lucide-react";

import yogaDeckImg from "../assets/images/yoga-deck.png";
import walkingTrailsImg from "../assets/images/walking-trails.png";
import seniorZoneImg from "../assets/images/senior-citizen-zone.png";

const Amenities = () => {
  const amenities = [
    {
      icon: Home,
      name: "Clubhouse",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/clubhouse.webp",
    },
    {
      icon: Waves,
      name: "Swimming Pool",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/swimmingpool.webp",
    },
    {
      icon: Dumbbell,
      name: "Gymnasium",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/gymnasium.webp",
    },
    {
      icon: TreePine,
      name: "Landscaped Gardens",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/landscapedgardens.webp",
    },
    {
      icon: Baby,
      name: "Kids' Play Area",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/kidsplayarea.webp",
    },
    {
      icon: Gamepad2,
      name: "Indoor Games",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/indoorgames.webp",
    },
    {
      icon: Users,
      name: "Multipurpose Hall",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/multipurposehall.webp",
    },
    {
      icon: Shield,
      name: "24/7 Security",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/security.webp",
    },
    {
      icon: Zap,
      name: "EV Charging Stations",
      image: "https://www.signatureglobalcloverdales.com/assets/img/amenities/evchargingstations.webp",
    },
    {
      icon: Heart,
      name: "Yoga Deck",
      image: yogaDeckImg,
    },
    {
      icon: Footprints,
      name: "Walking Trails",
      image: walkingTrailsImg,
    },
    {
      icon: BookOpen,
      name: "Senior Citizen Zone",
      image: seniorZoneImg,
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">World-Class Amenities</h2>
            <p className="section-subtitle mt-4">
              Experience luxury living with premium facilities designed for your comfort
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="amenity-card group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {amenity.image ? (
                    <div className="relative overflow-hidden rounded-lg mb-4 h-32">
                      <img
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <h3 className="font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                    {amenity.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in-up">
            <div className="premium-card inline-block">
              <p className="text-lg text-muted-foreground max-w-3xl">
                Every amenity at Signature Cloverdale is carefully curated to provide you with a lifestyle
                that's not just comfortable, but truly extraordinary. From fitness facilities to recreational
                spaces, we've thought of everything to make your life easier and more enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
