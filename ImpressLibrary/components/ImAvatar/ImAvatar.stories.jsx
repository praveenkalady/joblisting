import React from "react";
import ImComponents from "..";
import ImAvatar from "./ImAvatar";

export default {
  title: "ImpressComponents/ImAvatar",
  component: ImAvatar,
  args: {
    componentName: "ImAvatar",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Avatar = Template.bind({});
Avatar.args = {
  src:`https://joeschmoe.io/api/v1/random`
};
