import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_SUPERUSERS } from '../../../graphql/queries';
import { MAKE_SUPERUSER } from '../../../graphql/mutations';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import SuperuserList from './SuperuserList';
import MessageCard from '../../common/MessageCard';

const ManageSuperuser = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { data, loading, error } = useQuery(GET_ALL_SUPERUSERS);
  const [makeSuperuser, { data: makeSuperuserData }] = useMutation(MAKE_SUPERUSER, {
    refetchQueries: [{ query: GET_ALL_SUPERUSERS }],
  });
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
    <div className="container">
      <SuperuserList users={data.users} />
      <div className="make-superuser">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="button" onClick={() => makeSuperuser({ variables: { username } })}>
          Make Superuser
        </button>
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
      </div>
    </div>
  );
};

export default ManageSuperuser;
