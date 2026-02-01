import Head from "next/head";
import Form from "@/components/form"; // Reusing your existing styled form
import Footer from "@/components/footer"; // Keeping the footer for consistency

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Shesh Property</title>
        <meta name="description" content="Get in touch with Shesh Property for buying, selling, or valuations." />
      </Head>

      {/* Main Container - Matches home page dark mode background */}
      <main className="min-h-screen dark:bg-bgDark flex flex-col justify-between">
        
        {/* 
           Added pt-20 (padding-top) to ensure the content doesn't 
           get hidden behind your fixed Navbar. 
        */}
        <div className="pt-20">
          <Form />
        </div>

        <Footer />
      </main>
    </>
  );
}
