import React from "react";
import ImComponents from "..";
import ImSpinner from "./ImSpinner";

export default {
  title: "ImpressComponents/ImSpinner",
  component: ImSpinner,
  args: {
    componentName: "ImSpinner",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Spinner = Template.bind({});
Spinner.args = {};
