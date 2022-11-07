import React from "react";
import PropTypes from "prop-types";

import {Input} from "antd";

const ImTextArea = ({
  className = "",
  onChange,
  rows = "5",
  value,
  defaultValue,
  placeholder,
  autoSize = {minRows: 4, maxRows: 8},
  disabled = false,
  onBlur,
  maxLength,
  autoFocus = false,
}) => {
  const {TextArea} = Input;
  return (
    <TextArea
      className={className}
      rows={rows}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      autoSize={autoSize}
      disabled={disabled}
      onBlur={onBlur}
      maxLength={maxLength}
      autoFocus={autoFocus}
    />
  );
};

ImTextArea.propTypes = {
  onChange: PropTypes.func,
  rows: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  autoSize: PropTypes.shape({
    minRows: PropTypes.number,
    maxRows: PropTypes.number,
  }),
  disabled: PropTypes.boolean,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.boolean,
};

export default ImTextArea;
