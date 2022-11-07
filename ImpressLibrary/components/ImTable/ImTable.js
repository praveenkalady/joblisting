import React from "react";
import PropTypes from "prop-types";
import {Table} from "antd";

const ImTable = ({
  dataSource,
  columns,
  rowSelection,
  tableLayout,
  pagination,
  onRow,
  loading,
  scroll,
  showHeader,
  onChange,
  expandedRowRender,
  expandRowByClick,
  rowKey,
  onExpandedRowsChange,
  expandedRowKeys,
  onExpand,
  expandIcon,
  showSorterTooltip,
  summary,
}) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowSelection={rowSelection}
      tableLayout={tableLayout}
      pagination={pagination}
      onRow={onRow}
      loading={loading}
      scroll={scroll}
      showHeader={showHeader}
      onChange={onChange}
      expandIcon={expandIcon}
      expandedRowRender={expandedRowRender}
      expandRowByClick={expandRowByClick}
      rowKey={rowKey}
      onExpandedRowsChange={onExpandedRowsChange}
      expandedRowKeys={expandedRowKeys}
      onExpand={onExpand}
      showSorterTooltip={showSorterTooltip}
      summary={summary}
    />
  );
};

export default ImTable;

ImTable.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  rowSelection: PropTypes.any,
  tableLayout: PropTypes.string,
  pagination: PropTypes.any,
  onRow: PropTypes.any,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  scroll: PropTypes.object,
  showHeader: PropTypes.bool,
  expandRowByClick: PropTypes.bool,
  onChange: PropTypes.func,
  expandedRowRender: PropTypes.func,
  rowKey: PropTypes.func,
  onExpandedRowsChange: PropTypes.func,
  expandIcon: PropTypes.func,
  onExpand: PropTypes.func,
  expandedRowKeys: PropTypes.string,
  showSorterTooltip: PropTypes.bool,
  summary: PropTypes.func,
};
