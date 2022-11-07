import React from "react";
import PropTypes from "prop-types";
import {Upload} from "antd";
import "./ImUploader.less";

const ImUploader = ({
  child,
  onChange,
  acceptType,
  action,
  customRequest,
  beforeUpload,
  maxCount,
  multiple,
  showUploadList,
  fileList,
  isDraggable = true,
}) => {
  const {Dragger} = Upload;
  const getHeaders = () => {
    let token;
    if (document.querySelector("[name=csrfmiddlewaretoken]")) {
      token = document.querySelector("[name=csrfmiddlewaretoken]").value;
    } else if (document.querySelector("[name=csrf-token]")) {
      token = document.querySelector("[name=csrf-token]").content;
    } else {
      null;
    }
    return {"X-CSRFToken": token};
  };

  const UploadWrapper = !!isDraggable ? Dragger : Upload;

  return (
    <UploadWrapper
      accept={acceptType}
      onChange={onChange}
      headers = {getHeaders}
      action={action}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
      maxCount={maxCount}
      multiple={multiple}
      showUploadList={showUploadList}
      fileList={fileList}
    >
      {child}
    </UploadWrapper>
  );
};

ImUploader.propTypes = {
  child: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  acceptType: PropTypes.string,
  action: PropTypes.string,
  customRequest: PropTypes.func,
  beforeUpload: PropTypes.func,
  multiple: PropTypes.bool,
  maxCount: PropTypes.number,
  showUploadList: PropTypes.bool,
  fileList: PropTypes.arr,
  type: PropTypes.string,
  isDraggable: PropTypes.bool,
};

export default ImUploader;
