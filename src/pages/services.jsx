import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

import cardImageBg1 from '../assets/images/RightPropertyservicecomponent.png';
import cardImageBg2 from '../assets/images/Paperworkservicecomponent.png';
import cardImageBg3 from '../assets/images/Homeloansservicescomponent.png';

const services = [
  {
    id: 1,
    title: "Property Discovery",
    description: "We understand your requirements and help you find the right property — whether you're buying or renting, in any pocket of Mumbai.",
    includes: [
      "Requirement consultation (budget, location, property type)",
      "Curated property options",
      "Site visit coordination",
      "Market insights and price comparison",
      "Access to developer and resale properties",
    ],
    image: cardImageBg1,
    cta: "Browse Listings",
    href: "/listings"
  },
  {
    id: 2,
    title: "Property Shortlisting & Evaluation",
    description: "We help you evaluate and compare properties so you can make a confident, informed decision.",
    includes: [
      "Property comparison",
      "Location and infrastructure evaluation",
      "Builder / project background check",
      "Price benchmarking",
    ],
    image: cardImageBg2,
    cta: "Talk to Us",
    href: "/contact"
  },
  {
    id: 3,
    title: "Due Diligence & Legal Verification",
    description: "We verify property documents to ensure the property is legally safe to buy — no surprises after the deal.",
    includes: [
      "Title verification",
      "Ownership history check",
      "Encumbrance certificate verification",
      "Approval and layout verification",
      "Project registration verification with MahaRERA",
    ],
    image: cardImageBg3,
    cta: "Get Legal Help",
    href: "/contact"
  },
  {
    id: 4,
    title: "Negotiation & Deal Structuring",
    description: "We negotiate on your behalf to secure the best possible price and payment structure.",
    includes: [
      "Price negotiation with seller / developer",
      "Offer structuring",
      "Payment schedule planning",
      "Booking assistance",
    ],
    image: cardImageBg1,
    cta: "Start Negotiating",
    href: "/contact"
  },
  {
    id: 5,
    title: "Home Loan & Financial Assistance",
    description: "We assist with financing options to make the purchase process easier — from eligibility to approval.",
    includes: [
      "Home loan eligibility check",
      "Loan comparison across banks",
      "Loan application support",
      "Documentation assistance",
      "Pre-approval coordination",
    ],
    image: cardImageBg3,
    cta: "Get Loan Help",
    href: "/contact"
  },
  {
    id: 6,
    title: "Documentation & Registration",
    description: "We assist in completing all required paperwork and registration formalities — so you just show up and sign.",
    includes: [
      "Sale agreement preparation",
      "Stamp duty guidance",
      "Registration coordination",
      "Builder / seller documentation review",
      "Transaction support until completion",
    ],
    image: cardImageBg2,
    cta: "Learn More",
    href: "/contact"
  },
  {
    id: 7,
    title: "Move-In & Post-Purchase Support",
    description: "We continue supporting you even after the property purchase — because a home isn't just a transaction.",
    includes: [
      "Interior design referrals",
      "Renovation assistance",
      "Packers & movers coordination",
      "Utility setup guidance",
      "Property management and resale support",
    ],
    image: cardImageBg1,
    cta: "Talk to Us",
    href: "/contact"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
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

      {/* Hero */}
      <section className="pt-20 pb-8 px-4 sm:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[80px] sm:h-[180px] flex items-center justify-center mb-6 sm:mb-8">
            <p className="text-5xl sm:text-[160px] text-blue-700 opacity-10 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white dark:opacity-10">
              Services
            </p>
            <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative dark:text-white px-4">
              Everything We Do For You
            </p>
          </div>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
            From the first conversation to moving day and beyond — we're with you at every step of your real estate journey.
          </p>
        </div>
      </section>

      {/* All 7 Services */}
      <section className="py-8 sm:py-16 px-4 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-6 md:gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-52 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {String(service.id).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Includes */}
                <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">
                    What's Included
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  {service.cta}
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-12 lg:px-24 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-lg text-blue-200 mb-6 sm:mb-8">
            Tell us what you need and we'll handle everything from here.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-3xl transition-colors duration-300 text-base sm:text-lg"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
