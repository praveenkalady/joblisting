import React from "react";
import {Popover} from "antd";
import PropTypes from "prop-types";

const ImPopover = ({
  content,
  child,
  trigger,
  className,
  visible,
  onVisibleChange,
  placement = "bottom",
  title,
  getPopupContainer,
  mouseEnterDelay,
  mouseLeaveDelay,
  destroyTooltipOnHide,
  color,
  overlayStyle,
}) => {
  return (
    <Popover
      content={content}
      placement={placement}
      trigger={trigger}
      overlayClassName={className}
      visible={visible}
      onVisibleChange={onVisibleChange}
      title={title}
      getPopupContainer={getPopupContainer}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      overlayStyle={overlayStyle}
      color={color}
      destroyTooltipOnHide={destroyTooltipOnHide}
    >
      {child}
    </Popover>
  );
};

ImPopover.propTypes = {
  content: PropTypes.any,
  child: PropTypes.any,
  trigger: PropTypes.any,
  className: PropTypes.any,
  visible: PropTypes.bool,
  destroyTooltipOnHide: PropTypes.destroyTooltipOnHide,
  onVisibleChange: PropTypes.any,
  placement: PropTypes.string,
  title: PropTypes.any,
  getPopupContainer: PropTypes.func,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  color: PropTypes.string,
  overlayStyle: PropTypes.object,
};

export default ImPopover;
