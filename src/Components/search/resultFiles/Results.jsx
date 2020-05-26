import React from 'react';
import PropTypes from 'prop-types';
import UserResults from './UserResults';
import ProblemResults from './ProblemResults';
import PostResults from './PostResults';

const Results = ({ blogs, problems, users }) => (
  <div>
    {users.length !== 0 ? <UserResults userArray={users} /> : null}
    {problems.length !== 0 ? <ProblemResults problemArray={problems} /> : null}
    {blogs.length !== 0 ? <PostResults postArray={blogs} /> : null}
  </div>
);

Results.propTypes = {
  users: PropTypes.array.isRequired,
  blogs: PropTypes.array.isRequired,
  problems: PropTypes.array.isRequired,
};

export default Results;
