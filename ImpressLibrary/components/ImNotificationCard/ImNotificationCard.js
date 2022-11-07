import React from "react";
import {Card, Avatar} from "antd";
import PropTypes from "prop-types";

const {Meta} = Card;

const ImNotificationCard = ({title, description, avatar, className}) => {
  return (
    <div>
      <Card bordered={false} className={className}>
        <Meta
          avatar={
            <Avatar icon={avatar} style={{backgroundColor: "transparent"}} />
          }
          title={title}
          description={description}
        />
      </Card>
    </div>
  );
};

ImNotificationCard.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
  avatar: PropTypes.any,
  className: PropTypes.any,
};

export default ImNotificationCard;
