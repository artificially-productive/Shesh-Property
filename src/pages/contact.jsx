import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Form from "@/components/form"; 
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Shesh Property</title>
        <meta name="description" content="Get in touch with Shesh Property for buying, selling, or valuations." />
      </Head>

      {/* Main Container */}
      <main className="min-h-screen dark:bg-bgDark flex flex-col justify-between relative">
        
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

        {/* 
            Added pt-20 (padding-top) to ensure the content doesn't 
            get hidden behind your fixed Navbar or Back Button. 
        */}
        <div className="pt-20">
          <Form />
        </div>

        <Footer />
      </main>
    </>
  );
}
