import React from "react";
import ImComponents from "..";
import ImInputNumber from "./ImInputNumber";

export default {
  title: "ImpressComponents/ImInputNumber",
  component: ImInputNumber,
  args: {
    componentName: "ImInputNumber",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const InputNumber = Template.bind({});
InputNumber.args = {
  min:0,
  max:9999

};
