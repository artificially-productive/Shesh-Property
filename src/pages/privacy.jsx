import Head from "next/head";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Shesh Property</title>
      </Head>
      
      <main className="min-h-screen dark:bg-bgDark dark:text-gray-200 font-poppins pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
          
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you fill out our contact forms, request a valuation, or subscribe to our newsletter. This may include your name, email address, phone number, and property preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information including confirmations and invoices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-orange-500 mb-3">3. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
