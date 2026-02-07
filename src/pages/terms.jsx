import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "@/components/footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Shesh Property</title>
      </Head>
      
      <main className="min-h-screen dark:bg-bgDark dark:text-gray-200 font-poppins pt-28 pb-20 px-6 relative">
        
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-50">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
          >
            <FiArrowLeft className="w-5 h-5 text-gray-800 dark:text-white" />
            <span className="text-sm font-medium text-gray-800 dark:text-white">Back</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
          
          {/* Header Section */}
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-white mb-2">Terms of Service</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">Last updated: February 2026</p>

          {/* Content */}
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website at Shesh Property, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Shesh Property&apos;s website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">3. Disclaimer</h2>
              <p>
                The materials on Shesh Property&apos;s website are provided on an &apos;as is&apos; basis. Shesh Property makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
