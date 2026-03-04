import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import instaImg1 from '../assets/images/insta1.png';
import instaImg2 from '../assets/images/insta2.png';
import instaImg3 from '../assets/images/insta3.png';
import instaImg4 from '../assets/images/insta4.png';
import instaImg5 from '../assets/images/insta5.png';
import instaImg6 from '../assets/images/insta6.png';
import instaImg7 from '../assets/images/insta7.png';
import instaImg8 from '../assets/images/insta8.png';
import instaIcon from '../assets/icons/instaIcon.png';

const images = [
  instaImg1, instaImg2, instaImg3, instaImg4,
  instaImg5, instaImg6, instaImg7, instaImg8,
];

const Insta = () => {
  return (
    <div className="relative px-4 mb-4 overflow-hidden">
      <div className="flex justify-center items-center p-3">
        <button className="mt-12 sm:mt-[90px] mb-4 bg-orange-200 hover:bg-orange-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
          instagram
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            instagram
          </p>
          <p className="text-lg sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-8 sm:mt-[55px] dark:text-gray-300 px-2">
            Checkout what our customers shared{' '}
            <span className="normal-case">#homes</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 sm:mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-[1100px] w-full px-2">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square w-full">
              <Image
                src={img}
                alt={`instagram image ${i + 1}`}
                fill
                className="rounded-lg object-cover hover:scale-105 ease-in duration-200"
              />
              {i === 2 && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="flex justify-center items-center bg-[#00000080] w-14 h-14 sm:w-20 sm:h-20 rounded-full">
                    <Image src={instaIcon} alt="insta icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insta;
