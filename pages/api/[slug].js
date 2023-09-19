/**
 * Title: Write a program using JavaScript on Meta Slug
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

// Import the required function from your utility file
import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Check if the "slug" query parameter is provided in the request
      const slug = req.query.slug;

      if (!slug) {
        // Return a 400 Bad Request status if the "slug" parameter is missing
        return res.status(400).json({ message: "Slug parameter is missing" });
      }

      // Connect to the database
      const db = await connectToDatabase();

      // Check if the collection "links" exists in your database
      const collection = db.collection("links");

      // Find a document based on the "metaSlug" field
      const data = await collection.findOne({ metaSlug: slug });

      if (!data) {
        // Return a 404 Not Found status if no data is found
        return res.status(404).json({ message: "Data not found" });
      }

      // Return the data if found
      res.status(200).json({ message: "Data fetched successfully", data });
    } catch (error) {
      // Handle any potential errors
      console.error(error);
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    // Return a 405 Method Not Allowed status for non-GET requests
    res.status(405).json({ message: "Method not allowed" });
  }
}
