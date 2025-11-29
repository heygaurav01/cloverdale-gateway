import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import DownloadBrochureModal from "@/components/DownloadBrochureModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "https://www.signatureglobalcloverdales.com/assets/img/gallery/1.webp",
    "https://www.signatureglobalcloverdales.com/assets/img/gallery/2.webp",
    "https://www.signatureglobalcloverdales.com/assets/img/gallery/3.webp",
    "https://www.signatureglobalcloverdales.com/assets/img/gallery/4.webp",
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-subtitle mt-4">
              Explore the architectural excellence and stunning views
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Signature Cloverdale View ${index + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold bg-primary/80 px-6 py-3 rounded-lg">
                    View Full Image
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Virtual Tour Section */}
          <div className="mt-16 animate-fade-in-up">
            <div className="premium-card relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://www.signatureglobalcloverdales.com/assets/img/virtualtour.webp"
                  alt="Virtual Tour"
                  className="rounded-xl shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 font-serif">Take a Virtual Tour</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Experience Signature Cloverdale from the comfort of your home. Take an immersive
                    virtual tour and explore every corner of this magnificent property.
                  </p>
                  <DownloadBrochureModal title="Start Virtual Site Visit">
                    <button className="btn-gold">
                      Start Virtual Site Visit
                    </button>
                  </DownloadBrochureModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={images[selectedImage]}
            alt={`Gallery ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
