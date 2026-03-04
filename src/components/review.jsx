import React, { useState } from 'react';
import Image from 'next/image';

import userImg from '../assets/images/user1.png';
import userImg1 from '../assets/images/user2.png';
import userImg2 from '../assets/images/user3.png';

const fallbackReviews = [
  {
    id: 1,
    text: "Shesh Property found us a 3 BHK in Kandivali within our budget in just 10 days. The documentation was handled so smoothly—we didn't have to visit any government office even once!",
    name: "Priyesh Sharma",
    location: "Kandivali West, Mumbai",
    image: userImg,
    bgColor: "bg-[#8833FF4D]"
  },
  {
    id: 2,
    text: "We were struggling to get a home loan approved. Shesh Property connected us with their banking partners and we got 0.25% lower interest than what HDFC offered directly.",
    name: "Rajesh Mehta",
    location: "Andheri West, Mumbai",
    image: userImg1,
    bgColor: "bg-[#CC74294D]"
  },
  {
    id: 3,
    text: "Bought a flat in Bandra through Shesh Property. From property search to registration to interior design—they handled everything. Like having a personal real estate concierge!",
    name: "Sneha Desai",
    location: "Bandra West, Mumbai",
    image: userImg2,
    bgColor: "bg-[#E62E7B4D]"
  },
];

const Review = () => {
  const [reviews] = useState(fallbackReviews);

  return (
    <div id="reviews" className="relative px-4 mb-4 overflow-hidden">
      {/* Watermark Title */}
      <div className="relative h-[80px] sm:h-[180px] flex items-center justify-center mt-12 sm:mt-20">
        <p className="text-5xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
          Reviews
        </p>
        <p className="text-xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize dark:text-gray-300 px-4">
          What Our Clients Say
        </p>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center px-2 sm:px-4">
        <p className="font-medium text-base sm:text-2xl text-center mt-6 sm:mt-10 mb-8 sm:mb-16 text-bluePText leading-relaxed">
          Real stories from real clients across Mumbai.
          <br className="hidden sm:block" />
          Your trust is our biggest asset.
        </p>
      </div>

      {/* Review Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5 sm:gap-8 px-0 sm:px-4 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col flex-1 min-w-0">
            <div className="bg-white dark:bg-slate-700 shadow-lg rounded-xl p-5 sm:p-8 flex-grow flex flex-col">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                ))}
              </div>
              <p className="font-medium text-sm sm:text-[15px] leading-6 sm:leading-[28px] text-gray-600 dark:text-gray-300 flex-grow">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
           
            <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 px-2">
              <Image
                src={review.image}
                alt={review.name}
                className={`w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] ${review.bgColor} rounded-full object-cover`}
              />
              <div>
                <p className="font-bold text-sm sm:text-base text-blue-900 dark:text-white">
                  {review.name}
                </p>
                <p className="font-medium text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {review.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
