import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  intent: yup.string().required('Please select what you want'),
  location: yup.string().required('Please select a location'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
    .required('Phone number is required'),
  budget: yup.string().when('intent', {
    is: (val) => val === 'buy' || val === 'rent_seek',
    then: (schema) => schema.required('Please select a budget range'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  
  const [submitting, setSubmitting] = useState(false);
  const intent = watch('intent');

  useEffect(() => {
    setValue('budget', '');
  }, [intent, setValue]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you within 24 hours.");
        reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderBudgetOptions = () => {
    if (intent === 'rent_seek') {
      return (
        <>
          <option value="">Select Monthly Budget</option>
          <option value="under-20k">Under ₹20,000</option>
          <option value="20k-40k">₹20,000 - ₹40,000</option>
          <option value="40k-70k">₹40,000 - ₹70,000</option>
          <option value="70k-1L">₹70,000 - ₹1 Lakh</option>
          <option value="above-1L">Above ₹1 Lakh</option>
        </>
      );
    }
    return (
      <>
        <option value="">Select Property Budget</option>
        <option value="under-75l">Under ₹75 Lac</option>
        <option value="75l-1.5cr">₹75 Lac - ₹1.5 Cr</option>
        <option value="1.5cr-3cr">₹1.5 Cr - ₹3 Cr</option>
        <option value="3cr-5cr">₹3 Cr - ₹5 Cr</option>
        <option value="above-5cr">Above ₹5 Cr</option>
      </>
    );
  };

  const showBudget = intent === 'buy' || intent === 'rent_seek';

  const locationLabel = (intent === 'sell' || intent === 'rent_out' || intent === 'valuation') 
    ? "Property Location" 
    : "Preferred Location";

  return (
    <div id="contact" className="relative px-4 mb-4 overflow-hidden">
      {/* Watermark Title */}
      <div className="relative h-[80px] sm:h-[180px] flex items-center justify-center mt-12 sm:mt-20">
        <p className="text-5xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
          Contact
        </p>
        <p className="text-xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative dark:text-gray-300 px-4">
          Tell us what you&apos;re looking for
        </p>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center">
        <p className="font-medium text-sm sm:text-base text-center mt-6 sm:mt-10 mb-6 sm:mb-10 text-bluePText">
          We usually respond within 24 hours.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-0 sm:px-4">
        <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl p-5 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Your Name
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl py-3 sm:py-4 px-4 sm:px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
              />
              {errors.name && (
                <span className="text-red-500 text-xs sm:text-sm mt-1 block">{errors.name.message}</span>
              )}
            </div>

            {/* Intent & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  What do you want?
                </label>
                <select
                  {...register('intent')}
                  className="w-full rounded-xl py-3 sm:py-4 px-4 sm:px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-sm sm:text-base"
                >
                  <option value="">Select an option</option>
                  <option value="buy">Buy a Property</option>
                  <option value="sell">Sell a Property</option>
                  <option value="rent_seek">Find a Rental (Tenant)</option>
                  <option value="rent_out">List for Rent (Owner)</option>
                  <option value="valuation">Get Home Valuation</option>
                  <option value="loan">Home Loan Assistance</option>
                  <option value="interior">Interior Design</option>
                </select>
                {errors.intent && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">{errors.intent.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  {locationLabel}
                </label>
                <select
                  {...register('location')}
                  className="w-full rounded-xl py-3 sm:py-4 px-4 sm:px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-sm sm:text-base"
                >
                  <option value="">Select a location</option>
                  <option value="andheri">Andheri</option>
                  <option value="bandra">Bandra</option>
                  <option value="borivali">Borivali</option>
                  <option value="dadar">Dadar</option>
                  <option value="goregaon">Goregaon</option>
                  <option value="juhu">Juhu</option>
                  <option value="kandivali">Kandivali</option>
                  <option value="malad">Malad</option>
                  <option value="powai">Powai</option>
                  <option value="santacruz">Santacruz</option>
                  <option value="worli">Worli</option>
                  <option value="thane">Thane</option>
                  <option value="navi-mumbai">Navi Mumbai</option>
                  <option value="other">Other</option>
                </select>
                {errors.location && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">{errors.location.message}</span>
                )}
              </div>
            </div>

            {/* Budget (Conditional) */}
            {showBudget && (
              <div className="transition-all duration-300 ease-in-out">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Your Budget
                </label>
                <select
                  {...register('budget')}
                  className="w-full rounded-xl py-3 sm:py-4 px-4 sm:px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-sm sm:text-base"
                >
                  {renderBudgetOptions()}
                </select>
                {errors.budget && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">{errors.budget.message}</span>
                )}
              </div>
            )}

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl py-3 sm:py-4 px-4 sm:px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl py-3 sm:py-4 px-4 sm:px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">{errors.phone.message}</span>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 sm:py-4 px-8 rounded-xl transition-all duration-300 text-base sm:text-lg"
              >
                {submitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              🔒 We never share your data with third parties.
            </p>
          </form>
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Form;
