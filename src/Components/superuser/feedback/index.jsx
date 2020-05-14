import React, { useState } from 'react';
import feedbacks from './feedbacks';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import CustomSnackbar from '../../common/Snackbar/index';

const FeedbackContainer = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  return (
    <div className="mw7 pa2 center">
      {feedbacks.map(
        (feedback, index) => (
          <div key={index.toString()}>
            <FeedbackCard
              user={feedback.name}
              email={feedback.email}
              message={feedback.message}
              isReplied={feedback.isReplied}
              replyVal={feedback.replyVal}
              setSnackbarMessage={setSnackbarMessage}
            />
            <CustomSnackbar
              setSnackbarMessage={setSnackbarMessage}
              snackbarMessage={snackbarMessage}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default FeedbackContainer;
