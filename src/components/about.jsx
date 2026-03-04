import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div id="about" className="relative px-4 mb-4 overflow-hidden">
      {/* Watermark Title with Learn More Link */}
      <div className="relative mt-12 sm:mt-20">
        <div className="relative h-[80px] sm:h-[180px] flex items-center justify-center">
          <p className="text-5xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
            About Us
          </p>
          <p className="text-xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize dark:text-gray-300 px-4">
            Who We Are
          </p>
        </div>
        
        <Link 
          href="/about" 
          className="absolute top-2 right-2 sm:top-8 sm:right-8 text-sm sm:text-base text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 sm:gap-2 z-30"
        >
          Learn more
          <span>→</span>
        </Link>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center px-2 sm:px-4">
        <p className="font-medium text-base sm:text-2xl md:text-3xl text-center mt-6 sm:mt-10 text-bluePText leading-relaxed">
          We don&apos;t just find homes — we handle everything
          <br className="hidden sm:block" />
          that comes with the move. Search. Loans. Paperwork. All sorted.
        </p>
      </div>

      {/* Simple Visual - 4 Step Icons */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-12 px-4">
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-8">
          {[
            { step: '01', label: 'Find' },
            { step: '02', label: 'Finance' },
            { step: '03', label: 'Paperwork' },
            { step: '04', label: 'Move In' },
          ].map((item, index) => (
            <React.Fragment key={item.step}>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base">
                  {item.step}
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
              {index < 3 && (
                <div className="w-6 sm:w-12 h-0.5 bg-orange-200 dark:bg-orange-900" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <Link 
          href="/about"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-3xl transition-all duration-300 text-base sm:text-lg"
        >
          See How We Help You
        </Link>
      </div>
    </div>
  );
}
