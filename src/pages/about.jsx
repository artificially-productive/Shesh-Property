import Link from 'next/link';
import React from 'react';
import { FiSearch, FiFileText, FiDollarSign, FiHome, FiArrowLeft } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative z-10">

      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
        >
          <FiArrowLeft className="w-5 h-5 text-gray-800 dark:text-white" />
          <span className="text-sm font-medium text-gray-800 dark:text-white">Back</span>
        </Link>
      </div>

      {/* Watermark Title */}
      <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center mt-4 overflow-hidden">
        <p className="text-8xl sm:text-[160px] text-blue-700 opacity-10 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white dark:opacity-10">
          About Us
        </p>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-10 text-bluePText px-4 dark:text-gray-300">
          Search. Loans. Paperwork. Moving in. We handle it all —
          <br />
          so you can focus on finding the right home.
        </p>
      </div>

      {/* What We Do - 4 Steps */}
      <div className="max-w-5xl mx-auto mt-16 space-y-10 px-4">

        {/* Step 1 */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiSearch className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Find & Evaluate Your Property
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              We shortlist curated options based on your budget and needs, arrange site visits, do a background check on builders, and benchmark prices — so you only see the best options.
            </p>
            <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-sm">
              <li>• Requirement consultation (budget, location, type)</li>
              <li>• Curated property shortlist</li>
              <li>• Site visit coordination</li>
              <li>• Builder background check & price benchmarking</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiFileText className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Verify & Negotiate the Deal
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              We run a full legal check — title, MahaRERA, encumbrance — and then negotiate the price and structure the payment plan on your behalf.
            </p>
            <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-sm">
              <li>• Title & ownership verification</li>
              <li>• Encumbrance certificate & MahaRERA check</li>
              <li>• Price negotiation with seller / developer</li>
              <li>• Payment schedule planning</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiDollarSign className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Handle Loans & Paperwork
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              We check your loan eligibility, compare bank offers, and manage the entire application. Then we prepare agreements, guide on stamp duty, and coordinate registration.
            </p>
            <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-sm">
              <li>• Loan eligibility check & bank comparison</li>
              <li>• Loan application support & pre-approval</li>
              <li>• Sale agreement preparation</li>
              <li>• Stamp duty guidance & registration coordination</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiHome className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Support You After Move-In
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Got the keys? We're still here — interior referrals, renovation support, packers & movers, and even property management and resale when the time comes.
            </p>
            <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-sm">
              <li>• Interior design referrals & renovation assistance</li>
              <li>• Packers & movers coordination</li>
              <li>• Utility setup guidance</li>
              <li>• Property management and resale support</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Why Choose Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-blue-50 dark:bg-slate-700 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-white text-center mb-6">
          Why Shesh Property?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-bold text-lg text-orange-500 mb-1">2,200+ Families</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Helped find their perfect home.</p>
          </div>
          <div>
            <p className="font-bold text-lg text-orange-500 mb-1">One Point of Contact</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Same person, start to finish.</p>
          </div>
          <div>
            <p className="font-bold text-lg text-orange-500 mb-1">No Hidden Costs</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">What we say is what you pay.</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-16 gap-6 px-4">
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">1,120+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">Properties Sold</p>
        </div>
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">1,100+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">Homes Rented</p>
        </div>
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">50+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">Land Deals Closed</p>
        </div>
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">7+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">Redevelopments Managed</p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-5xl mx-auto mt-20 px-4">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-white text-center mb-12">
          Meet the People Behind Shesh Property
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-blue-50 dark:bg-slate-700 rounded-2xl p-8 text-center">
            <div className="w-28 h-28 bg-orange-100 dark:bg-orange-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-orange-500">AD</span>
            </div>
            <h4 className="font-bold text-xl text-blue-900 dark:text-white">Aakash Desai</h4>
            <p className="text-orange-500 font-medium text-sm mb-3">Co-Founder</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Passionate about making real estate simple for everyday families in Mumbai.
              Aakash brings a fresh, client-first approach to every deal.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-slate-700 rounded-2xl p-8 text-center">
            <div className="w-28 h-28 bg-orange-100 dark:bg-orange-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-orange-500">SD</span>
            </div>
            <h4 className="font-bold text-xl text-blue-900 dark:text-white">[Father&apos;s Name]</h4>
            <p className="text-orange-500 font-medium text-sm mb-3">Founder</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Decades of experience in Mumbai&apos;s property market.
              The foundation behind everything Shesh Property stands for today.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 pb-16">
        <Link
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-3xl transition-all duration-300 text-lg"
        >
          Start Your Home Journey
        </Link>
      </div>

    </div>
  );
}
