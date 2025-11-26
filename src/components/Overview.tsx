import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Overview = () => {
  const highlights = [
    "6 High-rise towers with G+35 floors",
    "Spacious 3, 3.5 & 4.5 BHK apartments",
    "Branded interiors and fixtures",
    "3-level basement parking",
    "24/7 security with CCTV surveillance",
    "EV charging stations",
    "Strategic location on Southern Peripheral Road",
    "Near SGT University & Tau Devilal Stadium",
  ];

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Welcome to Signature Cloverdale</h2>
            <p className="section-subtitle mt-4">
              A lavish residential elevation where luxury meets sophistication
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up">
              <img
                src="https://www.signatureglobalcloverdales.com/assets/img/gallery/1.webp"
                alt="Signature Cloverdale Building"
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="premium-card">
                <h3 className="text-3xl font-bold mb-6 text-foreground font-serif">
                  Redefining Luxury Living in Gurugram
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Signature Cloverdale is a lavish residential elevation nestled in Sector 71, Gurugram. 
                  The esteemed property presents 3, 3.5, 4.5 BHK lavishly furnished apartments. There are 
                  a total of 6 high-rise towers providing flats that are opulent and reflect elegance, as 
                  they come with branded interiors and fixtures.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  The project's spacious layout and open spaces enhance a naturalistic lifestyle. These 
                  limited inventories also come with contemporary finishes and modern amenities. Experience 
                  relaxing and astounding facilities including a clubhouse, swimming pool, gymnasium, 
                  landscaped gardens, and much more.
                </p>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button className="btn-gold w-full sm:w-auto">
                  Download Complete Details
                </Button>
              </div>
            </div>
          </div>

          {/* Location Benefits */}
          <div className="mt-16 premium-card animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center font-serif">Strategic Location Advantages</h3>
            <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto leading-relaxed">
              The project is strategically positioned adjacent to Southern Peripheral Road, making it furthermore 
              appealing. Social amenities nearby include Tau Devilal Stadium, SGT University, Signature Advanced 
              Super Speciality Hospital, Drona Public School, and many more. Commute hassle-free as there are 
              prominent roads, railway, and bus networks including National Highway, Toll Plaza, IGI Airport, 
              Vatika Chowk, Subhash Chowk, Hero Honda Chowk, Golf Course Extension Road, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
