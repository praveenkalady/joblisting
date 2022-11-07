import React from "react";
import {Tooltip} from "antd";
// import "./ImTooltip.css";
import PropTypes from "prop-types";

const ImTooltip = ({
  text,
  child,
  className="",
  wrapperClassName,
  placement,
  isEnabled=true,
}) => {
  return isEnabled ? (
    <Tooltip
      overlayClassName={className}
      placement={placement}
      title={<span>{text}</span>}
    >
      <div className={wrapperClassName}>{child}</div>
    </Tooltip>
  ) : (
    <div className={wrapperClassName}>{child}</div>
  );
};

ImTooltip.propTypes = {
  text: PropTypes.string,
  child: PropTypes.node,
  placement: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  isEnabled: PropTypes.bool,
};

export default ImTooltip;
