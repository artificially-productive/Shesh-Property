import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ imageSrc, title, price, address, sqft, beds, baths, badge, badgeColor }) => {
  // Badge color mapping
  const getBadgeStyle = (color) => {
    const styles = {
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      orange: 'bg-orange-500',
      purple: 'bg-purple-500',
      red: 'bg-red-500',
    };
    return styles[color] || 'bg-orange-500';
  };

  return (
    <Link href="#contact">
      <div className="w-[350px] h-[420px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700 cursor-pointer">
        <div className="flex flex-col items-start">
          <div className="relative w-full">
            <Image
              className="h-[200px] w-full object-cover"
              src={imageSrc}
              alt={title}
            />
            {/* Badge */}
            {badge && (
              <div className="absolute top-4 left-4">
                <span className={`${getBadgeStyle(badgeColor)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {badge}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 w-full">
            {/* Price */}
            <p className="text-2xl leading-[30px] font-bold text-orange-500 mb-2">
              {price}
            </p>
            
            {/* Title */}
            <div className="capitalize text-cardText font-semibold text-[16px] leading-[28px] dark:text-white mb-1">
              {title}
            </div>
            
            {/* Address */}
            <p className="text-[14px] leading-[24px] text-gray-500 font-medium mb-4 dark:text-gray-400">
              {address}
            </p>
            
            {/* Specs */}
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 border-t pt-4">
              <div className="flex items-center gap-1">
                <span className="font-semibold">{sqft}</span>
                <span>sq.ft</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">{beds}</span>
                <span>Beds</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">{baths}</span>
                <span>Baths</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
