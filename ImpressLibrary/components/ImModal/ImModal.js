import React from "react";
import PropTypes from "prop-types";
// import "./ImModal.css";
import {Modal} from "antd";
import ImIcons from "../../icons";

const ImModal = ({
  className,
  title,
  visible,
  footer,
  onOk,
  onCancel,
  component,
  okText,
  okButtonProps,
  cancelButtonProps,
  cancelText,
  closable,
  width,
  bodyStyle,
  mask,
  centered,
  maskStyle,
  wrapClassName,
  maskClosable = true,
  keyboard = true,
  afterClose,
  destroyOnClose,
  confirmLoading = false,
  zIndex,
}) => {
  return (
    <div>
      <Modal
        className={className}
        title={title}
        visible={visible}
        footer={footer}
        onOk={onOk}
        onCancel={onCancel}
        okText={okText}
        closeIcon={<ImIcons name="closeIcon" />}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        cancelText={cancelText}
        width={width}
        closable={closable}
        bodyStyle={bodyStyle}
        mask={mask}
        maskStyle={maskStyle}
        centered={centered}
        wrapClassName={wrapClassName}
        maskClosable={maskClosable}
        keyboard={keyboard}
        afterClose={afterClose}
        destroyOnClose={destroyOnClose}
        confirmLoading={confirmLoading}
        zIndex={zIndex}
      >
        {component}
      </Modal>
    </div>
  );
};

export default ImModal;

ImModal.propTypes = {
  className: PropTypes.string,
  okText: PropTypes.string,
  title: PropTypes.any,
  visible: PropTypes.bool,
  footer: PropTypes.any,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  component: PropTypes.element,
  cancelText: PropTypes.string,
  okButtonProps: PropTypes.any,
  cancelButtonProps: PropTypes.any,
  closable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bodyStyle: PropTypes.string,
  mask: PropTypes.bool,
  maskStyle: PropTypes.object,
  wrapClassName: PropTypes.string,
  centered: PropTypes.bool,
  maskClosable: PropTypes.bool,
  keyboard: PropTypes.bool,
  afterClose: PropTypes.func,
  destroyOnClose: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  zIndex: PropTypes.number,
};
