import React from "react";
import {Tag} from "antd";
import PropTypes from "prop-types";

function ImTag({
  value,
  closable,
  onClose,
  icon,
  onClick,
  onMouseDown,
  color,
  style,
}) {
  return (
    <>
      <Tag
        onMouseDown={onMouseDown}
        icon={icon}
        closable={closable}
        onClose={onClose}
        onClick={onClick}
        color={color}
        style={style}
      >
        {value}
      </Tag>
    </>
  );
}

export default ImTag;

ImTag.propTypes = {
  value: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  onMouseDown: PropTypes.func,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  color: PropTypes.string,
  style: PropTypes.object,
};
