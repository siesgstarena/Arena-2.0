import React, { useContext } from 'react';
import Menu, { MenuList, MenuListItem, MenuListItemText } from '@material/react-menu';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import AuthContext from '../../../Contexts/AuthContext';
import { LOGOUT } from '../../../graphql/mutations';
import useClearCache from '../../../customHooks/useClearCache';

const UserMenu = ({
  setIsUserMenuOpen,
  isUserMenuOpen,
  coordinatesOfUserMenu,
  setSnackbarMessage,
}) => {
  const { authState } = useContext(AuthContext);
  const { clearEntireCache } = useClearCache();

  const client = useApolloClient();
  const history = useHistory();
  const userMenuOptions = [
    {
      name: 'New Post',
      path: '/blogs/create',
    },
    {
      name: 'My Posts',
      path: '/blogs/my',
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
  const handleLogoutClick = async () => {
    setSnackbarMessage('Logging out, please wait');
    const { data, error } = await client.mutate({
      mutation: LOGOUT,
      variables: { id: authState.user.userId },
      // made fetch policy to no-cache so that we always hit the server to clear cookies
      fetchPolicy: 'no-cache',
    });
    if (error) {
      setSnackbarMessage('Database error encountered');
      return;
    }
    if (data.logout.success) {
      setSnackbarMessage('');
      clearEntireCache();
      history.push({
        pathname: '/auth/signin',
        state: {
          message: 'Successfully logged out',
          messageType: 'success',
        },
      });
    } else {
      setSnackbarMessage(data.logout.message);
    }
  };

  return (
    <>
      <Menu
        open={isUserMenuOpen}
        onClose={() => setIsUserMenuOpen(false)}
        coordinates={coordinatesOfUserMenu}
        onSelected={() => setIsUserMenuOpen(false)}
      >
        <MenuList>
          {userMenuOptions.map((option) => (
            <Link
              key={option.name}
              to={option.path}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <MenuListItem className="pointer">
                <MenuListItemText className="outline-0" primaryText={option.name} />
              </MenuListItem>
            </Link>
          ))}
          <div>
            <MenuListItem className="pointer" onClick={handleLogoutClick}>
              <MenuListItemText className="outline-0" primaryText="Logout" />
            </MenuListItem>
          </div>
        </MenuList>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {
  setIsUserMenuOpen: PropTypes.func.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  coordinatesOfUserMenu: PropTypes.object.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default React.memo(UserMenu);
