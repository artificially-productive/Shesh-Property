import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  intent: yup.string().required('Please select what you want'),
  location: yup.string().required('Please select a location'),
  budget: yup.string().required('Budget is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
    .required('Phone number is required'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      console.log("Form Data Submitted:", data);

      // Submit to Google Sheets via API route
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

  return (
    <div id="contact" className="relative p-4 mb-4">
      {/* Watermark Title */}
      <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center mt-20">
        <p className="text-8xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white">
          Contact
        </p>
        <p className="text-3xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative dark:text-gray-300 px-4">
          Tell us what you&apos;re looking for
        </p>
      </div>

      {/* Description */}
      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-10 mb-10 text-bluePText">
          We usually respond within 24 hours.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl p-8 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Row 1: Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl py-4 px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>
              )}
            </div>

            {/* Row 2: Intent & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  What do you want?
                </label>
                <select
                  {...register('intent')}
                  className="w-full rounded-xl py-4 px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="buy">Buy a Property</option>
                  <option value="sell">Sell a Property</option>
                  <option value="rent">Rent a Property</option>
                  <option value="valuation">Get Home Valuation</option>
                  <option value="loan">Home Loan Assistance</option>
                  <option value="interior">Interior Design</option>
                </select>
                {errors.intent && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.intent.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Location
                </label>
                <select
                  {...register('location')}
                  className="w-full rounded-xl py-4 px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a location</option>
                  <option value="kandivali">Kandivali</option>
                  <option value="borivali">Borivali</option>
                  <option value="malad">Malad</option>
                  <option value="andheri">Andheri</option>
                  <option value="bandra">Bandra</option>
                  <option value="worli">Worli</option>
                  <option value="powai">Powai</option>
                  <option value="thane">Thane</option>
                  <option value="navi-mumbai">Navi Mumbai</option>
                  <option value="other">Other</option>
                </select>
                {errors.location && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.location.message}</span>
                )}
              </div>
            </div>

            {/* Row 3: Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Budget (in ₹)
              </label>
              <select
                {...register('budget')}
                className="w-full rounded-xl py-4 px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select your budget</option>
                <option value="under-50l">Under ₹50 Lac</option>
                <option value="50l-1cr">₹50 Lac - ₹1 Cr</option>
                <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                <option value="2cr-5cr">₹2 Cr - ₹5 Cr</option>
                <option value="above-5cr">Above ₹5 Cr</option>
              </select>
              {errors.budget && (
                <span className="text-red-500 text-sm mt-1 block">{errors.budget.message}</span>
              )}
            </div>

            {/* Row 4: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl py-4 px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl py-4 px-5 border border-gray-200 dark:border-gray-600 dark:bg-slate-600 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.phone.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
              >
                {submitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
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
