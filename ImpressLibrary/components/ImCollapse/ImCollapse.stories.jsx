import React,{useState} from "react";
import ImComponents from "..";
import ImCollapse from "./ImCollapse";

export default {
  title: "ImpressComponents/ImCollapse",
  component: ImCollapse,
  args: {
    componentName: "ImCollapse",
  },
  argTypes: {
    componentName: { table: { disable: true } },
  },
};

const Template = (args) => {
  const [defaultActive, setDefaultActive] = useState();
  return <ImComponents {...args} activeKey={defaultActive} onChange={(key)=>setDefaultActive(key)}/>;
};

export const Collapse = Template.bind({});
Collapse.args = {
  child:`panel content`,
  title:<b>Collpase header</b>
};
