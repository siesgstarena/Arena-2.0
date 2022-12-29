import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Cell } from '@material/react-layout-grid';
import Split from 'react-split';
import Fab from '@material/react-fab';
import MaterialIcon from '@material/react-material-icon';
import ContestDetails from './ContestDetails';
import Announcements from './Announcements';
import Submit from './SubmitOnProblemPage';
import ContestTabBar from './ContestTabBar';
import './Split.css';
import useResizeWindow from '../../../../customHooks/useResizeWindow';

const ContestPageSkeleton = ({ children, contestDetails }) => {
  const { name, description, endsAt, announcement, startsAt } = contestDetails;
  const [isEditorOpen, setEditorOpen] = useState(false);
  const width = useResizeWindow();
  const isMobile = width <= 768;
  const ChildrenElement = (
    <React.Fragment key="ChildrenElement">
      {(!isMobile || !isEditorOpen) && (
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
      )}
      {isMobile && (
        <Fab
          textLabel={!isEditorOpen ? 'Editor' : 'Back'}
          className="center"
          style={{
            backgroundColor: '#6200EE',
            position: 'fixed',
            bottom: '0.5rem',
            left: '0.5rem',
            zIndex: 100,
          }}
          icon={<MaterialIcon icon={!isEditorOpen ? 'data_object' : 'arrow_back_ios'} />}
          onClick={() => setEditorOpen(!isEditorOpen)}
        />
      )}
      {(!isMobile || isEditorOpen) && (
        <Cell>
          <Submit />
        </Cell>
      )}
    </React.Fragment>
  );
  if (!isMobile) {
    return (
      <Split
        className="split"
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        sizes={[35, 65]}
        minSize={[0, 350]}
      >
        {[ChildrenElement]}
      </Split>
    );
  }
  return ChildrenElement;
};

ContestPageSkeleton.propTypes = {
  children: PropTypes.any.isRequired,
  contestDetails: PropTypes.object.isRequired,
};

export default ContestPageSkeleton;
