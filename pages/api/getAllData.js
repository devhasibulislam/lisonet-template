/**
 * Title: Write a program using JavaScript on GetAllData
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

import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connectToDatabase();
      const collection = db.collection("links");
      const data = await collection.find({}).toArray();

      res.status(200).json({ message: "Data fetched successfully", data });
    } catch (error) {
      res.status(500).json({ message: "Error fetching data" });
    }
  }
}
