import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia } from '@material/react-card';
import {
  Body1,
} from '@material/react-typography';
import { SocialIcon } from 'react-social-icons';
import 'tachyons';

// SocialIcon is imported from an npm package to use social media icons
const DeveloperCard = (props) => {
  const {
    name,
    imageUrl,
    githubUrl,
    facebookUrl,
    linkdinUrl,
    instagramUrl,
    twitterUrl,
  } = props;

  return (

    <Card className="" style={{ height: '305px' }}>
      { /*
            pl3 -> PaddingLeft3
            pr3 -> PaddingRight3
            tc -> TextCenter
            ma2 -> MarginAll2
            dim -> Dims the element on hover
        */
      }
      { /* This part loads the image of the person from github */}
      <CardMedia square imageUrl={imageUrl} />

      <div className="pl3 pr3">
        { /* This part prints the name of the person */}
        <Body1 className="tc mb0">
          {name}
        </Body1>
        { /* This part prints the social media icons of the person, if any */}
        <div className="tc">
          { githubUrl
            ? (
              <SocialIcon
                className="ma1 dim"
                target="_blank"
                url={githubUrl}
                style={{ height: 25, width: 25 }}
              />
            )
            : <span />
          }
          { facebookUrl
            ? (
              <SocialIcon
                className="ma1 dim"
                target="_blank"
                url={facebookUrl}
                style={{ height: 25, width: 25 }}
              />
            )
            : <span />
          }
          { instagramUrl
            ? (
              <SocialIcon
                className="ma1 dim"
                target="_blank"
                url={instagramUrl}
                style={{ height: 25, width: 25 }}
              />
            )
            : <span />
          }
          { twitterUrl
            ? (
              <SocialIcon
                className="ma1 dim"
                target="_blank"
                url={twitterUrl}
                style={{ height: 25, width: 25 }}
              />
            )
            : <span />
          }
          { linkdinUrl
            ? (
              <SocialIcon
                className="ma1 dim"
                target="_blank"
                url={linkdinUrl}
                style={{ height: 25, width: 25 }}
              />
            )
            : <span />
          }
        </div>
      </div>
    </Card>
  );
};

DeveloperCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  facebookUrl: PropTypes.string.isRequired,
  linkdinUrl: PropTypes.string.isRequired,
  instagramUrl: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string.isRequired,
};

export default DeveloperCard;
