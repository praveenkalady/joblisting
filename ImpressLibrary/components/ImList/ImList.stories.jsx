import React from 'react';
import ImComponents from '..';
import ImList from './ImList';

export default {
    title: "ImpressComponent/ImList",
    component: ImList,
    args: {
        componentName: "ImInput",
    },
    argTypes: {
        componentName: { table: { disable: true } },
    },
}

const Template = (args) => {
    return (
      <ImComponents {...args} />
    )
};
  
export const List = Template.bind({});