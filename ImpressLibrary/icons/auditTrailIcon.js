import React from "react";

function AuditTrailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F49C26"
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M18 5H9a3 3 0 00-3 3v16a3 3 0 003 3h14a3 3 0 003-3V13"
      ></path>
      <path
        stroke="#F49C26"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M9.5 23l3.5-3.5 1.5-4.5 4 2 2.5-4.5"
      ></path>
      <circle cx="23" cy="8" r="3" stroke="#F49C26" strokeWidth="1.2"></circle>
    </svg>
  );
}

export default AuditTrailIcon;
