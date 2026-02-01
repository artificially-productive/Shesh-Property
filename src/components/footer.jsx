import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterFill, RiFacebookFill, RiInstagramLine, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shesh Properties</h3>
            <br>
            
            



            
            </br>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiTwitterFill size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiFacebookFill size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiInstagramLine size={18} />
              </a>
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiWhatsappFill size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Kandivali West, Mumbai, Maharashtra 400067</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919930662325" className="hover:text-orange-500 transition-colors">
                  +91 99306 62325
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@sheshproperty.com" className="hover:text-orange-500 transition-colors">
                  hello@sheshproperty.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#listings" className="hover:text-orange-500 transition-colors">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="#services" className="hover:text-orange-500 transition-colors">
                  Property Search
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-500 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-500 transition-colors">
                  Home Loans
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-500 transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-500 transition-colors">
                  Land Advisory
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {year} Shesh Properties. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-orange-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
