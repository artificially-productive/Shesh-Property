import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroBg from '../assets/images/heroBackgroundflat.png';
import { RiWhatsappFill } from 'react-icons/ri';

const Hero = () => {
  const showMoreBtn = () => {
    document
      .getElementById('listings')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col w-full h-screen">
      <Image
        src={heroBg}
        alt="Modern home interior"
        fill
        className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center"
      />
      <div className="w-full h-screen relative">
        <div className="relative h-screen text-center flex flex-col justify-center items-center px-4">
         
          {/* Main heading */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl text-center text-white capitalize leading-tight">
            Trusted Real Estate Broker in
            <br /> Suburban Mumbai
          </h1>


          {/* CTA Button */}
          <div className="mt-10">
            <button
              onClick={showMoreBtn}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
            >
              Browse Listings
            </button>
          </div>
        </div>


        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919930662325"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
        >
          <RiWhatsappFill size={28} />
          <span className="hidden sm:inline font-medium">Talk to an Agent</span>
        </a>
      </div>
    </section>
  );
};


export default Hero;