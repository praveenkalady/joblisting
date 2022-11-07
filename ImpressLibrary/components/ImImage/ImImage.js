import React from "react";
import {Image} from "antd";
import PropTypes from "prop-types";

const ImImage = ({
  width,
  height,
  src,
  alt = "image",
  placeholder,
  preview,
  onError,
  rootClassName,
  fallback,
}) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      placeholder={placeholder}
      preview={preview}
      onError={onError}
      rootClassName={rootClassName}
      fallback={fallback}
    />
  );
};

ImImage.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  alt: PropTypes.string,
  placeholder: PropTypes.element,
  preview: PropTypes.bool,
  onError: PropTypes.func,
  rootClassName: PropTypes.string,
  fallback: PropTypes.string,
};

export default ImImage;
