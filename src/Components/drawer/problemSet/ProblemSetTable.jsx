import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material/react-button';
import Table from '../../common/Table/index';
import { problemBackgroundColor } from '../../../commonFunctions';

const ProblemsSetTable = ({ problemsList }) => {
  // Trimming tags because of database inconsistency
  const trimmedTagsProblemsList = problemsList.map((problem) => {
    const trimmedTagsArray = problem.problemDetails.tags.map((tag) => tag.trim());
    // eslint-disable-next-line no-param-reassign
    problem.problemDetails.tags = trimmedTagsArray;
    return problem;
  });
  const [problems, setProblems] = useState(trimmedTagsProblemsList);
  const allProblems = useRef(trimmedTagsProblemsList);
  const [problemsArray, setProblemsArray] = useState([]);
  const [displayClearFilters, setDisplayClearFilters] = useState(false);
  const tableHeadings = ['#', 'Problem Name', 'Tags', 'Points'];

  // The following function is triggered when the user clicks on clear filters button
  const clearFilters = () => {
    setDisplayClearFilters(false);
    setProblems(allProblems.current);
  };

  // when the tag clicked, we display the clear filters button
  // we also update the problems state with only those problems which have the tag
  // present in them
  const onTagClick = (tag) => {
    // console.log(tag);
    setDisplayClearFilters(true);
    setProblems(allProblems.current.filter((problem) => problem.problemDetails.tags.includes(tag)));
  };

  // createProblemsArray maps all the problems to jsx in the form of table rows
  const createProblemsArray = useCallback((problemsToMap) => {
    setProblemsArray(
      problemsToMap.map((problem) => {
        const tagsArray = problem.problemDetails.tags.map((tag, index) => {
          if (index !== problem.problemDetails.tags.length - 1) {
            return (
              <span
                role="presentation"
                className="i blue pointer dim"
                onClick={() => onTagClick(tag)}
                key={tag}
              >
                {tag}
                ,&nbsp;
              </span>
            );
          }
          return (
            <span
              role="presentation"
              className="i blue pointer dim"
              onClick={() => onTagClick(tag)}
              key={tag}
            >
              {tag}
            </span>
          );
        });

        return (
          <tr
            style={{ backgroundColor: problemBackgroundColor(problem.solved, problem.attempts) }}
            key={problem.problemDetails._id}
          >
            <td>
              <Link
                className="no-underline blue pointer dim"
                to={`contests/${problem.problemDetails.contest.code}/problem/${problem.problemDetails.code}`}
              >
                {problem.problemDetails.code}
              </Link>
            </td>
            <td>
              <Link
                className="no-underline blue pointer dim"
                to={`contests/${problem.problemDetails.contest.code}/problem/${problem.problemDetails.code}`}
              >
                {problem.problemDetails.name}
              </Link>
            </td>
            <td>{tagsArray}</td>
            <td>{problem.problemDetails.points}</td>
          </tr>
        );
      })
    );
  }, []);

  // The following effecet is triggered when the problems state is changed
  useEffect(() => {
    createProblemsArray(problems);
  }, [problems, createProblemsArray]);

  return (
    <div>
      {displayClearFilters ? (
        <Button className="mb2" onClick={clearFilters}>
          Clear Filters
        </Button>
      ) : null}
      <Table tableHeadings={tableHeadings} tableData={problemsArray} />
    </div>
  );
};

ProblemsSetTable.propTypes = {
  problemsList: PropTypes.array.isRequired,
};

export default ProblemsSetTable;
