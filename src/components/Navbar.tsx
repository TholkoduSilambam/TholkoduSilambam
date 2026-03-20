
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/Navbar/logo2.webp"; // Adjust the path as necessary

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/locations', label: 'Locations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-martial-black/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text animate-text-glow">
              <img
                src={logo}
                alt="Tholkodu Silambam Logo"
                className="h-10 w-10 inline-block mr-2 hidden md:inline"></img>
              Tholkodu Silambam
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`gradient-text hover:text-martial-gold transition-all duration-300 font-semibold relative ${
                    location.pathname === link.to ? 'text-martial-gold' : ''
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-martial-gold transition-all duration-300 ${
                    location.pathname === link.to ? 'w-full' : 'w-0 hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
  
            {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-martial-gold transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
          {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`block px-20 py-1 text-white hover:text-martial-gold transition-colors duration-300 ${
                  location.pathname === item.to ? 'text-martial-gold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        </div>
      </nav>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''} bg-martial-red hover:bg-martial-gold text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Navbar;
