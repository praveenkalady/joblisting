import React from 'react'
import ImComponents from '..';
import ImModal from './ImModal';

export default {
    title: "ImpressComponents/ImModal",
    component: ImModal,
    args: {
      componentName: "ImModal",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => <ImComponents {...args} />

export const Modal = Template.bind({})
Modal.args = {
    visible:true,
    closable:true
}