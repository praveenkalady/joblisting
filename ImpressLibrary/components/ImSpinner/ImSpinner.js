import React from "react";
import PropTypes from "prop-types";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import "./ImSpinner.less";

const ImSpinner = ({size="34px", tip=""}) => {
  const antIcon = <LoadingOutlined style={{fontSize: size}} spin />;
  return (
    <Spin indicator={antIcon} tip={tip}/>
  );
};

ImSpinner.propTypes = {
  size: PropTypes.string,
  tip: PropTypes.string,
};
export default ImSpinner;
