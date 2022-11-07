import React from "react";
import PropTypes from "prop-types";
import {Input, Tooltip, Button} from "antd";
import {CopyOutlined} from "@ant-design/icons";
// import "./ImCopyTextInput.css";

const ImCopyTextInput = ({
  defaultValue,
  width,
  height,
  title,
  compact = true,
  disabled = true,
}) => {
  const copyTextToClipBoard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(defaultValue);
    }
  };
  return (
    <Input.Group compact={compact}>
      <Input
        style={{width, height}}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      <Tooltip title={title}>
        <Button onClick={copyTextToClipBoard} icon={<CopyOutlined />} />
      </Tooltip>
    </Input.Group>
  );
};

ImCopyTextInput.propTypes = {
  defaultValue: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ImCopyTextInput;
