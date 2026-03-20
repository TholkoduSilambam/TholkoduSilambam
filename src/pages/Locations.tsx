
import React, { useEffect, useRef } from 'react';
import { Clock, MapPin } from 'lucide-react';

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
      name: 'Anna Nagar - Varasakthi Vinayagar Kovil',
      timings: 'Saturday & Sunday (6.30 AM to 8.00 AM)',
      addressLines: [
        'Anna Nagar, Varasakthi Vinayagar Kovil,',
        'Near VAO Office,',
        'Vanniyangudi Panchayat Office Front Side,',
        'Sivagangai', 'Tamil Nadu - 630561.'
      ],
      phoneLines: ['+91 8489256107', '+91 7010717593'],
      description: 'Training venue near the VAO Office, Sivagangai.',
      // Map embed is reused from the Contact page (no exact embed was provided for each specific spot).
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15048.396991041343!2d78.502929!3d9.849541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fb005241854f%3A0x601b5cb586933f25!2sTholkodu%20silambam!5e1!3m2!1sen!2sin!4v1773998483945!5m2!1sen!2sin',
      // (features removed)
    },
    {
      name: 'Pillaivayal Kali Amman Kovil',
      timings: 'Saturday & Sunday (4.30 PM to 5.30 PM)',
      addressLines: ['Pillaivayal Kali Amman Kovil (Front side),', 'Sivagangai', 'Tamil Nadu - 630561.'],
      phoneLines: ['+91 8489256107', '+91 7010717593'],
      description: 'Training venue near Pillaivayal Kali Amman Kovil.',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.14516747579!2d78.49105417478296!3d9.845512175674468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fadc69e5aa53%3A0xc222958d60b22bd0!2sPillaivayal%20Arulmigu%20Kaliamman%20Temple!5e1!3m2!1sen!2sin!4v1774005140030!5m2!1sen!2sin',
      // (features removed)
    },
    {
      name: 'Pazhamalai Nagar (Free Coaching)',
      addressLines: ['Pazhamalai Nagar[Free coaching],', 'Thondi Road,', 'Sivagangai', 'Tamil Nadu - 630561.'],
      phoneLines: ['+91 8489256107', '+91 7010717593'],
      description: 'Free coaching location on Thondi Road.',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0546500468367!2d78.50617867478309!3d9.853452275539718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fb1e6f68b339%3A0x65a5f121ccd84ad8!2sOliOli%20Foundation!5e1!3m2!1sen!2sin!4v1774005551753!5m2!1sen!2sin',
      // (features removed)
    }
    ,
    {
      name: "ST. Justin's Matriculation Hr. Sec School",
      timings: "Saturday (3.00 PM to 4.00 PM), Sunday (9.30 AM to 10.30 AM)",
      addressLines: ['Madurai Road,', 'Sivagangai', 'Tamil Nadu - 630561.'],
      phoneLines: ['+91 8489256107', '+91 7010717593'],
      description: "Training venue ST. Justin's Matriculation Hr. Sec School.",
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15048.492796515715!2d78.4630971871582!3d9.847439800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fad1978fb2b7%3A0x65b78453c4b3e3e0!2sSt%20Justins%20Girls%20Higher%20Secondary%20School!5e1!3m2!1sen!2sin!4v1774005651814!5m2!1sen!2sin',
      // (features removed)
    },
        {
      name: "St.Michael Matriculation Hr. Sec. School",
      timings: 'Thursday & Friday (4.30 PM to 5.30 PM)',
      addressLines: ['Rajaduraisingham', 'Sivaganga', 'Tamil Nadu - 630561.'],
      phoneLines: ['+91 8489256107', '+91 7010717593'],
      description: "Training venue near St.Michael Matriculation Hr. Sec School.",
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0964983000745!2d78.47483517478305!3d9.849782175602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fad262792369%3A0x7dee1ad9e23f1161!2sSt.Michael%20Matriculation%20Hr.%20Sec.%20School!5e1!3m2!1sen!2sin!4v1774005742080!5m2!1sen!2sin',
      // (features removed)
    },
        {
      name: "Govt Hr Sec School Idayamelur",
      timings: 'Saturday & Sunday (4.30 PM to 5.30 PM)',
      addressLines: ['Idayamelur', 'Sivagangai', 'Tamil Nadu - 630552'],
      phoneLines: ['+91 8489256107', '+91 7010717593'],
      description: "Training venue Govt Hr Sec School Idayamelur.",
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7522.741151685377!2d78.4466091904398!3d9.913254979437843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00efb80d0f6a87%3A0x2ca75bd6f2a74fe5!2sGovt%20Hr%20Sec%20School%20Idayamelur!5e1!3m2!1sen!2sin!4v1774006067952!5m2!1sen!2sin',
      // (features removed)
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
            Find the Tholkodu Silambam location nearest to you and begin your martial arts journey today.
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
                          <span className="text-gray-700">
                            {location.addressLines?.map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i < (location.addressLines?.length ?? 0) - 1 ? <br /> : null}
                              </React.Fragment>
                            ))}
                          </span>
                        </div>
                        <div className="flex items-center animate-slide-in-right delay-100">
                          <svg className="w-5 h-5 text-martial-red mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-700">
                            {location.phoneLines?.map((p, i) => (
                              <React.Fragment key={i}>
                                {p}
                                {i < (location.phoneLines?.length ?? 0) - 1 ? <br /> : null}
                              </React.Fragment>
                            ))}
                          </span>
                        </div>
                        {location.timings ? (
                          <div className="flex items-center animate-slide-in-right delay-200">
                            <Clock className="text-martial-red mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-700">
                              <span className="font-semibold">Timings:</span> {location.timings}
                            </span>
                          </div>
                        ) : null}
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-fade-in delay-200">
                        {location.description}
                      </p>
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
              href="tel:+918489256107"
              className="bg-martial-red hover:bg-martial-gold text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-scale-in"
            >
              Call Us Now
            </a>
            <a
              href="mailto:tholkodusilambam@gmail.com"
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
