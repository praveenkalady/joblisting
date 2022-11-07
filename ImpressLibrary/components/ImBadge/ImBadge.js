import React from "react";
import PropTypes from "prop-types";
import {Badge} from "antd";

const ImBadge = ({
  count,
  child = "",
  overflowCount = 999,
  offset,
}) => {
  return (
    <Badge
      count={count}
      overflowCount={overflowCount}
      offset={offset}
    >
      {child}
    </Badge>
  );
};

export default ImBadge;

ImBadge.propTypes = {
  count: PropTypes.number.isRequired,
  child: PropTypes.node,
  overflowCount: PropTypes.number,
  offset: PropTypes.arrayOf(PropTypes.number),
};
