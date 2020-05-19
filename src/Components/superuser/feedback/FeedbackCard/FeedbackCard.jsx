import React, { useState } from 'react';
import { Headline6, Body2 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import CustomBubble from '../../../common/CustomBubble/CustomBubble';
import { GET_ALL_FEEDBACKS } from '../../../../graphql/queries';
import { REPLY_TO_FEEDBACK } from '../../../../graphql/mutations';
import MessageCard from '../../../common/MessageCard/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';

const FeedbackCard = ({ user, email, message: feedback, isReplied, createdAt, id }) => {
  const [reply, setReply] = useState(''); // string state var to store reply
  const [isOpen, setOpen] = useState(false); //  bool to show reply space
  const client = useApolloClient();
  const toggleOpen = () => setOpen(!isOpen);
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const replyStatus = isReplied
    ? 'https://img.icons8.com/material-rounded/24/6200ee/double-tick.png'
    : 'https://img.icons8.com/ios-glyphs/24/6200ee/paper-plane.png';

  const addReply = async () => {
    setMessageType('loading');
    setMessage('Replying user, please wait. It may take some time');
    const { data, error } = await client.mutate({
      mutation: REPLY_TO_FEEDBACK,
      variables: {
        response: reply,
        id,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.replyToFeedback.success) {
          try {
            const { feedbacks } = cache.readQuery({
              query: GET_ALL_FEEDBACKS,
            });
            const feedbackIndex = feedbacks.findIndex((obj) => obj._id === id);
            feedbacks[feedbackIndex] = {
              ...feedbacks[feedbackIndex],
              replied: true,
            };
            cache.writeQuery({
              query: GET_ALL_FEEDBACKS,
              data: {
                feedbacks: {
                  ...feedbacks,
                },
              },
            });
          } catch {
            console.log('No entry found in the cache.');
          }
        }
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.replyToFeedback)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.replyToFeedback.success) {
      setOpen(false);
      setMessageType('success');
      setMessage('Replied successfully');
    } else {
      setMessageType('error');
      setMessage('An unexpected error has been encountered');
    }
  };

  return (
    <div className="b--moon-gray ba br3 mb3">
      <div className="flex justify-between items-center mb2">
        <div className="flex flex-column mt2">
          <Headline6 className="ma0 ml3">{user}</Headline6>
          <Body2 className="ma0 ml3 mid-gray">{email}</Body2>
          <Body2 className="ma0 ml3 mid-gray">{`${createdAt}`}</Body2>
        </div>
        <Button className="mr3 pa2" disabled={isReplied} onClick={toggleOpen}>
          <img alt="reply" src={replyStatus} />
        </Button>
      </div>
      <CustomBubble content={feedback} />
      <div className="ma2">
        <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      </div>
      {isOpen && (
        <div className="pa3 flex mr2">
          <img
            className="mr1"
            alt="user-icon"
            style={{ borderRadius: '50%' }}
            height="35vh"
            width="auto"
            src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
          />
          {
            // (isReplied) ? (
            //   <CustomBubble
            //     content={reply}
            //     bubbleType="chat"
            //     className="w-100"
            //   />
            // )
            //   : (
            // )
          }
          <div className="ml2 flex-column" style={{ width: '93%' }}>
            <TextField label="Reply" className="text-area-width-100" textarea required>
              <Input className="" value={reply} onChange={(e) => setReply(e.currentTarget.value)} />
            </TextField>
            <div className="fr">
              <Button onClick={() => setOpen(false)} className="mt2 mr3">
                cancel
              </Button>
              <Button onClick={addReply} className="mt2" raised>
                Reply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

FeedbackCard.propTypes = {
  user: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isReplied: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  // replyVal: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default FeedbackCard;
