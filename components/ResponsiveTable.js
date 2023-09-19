/**
 * Title: Write a program using JavaScript on Responsive Table
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

import Image from "next/image";
import React, { useState, useEffect } from "react";
import DisplayTableSkeletonLoader from "./DisplayTableSkeletonLoader";
import CopyButton from "./CopyButton";

const ResponsiveTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchData = () => {
    setIsLoading(true);

    fetch("/api/getAllData")
      .then((request) => request.json())
      .then((response) => {
        setTableData(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="overflow-x-auto">
      <button
        onClick={() => {
          setIsLoading(true);
          setTableData([]);
          fetchData();
        }}
        className="flex flex-row gap-x-1 items-center text-xs border border-black px-1.5 py-1 rounded-full hover:bg-black hover:text-white duration-100 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clipRule="evenodd"
          />
        </svg>
        Refresh
      </button>

      <hr className="my-4" />

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider rounded-l-lg">
              Meta Thumbnail
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider">
              Meta Title
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider">
              Meta Description
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider">
              Meta URL
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider rounded-r-lg">
              Short URL
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {isLoading && tableData?.length === 0 ? (
            <DisplayTableSkeletonLoader />
          ) : (
            tableData?.map((item) => (
              <tr key={item?._id} className="hover:bg-gray-100/50">
                <td className="px-6 py-4 whitespace-no-wrap">
                  <Image
                    src={item.metaThumbnail}
                    alt="Thumbnail"
                    height={45}
                    width={85.71}
                    className="h-[45px] w-[85.71px] object-cover rounded-lg"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="line-clamp-2 text-xs">{item.metaTitle}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="line-clamp-2 text-xs">
                    {item.metaDescription}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="line-clamp-1 text-xs">{item.metaUrl}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right">
                  <CopyButton metaSlug={item.metaSlug} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ResponsiveTable;
