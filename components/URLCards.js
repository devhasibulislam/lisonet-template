/**
 * Title: Write a program using JavaScript on URLCards
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
 * Date: 25, September 2023
 */

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CopyButton from "./CopyButton";

const URLCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = () => {
    setIsLoading(true);

    fetch("/api/getAllData")
      .then((request) => request.json())
      .then((response) => {
        setData(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Skeleton Loading Element
  const skeletonLoading = (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 border border-gray-300 p-4 rounded-lg animate-pulse"
        >
          <div className="h-[45px] w-[85.71px] bg-gray-300 rounded-lg"></div>
          <div className="flex flex-col gap-y-1.5">
            <div className="h-4 bg-gray-300 w-full rounded-lg"></div>
            <div className="h-3 bg-gray-300 w-full rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col gap-y-4">
      <button
        onClick={() => {
          setIsLoading(true);
          setData([]);
          fetchData();
        }}
        className="flex flex-row gap-x-1 items-center text-xs border border-black px-1.5 py-1 rounded-full hover:bg-black hover:text-white duration-100 ease-linear transition-all w-fit"
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
      <hr />
      {isLoading ? (
        skeletonLoading
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-h-[calc(80vh-105px)] overflow-y-auto">
          {data.map(
            ({ _id, metaThumbnail, metaTitle, metaDescription, metaSlug }) => (
              <article
                key={_id}
                className="group flex flex-col gap-y-4 border hover:border-black transition-colors ease-linear delay-100 p-4 rounded-lg relative"
              >
                <Image
                  src={metaThumbnail}
                  alt={metaTitle}
                  height={45}
                  width={85.71}
                  className="h-[45px] w-[85.71px] object-cover rounded-lg"
                />
                <div className="flex flex-col gap-y-1">
                  <h1 className="line-clamp-1 text-base font-medium text-slate-950">
                    {metaTitle}
                  </h1>
                  <p className="line-clamp-1 text-sm text-slate-500">
                    {metaDescription}
                  </p>
                  <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 ease-linear">
                    <CopyButton metaSlug={metaSlug} />
                  </span>
                </div>
              </article>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default URLCards;
