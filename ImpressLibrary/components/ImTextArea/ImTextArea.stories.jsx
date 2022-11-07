import React from "react";
import ImComponents from "..";
import ImTextArea from "./ImTextArea";

export default {
  title: "ImpressComponents/ImTextArea",
  component: ImTextArea,
  args: {
    componentName: "ImTextArea",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const TextArea = Template.bind({});
TextArea.args = {
  placeholder: "LARGE TEXT AREA",
};
