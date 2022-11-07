import React from "react";
import PropTypes from "prop-types";
import {Input, AutoComplete} from "antd";
import "./ImInput.less";
import ImIcons from "../../icons";

const renderTitle = (title) => <span className="search-title">{title}</span>;
const renderItem = (optionsItem, isecondaryData) => {
  const data = {
    value: optionsItem.title ? optionsItem.title : optionsItem,
    label: (
      <div className="search-data">
        <ImIcons name="infoIcon" />
        <p>{optionsItem.title ? optionsItem.title : optionsItem}</p>
      </div>
    ),
  };
  if (optionsItem[isecondaryData]) {
    data[isecondaryData] = optionsItem[isecondaryData] ?
      optionsItem[isecondaryData] :
      optionsItem;
  }
  return data;
};

const ImInput = ({
  placeholder,
  onChange,
  isSearchChild,
  type = "input",
  value,
  showSearchIcon = true,
  notFoundContent,
  filterOption,
  options,
  onSelect,
  suffix,
  prefix,
  onPressEnter,
  defaultValue,
  isecondaryData,
  disabled = false,
  size,
  bordered,
  className = "",
  onBlur,
  onFocus,
  onKeyDown,
}) => {
  const isSearchoptions = () => {
    if (isSearchChild) {
      const renderedOptions = [];
      isSearchChild.map((item) => {
        const renderedItem = {};
        const renderedItemOptions = [];
        renderedItem.label = renderTitle(item.label);
        item.options.map((optionsItem) => {
          renderedItemOptions.push(renderItem(optionsItem, isecondaryData));
        });
        renderedItem.options = renderedItemOptions;
        renderedOptions.push(renderedItem);
      });
      return renderedOptions;
    }
  };
  return type == "input" || type == "email" || type == "password" ? (
    <Input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      suffix={suffix}
      prefix={prefix}
      onPressEnter={onPressEnter}
      defaultValue={defaultValue}
      disabled={disabled}
      size={size}
      bordered={bordered}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
    />
  ) : (
    <AutoComplete
      style={{
        width: "100%",
      }}
      notFoundContent={notFoundContent}
      options={options || isSearchoptions()}
      filterOption={filterOption}
      value={value}
      onSelect={onSelect}
      onChange={onChange}
      placeholder={placeholder}
    >
      {showSearchIcon && <Input.Search placeholder={placeholder} />}
    </AutoComplete>
  );
};

ImInput.propTypes = {
  "placeholder": PropTypes.string,
  "onChange": PropTypes.func,
  "type": PropTypes.string,
  "isecondaryData": PropTypes.string,
  "isSearchChild": PropTypes.array,
  "isSearchChild.map": PropTypes.array,
  "value": PropTypes.string,
  "notFoundContent": PropTypes.any,
  "filterOption": PropTypes.any,
  "options": PropTypes.array,
  "onSelect": PropTypes.func,
  "showSearchIcon": PropTypes.bool,
  "prefix": PropTypes.element,
  "suffix": PropTypes.element,
  "onPressEnter": PropTypes.func,
  "defaultValue": PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "disabled": PropTypes.bool,
  "size": PropTypes.any,
  "bordered": PropTypes.bool,
  "className": PropTypes.string,
  "onBlur": PropTypes.func,
  "onFocus": PropTypes.func,
  "onKeyDown": PropTypes.func,
};

export default ImInput;
