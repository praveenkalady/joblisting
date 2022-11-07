import React from "react";
import PropTypes from "prop-types";
import {Empty} from "antd";

const ImEmpty = ({
  description,
}) => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={description}
    />
  );
};

ImEmpty.propTypes = {
  description: PropTypes.node,
};

export default ImEmpty;
