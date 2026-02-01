import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

const services = [
  {
    title: "We Find The Right Property",
    description: "Whether you want to buy or rent, we search across Mumbai to find properties that match your budget, location, and needs. No more endless searching - we do the hard work for you.",
    image: "/images/services/search.jpg",
    cta: "Browse Properties",
    href: "/listings"
  },
  {
    title: "We Handle All Paperwork",
    description: "Buying or selling a home comes with a lot of documents - agreements, registrations, NOCs, and more. We take care of all the paperwork so you don't have to worry about missing anything.",
    image: "/images/services/paperwork.jpg",
    cta: "Learn More",
    href: "/contact"
  },
  {
    title: "We Help With Home Loans",
    description: "Getting a loan can be confusing. We connect you with trusted banks and help you get the best interest rates. We guide you through the entire loan process from start to finish.",
    image: "/images/services/loans.jpg",
    cta: "Get Loan Help",
    href: "/contact"
  },
  {
    title: "We Help With Interiors",
    description: "Want to set up your new home? We connect you with reliable interior designers and contractors who can turn your empty house into a beautiful home within your budget.",
    image: "/images/services/interiors.jpg",
    cta: "Design Your Home",
    href: "/contact"
  },
  {
    title: "Land & Redevelopment Support",
    description: "Own land or an old building? We help with land deals and redevelopment projects. From finding buyers to handling builder negotiations, we guide you through the entire process.",
    image: "/images/services/land.jpg",
    cta: "Get Expert Advice",
    href: "/contact"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
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

      {/* Hero Section with Watermark */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Watermark Title */}
          <div className="relative h-[120px] sm:h-[180px] flex items-center justify-center mb-8">
            <p className="text-8xl sm:text-[160px] text-blue-700 opacity-10 font-black text-center z-0 absolute inset-0 flex items-center justify-center uppercase dark:text-white dark:opacity-10">
              Services
            </p>
          </div>
          
          {/* Description */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From finding the perfect property to moving in, we handle every step of your real estate journey. No stress, no confusion - just simple, reliable help.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 mb-20 last:mb-0`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  {service.cta}
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Tell us what you need and we&apos;ll help you every step of the way.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-3xl transition-colors duration-300 text-lg"
          >
            Contact Us Today
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
