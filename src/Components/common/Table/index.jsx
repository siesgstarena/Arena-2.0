import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Table = ({ tableData, tableHeadings, tableHeadingClassName }) => {
  const tableHeadingsArray = tableHeadings.map(tableHeading => (
    <th key={tableHeading} className={tableHeadingClassName}>
      {tableHeading}
    </th>
  ));

  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            {tableHeadingsArray}
          </tr>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableHeadings: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  tableHeadingClassName: PropTypes.string,
};

Table.defaultProps = {
  tableHeadingClassName: '',
};

export default Table;
