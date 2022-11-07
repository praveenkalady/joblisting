import React from 'react'
import ImComponents from '..';
import ImIcons from '../../icons';
import ImNotificationCard from './ImNotificationCard';

export default {
    title: "ImpressComponents/ImNotificationCard",
    component: ImNotificationCard,
    args: {
      componentName: "ImNotificationCard",
    },
    argTypes: {
      componentName: { table: { disable: true } },
    },
  };

const Template = (args) => <ImComponents {...args} />

export const NotificationCard = Template.bind({})
NotificationCard.args = {
  title:`Notification title`,
  description:`Notification description`,
  icon:<ImIcons name="bellIcon" />
}