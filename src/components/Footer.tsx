import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Column */}
            <div>
              <div className="mb-6">
                <img
                  src="https://www.signatureglobalcloverdales.com/assets/img/logo.svg"
                  alt="Signature Cloverdale Logo"
                  className="h-16 brightness-0 invert"
                />
              </div>
              <p className="text-white/70 mb-6">
                A lavish residential elevation nestled in Sector 71, Gurugram, offering
                luxurious 3, 3.5 & 4.5 BHK apartments with world-class amenities.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-serif">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#overview" className="text-white/70 hover:text-primary transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/70 hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="text-white/70 hover:text-primary transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-white/70 hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-white/70 hover:text-primary transition-colors">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-serif">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white/70">
                    Sector 71, Gurugram, Haryana 122004
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <a href="tel:+912246182371" className="text-white/70 hover:text-primary transition-colors">
                    +91 8200 801 802
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white/70">contact@elaris.consulting</span>
                </li>
              </ul>
            </div>

            {/* Developer Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-serif">About Developer</h3>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Signature Global</strong> is a top Indian real estate
                development firm with rich history, delivering affordable range of luxury housing
                projects across the nation.
              </p>
              <p className="text-white/70 text-sm">
                <strong>Corporate Office:</strong><br />
                Unit No.101, Ground Floor, Tower-A, Signature Tower South City-1, Gurugram, Haryana 122 001
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm text-center md:text-left">
                © 2025 Signature Cloverdale. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Cookies Policy
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-xs text-white/50 text-center max-w-4xl mx-auto">
              <p>
                <strong>Disclaimer:</strong> We are an authorised marketing partner for this project.
                Provided content is given by respective owners and this website and content is for
                information purpose only. Prices mentioned are subject to change without prior notice.
                Properties mentioned are subject to availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
