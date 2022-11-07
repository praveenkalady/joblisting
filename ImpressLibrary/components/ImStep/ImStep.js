import React from "react";
import PropTypes from "prop-types";
import {Steps} from "antd";
import ImIcons from "../../icons";
import "./ImStep.less";

const ImStep = ({
  current = 0,
  steps,
  customProgress,
  direction = "horizontal",
  icon,
  className,
}) => {
  const {Step} = Steps;
  const CustomProgress = (iconDot, {status, index}) => {
    switch (status) {
      case "finish":
        return (
          <div className="circle circle__status--finish">
            <ImIcons name="tickIcon" />
          </div>
        );
      case "process":
        return (
          <div className="circle circle__status--wait">
            <ImIcons name="uploadIcon" />
          </div>
        );
      case "wait":
        return (<div className="circle"></div>);
      default:
        return (<div></div>);
    }
  };

  return (
    <Steps
      current={current}
      direction={direction}
      labelPlacement="vertical"
      icon={icon}
      className={className}
      progressDot={customProgress ? customProgress : CustomProgress}
    >
      {steps.map((step, index) => (
        <Step key={index} title={step.title} subTitle={step.subTitle} />
      ))}
    </Steps>
  );
};

ImStep.propTypes = {
  current: PropTypes.string,
  steps: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.string,
      }),
  ),
  customProgress: PropTypes.func,
  direction: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string,
};

export default ImStep;
