/**
 * Title: Write a program using JavaScript on URL Holder
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

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import FetchURLSkeletonLoader from "./FetchURLSkeletonLoader";
import ClipBoardIcon from "./ClipBoardIcon";
import { randomBytes } from "crypto";
import ReloadIcon from "./ReloadIcon";

const URLHolder = () => {
  const [url, setUrl] = useState("");
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(true);

  const metaSlug = randomBytes(3).toString("hex");

  const fetchMetadata = async () => {
    url.length > 0 && setLoading(true);
    try {
      const response = await axios.get(`/api/metadata?url=${url}`);
      setMetadata(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && url.length !== 0 && !loading) {
      fetchMetadata();
      setLoading(true);
    }
  };

  function handleShortUrl() {
    setCopy(false);

    const urlInfo = {
      metaThumbnail: metadata.imageUrl,
      metaTitle: metadata.title,
      metaDescription: metadata.description,
      metaUrl: url,
      metaSlug,
    };

    fetch("/api/insertData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urlInfo),
    })
      .then((request) => request.json())
      .then((response) => {
        console.log(response);
        setCopy(true);
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <section className="flex flex-col gap-y-4">
      <input
        type="url"
        name="url"
        id="url"
        placeholder="🔗 https://devhasibulislam.verce.app/"
        pattern="https://.*"
        spellCheck="true"
        onChange={(e) => {
          setUrl(e.target.value);
          setMetadata({});
        }}
        onKeyUp={handleEnterKeyPress}
        className="border border-black focus:border-black/50 w-full px-2.5 py-2 rounded-3xl text-center outline-none text-sm"
        required
      />

      {url.length > 0 && Object?.keys(metadata)?.length > 0 ? (
        <div className="flex md:flex-row flex-col gap-4 border rounded-lg p-2 relative">
          <Image
            height={52.5}
            width={100}
            src={metadata?.imageUrl}
            alt="site thumbnail"
            className="rounded-lg md:max-w-[100px] md:max-h-[52.5px] w-full max-w-full border border-transparent object-cover"
          />
          <article className="flex flex-col gap-y-1.5">
            <h2 className="text-base font-medium line-clamp-1 text-slate-900">
              {metadata?.title}
            </h2>
            <hr />
            <p className="text-sm line-clamp-2 text-slate-500">
              {metadata?.description}
            </p>
          </article>

          <button
            onClick={() => {
              window.navigator.clipboard.writeText(
                `https://lisonet-template.vercel.app/${metaSlug}`
              );
              handleShortUrl();
            }}
            className="absolute top-2 right-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1.5 px-1.5 rounded-full shadow disabled:bg-gray-300"
            disabled={!copy && loading}
          >
            {copy ? <ClipBoardIcon /> : <ReloadIcon />}
          </button>
        </div>
      ) : !loading ? (
        <p className="text-center text-sm text-cyan-700 w-fit px-4 py-0.5 border border-cyan-700 bg-cyan-100 rounded-3xl mx-auto cursor-not-allowed">
          ℹ️ No URL Inserted Yet
        </p>
      ) : (
        <FetchURLSkeletonLoader />
      )}
    </section>
  );
};

export default URLHolder;
