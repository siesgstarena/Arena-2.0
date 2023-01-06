import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Cell } from '@material/react-layout-grid';
import Fab from '@material/react-fab';
import MaterialIcon from '@material/react-material-icon';
import ContestDetails from './ContestDetails';
import Announcements from './Announcements';
import Submit from './SubmitOnProblemPage';
import ContestTabBar from './ContestTabBar';
import './Split.css';

const ContestPageElement = ({ children, contestDetails, isMobile, parentClassName }) => {
  const { name, description, endsAt, announcement, startsAt } = contestDetails;
  const [isEditorOpen, setEditorOpen] = useState(false);
  return (
    <React.Fragment key="ChildrenElement">
      {(!isMobile || !isEditorOpen) && (
        <Cell desktopColumns={9} tabletColumns={8} className={`${parentClassName} scrollbar`}>
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
          className="center editor-btn-fab"
          icon={<MaterialIcon icon={!isEditorOpen ? 'data_object' : 'arrow_back_ios'} />}
          onClick={() => setEditorOpen(!isEditorOpen)}
        />
      )}
      {(!isMobile || isEditorOpen) && (
        <Cell className="editor scrollbar">
          <Submit setEditorOpen={setEditorOpen} />
        </Cell>
      )}
    </React.Fragment>
  );
};

ContestPageElement.propTypes = {
  children: PropTypes.any.isRequired,
  contestDetails: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  parentClassName: PropTypes.string.isRequired,
};
export default ContestPageElement;
