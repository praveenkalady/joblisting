import React from "react";
import ImComponents from "..";
import ImTooltip from "./ImTooltip";

export default {
  title: "ImpressComponents/ImTooltip",
  component: ImTooltip,
  args: {
    componentName: "ImTooltip",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  child: 'Hover here!',
  text: 'Surprise! Why does it show up here in the center???'
};
