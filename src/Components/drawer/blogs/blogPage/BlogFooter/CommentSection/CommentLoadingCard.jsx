import React from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingParagraph from '../../../../../common/LoadingParagaph';

const CommentLoadingCard = () => (
  <div className="flex ma3">
    <Skeleton circle height={100} width={100} />
    <div className="ml4 w-90">
      <LoadingParagraph />
    </div>
  </div>
);

export default CommentLoadingCard;
