import React, { useState } from 'react';
import { Headline5 } from '@material/react-typography';
import PropTypes from 'prop-types';
import './SideBar.scss';

const SideBar = ({
  gettingStartedContent, dissectingProblemContent, pseudoCodeContent, writingCodeContent,
}) => {
  const [isGettingStarted, setIsGettingStarted] = useState(true);
  const [isDissectingProblem, setIsDissectingProblem] = useState(false);
  const [isPseudoCode, setIsPseudoCode] = useState(false);
  const [isWritingCode, setIsWritingCode] = useState(false);

  const gettingStartedClass = isGettingStarted ? 'active' : '';
  const dissectingProblemClass = isDissectingProblem ? 'active' : '';
  const pseudoCodeClass = isPseudoCode ? 'active' : '';
  const writingCodeClass = isWritingCode ? 'active' : '';

  const handleItemClick = (setItem) => {
    setIsGettingStarted(false);
    setIsDissectingProblem(false);
    setIsPseudoCode(false);
    setIsWritingCode(false);
    setItem(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="center">
      <div className="sidebar">
        <Headline5 className="tc"> Topic: Adhoc </Headline5>
        <div role="presentation" onClick={() => handleItemClick(setIsGettingStarted)} className={gettingStartedClass}>
          Getting Started
        </div>
        <div
          role="presentation"
          onClick={() => handleItemClick(setIsDissectingProblem)}
          className={dissectingProblemClass}
        >
          Dissecting the problem
        </div>
        <div role="presentation" onClick={() => handleItemClick(setIsPseudoCode)} className={pseudoCodeClass}>
          Creting a Pseudo Code
        </div>
        <div role="presentation" onClick={() => handleItemClick(setIsWritingCode)} className={writingCodeClass}>
          Writing Code
        </div>
      </div>

      <div className="content">
        {
          isGettingStarted
            ? gettingStartedContent
            : <span />
        }
        {
          isDissectingProblem
            ? dissectingProblemContent
            : <span />
        }
        {
          isPseudoCode
            ? pseudoCodeContent
            : <span />
        }
        {
          isWritingCode
            ? writingCodeContent
            : <span />
        }

      </div>
    </div>
  );
};

SideBar.propTypes = {
  gettingStartedContent: PropTypes.object.isRequired,
  dissectingProblemContent: PropTypes.object.isRequired,
  pseudoCodeContent: PropTypes.object.isRequired,
  writingCodeContent: PropTypes.object.isRequired,
};

export default SideBar;
