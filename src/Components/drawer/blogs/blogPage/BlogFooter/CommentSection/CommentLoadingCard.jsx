import React from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingParagraphArray from '../../../../../common/LoadingParagraphArray';

const CommentLoadingCard = () => (
  <div className="flex ma3">
    <Skeleton circle height={100} width={100} />
    <div className="ml4 w-90">
      <LoadingParagraphArray />
    </div>
  </div>
);

export default CommentLoadingCard;
