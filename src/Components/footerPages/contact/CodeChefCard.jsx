import React from 'react';
import Card from '@material/react-card';
import {
  Body1,
  Body2,
} from '@material/react-typography';
import 'tachyons';


const CodeChefCard = () => (
  <Card className="mt4">
    {
      /*
        mt4 -> MarginTop4
        pl3 -> PaddingLeft3
        pr3 -> PaddingRight3
        tc -> TextCenter
        no-underline -> Removes underline from the hyperlink
        dim -> Dims the element on hover
      */
    }
    <div className="pl3 pr3">
      <Body1 className="tc">
        You can contact us at
        <br />
        <a
          className="dim black no-underline i"
          href="mailto:codechef@siesgst.ac.in"
        >
          codechef@siesgst.ac.in
        </a>
        <br />
        for following issues:
      </Body1>

      <ul className="dark-gray">
        <li>
          <Body2>
            For questions or issues related to your account.
          </Body2>
        </li>
        <li>
          <Body2>
            For deleting your account.
          </Body2>
        </li>
        <li>
          <Body2>
            For questions regarding data usage and your activity.
          </Body2>
        </li>
        <li>
          <Body2>
            For reporting a bug or reporting a profile.
          </Body2>
        </li>
      </ul>
    </div>
  </Card>
);


export default CodeChefCard;
