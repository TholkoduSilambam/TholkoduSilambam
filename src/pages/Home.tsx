
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import TKSLOGO from '../assets/images/Navbar/logo2.webp';
import NYKSLOGO from '../assets/images/Home/NYKS_LOGO.webp';
import groupPhoto from '../assets/images/Home/groupphoto2.webp';


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
            <div className="w-full h-full bg-cover bg-center bg-fixed" >{/*style={{ backgroundImage: `url(${groupPhoto})` }}*/}
              <img
                src={groupPhoto}
                alt="Group photo"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-3d animate-text-glow">
            THOLKODU SILAMBTTA KAZHAGAM
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
            <div className="flex justify-center items-center space-x-6 mb-6">
              <img src={TKSLOGO} alt="tholkodu-silambam-logo" className="h-16 w-auto" />
              <img src={NYKSLOGO} alt="NYKS-logo" className="h-16 w-auto" />
            </div>

            <p className="text-center text-lg text-gray-200 font-semibold mb-2">
              Nehru Yuva Kendra Sangathan certified academy
            </p>

            <p className="text-center text-xl font-bold text-yellow-400 mb-10">
              Serial No: <span className="bg-white text-black px-3 py-1 rounded">SLNO:406/2023-24</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text leading-normal pb-2">
              Silambam Is Our Breath
            </h2>

            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p className="animate-slide-in-left">
                Silambam is a weapon-based art that originated in Tamil Nadu. The father of Silambam is an Agasthiyar. He learns silambam from his guru, Lord Murugan, which is historical myth content.
                It was 1000 years ago when people were walking so many kilometers, so they picked up a stick for their walking purpose, and they faced wild animals, so they defeated them with the use of sticks by natural thinking without a format.
              </p>
              <p className="animate-slide-in-right delay-200">
                In the initial technical stage, they don't know the tricks; then Agasthiyar and Bothidharma learn the technique and take it all across Asia.
                The first thought of the silambam is the beauty and grace of the movement, but we all know the dangers behind beauty.
              </p>
              <p className="animate-fade-in delay-400">
                Silambam is not an art; it's like a natural medicine without any doctors. then it's one kind of meditation where both your body and mind focus on a particular activity.
                Silambam doesn't have equality between genders; all are the same in this art. So ready to learn silambam.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: '5+', label: 'Classes' },
                { number: '200+', label: 'Students Trained' },
                { number: '12+', label: 'Events Done' },
                { number: '12+', label: 'Meetings' }
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
            Begin Your Silambam Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-in-left">
            Join our community of dedicated silambam trainers and discover your true potential.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
