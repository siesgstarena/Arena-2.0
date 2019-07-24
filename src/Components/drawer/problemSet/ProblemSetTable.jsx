import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import problemsList from './problemsList';

const ProblemsSetTable = ({ setDisplayClearFilters }) => {
  const [problems, setProblems] = useState(problemsList);
  const allProblems = useRef(problemsList);
  const [problemsArray, setProblemsArray] = useState([]);

  // when the tag clicked, we display the clear filters button
  // we also update the problems state with only those problems which have the tag
  // present in them
  const onTagClick = (tag) => {
    setDisplayClearFilters(true);
    setProblems(allProblems.current.filter(problem => problem.tags.includes(tag)));
  };

  // createProblemsArray maps all the problems to jsx in the form of table rows
  const createProblemsArray = (problemsToMap) => {
    setProblemsArray(problemsToMap.map((problem) => {
      const tagsArray = problem.tags.map((tag, index) => {
        if (index !== problem.tags.length - 1) {
          return (
            <Link className="no-underline" onClick={() => onTagClick(tag)} key={tag} to={`problem-set?tags=${tag}`}>
              <span className="i blue pointer dim">
                {tag}
                ,&nbsp;
              </span>
            </Link>
          );
        }
        return (
          <Link className="no-underline" onClick={() => onTagClick(tag)} key={tag} to={`problem-set?tags=${tag}`}>
            <span className="i blue pointer dim">
              {tag}
            </span>
          </Link>
        );
      });
      let backgroundColor = '';
      if (problem.submissionStatus === 'accepted') {
        backgroundColor = '#02b32826';
      } else if (problem.submissionStatus === 'wrong') {
        backgroundColor = '#d60b0b1c';
      } else {
        backgroundColor = '#ffffff';
      }

      return (
        <tr style={{ backgroundColor: `${backgroundColor}` }} key={problem.problemId}>
          <td>
            <Link className="no-underline blue pointer dim" to={`contests/${problem.contestId}/problem/${problem.problemId}`}>
              {problem.problemId}
            </Link>
          </td>
          <td>
            <Link className="no-underline blue pointer dim" to={`contests/${problem.contestId}/problem/${problem.problemId}`}>
              {problem.problemName}
            </Link>
          </td>
          <td>
            {tagsArray}
          </td>
          <td>
            {problem.points}
          </td>
        </tr>
      );
    }));
  };

  // The following effect is triggered when the component in mounted
  useEffect(() => {
    createProblemsArray(problems);
  }, []);

  // The following effecet is triggered when the problems state is changed
  useEffect(() => {
    createProblemsArray(problems);
  }, [problems]);

  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            <th>#</th>
            <th>Problem Name</th>
            <th>Tags</th>
            <th>Points</th>
          </tr>
          {problemsArray}
        </tbody>
      </table>
    </div>
  );
};

ProblemsSetTable.propTypes = {
  setDisplayClearFilters: PropTypes.func.isRequired,
};

export default ProblemsSetTable;
