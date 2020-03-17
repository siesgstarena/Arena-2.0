import React from 'react';
import { Headline6, Body2 } from '@material/react-typography';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import ReactHtmlParser from 'react-html-parser';

const Announcements = ({ announcement }) => {
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
        <Body2 className="mid-gray ma0">
          {announcement.trim() ? ReactHtmlParser(announcement) : 'No Annoucments Posted'}
        </Body2>
      </div>
      <hr />
      <Button className="mt1" onClick={onEditClick}>
        Edit
      </Button>
    </div>
  );
};

Announcements.propTypes = {
  announcement: PropTypes.string.isRequired,
};

export default Announcements;
