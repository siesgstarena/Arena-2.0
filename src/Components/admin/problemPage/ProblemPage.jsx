import React from 'react';
import { Headline4 } from '@material/react-typography';
import DataBlock from './DataBlock';

const ProblemPage = () => (
  <div className="mw7 center">
    <Headline4 className="purple mt0 mb3"> Scooby Doo Is In Danger (200)</Headline4>
    <DataBlock />
    <DataBlock />
    <DataBlock />
  </div>
);

export default ProblemPage;
