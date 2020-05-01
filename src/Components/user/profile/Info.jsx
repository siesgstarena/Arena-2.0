import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Button from '@material/react-button';
import { Headline4, Body1, Headline6 } from '@material/react-typography';
import {
  userColor, userStatus, getMonth, getYear,
} from '../../../commonFunctions';

const Info = ({ userDetails: user }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const removeTag = (width > 625);
  useEffect(() => {
    const updateWidthOnResize = () => { setWidth(window.innerWidth); };
    window.addEventListener('resize', updateWidthOnResize);

    return (() => {
      window.removeEventListener('resize', updateWidthOnResize);
    });
  }, []);

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
        <Cell tabletColumns={6} desktopColumns={9}>
          <Headline6 style={{ margin: '0px' }} className="pa2 dib bl bw1 i br2 bg-light-gray black-80">{user.about}</Headline6>
        </Cell>
        <Cell tabletColumns={3}>
          <Button
            className=""
            raised
          >
            Edit
          </Button>
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
