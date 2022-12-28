import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Cell } from '@material/react-layout-grid';
import Split from 'react-split';
import ContestDetails from './ContestDetails';
import Announcements from './Announcements';
import Submit from './SubmitOnProblemPage';
import ContestTabBar from './ContestTabBar';
import './Split.css';

const ContestPageSkeleton = ({ children, contestDetails }) => {
  const { name, description, endsAt, announcement, startsAt } = contestDetails;

  return (
    <Split
      className="split"
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      sizes={[35, 65]}
      minSize={[5, 5]}
    >
      <Cell
        desktopColumns={9}
        tabletColumns={8}
        style={{
          overflow: 'hidden',
        }}
      >
        <Cell>
          <Route path="/contests/:contestId" exact component={ContestTabBar} />
          <Route path="/contests/:contestId/status" exact component={ContestTabBar} />
          <Route path="/contests/:contestId/my" exact component={ContestTabBar} />
          <Route path="/contests/:contestId/scoreboard" exact component={ContestTabBar} />
          {/* <Route path="/contests/:contestId/submit" exact component={ContestTabBar} /> */}
          <Route path="/contests/:contestId/change" exact component={ContestTabBar} />
          <Route path="/contests/:contestId/problem/:problemId" exact component={ContestTabBar} />
          {children}
        </Cell>
        <Cell>
          <ContestDetails
            name={name}
            description={description}
            endsAt={endsAt}
            startsAt={startsAt}
          />
        </Cell>
        <Cell>
          <Announcements announcement={announcement} />
        </Cell>
      </Cell>
      <Cell>
        <Submit />
      </Cell>
    </Split>
  );
};

ContestPageSkeleton.propTypes = {
  children: PropTypes.any.isRequired,
  contestDetails: PropTypes.object.isRequired,
};

export default ContestPageSkeleton;
