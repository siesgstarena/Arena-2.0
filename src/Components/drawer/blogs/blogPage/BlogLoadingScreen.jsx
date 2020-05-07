import React from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingParagraph from '../../../common/LoadingParagaph';
import CommentLoadingScreen from './BlogFooter/CommentSection/CommentLoadingScreen';

const BlogLoadingScreen = () => (
  <div className="mw8 center pa2">
    <div className="mw6 ma2 center">
      <Skeleton count={2} />
    </div>
    <div className="flex mw5 ma2 center">
      <Skeleton circle height={100} width={100} />
      <div className="ml4 w-90">
        <LoadingParagraph />
      </div>
    </div>
    <div className="mw5 center ma4">
      <Skeleton count={2} />
    </div>
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <CommentLoadingScreen />
  </div>
);

export default BlogLoadingScreen;
