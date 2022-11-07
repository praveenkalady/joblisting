import React from "react";
import PropTypes from "prop-types";
// import "./ImSelect.css";
import {Select} from "antd";

const ImSelect = ({
  data,
  onChange,
  defaultValue,
  value,
  mode,
  onSelect,
  onDeselect,
  val = "value",
  label = "label",
  placeholder,
  suffixIcon,
  showArrow,
  dropdownRender,
  dropdownClassName,
  className = "",
  width,
  height,
  showSearch,
  maxTagCount,
  onInputKeyDown,
  disabled,
  optionFilterProp,
  defaultActiveFirstOption,
  size,
  tokenSeparators,
  optionClassName,
  getPopupContainer = (trigger) => trigger.parentNode,
  notFoundContent,
  maxTagTextLength,
  allowClear,
  onClear,
  listHeight,
  onBlur,
  selectRef,
}) => {
  const handleChange = (id) => {
    onChange && onChange(id);
  };
  const {Option} = Select;

  return (
    <div className="ImSelect">
      <Select
        defaultValue={
          defaultValue ?
            defaultValue :
            placeholder ?
            undefined :
            data && data[0] && data[0][val]
        }
        value={value}
        style={{width: width || 184, height: height || 37}}
        onChange={handleChange}
        mode={mode}
        onSelect={onSelect}
        onDeselect={onDeselect}
        placeholder={placeholder}
        size={size}
        filterOption={(input, option) =>
          option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
        }
        showArrow={showArrow}
        suffixIcon={suffixIcon}
        dropdownRender={dropdownRender}
        dropdownClassName={dropdownClassName}
        showSearch={showSearch}
        className={className}
        maxTagCount={maxTagCount}
        onInputKeyDown={onInputKeyDown}
        getPopupContainer={getPopupContainer}
        disabled={disabled}
        optionFilterProp={optionFilterProp}
        defaultActiveFirstOption={defaultActiveFirstOption}
        tokenSeparators={tokenSeparators}
        notFoundContent={notFoundContent}
        maxTagTextLength={maxTagTextLength}
        allowClear={allowClear}
        onClear={onClear}
        listHeight={listHeight}
        onBlur={onBlur}
        ref={selectRef}
      >
        {data &&
          data.map((item, index) => {
            return (
              <Option
                className={optionClassName}
                key={item[val] ? item[val] : index}
                value={item[val]}
              >
                {item[label]}
              </Option>
            );
          })}
      </Select>
    </div>
  );
};

ImSelect.propTypes = {
  "data": PropTypes.any,
  "onChange": PropTypes.func,
  "data[].value": PropTypes.any,
  "data.map": PropTypes.any,
  "defaultValue": PropTypes.any,
  "value": PropTypes.any,
  "val": PropTypes.string,
  "label": PropTypes.string,
  "mode": PropTypes.string,
  "onSelect": PropTypes.func,
  "onDeselect": PropTypes.func,
  "placeholder": PropTypes.string,
  "suffixIcon": PropTypes.any,
  "showArrow": PropTypes.bool,
  "dropdownClassName": PropTypes.string,
  "className": PropTypes.string,
  "width": PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "height": PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "dropdownRender": PropTypes.func,
  "showSearch": PropTypes.bool,
  "maxTagCount": PropTypes.string,
  "onInputKeyDown": PropTypes.func,
  "disabled": PropTypes.bool,
  "optionFilterProp": PropTypes.any,
  "defaultActiveFirstOption": PropTypes.bool,
  "size": PropTypes.string,
  "optionClassName": PropTypes.string,
  "getPopupContainer": PropTypes.func,
  "notFoundContent": PropTypes.node,
  "tokenSeparators": PropTypes.arrayOf(PropTypes.string),
  "maxTagTextLength": PropTypes.number,
  "allowClear": PropTypes.bool,
  "onClear": PropTypes.func,
  "listHeight": PropTypes.any,
  "onBlur": PropTypes.func,
  "selectRef": PropTypes.any,
};

export default ImSelect;
