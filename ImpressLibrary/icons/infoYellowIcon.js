import React from "react";
import PropTypes from "prop-types";

const InfoYellowIcon = ({width = "14px", height = "14px"}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Alert/Default/Warning"
        transform="translate(-16.000000, -13.000000)"
        fill="#FAAD14"
      >
        <path
          d="M23,27 C19.1335937,27 16,23.8664062 16,20 C16,16.1335937 19.1335937,13 23,13 C26.8664062,13 30,16.1335937 30,20 C30,23.8664062 26.8664062,27 23,27 L23,27 Z M23.4375,16.0625 C23.4375,15.8205078 23.2419922,15.625 23,15.625 L23,15.625 C22.7580078,15.625 22.5625,15.8205078 22.5625,16.0625 L22.5625,16.0625 C22.5625,16.3044922 22.7580078,16.5 23,16.5 L23,16.5 C23.2419922,16.5 23.4375,16.3044922 23.4375,16.0625 L23.4375,16.0625 L23.4375,16.0625 Z M23.4375,17.8125 C23.4375,17.5705078 23.2419922,17.375 23,17.375 L23,17.375 C22.7580078,17.375 22.5625,17.5705078 22.5625,17.8125 L22.5625,23.9375 C22.5625,24.1794922 22.7580078,24.375 23,24.375 L23,24.375 C23.2419922,24.375 23.4375,24.1794922 23.4375,23.9375 L23.4375,17.8125 L23.4375,17.8125 Z"
          id="icn_iwarning"
          transform="translate(23.000000, 20.000000) scale(1, -1) translate(-23.000000, -20.000000) "
        ></path>
      </g>
    </g>
  </svg>
);

InfoYellowIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default InfoYellowIcon;
