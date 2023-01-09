import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardMedia } from '@material/react-card';
import { Body1 } from '@material/react-typography';
import { Grid } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import AnnouncementModal from './AnnouncementModal';
import './Style.css';

const AnnouncementsCard = ({ announcements, deleteAnnouncement, updateAnnouncement }) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Card className="card h-100">
      <div className="pl3 pr3">
        <p className="tc">{announcements.isCurrent ? 'Current' : 'Old'}</p>
      </div>
      <CardMedia square imageUrl={announcements.imageUrl} />
      <div className="pl3 pr3">
        <Body1>{announcements.title}</Body1>
      </div>
      {/* update Delete */}
      <CardActions className="p0">
        <Grid className="card-grid">
          {/* update Icon */}
          <Button
            outlined
            raised
            color="primary"
            onClick={() => setOpenModal(true)}
            icon={<i className="material-icons">edit</i>}
          />
          <Button
            outlined
            raised
            className="red card-delete"
            onClick={() => {
              deleteAnnouncement({
                variables: {
                  id: announcements._id,
                },
              });
            }}
            icon={<i className="material-icons">delete</i>}
          />
        </Grid>
      </CardActions>
      <AnnouncementModal
        announcements={announcements}
        updateAnnouncement={updateAnnouncement}
        key={announcements._id}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Card>
  );
};

AnnouncementsCard.propTypes = {
  announcements: PropTypes.object.isRequired,
  deleteAnnouncement: PropTypes.func.isRequired,
  updateAnnouncement: PropTypes.func.isRequired,
};
export default AnnouncementsCard;
