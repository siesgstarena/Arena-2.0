import React, { useRef, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Button } from '@material/react-button';
import DisplayComment from './DisplayComment';
import { GET_COMMENTS_OF_BLOG } from '../../../../../../graphql/queries';
import SomethingWentWrong from '../../../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../../../customHooks/useSessionExpired';
import useSentry from '../../../../../../customHooks/useSentry';
import CommentLoadingScreen from './CommentLoadingScreen';


const CommentsSectionContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const limit = 3;
  const count = useRef(0);
  const [hideButton, setHideButton] = useState(false);
  const { blogId } = useParams();
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery(GET_COMMENTS_OF_BLOG, {
    variables: { id: blogId, limit },
    notifyOnNetworkStatusChange: true,
  });
  const { logError } = useSentry();
  if (networkStatus === 3) {
    const { comments } = data.comments;
    return (
      <div>
        <DisplayComment comments={comments} />
        <CommentLoadingScreen />
      </div>
    );
  }
  if (loading) return <CommentLoadingScreen />;
  if (error) {
    logError('comments query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.comments) {
    const { comments, totalNumberOfComments } = data.comments;
    // count represents the number of entries we have to skip
    count.current = comments.length;

    return (
      <div className="mw8 center">
        <DisplayComment comments={comments} />
        {
          hideButton || comments.length === totalNumberOfComments
            ? null
            : (
              <div className="flex justify-center">
                <Button
                  raised
                  onClick={() => (fetchMore({
                    variables: {
                      skip: count.current,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (fetchMoreResult.comments.comments.length === 0) {
                        setHideButton(true);
                        return prev;
                      }
                      return ({
                        ...prev,
                        comments: {
                          ...prev.comments,
                          comments: [...prev.comments.comments,
                            ...fetchMoreResult.comments.comments],
                        },
                      });
                    },
                  })
                  )
                  }
                >
                  LOAD MORE COMMENTS
                </Button>
              </div>
            )
        }
      </div>
    );
  }
  if (isSessionExpired(data.comments)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }

  // Random errors not handled by graphql
  logError('comments query', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default CommentsSectionContainer;
