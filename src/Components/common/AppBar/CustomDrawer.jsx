import React, { useEffect, useContext, useState } from 'react';
import Drawer, {
  DrawerContent, DrawerHeader, DrawerTitle, DrawerSubtitle,
} from '@material/react-drawer';
import { useLocation, NavLink } from 'react-router-dom';
import List, {
  ListItem, ListItemGraphic, ListItemText,
} from '@material/react-list';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
// import { Redirect } from 'react-router-dom';
import drawerItems from './drawerItems';
import AuthContext from '../../../Contexts/AuthContext';

const CustomDrawer = ({ setDrawerOpen, drawerOpen }) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  const { pathname: currentPathname } = location;
  // The default value is set to 100 which will not highlight any option from
  // the drawer. The item will be highlighted if the path matches
  const [selectedIndex, setSelectedIndex] = useState(100);
  useEffect(() => {
    if (currentPathname === '/') {
      setSelectedIndex(0);
    } else if (currentPathname === '/contests') {
      setSelectedIndex(1);
    } else if (currentPathname === '/ratings') {
      setSelectedIndex(2);
    } else if (currentPathname === '/blog') {
      setSelectedIndex(3);
    } else if (currentPathname === '/problem-set') {
      setSelectedIndex(4);
    } else if (currentPathname === '/playlists') {
      setSelectedIndex(5);
    } else if (currentPathname === '/goodies') {
      setSelectedIndex(6);
    }
  }, [currentPathname]);
  const onDrawerItemClick = (index) => {
    setDrawerOpen(previousValue => !previousValue);
    setSelectedIndex(index);
  };
  return (
    <Drawer
      className="react-drawer-alternate"
      modal
      open={drawerOpen}
      onClose={() => setDrawerOpen(previousValue => !previousValue)}
    >

      <DrawerHeader>
        {/* defaults to div */}
        <DrawerTitle tag="h2">
          {/* defaults to h3 */}
          Explore Arena
        </DrawerTitle>
        <DrawerSubtitle style={{ wordWrap: 'break-word' }}>
          {/* defaults to h6 */}
          {authState && authState.user && authState.user.email ? authState.user.email : ''}
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
  );
};

CustomDrawer.propTypes = {
  setDrawerOpen: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default React.memo(CustomDrawer);
