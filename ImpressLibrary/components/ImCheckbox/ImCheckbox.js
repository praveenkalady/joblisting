import React from "react";
import {Checkbox} from "antd";
// import "./ImCheckbox.css";
import PropTypes from "prop-types";

const ImCheckbox = ({
  text,
  onChangefn,
  checked,
  grouped,
  options,
  value,
  disabled,
}) => {
  return (
    <>
      {!grouped ? (
        <Checkbox
          onChange={(e) => {
            onChangefn(e);
          }}
          checked={checked}
          disabled={disabled}
        >
          {text}
        </Checkbox>
      ) : (
        <Checkbox.Group
          options={options}
          onChange={(e) => onChangefn(e)}
          value={value}
          disabled={disabled}
        />
      )}
    </>
  );
};

ImCheckbox.propTypes = {
  text: PropTypes.any,
  onChangefn: PropTypes.func,
  checked: PropTypes.bool,
  grouped: PropTypes.bool,
  options: PropTypes.any,
  value: PropTypes.array,
  disabled: PropTypes.bool,
};

export default ImCheckbox;
