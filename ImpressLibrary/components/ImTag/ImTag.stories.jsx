import React from "react";
import ImComponents from "..";
import ImTag from "./ImTag";

export default {
  title: "ImpressComponents/ImTag",
  component: ImTag,
  args: {
    componentName: "ImTag",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Tag = Template.bind({});
Tag.args = {
  value: "Tag 1",
};
