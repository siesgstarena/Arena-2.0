import React, { useState, useEffect, useContext } from 'react';
import Tab from '@material/react-tab';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import TabBar from '@material/react-tab-bar';
import AuthContext from '../../../../Contexts/AuthContext';

const ContestTabBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndexUpdate = (updatedActiveIndex) => {
    setActiveIndex(updatedActiveIndex);
  };
  const { authState } = useContext(AuthContext);

  const history = useHistory();
  const location = useLocation();
  const { contestId } = useParams();
  const { pathname: currentPathname } = location;

  const url = `contests/${contestId}`;
  // This useEffect checks on which url we currently are and accordingly
  // updates the value of activeIndex. So that the TabBar displays the
  // particular tab on which we are at the moment.
  useEffect(() => {
    if (currentPathname === `/${url}`) {
      setActiveIndex(0);
    } else if (currentPathname === `/${url}/status`) {
      setActiveIndex(1);
    } else if (currentPathname === `/${url}/scoreboard`) {
      setActiveIndex(2);
    } else if (currentPathname === `/${url}/change`) {
      setActiveIndex(3);
    } else if (currentPathname === `/${url}/my` && authState.user.name) {
      setActiveIndex(4);
    } else if (currentPathname === `/${url}/submit` && authState.user.name) {
      setActiveIndex(5);
    }
  }, [currentPathname, url, authState.user.name]);

  const onTabClick = (path) => {
    history.push(path);
  };

  // In this case the Link tag was not working.
  // So I have changed the routes using onClick event.
  // When the user clicks on a tab, the url is passed
  // and then we update the site according to it.
  return (
    <TabBar
      className="mb3"
      activeIndex={activeIndex}
      handleActiveIndexUpdate={handleActiveIndexUpdate}
    >
      <Tab onClick={() => onTabClick(`/${url}`)}>
        <span className="mdc-tab__text-label">Dashboard</span>
      </Tab>
      <Tab onClick={() => onTabClick(`/${url}/status`)}>
        <span className="mdc-tab__text-label">Status</span>
      </Tab>
      <Tab onClick={() => onTabClick(`/${url}/scoreboard`)}>
        <span className="mdc-tab__text-label">Scoreboard</span>
      </Tab>
      <Tab onClick={() => onTabClick(`/${url}/change`)}>
        <span className="mdc-tab__text-label">Rating Changes</span>
      </Tab>
      {
        // The reason why I have written separate checks for each test is because
        // the TabBar don't recognise any component other than the Tab component.
        // Hence when I am keeing two divs together, I had to enclose them in div/span/<>
        // which were creating issues with TabBar
        authState.user.name ? (
          <Tab onClick={() => onTabClick(`/${url}/my`)}>
            <span className="mdc-tab__text-label">My Submissions</span>
          </Tab>
        ) : (
          <></>
        )
      }
      {/* {authState.user.name ? (
        <Tab onClick={() => onTabClick(`/${url}/submit`)}>
          <span className="mdc-tab__text-label">Submit</span>
        </Tab>
      ) : (
        <></>
      )} */}
    </TabBar>
  );
};

export default ContestTabBar;
