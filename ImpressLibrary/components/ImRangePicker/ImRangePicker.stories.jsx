import React from "react";
import ImComponents from "..";
import ImRangePicker from "./ImRangePicker";

export default {
  title: "ImpressComponents/ImRangePicker",
  component: ImRangePicker,
  args: {
    componentName: "ImRangePicker",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const RangePicker = Template.bind({});
RangePicker.args = {};
