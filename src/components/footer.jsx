import React from "react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramLine, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    // --- CHANGED: bg-blue-900 to bg-black ---
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: Logo & Social */}
          <div className="col-span-2 sm:col-span-1">
            <img 
              src="/logo/shesh-logo.webp" 
              alt="Shesh Properties Logo" 
              className="h-10 sm:h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">Your trusted partner in Mumbai real estate.</p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/sheshproperty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiFacebookFill size={16} />
              </a>
              <a 
                href="https://www.instagram.com/sheshproperty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiInstagramLine size={16} />
              </a>
              <a 
                href="https://wa.me/919930662325" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <RiWhatsappFill size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>1, Sham Nirmal Heights, Narsing Lane, Malad West, Mumbai 400064</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919930662325" className="hover:text-orange-500 transition-colors">
                  +91 99306 62325
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@sheshproperty.com" className="hover:text-orange-500 transition-colors break-all">
                  hello@sheshproperty.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/listings" className="hover:text-orange-500 transition-colors">Listings</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm">
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Property Discovery</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Legal Verification</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Home Loans</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Documentation</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Move-In Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-400">
            <p>© {year} Shesh Properties. All Rights Reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;