import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import cardImageBg1 from '../assets/images/RightPropertyservicecomponent.png';

const steps = [
  { step: '01', label: 'Find' },
  { step: '02', label: 'Verify' },
  { step: '03', label: 'Finance' },
  { step: '04', label: 'Negotiate' },
  { step: '05', label: 'Paperwork' },
  { step: '06', label: 'Move In' },
  { step: '07', label: 'Beyond' },
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

      {/* Image from About section */}
      <div className="max-w-7xl mx-auto px-0 sm:px-4 mb-10 sm:mb-14 rounded-2xl overflow-hidden shadow-lg">
        <div className="relative w-full h-48 sm:h-72 lg:h-96">
          <Image
            src={cardImageBg1}
            alt="Full-service real estate solutions"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
            <p className="text-white text-lg sm:text-2xl font-bold drop-shadow">End-to-end support, every step of the way.</p>
          </div>
        </div>
      </div>

      {/* 7 Step Horizontal Indicators */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <div className="flex flex-row justify-center items-center gap-1 sm:gap-3">
          {steps.map((item, index) => (
            <React.Fragment key={item.step}>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-base">
                  {item.step}
                </div>
                <p className="mt-2 text-[10px] sm:text-sm font-medium text-blue-900 dark:text-gray-300 text-center">
                  {item.label}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="w-4 sm:w-10 h-0.5 bg-orange-400 dark:bg-orange-700 mb-5 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* See All Services CTA */}
      <div className="flex justify-center mt-10 sm:mt-14">
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
