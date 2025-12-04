import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";
import { submitFormData } from "@/lib/api";

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and phone number",
        variant: "destructive",
      });
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitFormData({
        name: formData.name,
        countryCode: "+91",
        phone: formData.phone,
        email: formData.email,
      });

      if (result.success) {
        toast({
          title: "Registration Successful!",
          description: "Our team will contact you shortly with exclusive offers.",
        });
        setFormData({ name: "", phone: "", email: "" });
        navigate("/thank-you.html");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollDown = () => {
    document.querySelector("#overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
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
      <div className="relative h-full container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center py-24">
          {/* Left Side - Hero Content */}
          <div className="text-white animate-fade-in-up">
            {/* Limited Time Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full font-semibold">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Booking Open: Limited Time Only
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif">
              Signature Cloverdale
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-white/90">
              At Sector 71, Gurugram by Signature Global Builder
            </p>

            {/* Key Features */}
            <div className="space-y-3 mb-8 text-lg">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>50 Acres - Premium Farmhouses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Luxurious 3, 3.5 & 4.5 BHK Apartments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>G+35 Floors with World-Class Amenities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>₹10 Lakh Booking, Balance on Possession</span>
              </div>
            </div>

            {/* Price CTA */}
            <div className="mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 inline-block">
              <p className="text-3xl md:text-4xl font-bold">
                Starting at <span className="text-primary">₹3.95 Cr</span> Onwards
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+912246182371">
                <Button size="lg" className="btn-gold text-lg px-8 py-6 gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  +91 8200 801 802
                </Button>
              </a>
              <a href="https://wa.me/912246182371" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 gap-2 w-full sm:w-auto"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Floating Form Card */}
          <div className="animate-fade-in-up lg:flex justify-end items-center" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center font-serif">
                Register for Exclusive Offers
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Get best deals and pricing details
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-border/50 text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Input
                    type="tel"
                    placeholder="Mobile No *"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData({ ...formData, phone: value });
                    }}
                    className="h-12 border-border/50 text-base"
                    required
                    maxLength={10}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="E-Mail Address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-border/50 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-semibold bg-gradient-gold hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I authorize company representatives to call, SMS, email or WhatsApp me about its products and offers.
                </p>
              </form>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Booking Open • 50:50 Payment Plan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollDown}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-8 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary w-8" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
