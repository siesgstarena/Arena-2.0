import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select, { Option } from '@material/react-select';
import Button from '@material/react-button';
import Table from '../../common/Table/index';
import resetSubmissionTableData from './resetSubmissionTableData';

const ResetSubmissionStatus = ({ match }) => {
  const tableHeadings = ['#', 'When', 'Who', 'Verdict', 'Language', 'Action'];
  const { params } = match;
  const [problemStatus, setProblemStatus] = useState({});
  const problemStatusRef = useRef({});

  // The following effect is used to set the problemStatus variable
  // with problemStatusRef.current once all the entire table is mounted.
  useEffect(() => {
    setProblemStatus(problemStatusRef.current);
  }, []);

  const onUpdateClick = (data) => {
    console.log(`${data.id} => ${problemStatus[data.id]}`);
  };

  const tableData = resetSubmissionTableData.map((data) => {
    let verdictColor = '';
    if (data.verdict === 'Time Limit Exceeded') {
      verdictColor = '#ffc107';
    } else if (data.verdict === 'Wrong Answer' || data.verdict === 'Runtime Error') {
      verdictColor = '#dc3545';
    } else if (data.verdict === 'Accepted') {
      verdictColor = '#28a745';
    }
    // The following line updates the problemStatusRef object with
    // id of the data as key and accepted as value.
    problemStatusRef.current[data.id] = 'accepted';
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
            value={problemStatus[data.id]}
            onChange={evt => setProblemStatus((prevProblemStatus) => {
              // here we update the state problemStatus to reflect the changes
              const prevProblemStatusCopy = { ...prevProblemStatus };
              prevProblemStatusCopy[data.id] = evt.target.value;
              return { ...prevProblemStatusCopy };
            })
            }
          >
            <Option value="accepted">Accepted</Option>
            <Option value="wrongAnswer">Wrong Answer</Option>
          </Select>
          <Button className="mt1-m ml1-l mt1 mt0-l" outlined onClick={() => onUpdateClick(data)}>
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
