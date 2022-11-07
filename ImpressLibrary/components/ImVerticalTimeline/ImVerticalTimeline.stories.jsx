import React from "react";
import ImComponents from "..";
import ImVerticalTimeline from "./ImVerticalTimeline";


export default {
  title: "ImpressComponents/ImVerticalTimeline",
  component: ImVerticalTimeline,
  args: {
    componentName: "ImVerticalTimeline",
    data: [
      {
        label: 'Step 1',
        child: 'Wake up'
      },
      {
        label: 'Step 2',
        child: 'Code'
      },
      {
        label: 'Step 3',
        child: 'Eat'
      },
      {
        label: 'Step 4',
        child: 'Sleep'
      },

    ]
  },
  argTypes: {
    componentName: { table: { disable: true } },
    mode: {
      options: ["left", "alternate", "right"],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const VerticalTimelineLeft = Template.bind({});
VerticalTimelineLeft.args = {
  mode: 'left'
};
