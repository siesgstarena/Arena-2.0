import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Box, withStyles, TextField } from '@material-ui/core';
import { Button } from '@material/react-button';
import { Headline4 } from '@material/react-typography';
import { GET_ALL_SUPERUSERS } from '../../../graphql/queries';
import { MAKE_SUPERUSER } from '../../../graphql/mutations';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import SuperuserList from './SuperuserList';
import MessageCard from '../../common/MessageCard';
import './Style.css';

const styles = () => ({
  input: {
    height: 40,
  },
  button: {
    height: 40,
  },
});
const ManageSuperuser = withStyles(styles)((props) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { data, loading, error } = useQuery(GET_ALL_SUPERUSERS);
  const [makeSuperuser, { data: makeSuperuserData }] = useMutation(MAKE_SUPERUSER, {
    refetchQueries: [{ query: GET_ALL_SUPERUSERS }],
  });
  const { classes } = props;
  useEffect(() => {
    if (
      makeSuperuserData &&
      makeSuperuserData.makeSuperuser &&
      !makeSuperuserData.makeSuperuser.success
    ) {
      setMessage('Invalid username');
      setMessageType('error');
    }
    if (
      makeSuperuserData &&
      makeSuperuserData.makeSuperuser &&
      makeSuperuserData.makeSuperuser.success
    ) {
      setMessage('Superuser added');
      setMessageType('success');
    }
  }, [makeSuperuserData]);

  if (loading) {
    return <div className="mw7 center pa2">Loading...</div>;
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;

  return (
    <Box className="container">
      <Headline4 className="purple mt4 mb2 ml0">Manage Superusers</Headline4>
      <SuperuserList users={data.users} />
      <Box className="make-superuser">
        <TextField
          label="username"
          variant="outlined"
          className="mr-2 mb-2"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          outlined
          color="primary"
          raised
          className={classes.button}
          onClick={() => makeSuperuser({ variables: { username } })}
        >
          Make Superuser
        </Button>
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
      </Box>
    </Box>
  );
});

export default ManageSuperuser;
