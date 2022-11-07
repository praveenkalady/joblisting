import React from "react";
import ImComponents from "..";
import ImInput from "./ImInput";

export default {
  title: "ImpressComponents/ImInput",
  component: ImInput,
  args: {
    componentName: "ImInput",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Input = Template.bind({});
Input.args = {
  type:"input",
  placeholder:"Type something"
};
