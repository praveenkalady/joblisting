import React from "react";
import PropTypes from "prop-types";
import {InputNumber} from "antd";

const ImInputNumber = ({
  value,
  onChange,
  min,
  max,
  className = "",
  onBlur,
  disabled = false,
  placeholder="",
  onPressEnter,
}) => {
  return (
    <InputNumber
      className={className}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      onBlur={onBlur}
      disabled={disabled}
      type={"number"}
      placeholder={placeholder}
      onPressEnter={onPressEnter}
    />
  );
};
ImInputNumber.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onPressEnter: PropTypes.func,
};
export default ImInputNumber;
