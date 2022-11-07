import * as React from "react";
import PropTypes from "prop-types";

function HappySmileyIcon({width="34px", height="34px", viewBox="0 0 34 34"}) {
  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M32.876 17c0 8.768-7.108 15.876-15.876 15.876S1.124 25.768 1.124 17C1.124 8.233 8.232 1.125 17 1.125S32.876 8.233 32.876 17z"
          fill="#F49C26"
        />
        <path
          d="M34 17c0-9.374-7.626-17-17-17C7.626 0 0 7.626 0 17c0 9.374 7.627 17 17 17 9.374 0 17-7.626 17-17zM17 31.752C8.866 31.752 2.25 25.135 2.25 17 2.249 8.866 8.866 2.248 17 2.248S31.752 8.866 31.752 17c0 8.135-6.618 14.752-14.752 14.752z"
          fill="#000"
        />
        <path
          d="M11.004 16.052v-2.19a1.124 1.124 0 10-2.249 0v2.19a1.125 1.125 0 002.249 0zM24.12 12.738c-.62 0-1.124.503-1.124 1.124v2.19a1.125 1.125 0 002.249 0v-2.19c0-.62-.503-1.124-1.124-1.124zM23.448 20.705a1.125 1.125 0 00-1.56.31 5.939 5.939 0 01-4.838 2.638 5.927 5.927 0 01-4.953-2.526 1.125 1.125 0 00-1.84 1.292 8.179 8.179 0 006.696 3.482h.133a8.187 8.187 0 006.672-3.637 1.124 1.124 0 00-.31-1.56z"
          fill="#000"
        />
      </g>
    </svg>
  );
}
HappySmileyIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

export default HappySmileyIcon;
