import React from 'react';
import { Headline6 } from '@material/react-typography';
import { Grid, Cell, Row } from '@material/react-layout-grid';
import PropTypes from 'prop-types';
import FileDataBlock from '../../../admin/problemPage/FileDataBlock';
import Viewer from '../../../common/MarkdownEditor/Viewer';

const WrongAnswerContent = ({
  inputFile,
  outputFile,
  output,
  showOutput,
  outputFileLink,
  expectedOutputLink,
}) => (
  <Grid style={{ padding: 0, margin: 0 }}>
    <Row>
      <Cell desktopColumns={6}>
        <FileDataBlock title="Input File" fileLink={inputFile} />
      </Cell>
      <Cell desktopColumns={6}>
        <FileDataBlock title="Output File" fileLink={expectedOutputLink} />
      </Cell>
    </Row>
    <Row>
      {showOutput ? (
        <>
          <Cell desktopColumns={6}>
            <Headline6 className="purple ma0 mb2">Expected Output:</Headline6>
            <Viewer value={outputFile} />
          </Cell>
          <Cell desktopColumns={6}>
            <Headline6 className="purple ma0 mb2">Your Output:</Headline6>
            <Viewer value={output} />
          </Cell>
        </>
      ) : (
        <>
          <Cell desktopColumns={6}>
            <FileDataBlock title="Expected Output" fileLink={expectedOutputLink} />
          </Cell>
          <Cell desktopColumns={6}>
            <FileDataBlock title="Your Output" fileLink={outputFileLink} />
          </Cell>
        </>
      )}
    </Row>
  </Grid>
);

WrongAnswerContent.propTypes = {
  inputFile: PropTypes.string.isRequired,
  outputFile: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
  showOutput: PropTypes.bool,
  outputFileLink: PropTypes.string.isRequired,
  expectedOutputLink: PropTypes.string.isRequired,
};

export default WrongAnswerContent;
