import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Button from '@material/react-button';
import { Headline4, Body1, Headline6 } from '@material/react-typography';

const Info = () => (
  <Grid>
    <Row>
      <Cell phoneColumns={3} desktopColumns={8} className="">
        <Headline4 className="purple mb0"> Swapnil Satish Shinde</Headline4>
        <Headline6 className="mt1 mb0 black-70">@Swpanil76</Headline6>
        <Body1 className="mt1 mid-gray">member since August 2018</Body1>
        <Body1 className="mt1 mb0">Ratings: 1316</Body1>
      </Cell>
      <Cell phoneColumns={1} desktopColumns={4} className="pa4-l pa4-m">
        <img className="fr ba b--mid-gray" alt="user-icon" style={{ borderRadius: '50%' }} height="100px" width="100px" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
      </Cell>
    </Row>
    <Row>
      <Cell columns={12}>
        <Headline6 className="mt2 black-80">How you look at it is pretty much how you&apos;ll see it.</Headline6>
      </Cell>
    </Row>
    <Row>
      <Cell>
        <Button
          outlined
          // onClick={() => console.log('clicked!')}
        >
          Edit
        </Button>
      </Cell>
    </Row>
    <Row>
      <Cell>
        <Body1 className="mid-gray">3 Following . 2 Followers</Body1>
      </Cell>
    </Row>
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
  </Grid>
);

export default Info;
