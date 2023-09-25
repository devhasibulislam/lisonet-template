/**
 * Title: Write a program using JavaScript on DisplayTableSkeletonLoader
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

const DisplayTableSkeletonLoader = () => {
  return (
    <>
      <tr className="animate-pulse">
        <td className="px-6 py-4 whitespace-no-wrap w-40">
          <div className="bg-gray-200 h-[45px] w-[85.71px] rounded-lg"></div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          <div className="bg-gray-200 h-4 w-full rounded-lg mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded-lg"></div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          <div className="bg-gray-200 h-4 w-full rounded-lg mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded-lg"></div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap w-40">
          <div className="bg-gray-200 h-4 w-full rounded-lg mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded-lg"></div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-right">
          <div className="bg-gray-200 h-[45px] w-[45px] rounded-lg"></div>
        </td>
      </tr>
    </>
  );
};

export default DisplayTableSkeletonLoader;
