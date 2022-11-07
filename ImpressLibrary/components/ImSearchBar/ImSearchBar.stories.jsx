import React from "react";
import ImComponents from "..";
import ImSearchBar from "./ImSearchBar";

export default {
  title: "ImpressComponents/ImSearchBar",
  component: ImSearchBar,
  args: {
    componentName: "ImSearchBar",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  return <ImComponents {...args} />;
};

export const SearchBar = Template.bind({});
SearchBar.args = {
  placeholder: 'Search query'
};
