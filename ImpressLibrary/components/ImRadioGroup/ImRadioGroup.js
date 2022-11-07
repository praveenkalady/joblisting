import React from "react";
import PropTypes from "prop-types";
import {Radio} from "antd";
import "./ImRadioGroup.less";

const ImRadioGroup = ({
  options,
  optionType,
  value,
  buttonStyle,
  onChange,
  disabled = false,
  defaultValue,
}) => {
  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      optionType={optionType}
      buttonStyle={buttonStyle}
      disabled={disabled}
    />
  );
};

ImRadioGroup.propTypes = {
  options: PropTypes.options,
  optionType: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  buttonStyle: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
};

export default ImRadioGroup;
