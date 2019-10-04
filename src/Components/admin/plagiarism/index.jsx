import React from 'react';
import { Headline4, Body1 } from '@material/react-typography';
import PlagiarismTable from './PlagiarismTable';

const Plagiarism = () => (
  <div className="mw7 center">
    <Headline4 className="purple mb0">Plagiarism Status</Headline4>
    <Body1 className="mid-gray mt2">See who is cheating in the contest</Body1>
    <PlagiarismTable />
  </div>
);

export default Plagiarism;
