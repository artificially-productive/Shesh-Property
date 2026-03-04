import React from 'react';
import Link from 'next/link';
import { FiHome, FiKey } from 'react-icons/fi';

const Deals = () => {
  return (
    <div id="listings" className="relative px-4 mb-4 overflow-hidden">
      {/* Watermark Title with View All Link */}
      <div className="relative mt-12 sm:mt-20">
        <div className="relative h-[80px] sm:h-[180px] flex items-center justify-center">
          <p className="text-5xl sm:text-[140px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
            Listings
          </p>
          <p className="text-xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize dark:text-gray-300 px-4">
            Find What You Need
          </p>
        </div>
        
        <Link 
          href="/listings" 
          className="absolute top-2 right-2 sm:top-8 sm:right-8 text-sm sm:text-base text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 sm:gap-2 z-30"
        >
          View all
          <span>→</span>
        </Link>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center px-2 sm:px-4">
        <p className="font-medium text-base sm:text-2xl text-center mt-6 sm:mt-10 mb-6 sm:mb-10 text-bluePText leading-relaxed">
          Whether you want to buy a home or rent a place,
          <br className="hidden sm:block" />
          we have the right options for you.
        </p>
      </div>

      {/* Buy & Rent Cards */}
      <div className="max-w-4xl mx-auto px-0 sm:px-4 mt-4 sm:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Buy Card */}
          <Link 
            href="/listings?type=buy"
            className="group bg-white dark:bg-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <FiHome className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white mb-2 sm:mb-3">
                Buy a Property
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                Browse verified properties for sale across Mumbai. Flats, houses, land & more.
              </p>
              <span className="text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm sm:text-base">
                Browse Properties
                <span>→</span>
              </span>
            </div>
          </Link>

          {/* Rent Card */}
          <Link 
            href="/listings?type=rent"
            className="group bg-white dark:bg-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <FiKey className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white mb-2 sm:mb-3">
                Rent a Property
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                Find rental homes and flats that fit your budget and preferred location.
              </p>
              <span className="text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm sm:text-base">
                Find Rentals
                <span>→</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center mt-8 sm:mt-12 mb-4 sm:mb-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-base sm:text-lg">
            Looking for something specific?
          </p>
          <p className="text-gray-500 dark:text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
            Share your requirements and we&apos;ll send 3–5 matching properties.
          </p>
          <Link 
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-3xl transition-all duration-300 text-sm sm:text-base"
          >
            Get Personalized Matches
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deals;
