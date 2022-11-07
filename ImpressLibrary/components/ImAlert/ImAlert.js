import React from "react";
import {Alert} from "antd";
import PropTypes from "prop-types";

import "./ImAlert.less";

// NOTE: Be mindful that AntD "info" alert is based on the primary color defined in theme.less

const ImAlert = ({
  closable = false,
  message = "",
  showIcon = false,
  type = "info",
  afterClose,
  onClose,
}) => {
  return (
    <>
      <Alert
        message={message}
        closable={closable}
        showIcon={showIcon}
        type={type}
        afterClose={afterClose}
        onClose={onClose}
      />
    </>
  );
};

ImAlert.propTypes = {
  closable: PropTypes.bool,
  showIcon: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  afterClose: PropTypes.func,
  onClose: PropTypes.func,
};

export default ImAlert;
