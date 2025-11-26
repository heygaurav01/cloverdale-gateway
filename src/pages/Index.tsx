import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cream">
      <Navigation />
      <Hero />
      <Overview />
      <Pricing />
      <Amenities />
      <Gallery />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
