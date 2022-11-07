import React from "react";
import ImComponents from "..";
import { action } from "@storybook/addon-actions";
import ImButton from "./ImButton";
import ImIcons from "../../icons";


export default {
  title: "ImpressComponents/ImButton",
  component: ImButton,
  args: {
    type: "primary",
    componentName: "ImButton",
    child: "Click me!",
    onClick: action("Clicked"),
    onBlur: action("focusOut"),
  },
  argTypes: {
    componentName: { table: { disable: true } },
    type: {
      options: ["primary", "default", "dashed", "text", "link"],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const BaseButton = Template.bind({});
BaseButton.args = {
  danger: false,
  disabled: false,
  loading: false,
};


export const DangerButton = Template.bind({});
DangerButton.args = {
  danger: true,
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
};
export const LoadingButton = Template.bind({});
LoadingButton.args = {
  loading: true,
};
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  icon: <ImIcons name="deleteIcon"/>,
  child:<span>&nbsp; Delete</span>,
  type:"default"
};
