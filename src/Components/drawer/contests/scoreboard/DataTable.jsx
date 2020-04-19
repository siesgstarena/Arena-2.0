import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userColor } from '../../../../commonFunctions';
import Table from '../../../common/Table/index';

const DataTable = ({ problems, scoreboardDetails }) => {
  const tableHeadings = ['#', 'Who', '=', 'Time'];

  // pushing the problem codes
  problems.forEach((prob) => {
    tableHeadings.push(
      <Link to={`problem/${prob.code}`} style={{ color: 'purple' }} className="no-underline dim">
        {prob.code}
      </Link>
      ,
    );
  });

  // Filling dashes if the user has submitted a certain problem
  const dummyValueFiller = (submissions) => {
    const dummyValueArray = [];
    if (submissions.length < problems.length) {
      for (let i = submissions.length; i < problems.length; i += 1) {
        dummyValueArray.push(<td key={i} className="tc pa3">-</td>);
      }
    }
    return dummyValueArray;
  };
  // tableHeadings is an array to get the
  // Headings of Each Table
  // DataArray is a function that fetches
  // from Data.js and displays the details with links wherever necessary
  const DataArray = scoreboardDetails.map((scoreboardDetail, index) => (
    <tr key={scoreboardDetail.userId} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        {index + 1}
      </td>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer"
          style={{ color: userColor(scoreboardDetail.user.ratings) }}
          to={`/profile/${scoreboardDetail.userId}`}
        >
          {scoreboardDetail.user.username}
        </Link>
      </td>
      <td className="tc pa3">{scoreboardDetail.total}</td>
      <td className="tc pa3">{scoreboardDetail.totalTime}</td>
      {
        scoreboardDetail.submissions.map(submission => (
          <td key={submission.code} className="tc pa3">
            <span className="green">{submission.solved}</span>
            <span className="red">
              (
              -
              {submission.attempts}
              )
            </span>
          </td>
        ))
      }
      {
        dummyValueFiller(scoreboardDetail.submissions)
      }

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

DataTable.propTypes = {
  problems: PropTypes.array.isRequired,
  scoreboardDetails: PropTypes.array.isRequired,
};

export default DataTable;
