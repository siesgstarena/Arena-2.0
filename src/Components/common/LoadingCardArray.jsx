import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const LoadingCardArray = ({ count = 1, loadingCardClassName = 'ma2 mb3' }) => {
  const cardArray = [];
  for (let i = 0; i < count; i += 1) {
    cardArray.push(
      <div key={i} className={loadingCardClassName}>
        <Skeleton height={100} />
      </div>
    );
  }
  return <div>{cardArray}</div>;
};

LoadingCardArray.propTypes = {
  count: PropTypes.number,
  loadingCardClassName: PropTypes.string,
};

export default LoadingCardArray;
