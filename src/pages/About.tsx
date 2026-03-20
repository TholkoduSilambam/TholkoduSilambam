import SathisMaster from '../assets/images/About/SathisMaster.webp';
import PradeepMaster from '../assets/images/About/PradeepMaster.webp';
import BhuvaneshMaster from '../assets/images/About/BhuvaneshMaster.webp';
import React, { useEffect, useRef } from 'react';

const About = () => {
  const mastersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    const masterCards = mastersRef.current?.querySelectorAll('.master-card');
    masterCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const masters = [
    {
      name: 'Master K. Sathish Kumar, M.Sc. (Chemistry)',
      title: 'Founder & Coach of Tholkodu Silambatta Kazhagam',
      bio: 'I am deeply passionate about Silambam and have achieved distinction as a national-level gold medalist. I also serve as a National Referee in Silambam, contributing to the sport at an official level. I am committed to nurturing and developing the next generation of practitioners, helping them grow in skill and discipline. Additionally, I am a proud member of the Tamil Nadu Kalai Panpattu Thurai.',
      image: SathisMaster
    },
    {
      name: 'Master N. Pradeep, B.E. (Mechanical) and B.A. (Sociology)',
      title: 'Head Coach in Tholkodu Silambatta Kazhagam.',
      bio: 'I am an international-level gold medalist and CM Trophy winner in Silambam, currently serving as a National Referee. I am also a proud member of the Tamil Nadu Kalai Panpattu Thurai, contributing to the promotion and development of this traditional martial art.',
      image: PradeepMaster
    },
    {
      name: 'Master S. Bhuvaneshvaran, B.A. (Economy)',
      title: 'Senior trainer of Tholkodu Silambatta Kazhagam.',
      bio: 'I am a national-level gold medalist in Silambam (Goa) and a district-level gold medalist under Nehru Yuva Kendra. Recognized as a State Referee by the Tamil Nadu Silambam Association, I consistently demonstrate dedication, discipline, and a strong work ethic in all my endeavors.',
      image: BhuvaneshMaster
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-3d animate-fade-in">
            Meet Our Masters
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Learn from the best. Our world-class instructors bring years of experience, 
            championship titles, and deep wisdom to guide your silambam journey.
          </p>
        </div>
      </section>

      {/* Masters Section */}
      <section ref={mastersRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {masters.map((master, index) => (
              <div 
                key={index} 
                className={`master-card flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className={`lg:w-1/2 ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}>
                  <div className="relative group">
                    <img
                      src={master.image}
                      alt={master.name}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl card-3d group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-martial-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-martial-gold font-bold text-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${
                  index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'
                }`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-martial-black mb-2">
                        {master.name}
                      </h2>
                      <h3 className="text-2xl text-martial-red font-semibold mb-2">
                        {master.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {master.bio}
                    </p>

                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*<button className="bg-martial-black text-white hover:bg-martial-red px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                      Learn More
                    </button>*/}

      {/* Philosophy Section */}
      <section className="py-20 bg-martial-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in">
            Our Philosophy
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            <p className="animate-slide-in-left">
              "The ultimate aim of Tholkodu silambam is not having to use them. True mastery comes from 
              discipline, respect, and the continuous journey of self-improvement."
            </p>
            <p className="animate-slide-in-right delay-200">
              At Tholkodu Silambam, we believe that silambam training extends far beyond physical techniques. 
              We cultivate mental strength, emotional balance, and spiritual growth in every student.
            </p>
            <p className="animate-fade-in delay-400">
              Our approach combines traditional wisdom with modern training methods, ensuring that each 
              student develops not just as a silambam player, but as a well-rounded individual ready 
              to face life's challenges with confidence and grace.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
