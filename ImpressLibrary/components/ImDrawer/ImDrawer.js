import React from "react";
import {Drawer} from "antd";
import PropTypes from "prop-types";

import ImIcons from "../../icons";

const ImDrawer = ({
  autoFocus = true,
  afterVisibleChange,
  bodyStyle,
  children,
  className,
  closable = true,
  closeIcon = <ImIcons name="closeIcon" />,
  contentWrapperStyle,
  destroyOnClose = false,
  drawerStyle,
  extra,
  footer,
  footerStyle,
  forceRender = false,
  getContainer,
  headerStyle,
  height = 256,
  keyboard = true,
  mask = true,
  maskClosable = true,
  maskStyle = {},
  placement = "left",
  push = {distance: 180},
  style,
  size = "default",
  title,
  visible = false,
  width = 378,
  zIndex = 1000,
  onClose,
}) => {
  return (
    <>
      <Drawer
        autoFocus={autoFocus}
        afterVisibleChange={afterVisibleChange}
        bodyStyle={bodyStyle}
        className={className}
        closable={closable}
        closeIcon={closeIcon}
        contentWrapperStyle={contentWrapperStyle}
        destroyOnClose={destroyOnClose}
        drawerStyle={drawerStyle}
        extra={extra}
        footer={footer}
        footerStyle={footerStyle}
        forceRender={forceRender}
        getContainer={getContainer}
        headerStyle={headerStyle}
        height={height}
        keyboard={keyboard}
        mask={mask}
        maskClosable={maskClosable}
        maskStyle={maskStyle}
        placement={placement}
        push={push}
        style={style}
        size={size}
        title={title}
        visible={visible}
        width={width}
        zIndex={zIndex}
        onClose={onClose}
      >
        {children}
      </Drawer>
    </>
  );
};

ImDrawer.propTypes = {
  autoFocus: PropTypes.bool,
  afterVisibleChange: PropTypes.func,
  bodyStyle: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  closable: PropTypes.bool,
  closeIcon: PropTypes.any,
  contentWrapperStyle: PropTypes.any,
  destroyOnClose: PropTypes.bool,
  drawerStyle: PropTypes.object,
  extra: PropTypes.any,
  footer: PropTypes.any,
  footerStyle: PropTypes.any,
  forceRender: PropTypes.bool,
  getContainer: PropTypes.any,
  headerStyle: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  keyboard: PropTypes.bool,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
  maskStyle: PropTypes.any,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  push: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ]),
  style: PropTypes.any,
  size: PropTypes.oneOf(["large", "default"]),
  title: PropTypes.any,
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.number,
  onClose: PropTypes.func,
};

export default ImDrawer;
