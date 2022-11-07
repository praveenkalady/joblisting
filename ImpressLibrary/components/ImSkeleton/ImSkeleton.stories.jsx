import React from "react";
import ImComponents from "..";
import ImSkeleton from "./ImSkeleton";

export default {
  title: "ImpressComponents/ImSkeleton",
  component: ImSkeleton,
  args: {
    componentName: "ImSkeleton",
  },
  argTypes: {
    componentName: {table: {disable: true}},
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Skeleton = Template.bind({});
Skeleton.args = {};
