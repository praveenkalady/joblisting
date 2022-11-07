import React from "react";
import {AutoComplete} from "antd";
import PropTypes from "prop-types";

const ImAutocomplete = ({
  style,
  options,
  placeholder,
  onSelect,
  onChange,
}) => {
  return (
    <AutoComplete
      style={style}
      options={options}
      placeholder={placeholder}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={onSelect}
      onChange={onChange}
    />
  );
};

ImAutocomplete.propTypes = {
  style: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
};

export default ImAutocomplete;
