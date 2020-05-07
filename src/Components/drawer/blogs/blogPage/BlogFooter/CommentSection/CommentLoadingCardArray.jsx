import React from 'react';
import PropTypes from 'prop-types';
import CommentLoadingCard from './CommentLoadingCard';

const CommentLoadingCardArray = ({ count = 1 }) => {
  const cardArray = [];
  for (let i = 0; i < count; i += 1) {
    cardArray.push((
      <CommentLoadingCard />
    ));
  }
  return (
    <div>
      {cardArray}
    </div>
  );
};

CommentLoadingCardArray.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CommentLoadingCardArray;
