import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import About from "../components/about";
import Deals from "../components/deals";
import Services from "../components/services";
import Review from "../components/review";
import Form from "../components/form";
import scrollIcon from "../assets/icons/topArrowIcon.png";

import Footer from "@/components/footer";
import Hero from "@/components/hero";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dark:bg-bgDark">
      <Hero />
      <About />
      <Services />
      <Deals />
      <Review />
      <Form />
      <Footer />
      {showButton && (
  <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-10 z-40">
    <button
      onClick={handleScrollToTop}
      className="bg-slate-100 rounded-full shadow-xl overflow-visible w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
    >
      <Image src={scrollIcon} alt="scroll button" width={40} height={40} />
    </button>
  </div>
)}

    </div>
  );
};

export default HomePage;
