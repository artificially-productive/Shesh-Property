import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Fallback images
import userImg from '../assets/images/user1.png';
import userImg1 from '../assets/images/user2.png';
import userImg2 from '../assets/images/user3.png';

const fallbackReviews = [
  {
    id: 1,
    text: "Shesh Property found us a 3 BHK in Kandivali within our budget in just 10 days. The documentation was handled so smoothly—we didn't have to visit any government office even once!",
    name: "Priya Sharma",
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

// Helper to assign images and colors to reviews from Google Sheets
const images = [userImg, userImg1, userImg2];
const bgColors = ["bg-[#8833FF4D]", "bg-[#CC74294D]", "bg-[#E62E7B4D]"];

const Review = () => {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/get-reviews');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            // Map Google Sheets data to component format
            const mappedReviews = data.map((item, index) => ({
              id: item.id || index + 1,
              text: item.text,
              name: item.name,
              location: item.location,
              image: images[index % 3],
              bgColor: bgColors[index % 3],
              rating: item.rating || 5,
            }));
            setReviews(mappedReviews);
          }
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Keep using fallback data
      }
    }

    fetchReviews();
  }, []);

  return (
    <div id="reviews" className="relative p-4 mb-4">
      {/* Watermark Title */}
      <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center mt-20">
        <p className="text-8xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
          Reviews
        </p>
        <p className="text-3xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize dark:text-gray-300 px-4">
          What Our Clients Say
        </p>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center px-4">
        <p className="font-medium text-xl sm:text-2xl text-center mt-10 mb-16 text-bluePText leading-relaxed">
          Real stories from real clients across Mumbai.
          <br className="hidden sm:block" />
          Your trust is our biggest asset.
        </p>
      </div>

      {/* Review Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col flex-1 min-w-0">
            {/* Review Card */}
            <div className="bg-white dark:bg-slate-700 shadow-lg rounded-xl p-8 flex-grow flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              {/* Review Text */}
              <p className="font-medium text-[15px] leading-[28px] text-gray-600 dark:text-gray-300 flex-grow">
                "{review.text}"
              </p>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-4 mt-6 px-2">
              <Image
                src={review.image}
                alt={review.name}
                className={`w-[55px] h-[55px] ${review.bgColor} rounded-full object-cover`}
              />
              <div>
                <p className="font-bold text-base text-blue-900 dark:text-white">
                  {review.name}
                </p>
                <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
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
