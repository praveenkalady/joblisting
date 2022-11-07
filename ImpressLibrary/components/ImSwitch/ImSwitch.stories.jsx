import React from "react";
import ImComponents from "..";
import ImSwitch from "./ImSwitch";

export default {
  title: "ImpressComponents/ImSwitch",
  component: ImSwitch,
  args: {
    componentName: "ImSwitch",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Switch = Template.bind({});
Switch.args = {};
