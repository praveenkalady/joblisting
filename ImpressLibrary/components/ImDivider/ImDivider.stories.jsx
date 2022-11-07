import React from "react";
import ImComponents from "..";
import ImDivider from "./ImDivider";

export default {
  title: "ImpressComponents/ImDivider",
  component: ImDivider,
  args: {
    componentName: "ImDivider",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Divider = Template.bind({});
Divider.args = {
  type:"horizontal",
};
