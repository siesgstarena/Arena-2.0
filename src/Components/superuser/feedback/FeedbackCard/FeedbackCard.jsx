import React, { useState } from 'react';
import { Headline6, Body2 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import './FeedbackCard.css';

const FeedbackCard = ({
  user, email, message, isReplied, replyVal, setSnackbarMessage,
}) => {
  const [isReply, setReplyStatus] = useState(isReplied); // bool to know status of reply
  const [reply, setReply] = useState(replyVal); // string state var to store reply
  const [isOpen, setOpen] = useState(false); //  bool to show reply space

  const toggleOpen = () => setOpen(!isOpen);
  const disableReply = !!(isReply);
  const replyStatus = (isReply) ? 'https://img.icons8.com/material-rounded/24/6200ee/double-tick.png' : 'https://img.icons8.com/ios-glyphs/24/6200ee/paper-plane.png';
  const addReply = () => {
    setReplyStatus(true);
    setSnackbarMessage('Replied Successfully');
  };

  return (
    <div className="b--light-gray ba br3 mb3 shadow-4">
      <div className="flex justify-between items-center">
        <div className="flex-column mt2">
          <Headline6 style={{ margin: '0em 0.9em', lineHeight: '1.5rem' }}>{user}</Headline6>
          <small style={{ margin: '0em 1.3em' }} className="pointer">{email}</small>
        </div>
        <Button
          className="mr3 pa2"
          disabled={disableReply}
          onClick={toggleOpen}
        >
          <img alt="reply" src={replyStatus} />
        </Button>
      </div>
      <div className="w-auto pointer" style={{ margin: '0.5em 1em' }}>
        <Body2 className="ba b--transparent br3 pa2" style={{ margin: '0em', backgroundColor: '#EEEEEE' }}>{message}</Body2>
      </div>
      {
      (isOpen || isReplied) && (
      <div className="pa3 flex tr">
        <img
          className="mr3"
          alt="user-icon"
          style={{ borderRadius: '50%' }}
          height="35vh"
          width="auto"
          src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
        />
        {
            (isReply || isReplied) ? (
              <div className="tl talk-bubble tri-right round border right-top w-100">
                <Body2 className="" style={{ margin: '0em', backgroundColor: '#EEEEEE' }}>{reply}</Body2>
              </div>
            )
              : (
                <div className="w-100 flex-column">
                  <TextField
                    label="Reply"
                    className="text-area-width-100"
                    textarea
                    required
                  >
                    <Input
                      className=""
                      value={reply}
                      onChange={e => setReply(e.currentTarget.value)}
                    />
                  </TextField>
                  <Button
                    onClick={addReply}
                    className="mt2"
                    raised
                  >
                    Reply
                  </Button>
                </div>
              )
          }
      </div>
      )
      }
    </div>
  );
};

FeedbackCard.propTypes = {
  user: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isReplied: PropTypes.bool.isRequired,
  replyVal: PropTypes.string.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};
export default FeedbackCard;
