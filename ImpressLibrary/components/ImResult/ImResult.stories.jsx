import React from "react";
import ImComponents from "..";
import ImResult from "./ImResult";

export default {
  title: "ImpressComponents/ImResult",
  component: ImResult,
  args: {
    componentName: "ImResult",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Result = Template.bind({});
Result.args = {
  title: 'ERROR',
  subTitle: 'Oh nooooo',
  status: 'error'
};
