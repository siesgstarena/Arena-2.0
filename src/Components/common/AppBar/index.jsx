import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import Drawer, {
  DrawerContent, DrawerHeader, DrawerTitle, DrawerSubtitle,
} from '@material/react-drawer';
import List, {
  ListItem, ListItemGraphic, ListItemText,
} from '@material/react-list';
import drawerItems from './drawerItems';
import './AppBar.scss';
import 'tachyons';

const AppBar = (props) => {
  // selectedIndex is the state variable which decides which option is selected
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const notMobile = window.innerWidth > 480;
  // notMobile turns out to be true when the device width is greater than 480px
  const { location } = props;
  const { pathname: currentPathname } = location;
  const { history } = props;

  useEffect(() => {
    if (currentPathname === '/') {
      setSelectedIndex(0);
      setOpen(false);
    } else if (currentPathname === '/contests') {
      setSelectedIndex(1);
      setOpen(false);
    } else if (currentPathname === '/ratings') {
      setSelectedIndex(2);
      setOpen(false);
    } else if (currentPathname === '/blogs') {
      setSelectedIndex(3);
      setOpen(false);
    } else if (currentPathname === '/problem-set') {
      setSelectedIndex(4);
      setOpen(false);
    } else if (currentPathname === '/playlists') {
      setSelectedIndex(5);
      setOpen(false);
    } else if (currentPathname === '/goodies') {
      setSelectedIndex(6);
      setOpen(false);
    } else if (currentPathname === '/turing-cup') {
      setSelectedIndex(7);
      setOpen(false);
    } else {
      // selectedIndex : 100 specifies that no item from the drawer is selected
      // Any random large number can be taken
      setSelectedIndex(100);
      setOpen(false);
    }
  }, [currentPathname]);

  // The following function closes the drawer (by making open=false)
  // and updates selectedIndex depending upon which item is clicked
  const onItemClick = (index) => {
    setOpen(!open);
    setSelectedIndex(index);
  };

  return (
    <div>
      { open
        ? (
          <Drawer
            className="react-drawer-alternate"
            modal
            open={open}
            onClose={() => setOpen(false)}
          >

            <DrawerHeader>
              {/* defaults to div */}
              <DrawerTitle tag="h2">
                {/* defaults to h3 */}
                Explore Arena
              </DrawerTitle>
              <DrawerSubtitle>
                {/* defaults to h6 */}
                matt@email.com
              </DrawerSubtitle>
            </DrawerHeader>

            <DrawerContent>
              <List singleSelection selectedIndex={selectedIndex}>
                { drawerItems.map((item, index) => (
                  <ListItem key={item.id} className="pointer" style={{ padding: '0' }} onClick={() => onItemClick(index)}>
                    <NavLink to={{ pathname: item.path }} exact className="no-underline db pa3 black" activeStyle={{ color: '#6200EE' }} style={{ width: '100%' }}>
                      <ListItemGraphic className="v-mid" graphic={<MaterialIcon icon={item.icon} />} />
                      <ListItemText className="v-mid" primaryText={item.name} />
                    </NavLink>
                  </ListItem>
                ))
                }
              </List>
            </DrawerContent>
          </Drawer>
        )
        : <div />
      }

      <TopAppBar fixed className="react-top-app-bar-alternate">
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon="menu" onClick={() => setOpen(!open)} />
            </TopAppBarIcon>
            <TopAppBarTitle>SIESGSTarena</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align="end" role="toolbar">
            {/* The following section is used to render Signin and Signup
              buttons on non-mobile devices( tablets and desktops) and to render
              only singin button on mobile devices. This was done to make the site a bit
              more responsive
            */}
            { notMobile
              ? (
                <div>
                  <Button
                    className="mr2"
                    style={{ textTransform: 'capitalize' }}
                    onClick={() => history.push('/auth/signin')}
                  >
                    Sign In
                  </Button>
                  <Button
                    raised
                    onClick={() => history.push('/auth/signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              )
              : (
                <Button
                  className="mr2"
                  raised
                  onClick={() => history.push('/auth/signin')}
                >
                  Sign In
                </Button>
              )
            }
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />

    </div>
  );
};

AppBar.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default AppBar;
