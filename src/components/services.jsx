import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Correctly importing the new PNG files
import cardImageBg1 from '../assets/images/RightPropertyservicecomponent.png';
import cardImageBg2 from '../assets/images/Paperworkservicecomponent.png';
import cardImageBg3 from '../assets/images/Homeloansservicescomponent.png';

// Using existing images as fallbacks for 4 and 5 to prevent build errors
// (Since we only show the first 3 on the home page anyway)
const cardImageBg4 = cardImageBg1; 
const cardImageBg5 = cardImageBg2;

const services = [
  {
    id: 1,
    title: "We Find The Right Property",
    description: "Whether you want to buy or rent, we search across Mumbai to find properties that match your budget, location, and needs. No more endless searching - we do the hard work for you.",
    image: cardImageBg1,
    cta: "Find Properties",
    href: "/listings" // Updated to real link
  },
  {
    id: 2,
    title: "We Handle All Paperwork",
    description: "Buying or selling a home comes with a lot of documents - agreements, registrations, NOCs, and more. We take care of all the paperwork so you don't have to worry about missing anything.",
    image: cardImageBg2,
    cta: "Learn More",
    href: "/contact" // Updated to real link
  },
  {
    id: 3,
    title: "We Help With Home Loans",
    description: "Getting a loan can be confusing. We connect you with trusted banks and help you get the best interest rates. We guide you through the entire loan process from start to finish.",
    image: cardImageBg3,
    cta: "Get Loan Help",
    href: "/contact" // Updated to real link
  },
  {
    id: 4,
    title: "We Help With Interiors",
    description: "Want to set up your new home? We connect you with reliable interior designers and contractors who can turn your empty house into a beautiful home within your budget.",
    image: cardImageBg4,
    cta: "Explore Interiors",
    href: "/contact"
  },
  {
    id: 5,
    title: "Land & Redevelopment Support",
    description: "Own land or an old building? We help with land deals and redevelopment projects. From finding buyers to handling builder negotiations, we guide you through the entire process.",
    image: cardImageBg5,
    cta: "Talk to Experts",
    href: "/contact"
  },
];

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      {/* Watermark Title with View All Link */}
      <div className="relative mt-20">
        <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center">
          <p className="text-7xl sm:text-[140px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
            Services
          </p>
          <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize dark:text-gray-300 px-4">
            Full-service real estate solutions
          </p>
        </div>
        
        {/* View All Link */}
        <Link 
          href="/services" 
          className="absolute top-4 right-4 sm:top-8 sm:right-8 text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-2 z-30"
        >
          View all
          <span>→</span>
        </Link>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center px-4">
        <p className="font-medium text-xl sm:text-2xl text-center mt-10 mb-16 text-bluePText leading-relaxed">
          From finding the perfect property to moving in, we handle every step.
        </p>
      </div>

      {/* Service Cards - Show only first 3 on landing */}
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {services.slice(0, 3).map((service, index) => (
          <div 
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {/* Image */}
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" // Optimization for Next.js Image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-fit transition-all duration-300"
              >
                {service.cta}
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See All Services CTA */}
      <div className="flex justify-center mt-12">
        <Link 
          href="/services"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-3xl transition-all duration-300 text-lg"
        >
          See All Our Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
