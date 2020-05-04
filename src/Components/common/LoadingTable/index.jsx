import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Table from '../Table/index';

const LoadingTable = ({ tableHeadings }) => {
  const tableDataArray = tableHeadings.map(
    heading => <td key={heading}><Skeleton count={50} /></td>,
  );
  const data = (
    <tr>
      {tableDataArray}
    </tr>
  );
  return (
    <Table tableHeadings={tableHeadings} tableData={data} tableHeadingClassName="tc" />
  );
};

LoadingTable.propTypes = {
  tableHeadings: PropTypes.array.isRequired,
};

export default LoadingTable;
