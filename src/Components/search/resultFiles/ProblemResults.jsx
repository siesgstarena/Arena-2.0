import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import Pill from '../../common/Pill';

const tagsArray = tags => (tags.map((tag) => {
  if (tag.trim() !== '') {
    return (
      <Link key={tag} to={`/search?q=${tag}`} className="pointer dim mr2">
        <Pill content={tag} />
      </Link>
    );
  }
  return '';
}));

const ProblemResults = ({ problemArray }) => (
  <div className="mt3">
    <Headline6 className="bb b--purple purple" style={{ margin: '0em' }}>Problems</Headline6>
    {problemArray.map(
      (problem) => {
        const {
          code: problemCode, name: problemName, contestCode, tags: problemTags, points,
        } = problem;
        return (
          <div key={problemCode} className="mt3 flex flex-column ba b--transparent shadow-3 pa3 br3">
            <span className="">
              <Link
                to={`/contests/${contestCode}`}
                className="no-underline dim pointer mid-gray"
              >
                {contestCode}
              </Link>
              {' - '}
              <Link
                to={`/contests/${contestCode}/problem/${problemCode}`}
                className="no-underline dim pointer mid-gray"
              >
                <b>{problemName}</b>
                {` (${problemCode})`}
              </Link>
            </span>
            <div className="flex mt2">
              {tagsArray(problemTags)}
            </div>
            <div className="flex mt2 justify-between items-center">
              <span>
                <b>{points}</b>
                {' '}
                points
              </span>
            </div>
          </div>
        );
      },
    )

    }
  </div>
);

ProblemResults.propTypes = {
  problemArray: PropTypes.array.isRequired,
};
export default ProblemResults;
