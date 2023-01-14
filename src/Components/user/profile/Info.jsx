/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/client';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import { Headline4, Body1, Headline6 } from '@material/react-typography';
import { format } from 'date-fns';
import { userColor, userStatus } from '../../../utils/commonFunctions';
import AuthContext from '../../../Contexts/AuthContext';
import EditAbout from './EditAbout';
import MessageCard from '../../common/MessageCard/index';
import { FOLLOW, UNFOLLOW } from '../../../graphql/mutations';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const Info = ({ userDetails: user }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const removeTag = width > 625;
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { authState } = useContext(AuthContext);
  let loggedInUser = null;
  if (authState.user && authState.user.userId) {
    loggedInUser = authState.user;
  }
  const joinedStat = format(Number(user.createdAt), 'MMMM yyyy');

  // useEffect is written to reset the width based on screen size
  // It is for our social media section
  // In small screens only 3 logos should be visible
  // and in bigger screen, name also should be visible

  useEffect(() => {
    const updateWidthOnResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidthOnResize);

    return () => {
      window.removeEventListener('resize', updateWidthOnResize);
    };
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
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.follow)) {
      redirectOnSessionExpiredAfterRender();
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
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.unfollow)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.unfollow.success) {
      setMessageType('success');
      setMessage(`You have unfollowed ${user.name}`);
    } else {
      setMessageType('error');
      setMessage(data.unfollow.message);
    }
  };

  return (
    <Grid style={{ margin: 0, padding: 0 }}>
      <Row>
        <Cell phoneColumns={3} desktopColumns={8} tabletColumns={5} className="">
          <Headline6 className="mb1" style={{ color: userColor(user.ratings, user._id) }}>
            {userStatus(user.ratings, user._id)}
          </Headline6>
          <Headline4 className="purple mt0 mb0 " style={{ fontSize: '1.7em' }}>
            {user.name}
          </Headline4>
          <Headline6 className="mt0 mb1 black-70">{`@${user.username}`}</Headline6>
          <div className="cf mb1">
            <Body1 className="fl w-40 gray " style={{ width: 'auto', margin: '4px  10px 4px 0px' }}>
              Ratings:
              <b>{` ${user.ratings}`}</b>
            </Body1>
            <Body1 className="fl w-60 gray" style={{ width: 'auto', margin: '4px 0px' }}>
              Joined:
              <b>{` ${joinedStat} `}</b>
              {/* ${getMonth(user.createdAt)} ${getYear(user.createdAt)}`} */}
            </Body1>
          </div>
        </Cell>
        <Cell phoneColumns={1} tabletColumns={3} desktopColumns={4} className="pt5">
          <img
            className="fr"
            alt="user-icon"
            style={{ borderRadius: '50%' }}
            height="80vh"
            width="auto"
            src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
          />
        </Cell>
      </Row>
      <Row className="pt2">
        {user.about ? (
          <Cell tabletColumns={6} desktopColumns={9}>
            <Headline6
              style={{ margin: '0px' }}
              className="pa2 dib bl bw1 i br2 bg-light-gray black-80"
            >
              {user.about}
            </Headline6>
          </Cell>
        ) : null}
        <Cell columns={12}>
          <div>
            <MessageCard
              messageType={messageType}
              message={message}
              setMessageType={setMessageType}
            />
            {loggedInUser ? (
              loggedInUser.userId === user._id ? (
                <EditAbout
                  about={user.about}
                  setMessage={setMessage}
                  setMessageType={setMessageType}
                />
              ) : user.followers.includes(loggedInUser.userId) ? (
                <Button onClick={handleUnfollow} outlined>
                  Unfollow
                </Button>
              ) : (
                <Button onClick={handleFollow} raised>
                  Follow
                </Button>
              )
            ) : null}
          </div>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Body1 className="mid-gray">{`${user.following.length} Following | ${user.followers.length} Followers`}</Body1>
        </Cell>
      </Row>
      <Row>
        {user.codeforces ? (
          <Cell desktopColumns={3} tabletColumns={2} phoneColumns={1}>
            <a
              className="black flex flex-start dim"
              href={`https://codeforces.com/profile/${user.codeforces}`}
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: 'None' }}
            >
              <img
                className="mr2"
                alt="Codeforces"
                src="https://1.bp.blogspot.com/-pBimI1ZhYAA/Wnde0nmCz8I/AAAAAAAABPI/5LZ2y9tBOZIV-pm9KNbyNy3WZJkGS54WgCPcBGAYYCw/s1600/codeforce.png"
                width="30em"
              />
              {removeTag ? (
                <span style={{ fontSize: '1em' }} className="mt1">
                  Codeforces
                </span>
              ) : (
                ''
              )}
            </a>
          </Cell>
        ) : null}
        {user.codechef ? (
          <Cell desktopColumns={3} tabletColumns={2} phoneColumns={1}>
            <a
              className="black flex flex-start dim"
              href={`https://www.codechef.com/users/${user.codechef}`}
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: 'None' }}
            >
              <img
                className="mr2"
                alt="Codechef"
                src="https://cdn.clipart.email/38dd8d751b58ba5ce74907dfc482776d_codechef-user-codechef_732-732.jpeg"
                width="30em"
              />
              {removeTag ? (
                <span style={{ fontSize: '1em' }} className="mt1">
                  CodeChef
                </span>
              ) : (
                ''
              )}
            </a>
          </Cell>
        ) : null}
        {user.github ? (
          <Cell desktopColumns={3} tabletColumns={2} phoneColumns={1}>
            <a
              className="black flex flex-start dim"
              href={`https://github.com/${user.github}`}
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: 'None' }}
            >
              <img
                className="mr2"
                alt="Github"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="30em"
              />
              {removeTag ? (
                <span style={{ fontSize: '1em' }} className="mt1">
                  Github
                </span>
              ) : (
                ''
              )}
            </a>
          </Cell>
        ) : null}
      </Row>
      <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    </Grid>
  );
};

Info.propTypes = {
  userDetails: PropTypes.object.isRequired,
};

export default Info;
