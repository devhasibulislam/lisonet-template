/**
 * Title: Write a program using JavaScript on CopyButton
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

import React, { useState } from "react";
import ClipBoardIcon from "./ClipBoardIcon";
import ReloadIcon from "./ReloadIcon";

const CopyButton = ({ metaSlug }) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (text) => {
    // Set loading state to true when copying starts
    setCopy(true);

    // Create a temporary input element
    const input = document.createElement("input");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    input.value = text;
    document.body.appendChild(input);

    // Select the text in the input element
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(input);

    // Clear loading state after a short delay (you can adjust the delay as needed)
    setTimeout(() => {
      setCopy(false);
    }, 1000); // Set a delay of 1 second (1000 milliseconds) for demonstration purposes
  };

  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1.5 px-1.5 rounded"
      onClick={() =>
        copyToClipboard(`https://lisonet-template.vercel.app/${metaSlug}`)
      }
    >
      {!copy ? <ClipBoardIcon /> : <ReloadIcon />}
    </button>
  );
};

export default CopyButton;
