/**
 * Title: Write a program using JavaScript on Parameter Slug
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 19, September 2023
 */

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const MetaSlug = () => {
  const router = useRouter();
  const slug = router?.query?.slug;

  useEffect(() => {
    fetch(`/api/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data.data.metaURL contains the URL you want to redirect to
        const metaURL = data.data.metaUrl;

        // Use the useRouter to programmatically navigate to the metaURL
        router.push(metaURL);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [slug, router]);

  return (
    <section className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <Head>
        <title>Waiting for redirect...</title>
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

      <Image
        src="/spinner.png"
        alt="Loading..."
        height={50}
        width={50}
        className="max-w-full animate-spin"
      />
    </section>
  );
};

export default MetaSlug;
