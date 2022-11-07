import React from "react";
import PropTypes from "prop-types";
import {Collapse} from "antd";
// import "./ImAccordion.css";
import {DownOutlined} from "@ant-design/icons";

const {Panel} = Collapse;

const ImAccordion = ({
  onChange,
  defaultActiveKey = ["1"],
  data,
  expandIconPosition = "right",
  bordered = false,
  expandIcon=()=><DownOutlined style={{color: "#979797"}}/>,
}) => {
  return (
    <Collapse
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
      bordered={bordered}
      expandIcon={expandIcon}
      accordion
    >
      {data &&
        data.map((item, index) => (
          <Panel header={<div className="panel-header-text">{item.header}</div>} key={index+1}>
            <p dangerouslySetInnerHTML={{__html: item.text}}></p>
          </Panel>
        ))}
    </Collapse>
  );
};

export default ImAccordion;

ImAccordion.propTypes = {
  onChange: PropTypes.func,
  defaultActiveKey: PropTypes.array,
  data: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired,
  expandIconPosition: PropTypes.string,
  bordered: PropTypes.bool,
  expandIcon: PropTypes.func,
};
