import React from 'react';
import { Headline5 } from '@material/react-typography';
import Skeleton from 'react-loading-skeleton';

const AllBlogPageLoadingScreen = () => (
  (
    <div className="mw7 ma3 pa2 center">
      <Headline5 className="purple ma0 ml1 mb4">SIESGSTarena&apos;s Blogs</Headline5>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
      <div className="ma2 mb3">
        <Skeleton height={100} />
      </div>
    </div>
  )
);

export default AllBlogPageLoadingScreen;
