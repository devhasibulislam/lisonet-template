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
import ClipBoardIcon from "./ClipBoardIcon";
import DisplayTableSkeletonLoader from "./DisplayTableSkeletonLoader";

const ResponsiveTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <section className="overflow-x-auto">
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
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1.5 px-1.5 rounded">
                    <ClipBoardIcon />
                  </button>
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
