import { useState, useEffect } from "react";
import { ChevronDown, Star, Building2, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://www.signatureglobalcloverdales.com/assets/img/desk_ban_1.webp",
    "https://www.signatureglobalcloverdales.com/assets/img/desk_ban_2.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Signature Cloverdale ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        {/* Limited Time Badge */}
        <div className="animate-fade-in-up mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white px-6 py-3 rounded-full font-semibold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Booking Open: Limited Time Only
          </div>
        </div>

        {/* Main Title */}
        <h1 className="hero-title animate-fade-in-up mb-4" style={{ animationDelay: "0.1s" }}>
          Signature Cloverdale
        </h1>
        
        <p className="hero-subtitle animate-fade-in-up mb-8" style={{ animationDelay: "0.2s" }}>
          At Sector 71, Gurugram by Signature Global Builder
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="stat-badge bg-card/80 backdrop-blur-sm">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <div className="text-left">
              <div className="font-bold text-foreground">4.9 Stars</div>
              <div className="text-xs text-muted-foreground">178 Reviews</div>
            </div>
          </div>
          <div className="stat-badge bg-card/80 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-bold text-foreground">8 Acres</div>
              <div className="text-xs text-muted-foreground">Land Parcel</div>
            </div>
          </div>
          <div className="stat-badge bg-card/80 backdrop-blur-sm">
            <Building2 className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-bold text-foreground">G+35 Floors</div>
              <div className="text-xs text-muted-foreground">6 Towers</div>
            </div>
          </div>
          <div className="stat-badge bg-card/80 backdrop-blur-sm">
            <Calendar className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-bold text-foreground">May 2031</div>
              <div className="text-xs text-muted-foreground">Possession</div>
            </div>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.4s" }}>
          <p className="text-white text-2xl mb-2">Luxurious 3, 3.5 & 4.5 BHK</p>
          <p className="text-white text-5xl font-bold mb-6">
            Starts from <span className="text-primary">₹ 3.95 Cr</span> Onwards
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="btn-gold text-lg px-10 py-6" onClick={scrollToContact}>
            Enquire Now
          </Button>
          <Button size="lg" variant="outline" className="btn-outline-gold text-lg px-10 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
            Download Brochure
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
