import { Inter } from "next/font/google";
import URLHolder from "@/components/URLHolder";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen w-screen overflow-y-auto overflow-x-hidden ${inter.className} p-4`}
    >
      <Head>
        {/* Meta Data Credentials */}
        <title>URL Shortener - Free</title>
        <meta
          name="description"
          content="Checkout our free tool that short your url with encryption"
          key="desc"
        />

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
      </Head>
      <section className="max-w-5xl mx-auto">
        <URLHolder />
        <div></div>
      </section>
    </main>
  );
}
