import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Table from '../Table/index';

const LoadingTable = ({ tableHeadings, count = 50, tableHeadingClassName = 'tc' }) => {
  const tableDataArray = tableHeadings.map((heading) => (
    <td key={heading}>
      <Skeleton count={count} />
    </td>
  ));
  const data = <tr>{tableDataArray}</tr>;
  return (
    <Table
      tableHeadings={tableHeadings}
      tableData={data}
      tableHeadingClassName={tableHeadingClassName}
    />
  );
};

LoadingTable.propTypes = {
  tableHeadings: PropTypes.array.isRequired,
  count: PropTypes.number,
  tableHeadingClassName: PropTypes.string,
};

export default LoadingTable;
