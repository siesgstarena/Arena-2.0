import React from 'react';
import Table from '../../common/Table/index';

const PlagiarismTable = () => {
  const tableHeadings = ['Problem Name', 'Plagiarizers', 'Solution IDs'];
  const tableData = [
    (
      <tr key={1}>
        <td>
          1
        </td>
        <td>
          2
        </td>
        <td>
          3
        </td>
      </tr>
    ),
  ];
  return (
    <div className="">
      <Table tableHeadings={tableHeadings} tableData={tableData} />
    </div>
  );
};

export default PlagiarismTable;
