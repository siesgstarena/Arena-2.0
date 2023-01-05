import React from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import { useQuery } from '@apollo/client';
import { GET_ALL_FEEDBACKS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import LoadingCardArray from '../../common/LoadingCardArray';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const FeedbackContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_ALL_FEEDBACKS);
  if (loading) {
    return (
      <div className="mw7 pa2 center">
        <Headline4 className="purple mt2 ml1 mb2">Feedbacks</Headline4>
        <Body2 className="mid-gray ma0 ml1 mb4">View and Send replies to feedbacks</Body2>
        <LoadingCardArray count={10} loadingCardClassName="ma2 mb4" />
      </div>
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.feedbacks) {
    const { feedbacks } = data;
    return (
      <div className="mw7 pa2 center">
        <Headline4 className="purple mt2 ml1 mb2">Feedbacks</Headline4>
        <Body2 className="mid-gray ma0 ml1 mb4">View and Send replies to feedbacks</Body2>
        {feedbacks.map((feedback) => {
          const { _id, name, email, message, replied, createdAt } = feedback;
          return (
            <div key={_id}>
              <FeedbackCard
                id={_id}
                user={name}
                email={email}
                message={message}
                isReplied={replied}
                createdAt={createdAt}
              />
            </div>
          );
        })}
      </div>
    );
  }
  if (isSessionExpired(data.feedbacks)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors not being handled by graphql
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default FeedbackContainer;
