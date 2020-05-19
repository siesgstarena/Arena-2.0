import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useApolloClient } from '@apollo/react-hooks';
import { Headline4, Headline6 } from '@material/react-typography';
import { Button } from '@material/react-button';
import LinkGenerator from './LinkGenerator';
import MessageCard from '../../common/MessageCard/index';
import { UPDATE_SOCIAL } from '../../../graphql/mutations';
import { GET_PROFILE_DETAILS } from '../../../graphql/queries';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const Social = ({ socialDetails }) => {
  const { userId } = useParams();
  const [codeChef, setCC] = useState(socialDetails.codechef ? socialDetails.codechef : '');
  const [codeForces, setCF] = useState(socialDetails.codeforces ? socialDetails.codeforces : '');
  const [gitHub, setGH] = useState(socialDetails.github ? socialDetails.github : '');
  const profileLink = [
    'https://codechef.com/users/',
    'https://codeforces.com/profile/',
    'https://github.com/',
  ];
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();

  const handleSocialUpdate = async () => {
    setMessageType('loading');
    setMessage('Updating about, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UPDATE_SOCIAL,
      variables: {
        github: gitHub,
        codeforces: codeForces,
        codechef: codeChef,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.updateSocialLinks.success) {
          try {
            const { profilePage } = cache.readQuery({
              query: GET_PROFILE_DETAILS,
              variables: { id: userId, findBy: 'ID' },
            });
            cache.writeQuery({
              query: GET_PROFILE_DETAILS,
              variables: { id: userId, findBy: 'ID' },
              data: {
                profilePage: {
                  ...profilePage,
                  user: {
                    ...profilePage.user,
                    social: {
                      ...profilePage.user.social,
                      github: gitHub,
                      codeforces: codeForces,
                      codechef: codeChef,
                    },
                  },
                },
              },
            });
          } catch {
            console.log('No entry found in the cache.');
          }
        }
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.updateSocialLinks)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.updateSocialLinks.success) {
      setMessageType('success');
      setMessage('Social updated successfully');
    } else {
      setMessageType('error');
      setMessage(data.updateSocialLinks.message);
    }
  };

  const onUserNameChange = (item, setVal) => setVal(item);
  return (
    <div className="">
      <Headline4 className="purple mb2">Social</Headline4>
      <Headline6 className="mt3 mb0">CodeChef</Headline6>
      <LinkGenerator
        id="1"
        profileLink={profileLink[0]}
        siteName={codeChef}
        setValue={setCC}
        onUserNameChange={onUserNameChange}
      />
      <Headline6 className="mt3 mb0">CodeForces</Headline6>
      <LinkGenerator
        id="2"
        profileLink={profileLink[1]}
        siteName={codeForces}
        setValue={setCF}
        onUserNameChange={onUserNameChange}
      />
      <Headline6 className="mt3 mb0">GitHub</Headline6>
      <LinkGenerator
        id="3"
        profileLink={profileLink[2]}
        siteName={gitHub}
        setValue={setGH}
        onUserNameChange={onUserNameChange}
      />
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      <Button raised className="mt3" onClick={handleSocialUpdate}>
        Update
      </Button>
    </div>
  );
};

Social.propTypes = {
  socialDetails: PropTypes.object.isRequired,
};

export default Social;
