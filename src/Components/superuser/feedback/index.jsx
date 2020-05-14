import React, { useState } from 'react';
import feedbacks from './feedbacks';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import CustomSnackbar from '../../common/Snackbar/index';
import { Headline5 } from '@material/react-typography';

const FeedbackContainer = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  return (
    <div className="mw7 pa2 center">
      <Headline5 style={{margin: '0.2em'}}>Feedbacks</Headline5>
      {feedbacks.map(
        (feedback, index) => {
          const {
            name, email, message,
            isReplied, replyVal, responseTime, responseDate,
          } = feedback;
          return (
            <div key={index.toString()}>
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
