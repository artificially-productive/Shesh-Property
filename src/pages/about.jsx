import Link from 'next/link';
import React from 'react';
import { FiSearch, FiFileText, FiDollarSign, FiHome, FiArrowLeft } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative z-10">
      
      {/* 
         UPDATED: Replaced the Solid Background Header with the Floating Back Button 
         (Exact code from Services Page)
      */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
        >
          <FiArrowLeft className="w-5 h-5 text-gray-800 dark:text-white" />
          <span className="text-sm font-medium text-gray-800 dark:text-white">Back</span>
        </Link>
      </div>

      {/* Watermark Title - Only shadow text, more visible */}
      <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center mt-4">
        <p className="text-8xl sm:text-[160px] text-blue-700 opacity-10 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white dark:opacity-10">
          About Us
        </p>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-10 text-bluePText px-4">
          At Shesh Property, we don&apos;t just find homes—we handle everything
          <br />
          that comes with the move. Your trusted partner in Mumbai real estate.
        </p>
      </div>

      {/* What We Do - 4 Steps */}
      <div className="max-w-5xl mx-auto mt-16 space-y-10 px-4">
        
        {/* 1. We Find Your Home */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiSearch className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Find Your Home
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Tell us what you want. We show you only the best options — no endless searching, no wasted time.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>• We understand your needs and budget</p>
              <p>• We shortlist the best 5-10 properties</p>
              <p>• We arrange visits at your convenience</p>
            </div>
          </div>
        </div>

        {/* 2. We Get Your Loan */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiDollarSign className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Get Your Loan
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Banks can be confusing. We talk to them for you and help you get approved faster, at better rates.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>• We check how much loan you can get</p>
              <p>• We connect you with the right banks</p>
              <p>• We help with all the documents</p>
            </div>
          </div>
        </div>

        {/* 3. We Handle The Paperwork */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiFileText className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Handle The Paperwork
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Buying property means lots of documents. We take care of all of it — you just sign where needed.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>• We verify the property is legally safe</p>
              <p>• We prepare all agreements</p>
              <p>• We handle registration and stamp duty</p>
            </div>
          </div>
        </div>

        {/* 4. We Help You Move In */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FiHome className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white text-xl mb-2">
              We Help You Move In
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Got the keys? We&apos;re still here. Need an interior designer or want to rent it out? We&apos;ve got you.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>• Interior design contacts at good rates</p>
              <p>• Help finding tenants for investors</p>
              <p>• Support even after the deal is done</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-blue-50 dark:bg-slate-700 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-white text-center mb-6">
          Why Choose Shesh Property?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-bold text-lg text-orange-500 mb-2">2,200+ Families Helped</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">We&apos;ve done this many times. We know what works.</p>
          </div>
          <div>
            <p className="font-bold text-lg text-orange-500 mb-2">One Person, Start to Finish</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">You talk to one person throughout. No confusion.</p>
          </div>
          <div>
            <p className="font-bold text-lg text-orange-500 mb-2">No Hidden Costs</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">What we say is what you pay. Simple.</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-16 gap-6 px-4">
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">1,120+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            Properties Sold
          </p>
        </div>
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">1,100+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            Homes Rented
          </p>
        </div>
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">50+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            Land Deals Closed
          </p>
        </div>
        <div className="bg-white py-8 px-10 h-[160px] w-[280px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-bold text-3xl text-orange-500">7+</p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            Redevelopments Managed
          </p>
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
