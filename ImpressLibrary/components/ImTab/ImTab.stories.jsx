import React from "react";
import ImComponents from "..";
import ImTab from "./ImTab";

export default {
  title: "ImpressComponents/ImTab",
  component: ImTab,
  args: {
    componentName: "ImTab",
    tabData: [
      {
        title: 'Tab 1',
        key: 'tab1',
        content: <div>TAB 1</div>
      },
      {
        title: 'Tab 2',
        key: 'tab2',
        content: <div>TAB 2</div>
      },
    ]
  },
  argTypes: {
    componentName: { table: { disable: true } },
    tabPosition: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "inline-radio" },
    }
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const TopTab = Template.bind({});
TopTab.args = {
  tabPosition: 'top'
};
