
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const Locations = () => {
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    const locationCards = locationsRef.current?.querySelectorAll('.location-card');
    locationCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const locations = [
    {
      name: 'Downtown Headquarters',
      address: '123 Dragon Street, Downtown, NY 10001',
      phone: '(555) 123-4567',
      description: 'Our flagship location featuring state-of-the-art training facilities, multiple dojos, and specialized equipment for all martial arts disciplines.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1635959592107!5m2!1sen!2sus',
      features: ['3 Training Halls', 'Pro Shop', 'Locker Rooms', 'Meditation Room']
    },
    {
      name: 'Westside Branch',
      address: '456 Warrior Avenue, Westside, NY 10002',
      phone: '(555) 234-5678',
      description: 'Our family-friendly location specializing in youth programs and beginner classes, with a focus on building confidence and character.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1635959592107!5m2!1sen!2sus',
      features: ['Kids Programs', 'Family Classes', 'Birthday Parties', 'After School Care']
    },
    {
      name: 'Eastside Elite',
      address: '789 Samurai Boulevard, Eastside, NY 10003',
      phone: '(555) 345-6789',
      description: 'Our premium location for advanced training and competition preparation, equipped with professional-grade facilities and expert instruction.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1635959592107!5m2!1sen!2sus',
      features: ['Competition Training', 'Private Lessons', 'Elite Programs', 'Recovery Center']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-3d animate-fade-in">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Find the Dragon Academy location nearest to you and begin your martial arts journey today.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section ref={locationsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden card-3d">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Map */}
                    <div className="relative h-96 lg:h-full">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="animate-fade-in"
                      ></iframe>
                      <div className="absolute top-4 left-4 bg-martial-red text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-bounce">
                        <MapPin className="inline-block mr-2" size={16} />
                        Location {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-martial-black mb-4 animate-slide-in-left">
                        {location.name}
                      </h2>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start animate-slide-in-right">
                          <MapPin className="text-martial-red mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{location.address}</span>
                        </div>
                        <div className="flex items-center animate-slide-in-right delay-100">
                          <svg className="w-5 h-5 text-martial-red mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-700">{location.phone}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-fade-in delay-200">
                        {location.description}
                      </p>

                      <div className="animate-scale-in delay-300">
                        <h3 className="text-xl font-bold text-martial-black mb-3">Features:</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {location.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-martial-red font-semibold"
                            >
                              <div className="w-2 h-2 bg-martial-gold rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 space-x-4">
                        <button className="bg-martial-red hover:bg-martial-gold text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                          Visit This Location
                        </button>
                        <button className="border-2 border-martial-red text-martial-red hover:bg-martial-red hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-martial-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-fade-in">
            Questions About Our Locations?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto animate-slide-in-left">
            Our friendly staff is ready to help you find the perfect location and program for your martial arts journey.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="tel:+15551234567"
              className="bg-martial-red hover:bg-martial-gold text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-scale-in"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@dragonacademy.com"
              className="border-2 border-white text-white hover:bg-white hover:text-martial-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-scale-in delay-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
