import React from "react";

const RoundedLockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="18"
    height="18"
  >
    <defs>
      <path id="a" d="M0 0h8.462v11H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <rect
        stroke="#E1E1E1"
        fill="#FFF"
        x=".5"
        y=".5"
        width="17"
        height="17"
        rx="8.5"
      />
      <g transform="translate(5 3)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M7.174 3.209c0-.884-.288-1.639-.865-2.267C5.733.314 5.041 0 4.23 0c-.81 0-1.503.314-2.08.942-.575.628-.863 1.383-.863 2.267V5.5H.631a.585.585 0 0 0-.447.201.693.693 0 0 0-.184.486v4.125c0 .191.061.354.184.487.122.134.272.201.447.201h7.2a.584.584 0 0 0 .446-.2.693.693 0 0 0 .185-.488V6.297c0-.797-.406-.797-1.296-.797l.008-2.291zM5.937 5.5h-3.39V3.21c0-.506.165-.939.493-1.297.33-.357.725-.537 1.19-.537.464 0 .86.18 1.189.537.329.358.493.79.493 1.297L5.937 5.5z"
          fill="#9D9D9D"
        />
      </g>
    </g>
  </svg>
);

export default RoundedLockIcon;
