
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10"></div>
          <div className="w-full h-full bg-gradient-to-r from-martial-black via-martial-red/20 to-martial-black animate-fade-in">
            {/* Placeholder for video - in real implementation, use <video> tag */}
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070')] bg-cover bg-center bg-fixed"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-3d animate-text-glow">
            DRAGON ACADEMY
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in-left delay-300">
            Master the Art of Self-Defense & Discipline
          </p>
          <button
            onClick={scrollToStory}
            className="group bg-martial-red hover:bg-martial-gold text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 shadow-2xl animate-scale-in delay-500"
          >
            Explore More
            <ChevronDown className="inline-block ml-2 group-hover:animate-bounce" size={20} />
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* Academy Story Section */}
      <section ref={storyRef} className="py-20 bg-gradient-to-b from-martial-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text">
              Our Legacy
            </h2>
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p className="animate-slide-in-left">
                For over three decades, Dragon Academy has been the premier destination for martial arts training, 
                combining ancient traditions with modern techniques to create warriors of both body and spirit.
              </p>
              <p className="animate-slide-in-right delay-200">
                Our masters have trained champions, but more importantly, we've shaped character, instilled discipline, 
                and built confidence in thousands of students from all walks of life.
              </p>
              <p className="animate-fade-in delay-400">
                Whether you're seeking self-defense, fitness, mental clarity, or competitive excellence, 
                our comprehensive programs will guide you on your martial arts journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: '30+', label: 'Years of Excellence' },
                { number: '5000+', label: 'Students Trained' },
                { number: '15+', label: 'Master Instructors' },
                { number: '50+', label: 'Championships Won' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in card-3d" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-martial-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
            Begin Your Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-in-left">
            Join our community of dedicated martial artists and discover your true potential.
          </p>
          <div className="space-x-6">
            <button className="bg-white text-martial-red hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-scale-in">
              Free Trial Class
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-martial-red px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-scale-in delay-200">
              View Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
