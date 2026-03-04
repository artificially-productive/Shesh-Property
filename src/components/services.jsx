import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import cardImageBg1 from '../assets/images/RightPropertyservicecomponent.png';
import cardImageBg2 from '../assets/images/Paperworkservicecomponent.png';
import cardImageBg3 from '../assets/images/Homeloansservicescomponent.png';

const services = [
  {
    id: 1,
    title: "Property Discovery",
    description: "We understand your requirements and help you find the right property — covering budget, location, site visits, market insights, and access to both developer and resale options.",
    includes: [
      "Requirement consultation",
      "Curated property options",
      "Site visit coordination",
      "Market insights & price comparison",
    ],
    image: cardImageBg1,
    cta: "Find Properties",
    href: "/listings"
  },
  {
    id: 2,
    title: "Documentation & Legal Verification",
    description: "We verify all property documents to ensure the deal is legally safe — title checks, ownership history, encumbrance certificates, and MahaRERA registration.",
    includes: [
      "Title & ownership verification",
      "Encumbrance certificate check",
      "MahaRERA registration check",
      "Approval & layout verification",
    ],
    image: cardImageBg2,
    cta: "Learn More",
    href: "/services"
  },
  {
    id: 3,
    title: "Home Loan & Financial Assistance",
    description: "We simplify financing by checking your loan eligibility, comparing offers across banks, and supporting the entire application process end to end.",
    includes: [
      "Loan eligibility check",
      "Comparison across banks",
      "Application support",
      "Pre-approval coordination",
    ],
    image: cardImageBg3,
    cta: "Get Loan Help",
    href: "/contact"
  },
];

const Services = () => {
  return (
    <div id="services" className="relative px-4 mb-4 overflow-hidden">
      {/* Watermark Title */}
      <div className="relative mt-12 sm:mt-20">
        <div className="relative h-[80px] sm:h-[180px] flex items-center justify-center">
          <p className="text-5xl sm:text-[140px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
            Services
          </p>
          <p className="text-xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize dark:text-gray-300 px-4">
            Full-service real estate solutions
          </p>
        </div>

        <Link
          href="/services"
          className="absolute top-2 right-2 sm:top-8 sm:right-8 text-sm sm:text-base text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 sm:gap-2 z-30"
        >
          View all 7
          <span>→</span>
        </Link>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center px-2 sm:px-4">
        <p className="font-medium text-base sm:text-2xl text-center mt-6 sm:mt-10 mb-8 sm:mb-16 text-bluePText leading-relaxed">
          From finding the perfect property to moving in, we handle every step.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-0 sm:px-4 space-y-6 sm:space-y-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {/* Image */}
            <div className="lg:w-1/2 h-48 sm:h-64 lg:h-auto relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl sm:text-3xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {service.description}
              </p>
              {/* Includes bullets */}
              <ul className="mb-5 sm:mb-6 space-y-1">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg w-fit transition-all duration-300 text-sm sm:text-base"
              >
                {service.cta}
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See All Services CTA */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <Link
          href="/services"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-3xl transition-all duration-300 text-base sm:text-lg"
        >
          See All 7 Services →
        </Link>
      </div>
    </div>
  );
};

export default Services;
