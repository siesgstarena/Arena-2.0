import React, { useContext } from 'react';
import Menu, { MenuList, MenuListItem, MenuListItemText } from '@material/react-menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../../Contexts/AuthContext';

const UserMenu = ({ setIsUserMenuOpen, isUserMenuOpen, coordinatesOfUserMenu }) => {
  const { authState, authDispatch } = useContext(AuthContext);
  const userMenuOptions = [
    {
      name: 'New Post',
      path: '/blog/create',
    },
    {
      name: 'My Posts',
      path: '/blog/my',
    },
    {
      name: 'My Profile',
      path: `/profile/${authState.user.userId}`,
    },
    {
      name: 'Settings',
      path: `/profile/${authState.user.userId}/settings`,
    },
  ];
  const handleLogoutClick = () => {
    authDispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <Menu
      open={isUserMenuOpen}
      onClose={() => setIsUserMenuOpen(false)}
      coordinates={coordinatesOfUserMenu}
      onSelected={() => setIsUserMenuOpen(false)}
    >
      <MenuList>
        {userMenuOptions.map(option => (
          <Link key={option.name} to={option.path} style={{ color: 'black', textDecoration: 'none' }}>
            <MenuListItem className="pointer">
              <MenuListItemText className="outline-0" primaryText={option.name} />
            </MenuListItem>
          </Link>
        ))}
        <Link to={{ pathname: '/auth/signin', state: { messageType: 'success', message: 'Sucessfully logged out' } }} style={{ color: 'black', textDecoration: 'none' }}>
          <MenuListItem className="pointer" onClick={handleLogoutClick}>
            <MenuListItemText className="outline-0" primaryText="Logout" />
          </MenuListItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

UserMenu.propTypes = {
  setIsUserMenuOpen: PropTypes.func.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  coordinatesOfUserMenu: PropTypes.object.isRequired,
};

export default React.memo(UserMenu);
