import React from "react";
import PropTypes from "prop-types";
import {Timeline} from "antd";

// const sampleData = [
//   {label: "20 May", child: "Hola youtube"},
//   {label: "21 May", child: "Hola Facebook"},
// ];

const ImVerticalTimeline = ({mode = "left", data}) => {
  return (
    <Timeline mode={mode}>
      {data &&
        data.map((item, index) => (
          <Timeline.Item
            label={item.label}
            color={item.color}
            dot={item.dot}
            key={index + 1}
          >
            {item.child}
          </Timeline.Item>
        ))}
    </Timeline>
  );
};
export default ImVerticalTimeline;

ImVerticalTimeline.propTypes = {
  mode: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf({
      label: PropTypes.string.isRequired,
      child: PropTypes.any.isRequired,
      color: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
