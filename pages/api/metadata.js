/**
 * Title: Write a program using JavaScript on Metadata
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
import { load } from "cheerio";

function buildUrl(query) {
  // Extract the URL from the query object
  const { url, ...queryParams } = query;

  // Convert the remaining properties to a query string
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  // Combine the URL and the query string
  const modifiedUrl = `${url}&${queryString}`;

  return modifiedUrl;
}

export default async function handler(req, res) {
  try {
    const url =
      Object.keys(req.query).length > 1 ? buildUrl(req.query) : req.query.url;

    // Make an HTTP request to the URL
    const response = await axios.get(url);

    if (response) {
      if (response.status === 200) {
        const html = response.data;
        const $ = load(html);

        // Extract the metadata you need
        const title = $("title").text() || "No title found!";
        const description =
          $('meta[name="description"]').attr("content") ||
          "No description found!";
        const imageUrl =
          $('meta[property="og:image"]').attr("content") ||
          "/image-not-available.png";

        // Send the extracted metadata as JSON
        res.status(200).json({ title, description, imageUrl });
      } else {
        res.status(500).json({
          title: "Internal Server Error",
          description: "Failed to Fetch URL",
          imageUrl: "/image-not-available.png",
        });
      }
    } else {
      res.status(500).json({
        title: "Internal Server Error",
        description: "URL Response Failed",
        imageUrl: "/image-not-available.png",
      });
    }
  } catch (error) {
    res.status(500).json({
      title: "Internal Server Error",
      description: error.message,
      imageUrl: "/image-not-available.png",
    });
  }
}
