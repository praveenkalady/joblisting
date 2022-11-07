import React,{useState} from 'react'
import ImComponents from '..';
import ImRadioGroup from './ImRadioGroup';

export default {
    title: "ImpressComponents/ImRadioGroup",
    component: ImRadioGroup,
    args: {
      componentName: "ImRadioGroup",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => {
  const [value, setvalue] = useState("apple")
  return <ImComponents {...args} value={value} onChange={(e)=>setvalue(e.target.value)}/>
}

export const RadioGroup = Template.bind({})
RadioGroup.args = {
  options: ["apple","pineapple","custardapple"]
}