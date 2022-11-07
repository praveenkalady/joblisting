import React from 'react'
import ImComponents from '..';
import ImProgress from './ImProgress';

export default {
    title: "ImpressComponents/ImProgress",
    component: ImProgress,
    args: {
      componentName: "ImProgress",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => <ImComponents {...args} />

export const Progress = Template.bind({})
Progress.args = {
  percent: 50
}