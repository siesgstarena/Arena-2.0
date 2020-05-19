import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Body1 } from '@material/react-typography';
import Button from '@material/react-button';

const NoBlogs = ({ showCreateButton }) => {
  const history = useHistory();
  return (
    <div className="tc">
      <img
        src="https://res.cloudinary.com/ashokc/image/upload/f_auto,q_auto/v1588485470/arena/assets/undraw_no_data_qbuo_jn6cn7.svg"
        alt="no-blogs"
        style={{ width: '16em', height: 'auto' }}
      />
      <Body1 className="mid-gray">There are no blog posts</Body1>
      {showCreateButton ? (
        <Button onClick={() => history.push('/blogs/create')} raised>
          Create Blog
        </Button>
      ) : null}
    </div>
  );
};

NoBlogs.propTypes = {
  showCreateButton: PropTypes.bool,
};

export default NoBlogs;
