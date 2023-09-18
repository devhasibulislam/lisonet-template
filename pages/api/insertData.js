/**
 * Title: Write a program using JavaScript on InsertData
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

import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Ensure that the request body contains the required fields
      const { metaThumbnail, metaTitle, metaDescription, metaUrl, metaSlug } =
        req.body;
      if (
        !metaThumbnail ||
        !metaTitle ||
        !metaDescription ||
        !metaUrl ||
        !metaSlug
      ) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const db = await connectToDatabase();
      const collection = db.collection("links");
      const dataToInsert = req.body;
      const result = await collection.insertOne(dataToInsert);

      res
        .status(201)
        .json({ message: "Data inserted successfully", data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error inserting data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
