import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const LoadingInfoArray = ({ count = 1, loadingInfoClassName = 'ma3' }) => {
  const infoArray = [];
  for (let i = 0; i < count; i += 1) {
    infoArray.push((
      <div key={i} className={loadingInfoClassName}>
        <div className="mb2 w-20"><Skeleton /></div>
        <div className="mt3 w-20 mb0"><Skeleton /></div>
        <div className="w-50"><Skeleton /></div>
        <div className="mt3 w-20 mb0"><Skeleton /></div>
        <div className="w-50"><Skeleton /></div>
        <div className="mt3 w-20 mb0"><Skeleton /></div>
        <div className="w-50"><Skeleton /></div>
        <div className="mt3 w-10"><Skeleton /></div>
      </div>
    ));
  }
  return (
    <div>
      {infoArray}
    </div>
  );
};

LoadingInfoArray.propTypes = {
  count: PropTypes.number.isRequired,
  loadingInfoClassName: PropTypes.string.isRequired,
};

export default LoadingInfoArray;
