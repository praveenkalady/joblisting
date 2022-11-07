import React from "react";
import ImComponents from "..";
import ImEmpty from "./ImEmpty";

export default {
  title: "ImpressComponents/ImEmpty",
  component: ImEmpty,
  args: {
    componentName: "ImEmpty",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  description: 'No custom data found',
};
