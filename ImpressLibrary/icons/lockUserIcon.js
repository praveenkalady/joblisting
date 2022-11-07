import React from "react";

function LockUserIcon() {
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
        d="M19 16h-7.5A5.5 5.5 0 006 21.5v2A3.5 3.5 0 009.5 27H15"
      ></path>
      <rect
        width="8"
        height="5"
        x="18"
        y="22"
        stroke="#F49C26"
        strokeWidth="1.2"
        rx="1"
      ></rect>
      <rect
        width="4"
        height="3"
        x="20"
        y="19"
        stroke="#F49C26"
        strokeWidth="1.2"
        rx="1"
      ></rect>
    </svg>
  );
}

export default LockUserIcon;
