import React from 'react';
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
import {
  homePath, contestsPath, ratingsPath, blogPath, problemSetPath,
  playlistsPath, goodiesPath, turingCupPath, signinPath, signupPath,
} from '../../../routes';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedIndex: 0,
    };
  }
  // selectedIndex is the state variable which decides which option is selected

  componentDidMount() {
    // The following conditional statements are used to
    // check that on which route our page was refreshed
    // and thereby updating the value of selectedIndex respectively.
    // This was needed to be done because when the page is refreshed
    // all the states are reset and hence the selectedIndex always was initialized
    // with 0 but the active link was the same as the previous one.
    const { location } = this.props;
    const { pathname: currentPathname } = location;
    if (currentPathname === homePath) {
      this.setState({
        selectedIndex: 0,
      });
    } else if (currentPathname === contestsPath) {
      this.setState({
        selectedIndex: 1,
      });
    } else if (currentPathname === ratingsPath) {
      this.setState({
        selectedIndex: 2,
      });
    } else if (currentPathname === blogPath) {
      this.setState({
        selectedIndex: 3,
      });
    } else if (currentPathname === problemSetPath) {
      this.setState({
        selectedIndex: 4,
      });
    } else if (currentPathname === playlistsPath) {
      this.setState({
        selectedIndex: 5,
      });
    } else if (currentPathname === goodiesPath) {
      this.setState({
        selectedIndex: 6,
      });
    } else if (currentPathname === turingCupPath) {
      this.setState({
        selectedIndex: 7,
      });
    } else {
      this.setState({
        // selectedIndex : 100 specifies that no item from the drawer is selected
        // Any random large number can be taken
        selectedIndex: 100,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { pathname: currentPathname } = location;
    const { location: oldLocation } = prevProps;
    const { pathname: oldPathname } = oldLocation;
    // Here we update the states when the URL is changed
    // And according to value of the URL(currentPathname) we assign the value of selectedIndex
    // And we also make sure that when the URL is changed we close the drawer

    if (oldPathname !== currentPathname) {
      if (currentPathname === homePath) {
        this.setState({
          selectedIndex: 0,
          open: false,
        });
      } else if (currentPathname === contestsPath) {
        this.setState({
          selectedIndex: 1,
          open: false,
        });
      } else if (currentPathname === ratingsPath) {
        this.setState({
          selectedIndex: 2,
          open: false,
        });
      } else if (currentPathname === blogPath) {
        this.setState({
          selectedIndex: 3,
          open: false,
        });
      } else if (currentPathname === problemSetPath) {
        this.setState({
          selectedIndex: 4,
          open: false,
        });
      } else if (currentPathname === playlistsPath) {
        this.setState({
          selectedIndex: 5,
          open: false,
        });
      } else if (currentPathname === goodiesPath) {
        this.setState({
          selectedIndex: 6,
          open: false,
        });
      } else if (currentPathname === turingCupPath) {
        this.setState({
          selectedIndex: 7,
          open: false,
        });
      } else {
        this.setState({
        // selectedIndex : 100 specifies that no item from the drawer is selected
        // Any random large number can be taken
          selectedIndex: 100,
          open: false,
        });
      }
    }
  }

  // The following function closes the drawer (by making open=false)
  // and updates selectedIndex depending upon which item is clicked
  onItemClick = (index) => {
    const { open } = this.state;
    this.setState({
      open: !open,
      selectedIndex: index,
    });
  }

  render() {
    // notMobile turns out to be true when the device width is greater than 480px
    const notMobile = window.innerWidth > 480;
    const { open, selectedIndex } = this.state;
    const { history } = this.props;
    return (
      <div>
        { open
          ? (
            <Drawer
              className="react-drawer-alternate"
              modal
              open={open}
              onClose={() => this.setState({ open: false })}
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
                    <ListItem key={item.id} className="pointer" style={{ padding: '0' }} onClick={() => this.onItemClick(index)}>
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

        <TopAppBar className="react-top-app-bar-alternate">
          <TopAppBarRow>
            <TopAppBarSection align="start">
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon="menu" onClick={() => this.setState({ open: !open })} />
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
                      onClick={() => history.push(signinPath)}
                    >
                      Sign In
                    </Button>
                    <Button
                      raised
                      onClick={() => history.push(signupPath)}
                    >
                      Sign Up
                    </Button>
                  </div>
                )
                : (
                  <Button
                    className="mr2"
                    raised
                    onClick={() => history.push(signupPath)}
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
  }
}

AppBar.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default AppBar;
