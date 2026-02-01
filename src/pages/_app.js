import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Pages where we don't want the global header
  const noHeaderPages = ['/about', '/services', '/listings', '/contact', '/terms', '/privacy', '/admin'];
  const showHeader = !noHeaderPages.includes(router.pathname);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {showHeader && <Header />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
