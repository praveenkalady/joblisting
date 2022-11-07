import React from "react";
import ImComponents from "..";
import ImRate from "./ImRate";

export default {
  title: "ImpressComponents/ImRate",
  component: ImRate,
  args: {
    componentName: "ImRate",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Rate = Template.bind({});
Rate.args = {
  value: 3
};
