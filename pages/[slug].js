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

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const MetaSlug = () => {
  const router = useRouter();
  console.log(router?.query?.slug);

  return (
    <section className="w-screen h-screen overflow-hidden flex justify-center items-center">
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
