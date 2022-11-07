import React,{useState} from "react";
import ImComponents from "..";
import ImDropdown from "./ImDropdown";

export default {
  title: "ImpressComponents/ImDropdown",
  component: ImDropdown,
  args: {
    componentName: "ImDropdown",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return (
    <ImComponents {...args} />
  )
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  title:<div>Hover me</div>,
  keyval:"label",
  checkBoxval:[2,3],
  dataval:[{label:"apple",value:1},{label:"pineapple",value:2},{label:"custardapple",value:3}]
};
