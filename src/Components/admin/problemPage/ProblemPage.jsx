import React from 'react';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import DataBlock from './DataBlock';
import FileDataBlock from './FileDataBlock';

const ProblemPage = ({ problemDetails, isAdminPage = false }) => (
  <div className="center">
    <Headline6 className="purple mt0 mb3 tc">
      {`${problemDetails.code} :  ${problemDetails.name} (${problemDetails.points})`}
    </Headline6>
    <DataBlock title="Description" content={problemDetails.description} />
    <DataBlock title="Input" content={problemDetails.explainInput} />
    <DataBlock title="Output" content={problemDetails.explainOutput} />
    <DataBlock title="Constraints" content={problemDetails.constraints} />
    <DataBlock title="Example" content={problemDetails.example} />
    <DataBlock
      title="Explanation"
      content={problemDetails.explanation ? problemDetails.explanation : 'No explanation available'}
    />
    {isAdminPage ? (
      <>
        <FileDataBlock title="Input File" fileLink={problemDetails.inputFile} />
        <FileDataBlock title="Output File" fileLink={problemDetails.outputFile} />
      </>
    ) : null}
  </div>
);

ProblemPage.propTypes = {
  problemDetails: PropTypes.object.isRequired,
  isAdminPage: PropTypes.bool,
};

export default ProblemPage;
