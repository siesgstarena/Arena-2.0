import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material/react-card';
import {
  Body1,
  Body2,
} from '@material/react-typography';
import 'tachyons';


const MessageCard = (props) => {
  const { message, name, color } = props;
  return (
    <div className="mb3 tc ba br2" style={{ borderColor: color }}>
      { /*
          mb3 -> MarginBottom3
          ba -> BorderAll
          br2 -> BorderRadius2
          tc -> TextCenter
          pa3 -> PaddingAll3
        */
      }
      <Card className="pa3">
        <Body1>
          {message}
        </Body1>
        <Body2 className="mid-gray">
          -By&nbsp;
          {name}
        </Body2>
      </Card>
    </div>
  );
};

MessageCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default MessageCard;
