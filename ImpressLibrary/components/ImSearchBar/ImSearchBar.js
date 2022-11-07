import React from "react";
import {Input} from "antd";
import PropTypes from "prop-types";
import "./ImSearchBar.less";

const ImSearchBar = ({
  placeholder = "Search",
  handleInputChange,
  className,
  style,
  size = "large",
  allowClear,
  onFocus,
  onBlur,
  addonBefore,
  suffix,
  prefix,
  onPressEnter,
  searchValue,
  onClick,
  autoFocus,
  handleSearch,
  variant,
  sharedProps,
  onKeyUp,
  disabled,
}) => {
  const {Search} = Input;
  if (variant === "input") {
    return (
      <Input
        value={searchValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={className}
        style={style}
        size={size}
        allowClear={allowClear}
        onFocus={onFocus}
        onBlur={onBlur}
        addonBefore={addonBefore}
        suffix={suffix}
        prefix={prefix}
        onPressEnter={onPressEnter}
        onClick={onClick}
        autoFocus={autoFocus}
        disabled={disabled}
        {...sharedProps}
      />
    );
  } else {
    return (
      <Search
        placeholder={placeholder}
        onSearch={handleSearch}
        onChange={handleInputChange}
        className={className}
        style={style}
        size={size}
        value={searchValue}
        onKeyUp={onKeyUp}
        disabled={disabled}
        allowClear={allowClear}
        {...sharedProps}
      />
    );
  }
};

export default ImSearchBar;

ImSearchBar.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func,
  handleInputChange: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  searchValue: PropTypes.string,
  allowClear: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  suffix: PropTypes.node,
  prefix: PropTypes.node,
  value: PropTypes.string,
  onPressEnter: PropTypes.func,
  addonBefore: PropTypes.node,
  variant: PropTypes.string,
  autoFocus: PropTypes.bool,
  sharedProps: PropTypes.object,
  onBlur: PropTypes.func,
  searchValue: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  disabled: PropTypes.bool,
};
