/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import { Headline4, Body1, Headline6 } from '@material/react-typography';
import {
  userColor, userStatus, getMonth, getYear,
} from '../../../commonFunctions';
import AuthContext from '../../../Contexts/AuthContext';
import EditAbout from './EditAbout';
import MessageCard from '../../common/MessageCard/index';
import { FOLLOW, UNFOLLOW } from '../../../graphql/mutations';
import { GET_PROFILE_DETAILS } from '../../../graphql/queries';

const Info = ({ userDetails: user }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const removeTag = (width > 625);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { authState } = useContext(AuthContext);
  useEffect(() => {
    const updateWidthOnResize = () => { setWidth(window.innerWidth); };
    window.addEventListener('resize', updateWidthOnResize);

    return (() => {
      window.removeEventListener('resize', updateWidthOnResize);
    });
  }, []);
  const client = useApolloClient();
  const handleFollow = async () => {
    setMessageType('loading');
    setMessage('Following user, Please Wait');
    const { data, error } = await client.mutate({
      mutation: FOLLOW,
      variables: {
        followId: user._id,
      },
      update: (cache) => {
        try {
          // Adding logged in user in the array of followers for the user
          const { profilePage } = cache.readQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: user._id },
          });
          cache.writeQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: user._id },
            data: {
              profilePage: {
                ...profilePage,
                user: {
                  ...profilePage.user,
                  followers: [...profilePage.user.followers, authState.user.userId],
                },
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
        try {
          // Adding the person followed by the loggedIn user in his array of following
          const { profilePage: profilePageOfLoggedInUser } = cache.readQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: authState.user.userId },
          });
          cache.writeQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: authState.user.userId },
            data: {
              profilePage: {
                ...profilePageOfLoggedInUser,
                user: {
                  ...profilePageOfLoggedInUser.user,
                  following: [...profilePageOfLoggedInUser.user.following, user._id],
                },
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.follow.success) {
      setMessageType('success');
      setMessage(`You have started following ${user.name}`);
    } else {
      setMessageType('error');
      setMessage(data.follow.message);
    }
  };
  const handleUnfollow = async () => {
    setMessageType('loading');
    setMessage('Unfollowing user, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UNFOLLOW,
      variables: {
        unfollowId: user._id,
      },
      update: (cache) => {
        try {
          // Removing logged in user from the array of followers for the user
          const { profilePage } = cache.readQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: user._id },
          });
          cache.writeQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: user._id },
            data: {
              profilePage: {
                ...profilePage,
                user: {
                  ...profilePage.user,
                  followers: profilePage.user.followers.filter(id => id !== authState.user.userId),
                },
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
        try {
          // Reoving the person followed by the loggedIn user from his array of following
          const { profilePage: profilePageOfLoggedInUser } = cache.readQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: authState.user.userId },
          });
          cache.writeQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: authState.user.userId },
            data: {
              profilePage: {
                ...profilePageOfLoggedInUser,
                user: {
                  ...profilePageOfLoggedInUser.user,
                  following: profilePageOfLoggedInUser.user.following.filter(id => id !== user._id),
                },
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.unfollow.success) {
      setMessageType('success');
      setMessage(`You have unfollowed ${user.name}`);
    } else {
      setMessageType('error');
      setMessage(data.follow.message);
    }
  };

  return (
    <Grid style={{ margin: 0, padding: 0 }}>
      <Row>
        <Cell phoneColumns={3} desktopColumns={8} tabletColumns={5} className="">
          <Headline6 className="mb1" style={{ color: userColor(user.ratings, user._id) }}>{userStatus(user.ratings, user._id)}</Headline6>
          <Headline4 className="purple mt0 mb0 " style={{ fontSize: '1.7em' }}>
            { user.name }
          </Headline4>
          <Headline6 className="mt0 mb1 black-70">{`@${user.username}`}</Headline6>
          <div className="cf mb1">
            <Body1 className="fl w-40 gray " style={{ width: 'auto', margin: '4px  10px 4px 0px' }}>
              Ratings:
              <b>{` ${user.ratings}`}</b>
            </Body1>
            <Body1 className="fl w-60 gray" style={{ width: 'auto', margin: '4px 0px' }}>
              Joined:
              <b>{` ${getMonth(user.createdAt)} ${getYear(user.createdAt)}`}</b>
            </Body1>
          </div>
        </Cell>
        <Cell phoneColumns={1} tabletColumns={3} desktopColumns={4} className="pt5">
          <img className="fr ba b--mid-gray" alt="user-icon" style={{ borderRadius: '50%' }} height="80vh" width="auto" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
        </Cell>
      </Row>
      <Row className="pt2">
        {
          user.about
            ? (
              <Cell tabletColumns={6} desktopColumns={9}>
                <Headline6 style={{ margin: '0px' }} className="pa2 dib bl bw1 i br2 bg-light-gray black-80">{user.about}</Headline6>
              </Cell>
            )
            : null
        }
        <Cell columns={12}>
          <div>
            <MessageCard
              messageType={messageType}
              message={message}
              setMessageType={setMessageType}
            />
            {
              authState.user.userId === user._id
                ? (
                  <EditAbout
                    about={user.about}
                    setMessage={setMessage}
                    setMessageType={setMessageType}
                  />
                )
                : user.followers.includes(authState.user.userId)
                  ? <Button onClick={handleUnfollow} outlined>Unfollow</Button>
                  : <Button onClick={handleFollow} raised>Follow</Button>
            }
          </div>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Body1 className="mid-gray">{`${user.following.length} Following | ${user.followers.length} Followers`}</Body1>
        </Cell>
      </Row>
      <Row>
        { user.social
          ? user.social.map(profile => (
            <Cell key={profile.name} desktopColumns={3} tabletColumns={2} phoneColumns={1}>
              <a className="black flex flex-start" href={profile.link} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'None' }}>
                <img className="mr2" alt={profile.name} src={profile.icon} width="32px" />
                { (removeTag)
                  ? (
                    <span style={{ fontSize: '18px' }} className="mt1">{`${profile.name}`}</span>
                  )
                  : ('')
                }
              </a>
            </Cell>
          ))
          : null
        }
      </Row>
      <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    </Grid>
  );
};

Info.propTypes = {
  userDetails: PropTypes.object.isRequired,
};

export default Info;
