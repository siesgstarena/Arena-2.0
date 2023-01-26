import { useMutation, useQuery } from '@apollo/client';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Body1, Headline4 } from '@material/react-typography';
import React, { useEffect, useState } from 'react';
import { Button } from '@material/react-button';
import { Checkbox, FormControlLabel, FormGroup, Modal, Paper } from '@material-ui/core';
import TextField, { Input } from '@material/react-text-field';
import { GET_ALL_ANNOUNCEMENTS } from '../../../graphql/queries';
import {
  ADD_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
  UPDATE_ANNOUNCEMENT_HOME_PAGE,
} from '../../../graphql/mutations';
import SomethingWentWrong from '../../common/SomethingWentWrong';
import Spinner from '../../common/Spinner';
import AnnouncementsCard from './AnnouncementsCard';
import MessageCard from '../../common/MessageCard';
import './Style.css';

const ListAnnouncements = () => {
  const [updateTitle, setUpdateTitle] = React.useState('');
  const [updateImageUrl, setUpdateImageUrl] = React.useState('');
  const [updateLink, setUpdateLink] = React.useState('');
  const [updateIsCurrent, setUpdateIsCurrent] = React.useState(true);
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { loading, error, data } = useQuery(GET_ALL_ANNOUNCEMENTS);
  const [deleteAnnouncement, { data: deleteData }] = useMutation(DELETE_ANNOUNCEMENT, {
    refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS }],
  });
  const [updateAnnouncement, { data: updateData }] = useMutation(UPDATE_ANNOUNCEMENT_HOME_PAGE, {
    refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS }],
  });
  const [addAnnouncement, { data: addData }] = useMutation(ADD_ANNOUNCEMENT, {
    refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS }],
  });
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    if (deleteData) {
      if (deleteData.deleteAnnouncement.success) {
        setMessageType('success');
        setMessage('Announcement Delete successfully');
      } else {
        setMessageType('error');
        setMessage(deleteData.deleteAnnouncement.message);
      }
    }
  }, [deleteData]);
  useEffect(() => {
    if (updateData) {
      if (updateData.updateAnnouncementHomePage.success) {
        setMessageType('success');
        setMessage('Announcement updated successfully');
      } else {
        setMessageType('error');
        setMessage(updateData.updateAnnouncementHomePage.message);
      }
    }
  }, [updateData]);
  useEffect(() => {
    if (addData) {
      if (addData.addAnnouncement.success) {
        setMessageType('success');
        setMessage('Announcement added successfully');
      } else {
        setMessageType('error');
        setMessage(addData.addAnnouncement.message);
      }
    }
  }, [addData]);

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  return (
    <div>
      <div className="mw8-ns pa2 center">
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
        <Grid>
          <Grid className="w-100 card-grid">
            <Body1 className="mr5 title">
              <span className="purple">Announcments</span>
            </Body1>
            <Button
              outlined
              raised
              color="primary"
              className="w-max-content"
              onClick={() => setOpenModal(true)}
            >
              Create
            </Button>
          </Grid>
          <Modal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Paper className="paper center w-50 h-50">
              <Row className="">
                <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
                  <Headline4 className="purple text-center">Add Announcments</Headline4>
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
                        addAnnouncement({
                          variables: {
                            title: updateTitle,
                            imageUrl: updateImageUrl,
                            link: updateLink,
                            isCurrent: updateIsCurrent,
                          },
                        });
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </Cell>
              </Row>
            </Paper>
          </Modal>
          <Row>
            {data &&
              data.announcements.announcements.map((announcement) => (
                <Cell
                  key={`${announcement._id}C`}
                  desktopColumns={3}
                  tabletColumns={4}
                  phoneColumns={2}
                >
                  <AnnouncementsCard
                    key={announcement._id}
                    announcements={announcement}
                    deleteAnnouncement={deleteAnnouncement}
                    updateAnnouncement={updateAnnouncement}
                  />
                </Cell>
              ))}
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default ListAnnouncements;
