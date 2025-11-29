import { Home, Maximize, IndianRupee, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadBrochureModal from "@/components/DownloadBrochureModal";

const Pricing = () => {
  const pricingData = [
    {
      type: "3 BHK",
      area: "2100 - 2200 Sq.Ft",
      price: "₹ 3.95 Cr Onwards",
      available: true,
    },
    {
      type: "3.5 BHK",
      area: "2400 - 2600 Sq.Ft",
      price: "On Request",
      available: true,
    },
    {
      type: "4.5 BHK",
      area: "3200 Sq.Ft",
      price: "On Request",
      available: true,
    },
  ];

  const offers = [
    "Spot Booking Offers Available",
    "Get Flexi Pay for 1st 100 Buyers",
    "Early Bird Discounts: Book Now",
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Pricing & Floor Plans</h2>
            <p className="section-subtitle mt-4">
              Choose from our exclusive range of spacious apartments
            </p>
          </div>

          {/* Special Offers Banner */}
          <div className="mb-12 animate-fade-in-up">
            <div className="bg-gradient-gold rounded-2xl p-8 text-center shadow-gold">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif">
                Limited Time Special Offers
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold border border-white/30"
                  >
                    {offer}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="premium-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4 font-serif">
                  {item.type}
                </h3>

                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                  <Maximize className="w-4 h-4" />
                  <span className="text-lg">{item.area}</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <IndianRupee className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full gap-2 hover:bg-primary hover:text-primary-foreground">
                    <FileText className="w-4 h-4" />
                    Price Breakup
                  </Button>
                  <DownloadBrochureModal title="Get Best Quote">
                    <Button className="btn-gold w-full">
                      Get Best Quote
                    </Button>
                  </DownloadBrochureModal>
                </div>
              </div>
            ))}
          </div>

          {/* Master Plan & Costing Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="premium-card animate-fade-in-up">
              <div className="relative group cursor-pointer">
                <img
                  src="https://www.signatureglobalcloverdales.com/assets/img/floorplan/masterplan.webp"
                  alt="Master Plan"
                  className="w-full rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <Button className="btn-gold">View Master Plan</Button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center font-serif">Master Plan</h3>
              <p className="text-muted-foreground text-center mt-2">Complete project layout</p>
            </div>

            <div className="premium-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative group cursor-pointer">
                <img
                  src="https://www.signatureglobalcloverdales.com/assets/img/costing.jpg"
                  alt="Costing Details"
                  className="w-full rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <DownloadBrochureModal title="Download Costing Details">
                    <Button className="btn-gold">Download Costing</Button>
                  </DownloadBrochureModal>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center font-serif">Costing Details</h3>
              <p className="text-muted-foreground text-center mt-2">Complete pricing breakdown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
