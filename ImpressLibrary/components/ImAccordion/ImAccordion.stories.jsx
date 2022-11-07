import React from "react";
import ImComponents from "..";
import ImAccordion from "./ImAccordion";

export default {
  title: "ImpressComponents/ImAccordion",
  component: ImAccordion,
  args: {
    componentName: "ImAccordion",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Accordion = Template.bind({});
Accordion.args = {
    border:true,
  data: [
    {
      header: <b>Header 1</b>,
      text: `Accordion content 1`,
    },
    {
      header: <b>Header 2</b>,
      text: `Accordion content 2`,
    },
  ],
};
