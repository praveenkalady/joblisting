import React from 'react'
import ImComponents from '..';
import ImPopover from './ImPopover';

export default {
    title: "ImpressComponents/ImPopover",
    component: ImPopover,
    args: {
      componentName: "ImPopover",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => <ImComponents {...args} />

export const Popover = Template.bind({})
Popover.args = {
  content:"content",
  child:<span>Hover me</span>
}