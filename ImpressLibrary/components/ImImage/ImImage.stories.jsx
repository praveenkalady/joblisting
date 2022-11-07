import React from "react";
import ImComponents from "..";
import ImImage from "./ImImage";

export default {
  title: "ImpressComponents/ImImage",
  component: ImImage,
  args: {
    componentName: "ImImage",
  },
  argTypes: {
    componentName: {table: {disable: true}},
  },
};

const Template = (args) => {
  return (
    <ImComponents {...args} />
  );
};

export const Image = Template.bind({});
Image.args = {
  src: "",
  alt: "image",
};
