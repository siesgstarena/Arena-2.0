import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select, { Option } from '@material/react-select';
import Button from '@material/react-button';
import Table from '../../common/Table/index';
import resetSubmissionTableData from './resetSubmissionTableData';

const ResetSubmissionStatus = ({ match }) => {
  const tableHeadings = ['#', 'When', 'Who', 'Verdict', 'Language', 'Action'];
  const { params } = match;

  const onUpdateClick = (data, problemStatus) => {
    console.log(`${data.id} => ${problemStatus}`);
  };

  const tableData = resetSubmissionTableData.map((data) => {
    const [problemStatus, setProblemStatus] = useState('accepted');
    let verdictColor = '';
    if (data.verdict === 'Time Limit Exceeded') {
      verdictColor = '#ffc107';
    } else if (data.verdict === 'Wrong Answer' || data.verdict === 'Runtime Error') {
      verdictColor = '#dc3545';
    } else if (data.verdict === 'Accepted') {
      verdictColor = '#28a745';
    }

    return (
      <tr className="tc" key={data.id}>
        <td className="pa3 tc">
          <Link className="no-underline blue" to={`/contest/${params.contestId}/submission/${data.submissionId}`}>
            {data.id}
          </Link>
        </td>
        <td>{data.when}</td>
        <td className="pa3 tc">
          <Link className="no-underline blue" to={`/profile/${data.profileId}`}>
            {data.who}
          </Link>
        </td>
        <td
          style={{ color: `${verdictColor}` }}
          className="pa3 tc"
        >
          {data.verdict}
        </td>
        <td className="pa3 tc">{data.language}</td>
        <td className="pa3 tc">
          <Select
            className=""
            label="Status"
            value={problemStatus}
            onChange={evt => setProblemStatus(evt.target.value)}
          >
            <Option value="accepted">Accepted</Option>
            <Option value="wrongAnswer">Wrong Answer</Option>
          </Select>
          <Button className="mt2-m ml2-l mt2 mt0-l" outlined onClick={() => onUpdateClick(data, problemStatus)}>
            Update
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <div className="">
      <Table tableHeadings={tableHeadings} tableData={tableData} tableHeadingClassName="tc" />
    </div>
  );
};

ResetSubmissionStatus.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ResetSubmissionStatus;
