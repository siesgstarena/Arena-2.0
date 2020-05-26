import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline4, Body1 } from '@material/react-typography';
import gift from './assets/gift.png';
import bag from './assets/bag.jpg';
import tshirt from './assets/tshirt.jpg';
import GoodiesCard from './GoodiesCard';
import 'tachyons';

const Goodies = () => (
  <Grid className="mw7">
    {/* The following row represents the heading of the route */}
    <Row>
      <Cell>
        <Headline4 className="purple"> Goodies </Headline4>
      </Cell>
    </Row>

    <div className="pa3 br4 mb3 bg-washed-red">
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={gift} alt="gift" />
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Body1>Special goodies for winners and top performers</Body1>
      </Row>
    </div>

    {/* The following row shows all the goodies */}
    <Row>
      <Cell phoneColumns={2}>
        <GoodiesCard goodiesImage={bag} goodiesName="Wildcraft Bags" />
      </Cell>
      <Cell phoneColumns={2}>
        <GoodiesCard goodiesImage={tshirt} goodiesName="T-shirts" />
      </Cell>
      <Cell phoneColumns={2}>
        <GoodiesCard goodiesImage={tshirt} goodiesName="T-shirts" />
      </Cell>
    </Row>
  </Grid>
);

export default Goodies;
