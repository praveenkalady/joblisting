import React, {useState} from "react";
import PropTypes, {bool} from "prop-types";
import {Collapse} from "antd";
// import "./ImCollapse.css";
import ImIcons from "../../icons";

const ImCollapse = ({
  title,
  child,
  style,
  collapsible,
  activeKey,
  onChange,
  defaultActiveKey,
  expandIcon,
  expandIconPosition,
  keyValue,
  ghost = true,
  showArrow,
  destroyInactivePanel=true,
}) => {
  const {Panel} = Collapse;
  const [defaultActive, setDefaultActive] = useState(defaultActiveKey);
  const handleChange = (key) => {
    setDefaultActive(key);
  };
  return (
    <Collapse
      ghost={ghost}
      className={style}
      activeKey={activeKey || defaultActive}
      onChange={onChange || handleChange}
      expandIcon={
        expandIcon ||
        (({isActive}) =>
          isActive ? (
            <ImIcons name="collapseUpArrow" />
          ) : (
            <ImIcons name="collapseDownArrow" />
          ))
      }
      defaultActiveKey={defaultActiveKey}
      expandIconPosition={expandIconPosition}
      destroyInactivePanel={destroyInactivePanel}
    >
      <Panel
        showArrow={showArrow}
        collapsible={collapsible}
        header={title}
        className="panel-custom"
        key={keyValue}
      >
        {child}
      </Panel>
    </Collapse>
  );
};

export default ImCollapse;

ImCollapse.propTypes = {
  title: PropTypes.string,
  child: PropTypes.element,
  style: PropTypes.string,
  collapsible: PropTypes.any,
  activeKey: PropTypes.any,
  onChange: PropTypes.func,
  defaultActiveKey: PropTypes.any,
  expandIcon: PropTypes.any,
  expandIconPosition: PropTypes.any,
  keyValue: PropTypes.any,
  ghost: PropTypes.bool,
  showArrow: PropTypes.bool,
  destroyInactivePanel: bool,
};
