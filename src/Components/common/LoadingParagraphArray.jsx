import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const LoadingParagraphArray = ({ count = 1, loadingParagraphClassname = 'ma3' }) => {
  const paragraphArray = [];
  for (let i = 0; i < count; i += 1) {
    paragraphArray.push((
      <div className={loadingParagraphClassname}>
        <Skeleton count={5} />
        <div className="w-90">
          <Skeleton />
        </div>
        <div className="w-80">
          <Skeleton />
        </div>
        <div className="w-70">
          <Skeleton />
        </div>
      </div>
    ));
  }
  return (
    <div>
      {paragraphArray}
    </div>
  );
};

LoadingParagraphArray.propTypes = {
  count: PropTypes.number.isRequired,
  loadingParagraphClassname: PropTypes.string.isRequired,
};

export default LoadingParagraphArray;
