import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../common/Table/index';
import data from './data';

const DataTable = () => {
  const tableHeadings = ['#', 'Who', '=', 'Time'];
  data[0].problem.forEach((prob) => {
    tableHeadings.push(prob.name);
  });
  // tableHeadings is an array to get the
  // Headings of Each Table
  // DataArray is a function that fetches
  // from Data.js and displays the details with links wherever necessary
  const DataArray = data.map(entry => (
    <tr key={entry.id} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        <Link
          className="no-underline dim blue pointer"
          to={`submission/${entry.id}`}
        >
          {entry.id}
        </Link>
      </td>
      <td className="tc pa3">
        <Link
          className="no-underline dim blue pointer"
          to={`/profile/${entry.who.id}`}
        >
          {entry.who.username}
        </Link>
      </td>
      <td className="tc pa3">{entry.score}</td>
      <td className="tc pa3">{entry.time}</td>
      {entry.problem.map((prob,j) => (
        <td key={j} className="tc pa3">{prob.score}</td>
      ))}
    </tr>
  ));
  // return part of DataTable, Table made in common files,
  // is used here and sent to index,jsx for export

  return (
    <Table
      tableHeadings={tableHeadings}
      tableData={DataArray}
      tableHeadingClassName="tc"
    />
  );
};
export default DataTable;
