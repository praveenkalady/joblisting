import React from "react";
import PropTypes from "prop-types";
import {Button} from "antd";
import "./ImButton.less";

const ImButton = ({
  child,
  type = "primary",
  onClick,
  disabled,
  componentName, // Just to remove it from being applied to Button
  sharedProps,
  danger,
  ...props
}) => {
  return (
    <Button
      type={type}
      {...sharedProps}
      onClick={onClick}
      {...props}
      disabled={disabled}
      danger={danger}
    >
      {child}
    </Button>
  );
};

export default ImButton;

ImButton.propTypes = {
  child: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
  componentName: PropTypes.string,
  sharedProps: PropTypes.object,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
};
