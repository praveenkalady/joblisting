import React,{useState} from "react";
import ImComponents from "..";
import ImDrawer from "./ImDrawer";

export default {
  title: "ImpressComponents/ImDrawer",
  component: ImDrawer,
  args: {
    componentName: "ImDrawer",
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

export const Drawer = Template.bind({});
Drawer.args = {
  children:"Hello world",
  visible:true,
  closable:false
};
