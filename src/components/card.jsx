import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Card = ({ imageSrc, title, price, address, sqft, beds, baths, badge, badgeColor }) => {
  const [imgError, setImgError] = useState(false);

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
      <div className="w-full max-w-[350px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700 cursor-pointer">
        <div className="flex flex-col items-start">
          <div className="relative w-full">
            <Image
              className="h-[180px] sm:h-[200px] w-full object-cover"
              src={imgError || !imageSrc ? '/images/placeholder.png' : imageSrc}
              alt={title}
              width={400}
              height={200}
              onError={() => setImgError(true)}
            />
            {badge && (
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className={`${getBadgeStyle(badgeColor)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {badge}
                </span>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-6 w-full">
            <p className="text-xl sm:text-2xl leading-[28px] sm:leading-[30px] font-bold text-orange-500 mb-2">
              {price}
            </p>
            
            <div className="capitalize text-cardText font-semibold text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] dark:text-white mb-1 line-clamp-1">
              {title}
            </div>
            
            <p className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] text-gray-500 font-medium mb-3 sm:mb-4 dark:text-gray-400">
              {address}
            </p>
            
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-t pt-3 sm:pt-4">
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
