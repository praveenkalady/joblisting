import React from "react";
import ImComponents from "..";
import ImSpin from "./ImSpin";

export default {
  title: "ImpressComponents/ImSpin",
  component: ImSpin,
  args: {
    componentName: "ImSpin",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Spin = Template.bind({});
Spin.args = {};
