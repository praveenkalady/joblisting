import React from 'react';
import ImComponents from '..';

import ImDecisionModal from './ImDecisionModal';
import * as constants from "./constants";

export default {
  title: "ImpressComponents/ImDecisionModal",
  component: ImDecisionModal,
  args: {
    componentName: "ImDecisionModal",
    isModalVisible: true,
  },
  argTypes: {
    componentName: { table: { disable: true } },
    type: { table: { disable: true } },
  },
};

const Template = (args) => <ImComponents {...args} />;

export const InfoDecisionModal = Template.bind({});
InfoDecisionModal.args = {
  type: constants.INFO_TYPE,
  title: "Confirmation of lorem ipsum",
  content: "Please confirm if you would wish to open the Adhoc workflow - video integration conversation. You will be directed to a new tab and you can resume your conversation there.",
  cancelText: "Button Title",
  okText: "Button Title",
};

export const deleteDecisionModal = Template.bind({});
deleteDecisionModal.args = {
  type: constants.DELETE_TYPE,
  title: "Delete lorem ipsum",
  content: "Please confirm if you would wish to delete the Adhoc workflow - video integration conversation. You will be directed to a new tab and you can resume your conversation there.",
  cancelText: "Button Title",
  okText: "Delete",
};

export const singleDecisionModal = Template.bind({});
singleDecisionModal.args = {
  type: constants.SINGLE_TYPE,
  title: "Lorem ipsum done",
  content: "You can re-order the FAQ modules by dragging them",
  okText: "OK",
};
