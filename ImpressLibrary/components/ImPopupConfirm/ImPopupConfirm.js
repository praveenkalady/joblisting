import React from "react";
import {Popconfirm} from "antd";
import PropTypes from "prop-types";

const ImPopupConfirm = ({
  child,
  title,
  onConfirm,
  onCancel,
  okText,
  cancelText,
  placement,
  className="",
}) => {
  return (
    <Popconfirm
      className={className}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      placement={placement}
    >
      {child}
    </Popconfirm>
  );
};

ImPopupConfirm.propTypes = {
  child: PropTypes.element,
  title: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  placement: PropTypes.string,
  className: PropTypes.string,
};

export default ImPopupConfirm;
