import React from 'react';
import { Body1 } from '@material/react-typography';
import { NavLink } from 'react-router-dom';
import footerRoutes from './footerRoutes';
import 'tachyons';


const Footer = () => (
  <div className="mw6 mw7-ns center pa3 ph5-ns">
    { /*
        mw6 -> MaxWidth6 (For all devices)
        mw7-ns -> MaxWidth7-NotSmall (for medium and large devices)
        pa3 -> PaddingAll3
        ph5 -> Adds left and right padding of size 5 (for medium and large devices)
      */
    }
    <hr className="ba" style={{ borderColor: '#6200EE' }} />
    <Body1 style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* This will render all the different footer links from footerRoutes.js */}
      { footerRoutes.map(route => (
        <NavLink
          key={route.id}
          to={route.changeRouteTo}
          activeStyle={{ color: '#6200EE' }}
          className="no-underline black"
          exact
        >
          <span className="ma2 pointer">
            {route.routeName}
          </span>
        </NavLink>
      ))
      }
    </Body1>
  </div>
);

export default Footer;
