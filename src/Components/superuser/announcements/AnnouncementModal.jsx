import { Checkbox, FormControlLabel, FormGroup, Modal, Paper } from '@material-ui/core';
import { Button } from '@material/react-button';
import { Cell, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4 } from '@material/react-typography';
import React from 'react';
import PropTypes from 'prop-types';

const AnnouncementModal = ({ announcements, updateAnnouncement, openModal, setOpenModal }) => {
  const [updateTitle, setUpdateTitle] = React.useState(announcements.title);
  const [updateImageUrl, setUpdateImageUrl] = React.useState(announcements.imageUrl);
  const [updateLink, setUpdateLink] = React.useState(announcements.link);
  const [updateIsCurrent, setUpdateIsCurrent] = React.useState(announcements.isCurrent);
  return (
    <Modal
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
    >
      <Paper className="paper center w-50 h-50">
        <Row className="">
          <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
            <Headline4 className="purple text-center">Update Announcments</Headline4>
          </Cell>
          <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
            <div className="pa3">
              <TextField label="Title" className="mb4 w-100" outlined>
                <Input
                  id="1"
                  value={updateTitle}
                  onChange={(e) => {
                    setUpdateTitle(e.target.value);
                  }}
                />
              </TextField>
              <TextField label="Image Url" className="mb4 w-100" outlined>
                <Input
                  id="1"
                  value={updateImageUrl}
                  onChange={(e) => {
                    setUpdateImageUrl(e.target.value);
                  }}
                />
              </TextField>
              <TextField label="Link" className="mb4 w-100" outlined>
                <Input
                  id="1"
                  value={updateLink}
                  onChange={(e) => {
                    setUpdateLink(e.target.value);
                  }}
                />
              </TextField>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={updateIsCurrent}
                      onChange={(e) => {
                        setUpdateIsCurrent(e.target.checked);
                      }}
                      color="primary"
                    />
                  }
                  label="Is Current"
                />
              </FormGroup>
              <Button
                raised
                onClick={() => {
                  updateAnnouncement({
                    variables: {
                      _id: announcements._id,
                      title: updateTitle,
                      imageUrl: updateImageUrl,
                      link: updateLink,
                      isCurrent: updateIsCurrent,
                    },
                  });
                }}
              >
                Update
              </Button>
            </div>
          </Cell>
        </Row>
      </Paper>
    </Modal>
  );
};
AnnouncementModal.propTypes = {
  announcements: PropTypes.object.isRequired,
  updateAnnouncement: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
export default AnnouncementModal;
