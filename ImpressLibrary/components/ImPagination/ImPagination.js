import React from "react";
import {Pagination} from "antd";
import PropTypes from "prop-types";
import "./ImPagination.less";

const ImPagination = ({
  total,
  pageSize,
  onChange,
  current,
  showQuickJumper = false,
  disabled = false,
}) => {
  return (
    <Pagination
      total={total}
      showSizeChanger={false}
      pageSize={pageSize}
      onChange={onChange}
      current={current}
      showQuickJumper={showQuickJumper}
      disabled={disabled}
    />
  );
};

ImPagination.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.any,
  onChange: PropTypes.func,
  current: PropTypes.any,
  showQuickJumper: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ImPagination;
