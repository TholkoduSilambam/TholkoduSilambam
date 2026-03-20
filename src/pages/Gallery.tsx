
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Load all local images from `src/assets/images/Gallery/Training`
  // and show them in the Training tab.
  const trainingImageModules = import.meta.glob(
    '../assets/images/Gallery/Training/*.{webp,WEBP}',
    { eager: true, import: 'default' }
  ) as Record<string, string>;
  const trainingImages = Object.keys(trainingImageModules)
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map((key) => trainingImageModules[key]);

  // Load all local images from `src/assets/images/Gallery/Events`
  // and show them in the Events tab.
  const eventsImageModules = import.meta.glob(
    '../assets/images/Gallery/Events/*.{webp,WEBP}',
    { eager: true, import: 'default' }
  ) as Record<string, string>;
  const eventsImages = Object.keys(eventsImageModules)
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map((key) => eventsImageModules[key]);

  const categories = {
    events: {
      title: 'Events',
      images: eventsImages
    },
    training: {
      title: 'Training',
      images: trainingImages
    },
    // competitions: {
    //   title: 'Annual Day',
    //   images: [
    //     'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2070',
    //     'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2070',
    //     'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070',
    //     'https://images.unsplash.com/photo-1606787366850-de6ba7c7da87?q=80&w=2070',
    //     'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070',
    //     'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070'
    //   ]
    // }
  };

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-3d animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Witness the intensity, dedication, and triumph of our silambam community
            through these captured moments of excellence.
          </p> 
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 mx-1 ${activeTab === key
                      ? 'bg-martial-red text-white shadow-lg transform scale-105'
                      : 'text-martial-black hover:bg-gray-100'
                    }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[activeTab as keyof typeof categories].images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer card-3d animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`${categories[activeTab as keyof typeof categories].title} ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-martial-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {categories[activeTab as keyof typeof categories].title}
                    </h3>
                    <p className="text-sm text-gray-300">Click to view</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size preview"
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl animate-scale-in"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-martial-gold transition-colors duration-300"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}


      {/* Stats Section */}
      <section className="py-20 bg-martial-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12+', label: 'Events Hosted' },
              { number: '50+', label: 'Tournaments Won' },
              { number: '200+', label: 'Students Trained' },
              { number: '2+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in card-3d" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-martial-gold mb-2 animate-text-glow">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
