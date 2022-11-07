import React from "react";
import {Card} from "antd";
import PropTypes from "prop-types";

const ImCard = ({title, className, description, headStyle, style, extra}) => {
  return (
    <Card
      title={title}
      extra={extra}
      style={style}
      className={className}
      headStyle={headStyle}
    >
      {description}
    </Card>
  );
};

ImCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  headStyle: PropTypes.any,
  style: PropTypes.any,
  extra: PropTypes.any,
};

export default ImCard;
