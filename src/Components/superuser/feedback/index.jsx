import React, { useState } from 'react';
import { Headline5, Body2 } from '@material/react-typography';
import feedbacks from './feedbacks';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import CustomSnackbar from '../../common/Snackbar/index';

const FeedbackContainer = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  return (
    <div className="mw7 pa2 center">
      <Headline5 className="purple ma0 ml1 mb2">Feedbacks</Headline5>
      <Body2 className="purple ma0 ml1 mb2">View and Send replies to feedbacks</Body2>
      {feedbacks.map(
        (feedback) => {
          const {
            id, name, email, message,
            isReplied, replyVal, responseTime, responseDate,
          } = feedback;
          return (
            <div key={id}>
              <FeedbackCard
                user={name}
                email={email}
                message={message}
                isReplied={isReplied}
                replyVal={replyVal}
                responseDate={responseDate}
                responseTime={responseTime}
                setSnackbarMessage={setSnackbarMessage}
              />
              <CustomSnackbar
                setSnackbarMessage={setSnackbarMessage}
                snackbarMessage={snackbarMessage}
              />
            </div>
          );
        },
      )}
    </div>
  );
};

export default FeedbackContainer;
