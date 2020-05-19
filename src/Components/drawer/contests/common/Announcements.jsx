import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import { Body1 } from '@material/react-typography';
import Viewer from '../../../common/MarkdownEditor/Viewer';
import 'tachyons';

const Announcements = ({ announcement }) => {
  if (announcement) {
    // eslint-disable-next-line no-param-reassign
    announcement = announcement.trim();
  }
  return (
    <Card className="pa2 mt3">
      <Body1 className="mb3 tc">Announcements</Body1>
      <div className="mid-gray">
        {announcement ? (
          <Viewer value={announcement.trim()} />
        ) : (
          <div className="tc">No Annoucments Posted</div>
        )}
      </div>
    </Card>
  );
};

Announcements.propTypes = {
  announcement: PropTypes.string.isRequired,
};

export default Announcements;
