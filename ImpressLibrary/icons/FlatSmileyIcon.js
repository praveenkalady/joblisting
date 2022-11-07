import * as React from "react";
import PropTypes from "prop-types";

function FlatSmileyIcon({width="34px", height="34px", viewBox="0 0 34 34"}) {
  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M32.876 17c0 8.768-7.108 15.876-15.876 15.876S1.124 25.768 1.124 17 8.232 1.124 17 1.124A15.875 15.875 0 0132.876 17z"
          fill="#F49C26"
        />
        <path
          d="M9.854 17.176c.622 0 1.125-.503 1.125-1.124v-2.19a1.124 1.124 0 00-2.248 0v2.19c0 .62.503 1.124 1.123 1.124zM25.22 16.052v-2.19a1.124 1.124 0 00-2.25 0v2.19a1.125 1.125 0 002.25 0zM9.854 22.837h14.241a1.123 1.123 0 100-2.248H9.855a1.123 1.123 0 100 2.248z"
          fill="#000"
        />
        <path
          d="M17 0C7.626 0 0 7.626 0 17c0 9.374 7.626 17 17 17 .759 0 1.521-.05 2.268-.15a1.124 1.124 0 00-.298-2.228c-.648.086-1.31.13-1.97.13-8.134 0-14.752-6.617-14.752-14.752C2.248 8.865 8.866 2.248 17 2.248S31.752 8.865 31.752 17c0 5.616-3.121 10.672-8.144 13.193a1.124 1.124 0 101.008 2.01C30.404 29.297 34 23.472 34 17c0-9.374-7.626-17-17-17z"
          fill="#000"
        />
      </g>
    </svg>
  );
}
FlatSmileyIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};
export default FlatSmileyIcon;
