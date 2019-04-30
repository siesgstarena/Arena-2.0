import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline4, Body1 } from '@material/react-typography';
import ContactCard from './ContactCard';
import CodeChefCard from './CodeChefCard';
import 'tachyons';

// Contact card contains all our social media links.
// CodeChefCard contains our email address and the issues for which users can
// reach out to us.
const Contact = () => (
  <Grid className="mw7 ma4 center">
    <Row>
      <Cell className="" desktopColumns={6} phoneColumns={4} tabletColumns={4}>
        <Cell>
          <Headline4 className="purple">
            Contact
          </Headline4>
          <Body1 className="dark-gray">
            You can follow us on our social media accounts to stay
            updated about the stuff which is going on, on our platform.
            Also feel free to mail us any issues you have regarding our platform,
            we will try our best to resolve them.
          </Body1>
        </Cell>
      </Cell>
      <Cell desktopColumns={6} phoneColumns={4} tabletColumns={4}>
        <Cell>
          <ContactCard />
        </Cell>
        <Cell>
          <CodeChefCard />
        </Cell>
      </Cell>
    </Row>
  </Grid>
);


export default Contact;
