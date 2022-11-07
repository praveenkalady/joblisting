import React from "react";
import ImComponents from "..";
import ImSelect from "./ImSelect";

export default {
  title: "ImpressComponents/ImSelect",
  component: ImSelect,
  args: {
    componentName: "ImSelect",
    data: [
      {
        val: "Value 1",
        label: "Label 1"
      },
      {
        val: "Value 1",
        label: "Label 2"
      },
      {
        val: "Value 1",
        label: "Label 3"
      },
    ]
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Select = Template.bind({});
Select.args = {};
