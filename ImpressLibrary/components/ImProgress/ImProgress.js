import React from "react";
import {Progress} from "antd";
import PropTypes from "prop-types";

const ImProgress = ({
  format,
  percent,
  showInfo,
  status,
  strokeColor,
  strokeLinecap,
  success,
  trailColor,
  type,
  steps,
  strokeWidth,
  width,
  gapDegree,
  gapPosition,
}) => {
  return (
    <Progress
      format={format}
      percent={percent}
      showInfo={showInfo}
      status={status}
      strokeColor={strokeColor}
      strokeLinecap={strokeLinecap}
      success={success}
      trailColor={trailColor}
      type={type}
      steps={steps}
      strokeWidth={strokeWidth}
      width={width}
      gapDegree={gapDegree}
      gapPosition={gapPosition}
    />
  );
};

ImProgress.defaultProps = {
  format: (percent, successPercent) => {},
  percent: 0,
  showInfo: false,
  status: null,
  strokeColor: null,
  strokeLinecap: "round",
  success: null,
  trailColor: "",
  type: "line",
  steps: null,
  strokeWidth: 10,
  width: 132,
  gapDegree: 75,
  gapPosition: "bottom",
};

ImProgress.propTypes = {
  format: PropTypes.exact(),
  percent: PropTypes.number,
  showInfo: PropTypes.bool,
  status: PropTypes.string,
  strokeColor: PropTypes.string,
  strokeLinecap: PropTypes.oneOf(["round", "square"]),
  success: PropTypes.exact({
    percent: PropTypes.number,
    strokeColor: PropTypes.string,
  }),
  trailColor: PropTypes.string,
  type: PropTypes.oneOf(["line", "circle", "dashboard"]),
  steps: PropTypes.number,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  gapDegree: PropTypes.number,
  gapPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};

export default ImProgress;
