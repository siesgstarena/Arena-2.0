import React from 'react';
import { Headline6 } from '@material/react-typography';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import Viewer from '../../common/MarkdownEditor/Viewer';

const Announcements = ({ announcement }) => {
  const history = useHistory();
  const { contestId } = useParams();
  const onEditClick = () => {
    history.push(`/admin/${contestId}/announcements`);
  };

  return (
    <div className="ba br4 b--black-20 pa2 mt4">
      <Headline6 className="mid-gray ma0 tc">Announcements</Headline6>
      <hr className="" />
      <div style={{ height: '80px', overflow: 'auto' }}>
        <div className="mid-gray ma0">
          {announcement ? <Viewer value={announcement.trim()} /> : 'No Annoucments Posted'}
        </div>
      </div>
      <hr />
      <Button className="mt1" onClick={onEditClick}>
        Edit
      </Button>
    </div>
  );
};

Announcements.propTypes = {
  announcement: PropTypes.string,
};

export default React.memo(Announcements);
