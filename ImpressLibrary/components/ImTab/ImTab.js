import React from "react";
import PropTypes from "prop-types";
import {Tabs} from "antd";
import "./ImTab.less";
const {TabPane} = Tabs;

const ImTab = ({
  tabData,
  setTabKey,
  tabPosition = "left",
  tabBarExtraContent,
  followUpData,
  type,
  defaultActiveKey = "",
  tabBarStyle = {},
  centered,
  destroyInactiveTabPane = false,
  onTabClick = () =>{},
  activeKey,
}) => {
  return (
    <Tabs
      tabPosition={tabPosition}
      onChange={setTabKey}
      tabBarExtraContent={tabBarExtraContent}
      type={type}
      defaultActiveKey={defaultActiveKey}
      tabBarStyle={tabBarStyle}
      centered={centered}
      destroyInactiveTabPane = {destroyInactiveTabPane}
      onTabClick={onTabClick}
      activeKey={activeKey}
    >
      {tabData &&
        tabData.map((pane) => (
          <TabPane
            tab={pane.title}
            key={pane.key}
            disabled={pane.hasOwnProperty("disabled") ? pane.disabled : false}
          >
            {pane.content}
          </TabPane>
        ))}

      {followUpData &&
        followUpData.map((item, i) => (
          <TabPane
            tab={
              <>
                <span>{item.condition_type}</span>
                {item.condition_type === "always" ?
                  "For all responses" :
                  item.condition_value}
              </>
            }
            key={i}
          ></TabPane>
        ))}
    </Tabs>
  );
};

ImTab.propTypes = {
  "tabData": PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node.isRequired,
        key: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
        disabled: PropTypes.bool,
      }),
  ),
  "setTabKey": PropTypes.func,
  "tabPosition": PropTypes.string,
  "tabBarExtraContent": PropTypes.any,
  "followUpData": PropTypes.any,
  "defaultActiveKey": PropTypes.string,
  "tabBarStyle": PropTypes.object,
  "type": PropTypes.any,
  "centered": PropTypes.bool,
  "destroyInactiveTabPane": PropTypes.bool,
  "onTabClick": PropTypes.func,
  "activeKey": PropTypes.string,

};

export default ImTab;
