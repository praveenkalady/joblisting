import React from "react";
import ImComponents from "..";
import ImDatePicker from "./ImDatePicker";

export default {
  title: "ImpressComponents/ImDatePicker",
  component: ImDatePicker,
  args: {
    componentName: "ImDatePicker",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  format:"YYYY/DD/MM"
};
