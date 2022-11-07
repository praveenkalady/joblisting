import React from 'react'
import ImComponents from '..';
import ImPopupConfirm from './ImPopupConfirm';

export default {
    title: "ImpressComponents/ImPopupConfirm",
    component: ImPopupConfirm,
    args: {
      componentName: "ImPopupConfirm",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => <ImComponents {...args} />

export const Popover = Template.bind({})
Popover.args = {
  child:<span>Are you sure to delete this task?</span>,
  okText:"OK",
  cancelText:"Cancel",
  onConfirm: () => {},
  onCancel: () => {}
}