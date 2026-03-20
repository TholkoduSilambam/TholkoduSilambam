import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { FaPinterestP } from 'react-icons/fa';
import logo from "../assets/images/Navbar/logo2.webp"; // Adjust as needed

const Footer = () => {
  return (
    <footer className="bg-martial-black text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand Section */}
        <div className="space-y-3">
          <img src={logo} alt="Tholkodu Silambam" className="h-12 w-12" />
          <h4 className="text-xl font-bold">Tholkodu Silambam</h4>
          <p className="text-sm text-gray-400">
            Preserving the ancient martial art of Silambam. Learn, train, and grow with us.
          </p>
        </div>

        {/* Navigation Links - hidden on small screens */}
        <div className="md:block">
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-martial-gold transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-martial-gold transition">About</Link></li>
            <li><Link to="/gallery" className="hover:text-martial-gold transition">Gallery</Link></li>
            <li><Link to="/locations" className="hover:text-martial-gold transition">Locations</Link></li>
            <li><Link to="/contact" className="hover:text-martial-gold transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918489256107" className="hover:underline">+91 8489256107</a>,
              <a href="tel:+917010717593" className="hover:underline"> +91 7010717593</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:tholkodusilambam@gmail.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tholkodusilambam@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons Row */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/tholkodu_silambam?igsh=eTJ5dXoxYTZkZDhq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com/@tholkodusilambam?si=QLKDtDZ5VXFQDF2u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://pin.it/2qteTI2rT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaPinterestP size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561310932702"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tholkodu Silambam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
