import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* --- FAVICON LINKS --- */}
        
        {/* Primary favicon for most browsers */}
        <link rel="icon" href="/favicon.ico" />

        {/* Standard favicons for modern browsers */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* Icon for Android devices */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Icon for Apple devices (iPhone, iPad home screen) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Web App Manifest for PWA support */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Sets the browser UI color on mobile to match your brand */}
        <meta name="theme-color" content="#000000" />
        
        {/* --- END FAVICON LINKS --- */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}