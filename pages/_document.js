import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="title" content="Try URL Shortener for Free" />
        <meta
          name="description"
          content="Checkout our free tool that short your url with encryption"
          key="desc"
        />

        <meta
          name="google-site-verification"
          content="sZPmFgCCG9yDDjVqCsdembcfkOLDihLkjCWdXkxnEVI"
        />
        <meta name="msvalidate.01" content="100EE9C6C0FC17AF45101A46F9363D0C" />

        {/* Open Graph Credentials */}
        <meta
          property="og:url"
          content="https://lisonet-template.vercel.app/"
        />
        <meta property="og:title" content="Try URL Shortener for Free" />
        <meta
          property="og:description"
          content="Checkout our free tool that short your url with encryption"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dho0rpn5a/image/upload/v1695044502/samples/url-shortener_h4oa18.png"
        />

        {/* Twitter Card Credentials */}
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dho0rpn5a/image/upload/v1695044502/samples/url-shortener_h4oa18.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Try URL Shortener for Free" />
        <meta
          property="twitter:description"
          content="Checkout our free tool that short your url with encryption"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
