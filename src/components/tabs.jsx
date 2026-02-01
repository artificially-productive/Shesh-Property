import { useState } from 'react';
import Card from './card';
import cardImageBg1 from '../assets/images/Image.png';
import cardImageBg2 from '../assets/images/Image-2.png';
import cardImageBg3 from '../assets/images/Image-3.png';
import cardImageBg4 from '../assets/images/Image-4.png';
import cardImageBg5 from '../assets/images/Image-5.png';
import cardImageBg6 from '../assets/images/Image-6.png';

// Sample listings data - Later this will come from Supabase
const listings = [
  {
    id: 1,
    imageSrc: cardImageBg1,
    title: "Spacious 3 BHK Apartment",
    price: "₹ 1.85 Cr",
    address: "Kandivali West, Mumbai",
    sqft: "1,450",
    beds: 3,
    baths: 2,
    badge: "For Sale",
    badgeColor: "green",
    type: "Apartment"
  },
  {
    id: 2,
    imageSrc: cardImageBg2,
    title: "Premium 2 BHK Flat",
    price: "₹ 2.40 Cr",
    address: "Bandra West, Mumbai",
    sqft: "1,200",
    beds: 2,
    baths: 2,
    badge: "For Sale",
    badgeColor: "green",
    type: "Apartment"
  },
  {
    id: 3,
    imageSrc: cardImageBg3,
    title: "Luxury 4 BHK Penthouse",
    price: "₹ 5.50 Cr",
    address: "Andheri Lokhandwala, Mumbai",
    sqft: "2,800",
    beds: 4,
    baths: 4,
    badge: "Premium",
    badgeColor: "purple",
    type: "Apartment"
  },
  {
    id: 4,
    imageSrc: cardImageBg4,
    title: "Modern 2 BHK Apartment",
    price: "₹ 95 Lac",
    address: "Malad West, Mumbai",
    sqft: "980",
    beds: 2,
    baths: 2,
    badge: "New Launch",
    badgeColor: "blue",
    type: "Apartment"
  },
  {
    id: 5,
    imageSrc: cardImageBg5,
    title: "Sea View 3 BHK",
    price: "₹ 3.25 Cr",
    address: "Worli Sea Face, Mumbai",
    sqft: "1,650",
    beds: 3,
    baths: 3,
    badge: "For Sale",
    badgeColor: "green",
    type: "Apartment"
  },
  {
    id: 6,
    imageSrc: cardImageBg6,
    title: "Cozy 1 BHK Flat",
    price: "₹ 55 Lac",
    address: "Borivali East, Mumbai",
    sqft: "550",
    beds: 1,
    baths: 1,
    badge: "Coming Soon",
    badgeColor: "orange",
    type: "Apartment"
  },
];

const ListingsGrid = ({ listings }) => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-6 m-5 p-5">
      {listings.map((listing) => (
        <Card
          key={listing.id}
          imageSrc={listing.imageSrc}
          title={listing.title}
          price={listing.price}
          address={listing.address}
          sqft={listing.sqft}
          beds={listing.beds}
          baths={listing.baths}
          badge={listing.badge}
          badgeColor={listing.badgeColor}
        />
      ))}
    </div>
  );
};

const tabs = [
  { label: 'All', filter: null },
  { label: 'For Sale', filter: 'For Sale' },
  { label: 'New Launch', filter: 'New Launch' },
  { label: 'Premium', filter: 'Premium' },
  { label: 'Coming Soon', filter: 'Coming Soon' },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Filter listings based on active tab
  const getFilteredListings = () => {
    const activeFilter = tabs[activeTabIndex].filter;
    if (!activeFilter) return listings; // "All" tab
    return listings.filter(listing => listing.badge === activeFilter);
  };

  const filteredListings = getFilteredListings();

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'
            } px-4 py-2 rounded-full font-medium text-sm transition-all duration-200`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Listings Grid */}
      <div className="mt-8">
        {filteredListings.length > 0 ? (
          <ListingsGrid listings={filteredListings} />
        ) : (
          <p className="text-gray-500 text-center py-10">No listings found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
