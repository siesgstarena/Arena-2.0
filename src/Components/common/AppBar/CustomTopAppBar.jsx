import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import { Body1 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import AuthContext from '../../../Contexts/AuthContext';
import UserMenu from './UserMenu';

const CustomTopAppBar = ({ setDrawerOpen }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileDevice = width < 480;
  useEffect(() => {
    const updateWidthOnResize = () => { setWidth(window.innerWidth); };
    // Adding a resize event listener on mount
    window.addEventListener('resize', updateWidthOnResize);
    return (() => {
      // Removing the listener when the component unmounts so that
      // no state updates happen when the component is unmounted
      window.removeEventListener('resize', updateWidthOnResize);
    });
  }, []);
  const { authState } = useContext(AuthContext);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [coordinatesOfUserMenu, setCoordinatesOfUserMenu] = useState({});
  const onUserIconClick = (event) => {
    setIsUserMenuOpen(true);
    setCoordinatesOfUserMenu({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <TopAppBar fixed className="react-top-app-bar-alternate">
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon="menu" onClick={() => setDrawerOpen(previousValue => !previousValue)} />
            </TopAppBarIcon>
            <TopAppBarTitle>
              <Link to="/" className="noselect" style={{ color: 'black', textDecoration: 'none' }}>
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
              !mobileDevice && !authState.user
                ? (
                  <div>
                    <Link to="/auth/signin" style={{ textDecoration: 'none' }}>
                      <Button
                        className="mr2"
                        outlined
                        style={{ textTransform: 'capitalize' }}
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth/signup" style={{ textDecoration: 'none' }}>
                      <Button
                        raised
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                ) : null
            }
            {
              !mobileDevice && authState.user
                ? (
                  <Body1 className="flex items-center">
                    <Link to={`/profile/${authState.user.userId}`} style={{ textDecoration: 'none', color: 'black' }}>
                      <span className="mr2 pointer" role="presentation">{authState.user.name}</span>
                    </Link>
                    <MaterialIcon icon="account_circle" className="pointer noselect" style={{ color: '#6200EE' }} onClick={event => onUserIconClick(event)} />
                    <UserMenu
                      setIsUserMenuOpen={setIsUserMenuOpen}
                      isUserMenuOpen={isUserMenuOpen}
                      coordinatesOfUserMenu={coordinatesOfUserMenu}
                    />
                  </Body1>
                )
                : null
            }
            {
              mobileDevice && authState.user
                ? (
                  <div>
                    <MaterialIcon icon="account_circle" className="pointer noselect" style={{ color: '#6200EE' }} onClick={event => onUserIconClick(event)} />
                    <UserMenu
                      setIsUserMenuOpen={setIsUserMenuOpen}
                      isUserMenuOpen={isUserMenuOpen}
                      coordinatesOfUserMenu={coordinatesOfUserMenu}
                    />
                  </div>
                )
                : null
            }
            {
              mobileDevice && !authState.user
                ? (
                  <Link to="/auth/signin" style={{ textDecoration: 'none' }}>
                    <Button
                      className="mr2"
                      raised
                    >
                      Sign In
                    </Button>
                  </Link>
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

CustomTopAppBar.propTypes = {
  setDrawerOpen: PropTypes.func.isRequired,
};


export default React.memo(CustomTopAppBar);
