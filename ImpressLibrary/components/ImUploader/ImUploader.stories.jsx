import React from "react";
import ImComponents from "..";
import ImUploader from "./ImUploader";


export default {
  title: "ImpressComponents/ImUploader",
  component: ImUploader,
  args: {
    componentName: "ImUploader",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Uploader = Template.bind({});
Uploader.args = {
  child: 'Please upload here'
};
