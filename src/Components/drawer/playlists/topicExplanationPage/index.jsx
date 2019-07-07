import React, { useState } from 'react';
import { Headline5, Body1 } from '@material/react-typography';
import './index.scss';

const TopicExplanationPage = () => {
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
            ? <Body1>Getting started</Body1>
            : <span />
        }
        {
          isDissectingProblem
            ? <Body1>Dissecting the problem</Body1>
            : <span />
        }
        {
          isPseudoCode
            ? <Body1>Writing the pseudo code</Body1>
            : <span />
        }
        {
          isWritingCode
            ? <Body1>Writing Code</Body1>
            : <span />
        }

      </div>
    </div>
  );
};

export default TopicExplanationPage;
