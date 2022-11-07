import React from "react";
import {Spin} from "antd";
import PropTypes from "prop-types";

const ImSpin = ({
  delay,
  indicator,
  size,
  spinning,
  tip,
  wrapperClassName,
  children,
}) => {
  return (
    <Spin
      delay={delay}
      indicator={indicator}
      size={size}
      spinning={spinning}
      tip={tip}
      wrapperClassName={wrapperClassName}
    >
      {children}
    </Spin>
  );
};

ImSpin.defaultProps = {
  size: "default",
  spinning: true,
};

ImSpin.propTypes = {
  delay: PropTypes.number,
  indicator: PropTypes.any,
  children: PropTypes.any,
  size: PropTypes.oneOf(["small", "default", "large"]),
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default ImSpin;
