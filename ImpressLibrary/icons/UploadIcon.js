import React from "react";
import PropTypes from "prop-types";

const UploadIcon = ({width="12", height="12", viewBox="0 0 12 12"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
  >
    <g fill="currentColor">
      <path
        d="M119.463 299c-.167 0-.298-.049-.41-.152-.094-.086-.132-.181-.132-.326v-7.646l-3.372 3.578c-.113.126-.223.175-.38.175-.155 0-.266-.049-.368-.163l-.639-.68c-.111-.12-.162-.245-.162-.403 0-.165.05-.291.162-.411l5.459-5.809c.073-.08.173-.163.379-.163.16 0 .28.051.387.163l5.458 5.809c.103.116.155.247.155.411 0 .158-.052.286-.165.414l-.619.657c-.113.122-.232.175-.386.175-.157 0-.266-.049-.367-.162l-3.385-3.59v7.645c0 .146-.038.24-.13.325-.114.104-.244.153-.411.153h-1.074z"
        transform="translate(-513 -524) translate(399 239)"
      />
    </g>
  </svg>
);
UploadIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};
export default UploadIcon;
