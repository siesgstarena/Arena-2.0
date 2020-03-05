/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import {
  NavLink, Link, useLocation, useHistory,
} from 'react-router-dom';
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
// import { Redirect } from 'react-router-dom';
import Menu, { MenuList, MenuListItem, MenuListItemText } from '@material/react-menu';
import drawerItems from './drawerItems';
import UserContext from '../../../Contexts/UserContext';
import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-menu/dist/menu.css';
import './AppBar.scss';
import 'tachyons';

const AppBar = () => {
  // selectedIndex is the state variable which decides which option is selected
  const [open, setOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [coordinatesOfUserMenu, setCoordinatesOfUserMenu] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const mobileDevice = window.innerWidth < 480;
  // mobileDevice turns out to be true when the device width is less than 480px

  const location = useLocation();
  const { pathname: currentPathname } = location;
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

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
    } else if (currentPathname === '/blog') {
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
    } else {
      // selectedIndex : 100 specifies that no item from the drawer is selected
      // Any random large number can be taken
      setSelectedIndex(100);
      setOpen(false);
    }
  }, [currentPathname]);

  // The following function closes the drawer (by making open=false)
  // and updates selectedIndex depending upon which item is clicked
  const onDrawerItemClick = (index) => {
    setOpen(!open);
    setSelectedIndex(index);
  };

  const onCloseUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const onUserIconClick = (event) => {
    setIsUserMenuOpen(true);
    setCoordinatesOfUserMenu({ x: event.clientX, y: event.clientY });
  };

  const userMenuOptions = [
    'New Post',
    'My Posts',
    'My Profile',
    'Settings',
    'Logout',
  ];

  const onUserMenuItemClick = (index) => {
    if (index === 0) {
      history.push('/blog/create');
    } else if (index === 1) {
      history.push('/blog/my');
    } else if (index === 2) {
      history.push(`/profile/${user.userId}`);
    } else if (index === 3) {
      history.push(`/profile/${user.userId}/settings`);
    } else if (index === 4) {
      setUser(null);
      setIsUserMenuOpen(false);
      history.push({
        pathname: '/auth/signin',
        state: {
          messageType: 'success',
          message: 'Sucessfully logged out',
        },
      });
    }
  };

  const userMenu = (
    <Menu
      open={isUserMenuOpen}
      onClose={onCloseUserMenu}
      coordinates={coordinatesOfUserMenu}
      onSelected={(index, item) => onUserMenuItemClick(index, item)}
    >
      <MenuList>
        {userMenuOptions.map(option => (
          <MenuListItem className="pointer" key={option}>
            <MenuListItemText className="outline-0" primaryText={option} />
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );

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
                  <ListItem key={item.id} className="pointer" style={{ padding: '0' }} onClick={() => onDrawerItemClick(index)}>
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
            <TopAppBarTitle>
              <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                SIESGSTarena
              </Link>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align="end" role="toolbar">
            {/* The following section is used to render Signin and Signup
              buttons on non-mobile devices( tablets and desktops) and to render
              only singin button on mobile devices. This was done to make the site a bit
              more responsive
            */}
            {
              !mobileDevice && !user
                ? (
                  <div>
                    <Button
                      className="mr2"
                      outlined
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
                ) : null
            }
            {
              !mobileDevice && user
                ? (
                  <div>
                    <MaterialIcon icon="account_circle" className="pointer" style={{ color: '#6200EE' }} onClick={event => onUserIconClick(event)} />
                    {userMenu}
                  </div>
                )
                : null
            }
            {
              mobileDevice && user
                ? (
                  <div>
                    <MaterialIcon icon="account_circle" className="pointer" style={{ color: '#6200EE' }} onClick={event => onUserIconClick(event)} />
                    {userMenu}
                  </div>
                )
                : null
            }
            {
              mobileDevice && !user
                ? (
                  <Button
                    className="mr2"
                    raised
                    onClick={() => history.push('/auth/signin')}
                  >
                  Sign In
                  </Button>
                )
                : <span />
            }
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />

    </div>
  );
};

export default AppBar;
