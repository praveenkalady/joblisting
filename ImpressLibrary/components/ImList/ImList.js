import React from "react";
import PropTypes from "prop-types";
import {List} from "antd";

const ImList = ({
  className,
  loading,
  itemLayout,
  dataSource,
  loadMore,
  actions,
}) => {
  return (
    <List
      itemLayout={itemLayout ? itemLayout : "horizontal"}
      dataSource={dataSource ? dataSource : []}
      className={className}
      loadMore={loadMore}
      loading={loading}
      renderItem = {(item) => (
        <List.Item
          actions = { actions ? [actions] : [] }
        >
          <List.Item.Meta
            title={<div className="list-title">{item}</div>}
          />
        </List.Item>
      )}
    />
  );
};

ImList.propTypes = {
  "className": PropTypes.string,
  "loading": PropTypes.any,
  "itemLayout": PropTypes.string,
  "dataSource": PropTypes.array,
  "loadMore": PropTypes.any,
  "actions": PropTypes.any,
};

export default ImList;
