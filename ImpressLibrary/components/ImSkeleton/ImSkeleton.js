import React from "react";
import {Skeleton} from "antd";
import PropTypes from "prop-types";

const ImSkeleton = ({
  active,
  loading,
  size,
  paragraph,
  round,
  child = null,
  title,
  avatar,
  block,
  shape,
}) => {
    return (
      <Skeleton
        active={active}
        loading={loading}
        size={size}
        paragraph={paragraph}
        shape={shape}
        block={block}
        title={title}
        round={round}
        avatar={avatar}
      >
        {child}
      </Skeleton>
    );
};

ImSkeleton.propTypes = {
  active: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["large", "small", "default"]),
  ]),
  paragraph: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      rows: PropTypes.number,
      width: PropTypes.number,
    }),
  ]),
  round: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      width: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ]),
    })]),
  child: PropTypes.element,
  avatar: PropTypes.bool,
  block: PropTypes.bool,
  shape: PropTypes.oneOf(["circle", "square"]),
};

export default ImSkeleton;
