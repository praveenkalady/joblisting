import React from "react";
import {Rate} from "antd";
import PropTypes from "prop-types";

import "./ImRate.less";

const ImRate = ({
  allowClear,
  allowHalf,
  autoFocus,
  character,
  className,
  count,
  defaultValue,
  disabled,
  style,
  tooltips,
  value,
  onBlur,
  onChange,
  onFocus,
  onHoverChange,
  onKeyDown,
}) => {
  return (
    <Rate
      allowClear={allowClear}
      allowHalf={allowHalf}
      autoFocus={autoFocus}
      character={character}
      className={className}
      count={count}
      defaultValue={defaultValue}
      disabled={disabled}
      style={style}
      tooltips={tooltips}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onHoverChange={onHoverChange}
      onKeyDown={onKeyDown}
    />
  );
};

ImRate.propTypes = {
  allowClear: PropTypes.bool,
  allowHalf: PropTypes.bool,
  autoFocus: PropTypes.bool,
  character: PropTypes.any,
  className: PropTypes.string,
  count: PropTypes.number,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  tooltips: PropTypes.any,
  value: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onHoverChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default ImRate;
