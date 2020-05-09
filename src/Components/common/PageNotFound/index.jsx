import React from 'react';
import {
  Headline3,
  Body1,
  Body2,
} from '@material/react-typography';
import 'tachyons';

const PageNotFound = () => (
  <div className="mw6 center">
    <Headline3 className="purple tc"> SIESGSTarena </Headline3>
    <img alt="404" src="https://res.cloudinary.com/ashokc/image/upload/f_auto,q_auto/v1589006294/arena/assets/undraw_page_not_found_su7k_lkqene.svg" />
    <Body1 className="tc"> Page Not Found </Body1>
    <Body2 className="mid-gray tc">The requested URL was not found on the server</Body2>
  </div>
);

export default PageNotFound;
