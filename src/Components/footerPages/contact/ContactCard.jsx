import React from 'react';
import Card from '@material/react-card';
import {
  Body1,
} from '@material/react-typography';
import { SocialIcon } from 'react-social-icons';
import 'tachyons';

// SocialIcon is imported from external npm package to show social media icons.

const ContactCard = () => (
  <Card className="tc">
    {
      /*
        pl3 -> PaddingLeft3
        pr3 -> PaddingRight3
        tc -> TextCenter
        ms2 -> MarginAll2
        dim -> Dims the element on hover
      */
    }
    <div className="pl3 pr3">
      <Body1>
        Our social media links
      </Body1>
      <div className="tc ma2">
        <span className="ma2 dim">
          <SocialIcon
            target="_blank"
            url="https://www.facebook.com/siesgstarena"
            style={{ height: 40, width: 40 }}
          />
        </span>
        <span className="ma2 dim">
          <SocialIcon
            target="_blank"
            url="https://www.instagram.com/siesgstarena/"
            style={{ height: 40, width: 40 }}
          />
        </span>
        <span className="ma2 dim">
          <SocialIcon
            target="_blank"
            url="https://medium.com/siesgstarena"
            style={{ height: 40, width: 40 }}
          />
        </span>
        <span className="ma2 dim">
          <SocialIcon
            target="_blank"
            url="https://twitter.com/@arenaCodeChef"
            style={{ height: 40, width: 40 }}
          />
        </span>
      </div>
    </div>
  </Card>
);


export default ContactCard;
