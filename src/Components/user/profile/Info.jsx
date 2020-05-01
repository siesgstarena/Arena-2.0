import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Button from '@material/react-button';
import { Headline4, Body1, Headline6 } from '@material/react-typography';
import { userColor, userStatus } from '../../../commonFunctions';

const DemoUser = [
  {
    id: '5b6490e95969e7002076f330',
    rating: 1316,
    name: 'Swapnil Satish Shinde',
    username: 'Swapnil76',
    since: 'August 2018',
    bio: 'How you look at it is pretty much how you\'ll see it',
    followers: 2,
    following: 3,
    social: [{
      name: 'Codechef',
      link: 'https://www.codechef.com/users/swapnil76',
      icon: 'https://cdn.clipart.email/38dd8d751b58ba5ce74907dfc482776d_codechef-user-codechef_732-732.jpeg',
    },
    {
      name: 'CodeForces',
      link: '',
      icon: 'https://1.bp.blogspot.com/-pBimI1ZhYAA/Wnde0nmCz8I/AAAAAAAABPI/5LZ2y9tBOZIV-pm9KNbyNy3WZJkGS54WgCPcBGAYYCw/s1600/codeforce.png',
    },
    {
      name: 'Github',
      link: 'https://github.com/Swap76',
      icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    ],
  },
];

const Info = () => {
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
    DemoUser.map(user => (
      <Grid key="0">
        <Row>
          <Cell phoneColumns={3} desktopColumns={8} tabletColumns={5} className="">
            <Headline6 className="mb1" style={{ color: userColor(user.rating, user.id) }}>{userStatus(user.rating, user.id)}</Headline6>
            <Headline4 className="purple mt0 mb0 " style={{ fontSize: '1.7em' }}>
              { user.name }
            </Headline4>
            <Headline6 className="mt0 mb1 black-70">{`@${user.username}`}</Headline6>
            <div className="cf mb1">
              <Body1 className="fl w-40 gray pointer " style={{ width: 'auto', margin: '4px  10px 4px 0px' }}>
                Ratings:
                <b>{` ${user.rating}`}</b>
              </Body1>
              <Body1 className="fl w-60 gray pointer" style={{ width: 'auto', margin: '4px 0px' }}>
                Joined:
                <b>{` ${user.since}`}</b>
              </Body1>
            </div>
          </Cell>
          <Cell phoneColumns={1} tabletColumns={3} desktopColumns={4} className="pt5">
            <img className="fr ba b--mid-gray" alt="user-icon" style={{ borderRadius: '50%' }} height="80vh" width="auto" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
          </Cell>
        </Row>
        <Row className="pt2">
          <Cell tabletColumns={6} desktopColumns={9}>
            <Headline6 style={{ margin: '0px' }} className="pa2 bl bw1 i br2 bg-light-gray black-80">{user.bio}</Headline6>
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
            <Body1 className="mid-gray">{`${user.following} Following | ${user.followers} Followers`}</Body1>
          </Cell>
        </Row>
        <Row>
          {user.social.map(profile => (
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
          }
        </Row>
        <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
      </Grid>
    ))
  );
};

export default Info;

//
