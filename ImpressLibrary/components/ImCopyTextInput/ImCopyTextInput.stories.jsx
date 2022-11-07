import React from "react";
import ImComponents from "..";
import ImCopyTextInput from "./ImCopyTextInput";

export default {
  title: "ImpressComponents/ImCopyTextInput",
  component: ImCopyTextInput,
  args: {
    componentName: "ImCopyTextInput",
  },
  argTypes: {
    componentName: {table: {disable: true}},
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const CopyTextInput = Template.bind({});
CopyTextInput.args = {
  title: "Copy text.",
  defaultValue: "Copy me.",
  width: "20%",
};
