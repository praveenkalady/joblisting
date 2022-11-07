import React from "react";
import {Avatar} from "antd";
import PropTypes from "prop-types";

import "./ImAvatar.less";

const ImAvatar = ({
  alt,
  children,
  gap = 4,
  icon,
  shape = "circle",
  size = "default",
  src,
  style,
  srcSet,
  draggable,
  crossOrigin,
  onError,
}) => {
  return (
    <>
      <Avatar
        alt={alt}
        gap={gap}
        icon={icon}
        shape={shape}
        size={size}
        src={src}
        style={style}
        srcSet={srcSet}
        draggable={draggable}
        crossOrigin={crossOrigin}
        onError={onError}
      >
        {children}
      </Avatar>
    </>
  );
};

ImAvatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.any,
  gap: PropTypes.number,
  icon: PropTypes.any,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.any,
  src: PropTypes.any,
  style: PropTypes.object,
  srcSet: PropTypes.string,
  draggable: PropTypes.any,
  crossOrigin: PropTypes.oneOf(["anonymous", "use-credentials", ""]),
  onError: PropTypes.func,
};

export default ImAvatar;
