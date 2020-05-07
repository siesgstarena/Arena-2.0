import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingParagraph = () => (
  <div className="ma3">
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
);

export default LoadingParagraph;
