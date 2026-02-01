import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiMapPin, FiHome, FiMaximize, FiFilter } from 'react-icons/fi';

const fallbackListings = [
  {
    id: 1,
    title: "3 BHK Flat in Andheri West",
    location: "Andheri West, Mumbai",
    price: "₹1.85 Cr",
    type: "buy",
    category: "flat",
    bedrooms: 3,
    area: "1,250 sq.ft",
    image: "/images/listings/property1.jpg"
  },
  {
    id: 2,
    title: "2 BHK Apartment in Bandra",
    location: "Bandra East, Mumbai",
    price: "₹45,000/month",
    type: "rent",
    category: "flat",
    bedrooms: 2,
    area: "950 sq.ft",
    image: "/images/listings/property2.jpg"
  },
  {
    id: 3,
    title: "4 BHK Villa in Juhu",
    location: "Juhu, Mumbai",
    price: "₹8.5 Cr",
    type: "buy",
    category: "house",
    bedrooms: 4,
    area: "3,500 sq.ft",
    image: "/images/listings/property3.jpg"
  },
  {
    id: 4,
    title: "Commercial Shop in Dadar",
    location: "Dadar West, Mumbai",
    price: "₹2.2 Cr",
    type: "buy",
    category: "commercial",
    bedrooms: null,
    area: "800 sq.ft",
    image: "/images/listings/property4.jpg"
  },
  {
    id: 5,
    title: "1 BHK in Powai",
    location: "Powai, Mumbai",
    price: "₹28,000/month",
    type: "rent",
    category: "flat",
    bedrooms: 1,
    area: "550 sq.ft",
    image: "/images/listings/property5.jpg"
  },
];

const filterTabs = [
  { id: 'all', label: 'All Properties' },
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
];

const categoryFilters = [
  { id: 'all', label: 'All' },
  { id: 'flat', label: 'Flats' },
  { id: 'house', label: 'Houses' },
  { id: 'land', label: 'Land' },
  { id: 'commercial', label: 'Commercial' },
];

export default function ListingsPage() {
  const router = useRouter();
  const [listings, setListings] = useState(fallbackListings);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await fetch('/api/get-properties');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setListings(data);
          }
        }
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  useEffect(() => {
    if (router.query.type) {
      setActiveFilter(router.query.type);
    }
  }, [router.query.type]);

  const filteredListings = listings.filter((listing) => {
    const typeMatch = activeFilter === 'all' || listing.type === activeFilter;
    const categoryMatch = activeCategory === 'all' || listing.category === activeCategory;
    return typeMatch && categoryMatch;
  });

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    if (filterId === 'all') {
      router.push('/listings', undefined, { shallow: true });
    } else {
      router.push(`/listings?type=${filterId}`, undefined, { shallow: true });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
        >
          <FiArrowLeft className="w-5 h-5 text-gray-800 dark:text-white" />
          <span className="text-sm font-medium text-gray-800 dark:text-white">Back</span>
        </Link>
      </div>

      <section className="pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center mb-8">
            <p className="text-8xl sm:text-[160px] text-blue-700 opacity-10 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white dark:opacity-10">
              Listings
            </p>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Handpicked properties across Mumbai&apos;s best localities. Updated daily with verified listings.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm py-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <FiFilter className="w-5 h-5 text-gray-500" />
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 mr-2">Category:</span>
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-blue-900 dark:bg-blue-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading properties...</div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Showing {filteredListings.length} properties
              </p>

              {filteredListings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredListings.map((listing) => (
                    <div
                      key={listing.id}
                      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                        <Image
                          src={listing.image || '/images/listings/default-property.jpg'}
                          alt={listing.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                            listing.type === 'buy' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-blue-500 text-white'
                          }`}>
                            {listing.type === 'buy' ? 'For Sale' : 'For Rent'}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                          {listing.title}
                        </h3>
                        
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3">
                          <FiMapPin className="w-4 h-4" />
                          <span>{listing.location}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {listing.bedrooms && (
                            <div className="flex items-center gap-1">
                              <FiHome className="w-4 h-4" />
                              <span>{listing.bedrooms} BHK</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <FiMaximize className="w-4 h-4" />
                            <span>{listing.area}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold text-orange-500">
                            {listing.price}
                          </p>
                          <Link
                            href="/contact"
                            className="px-4 py-2 bg-blue-900 dark:bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
                          >
                            Enquire
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No properties found matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setActiveFilter('all');
                      setActiveCategory('all');
                      router.push('/listings', undefined, { shallow: true });
                    }}
                    className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Share your requirements and we&apos;ll send you 3-5 matching properties.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300"
          >
            Get Personalized Matches
          </Link>
        </div>
      </section>
    </main>
  );
}
