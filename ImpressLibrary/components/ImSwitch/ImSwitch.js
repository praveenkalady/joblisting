import React from "react";
import PropTypes from "prop-types";
import {Switch} from "antd";
import "./ImSwitch.less";

const ImSwitch = ({
  checked,
  onChange,
  defaultChecked,
  disabled,
  size,
}) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      size={size}
    />
  );
};

ImSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

export default ImSwitch;
