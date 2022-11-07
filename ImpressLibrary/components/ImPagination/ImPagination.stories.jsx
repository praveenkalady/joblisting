import React from 'react'
import ImComponents from '..';
import ImPagination from './ImPagination';

export default {
    title: "ImpressComponents/ImPagination",
    component: ImPagination,
    args: {
      componentName: "ImPagination",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => <ImComponents {...args} />

export const Pagination = Template.bind({})
Pagination.args = {
  total:10,
  pageSize:1,
  current:2
}