import React from "react";

function InProgressIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <circle cx="15" cy="9" r="4" stroke="#F49C26" strokeWidth="1.2"></circle>
      <path
        stroke="#F49C26"
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M16.5 16h-5A5.5 5.5 0 006 21.5v2A3.5 3.5 0 009.5 27h7"
      ></path>
      <path
        stroke="#F49C26"
        strokeLinecap="round"
        d="M19.5 17v1.147a3 3 0 001.368 2.518l3.264 2.115a3 3 0 011.368 2.517V27"
      ></path>
      <path
        stroke="#F49C26"
        strokeLinecap="round"
        d="M25.5 17v1.147a3 3 0 01-1.368 2.518l-3.264 2.115a3 3 0 00-1.368 2.517V27"
      ></path>
      <path
        fill="#F49C26"
        d="M23.5 24h-2a1 1 0 100 2h2a1 1 0 100-2zM22.118 18h.764a1 1 0 010 2h-.764a1 1 0 010-2z"
      ></path>
      <path
        stroke="#F49C26"
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M19 27h7M19 16h7"
      ></path>
    </svg>
  );
}

export default InProgressIcon;
