import React from "react";
import ImComponents from "..";
import ImAutocomplete from "./ImAutocomplete";

export default {
  title: "ImpressComponents/ImAutocomplete",
  component: ImAutocomplete,
  args: {
    componentName: "ImAutocomplete",
  },
  argTypes: {
    componentName: {table: {disable: true}},
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  placeholder: "Input here...",
  options: [{value: "test1"}, {value: "test2"}, {value: "test3"}],
};
