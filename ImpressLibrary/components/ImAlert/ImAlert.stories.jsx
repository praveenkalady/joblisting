import React from "react";
import ImComponents from "..";
import ImAlert from "./ImAlert";

export default {
  title: "ImpressComponents/ImAlert",
  component: ImAlert,
  args: {
    componentName: "ImAlert",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Alert = Template.bind({});
Alert.args = {
  message: "It is an alert.",
};
