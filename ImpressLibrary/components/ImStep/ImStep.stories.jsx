import React from "react";
import ImComponents from "..";
import ImStep from "./ImStep";

export default {
  title: "ImpressComponents/ImStep",
  component: ImStep,
  args: {
    componentName: "ImStep",
    steps: [
      {
        title: 'Step 1',
        subTitle: 'Sleep'
      },
      {
        title: 'Step 2',
        subTitle: 'Code'
      },
      {
        title: 'Step 3',
        subTitle: 'Repeat'
      },
    ]
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Step = Template.bind({});
Step.args = {};
