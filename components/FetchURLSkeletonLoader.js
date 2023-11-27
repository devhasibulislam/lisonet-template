/**
 * Title: Write a program using JavaScript on Fetch URL Skeleton Loader
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
 * Date: 18, September 2023
 */

import React from "react";

const FetchURLSkeletonLoader = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 border rounded-lg p-2">
      <div className="rounded-lg md:max-w-[100px] md:max-h-[52.5px] h-[171.06px] w-full max-w-full border border-transparent bg-gray-300 animate-pulse" />
      <article className="flex flex-col gap-y-1.5 w-full">
        <div className="h-[20px] bg-gray-300 animate-pulse w-full rounded-lg" />
        <hr />
        <div className="h-[15px] bg-gray-300 animate-pulse w-full rounded-lg" />
        <div className="h-[15px] bg-gray-300 animate-pulse md:w-2/3 w-full rounded-lg" />
      </article>
    </div>
  );
};

export default FetchURLSkeletonLoader;
