
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
      name: 'Master Chen Wei',
      title: 'Grandmaster & Founder',
      experience: '40+ Years Experience',
      specialty: 'Kung Fu, Tai Chi, Philosophy',
      bio: 'Master Chen Wei founded Dragon Academy with a vision to preserve ancient martial arts traditions while adapting to modern needs. His mastery spans multiple disciplines and his wisdom has guided thousands of students.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070'
    },
    {
      name: 'Master Sarah Kim',
      title: 'Head of Karate Division',
      experience: '25+ Years Experience',
      specialty: 'Shotokan Karate, Self-Defense',
      bio: 'A former world champion, Master Kim brings competitive excellence to our dojo. Her dynamic teaching style and technical precision have produced numerous tournament winners and confident practitioners.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1f6?q=80&w=2070'
    },
    {
      name: 'Master Roberto Silva',
      title: 'Brazilian Jiu-Jitsu Master',
      experience: '30+ Years Experience',
      specialty: 'BJJ, Grappling, MMA',
      bio: 'Black belt under the legendary Gracie family, Master Silva has revolutionized ground fighting techniques. His strategic approach to grappling has earned him respect worldwide.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070'
    },
    {
      name: 'Master Yuki Tanaka',
      title: 'Traditional Weapons Master',
      experience: '35+ Years Experience',
      specialty: 'Kendo, Iaido, Traditional Weapons',
      bio: 'Preserving the ancient art of the sword, Master Tanaka brings centuries-old traditions to modern practice. Her expertise in traditional weapons is unmatched in the region.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070'
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
            Learn from the best. Our world-class instructors bring decades of experience, 
            championship titles, and deep wisdom to guide your martial arts journey.
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
                      <div className="text-martial-gold font-bold text-lg">{master.experience}</div>
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
                      <div className="text-martial-gold font-bold text-lg">
                        {master.specialty}
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {master.bio}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {master.specialty.split(', ').map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-martial-red text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-martial-gold transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button className="bg-martial-black text-white hover:bg-martial-red px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-martial-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in">
            Our Philosophy
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            <p className="animate-slide-in-left">
              "The ultimate aim of martial arts is not having to use them. True mastery comes from 
              discipline, respect, and the continuous journey of self-improvement."
            </p>
            <p className="animate-slide-in-right delay-200">
              At Dragon Academy, we believe that martial arts training extends far beyond physical techniques. 
              We cultivate mental strength, emotional balance, and spiritual growth in every student.
            </p>
            <p className="animate-fade-in delay-400">
              Our approach combines traditional wisdom with modern training methods, ensuring that each 
              student develops not just as a martial artist, but as a well-rounded individual ready 
              to face life's challenges with confidence and grace.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
