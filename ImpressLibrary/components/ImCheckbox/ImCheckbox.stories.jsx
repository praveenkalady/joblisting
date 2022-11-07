import React from "react";
import ImComponents from "..";
import ImCheckbox from "./ImCheckbox";

export default {
  title: "ImpressComponents/ImCheckbox",
  component: ImCheckbox,
  args: {
    componentName: "ImCheckbox",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  checked:true,
  text:`apple`
};

export const GroupedCheckbox = Template.bind({});
GroupedCheckbox.args = {
  grouped:true,
  options:["apple","pineapple","custardapple"]
};
