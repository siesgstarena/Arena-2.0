import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import {
  Body1,
  Body2,
} from '@material/react-typography';
import 'tachyons';

const Announcements = ({ announcement }) => {
  function createMarkup() { return { __html: announcement }; }
  return (
    <Card className="pa2 pb0 mt3">
      <Body1 className="mb0 tc">
        Announcements
      </Body1>
      <Body2 className="mid-gray" style={{ whiteSpace: 'pre-line' }}>
        <div className="no-underline" dangerouslySetInnerHTML={createMarkup()} />
      </Body2>
    </Card>
  );
};

Announcements.propTypes = {
  announcement: PropTypes.string.isRequired,
};

export default Announcements;
