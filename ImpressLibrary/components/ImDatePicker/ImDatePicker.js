import React from "react";
import PropTypes from "prop-types";
import {DatePicker} from "antd";

const ImDatePicker = ({
  placeholder,
  onChange,
  onFocus,
  value,
  disabledDate,
  format,
  suffixIcon,
  defaultValue,
  disabled,
  onBlur,
}) => {
  return (
    <DatePicker
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      disabledDate={disabledDate}
      value={value}
      format={format}
      allowClear={false}
      suffixIcon={suffixIcon}
      className={"custom-date-picker-style"}
      defaultValue={defaultValue}
      disabled={disabled}
      onBlur={onBlur}
    />
  );
};

export default ImDatePicker;

ImDatePicker.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  disabledDate: PropTypes.func,
  value: PropTypes.any,
  format: PropTypes.string,
  suffixIcon: PropTypes.element,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
};
