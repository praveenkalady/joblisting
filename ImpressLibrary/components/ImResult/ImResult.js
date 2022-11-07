import React from "react";
import PropTypes from "prop-types";
import {Result} from "antd";

const ImResult = ({
  status,
  title,
  subTitle,
  extra,
}) => {
  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={extra}
    />
  );
};

ImResult.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.element.isRequired,
  subTitle: PropTypes.element,
  extra: PropTypes.element,
};

export default ImResult;
