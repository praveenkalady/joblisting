import React from "react";
import PropTypes from "prop-types";
import {Divider} from "antd";

function ImDivider({
  className,
  dashed,
  orientation,
  plain,
  style,
  type,
  child,
}) {
  return (
    <Divider
      className={className}
      dashed={dashed}
      orientation={orientation}
      plain={plain}
      style={style}
      type={type}
    >
      {child}
    </Divider>
  );
}

export default ImDivider;

ImDivider.propTypes = {
  className: PropTypes.string,
  dashed: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
  orientation: PropTypes.string,
  plain: PropTypes.bool,
  child: PropTypes.any,
};
