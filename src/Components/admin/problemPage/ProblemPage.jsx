import React from 'react';
import { Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import DataBlock from './DataBlock';
import FileDataBlock from './FileDataBlock';

const ProblemPage = ({ problemDetails }) => (
  <div className="mw7 center">
    <Headline4 className="purple mt2 mb3 tc">
      {`${problemDetails.name} (${problemDetails.points})`}
    </Headline4>
    <DataBlock title="Description" content={problemDetails.description} />
    <DataBlock title="Input" content={problemDetails.explainInput} />
    <DataBlock title="Output" content={problemDetails.explainOutput} />
    <DataBlock title="Constraints" content={problemDetails.constraints} />
    <DataBlock title="Example" content={problemDetails.example} />
    <DataBlock title="Explanation" content={problemDetails.explanation} />
    <FileDataBlock title="Input File" fileLink={problemDetails.inputFile} />
    <FileDataBlock title="Output File" fileLink={problemDetails.outputFile} />
  </div>
);

ProblemPage.propTypes = {
  problemDetails: PropTypes.object.isRequired,
};

export default ProblemPage;
