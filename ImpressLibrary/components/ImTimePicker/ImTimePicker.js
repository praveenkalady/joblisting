import React from "react";
import PropTypes from "prop-types";
import {TimePicker} from "antd";
// import "./ImTimePicker.css";

const ImTimePicker = ({placeholder, onChange, onFocus, format, value}) => {
  return (
    <TimePicker
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      format={format}
      value={value}
      allowClear={false}
      className={"custom-time-picker-style"}
    />
  );
};

export default ImTimePicker;

ImTimePicker.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  value: PropTypes.any,
};
