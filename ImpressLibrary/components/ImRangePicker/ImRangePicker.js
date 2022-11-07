import React from "react";
import {DatePicker} from "antd";
const {RangePicker} = DatePicker;
// import "./ImRangePicker.css";
import PropTypes from "prop-types";

const ImRangePicker = ({
  onChange,
  disabledDate,
  value,
  showTime = false,
  dateFormat = "DD-MM-YYYY",
  disabled = false,
}) => {
  return (
    <RangePicker
      value={value}
      format={dateFormat}
      showTime={showTime}
      disabled={disabled}
      disabledDate={disabledDate}
      onChange={(date, dateString) => {
        onChange(date, dateString);
      }}
    />
  );
};

ImRangePicker.propTypes = {
  onChange: PropTypes.func,
  disabledDate: PropTypes.any,
  dateFormat: PropTypes.string,
  value: PropTypes.any,
  showTime: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ImRangePicker;
