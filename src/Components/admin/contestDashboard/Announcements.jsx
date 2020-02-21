import React from 'react';
import { Headline6 } from '@material/react-typography';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from '@material/react-button';

const Announcements = () => {
  const history = useHistory();
  const location = useLocation();
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
          AnnouncementsAnnouncementsAnnouncements
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

export default Announcements;
