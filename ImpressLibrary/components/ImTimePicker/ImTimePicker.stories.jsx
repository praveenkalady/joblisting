import React from "react";
import ImComponents from "..";
import ImTimePicker from "./ImTimePicker";

export default {
  title: "ImpressComponents/ImTimePicker",
  component: ImTimePicker,
  args: {
    componentName: "ImTimePicker",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  placeholder: "Select time"
};
