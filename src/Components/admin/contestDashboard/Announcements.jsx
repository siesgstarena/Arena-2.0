import React from 'react';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';

const Announcements = ({ history, location }) => {
  const onEditClick = () => {
    history.push(`${location.pathname}/announcements`);
  };

  return (
    <div className="ba br4 b--black-20 pa2 mt4">
      <Headline6 className="mid-gray ma0 tc">
        Announcements
      </Headline6>
      <hr className="" />
      <div style={{ height: '80px', overflow: 'auto' }}>
        <Headline6 className="mid-gray ma0">
          AnnouncementsAnnouncements
          Announcements
          AnnouncementsAnnouncements
          AnnouncementsAnnouncementsAnnouncementsAnnouncements
        </Headline6>
        <Headline6 className="mid-gray ma0">
          Announcements
        </Headline6>
        <Headline6 className="mid-gray ma0">
          Announcements
        </Headline6>
        <Headline6 className="mid-gray ma0">
          Announcements
        </Headline6>
        <Headline6 className="mid-gray ma0">
          Announcements
        </Headline6>
      </div>
      <hr />
      <Button className="mt1" onClick={onEditClick}>
        Edit
      </Button>
    </div>
  );
};

Announcements.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Announcements;
