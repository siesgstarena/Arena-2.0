import React from 'react';
import { Headline6 } from '@material/react-typography';
import { Grid, Cell, Row } from '@material/react-layout-grid';
import PropTypes from 'prop-types';
import FileDataBlock from '../../../admin/problemPage/FileDataBlock';
import Viewer from '../../../common/MarkdownEditor/Viewer';

const WrongAnswerContent = ({ inputFile, outputFile }) => (
  <Grid style={{ padding: 0, margin: 0 }}>
    <Row>
      <Cell desktopColumns={6}>
        <FileDataBlock title="Sample Input File" fileLink={inputFile} />
      </Cell>
      <Cell desktopColumns={6}>
        <FileDataBlock title="Sample Output File" fileLink={outputFile} />
      </Cell>
    </Row>
    <Row>
      <Cell desktopColumns={6}>
        <Headline6 className="purple ma0 mb2">Expected Output:</Headline6>
        <Viewer value="expected output" />
      </Cell>
      <Cell desktopColumns={6}>
        <Headline6 className="purple ma0 mb2">Your Output:</Headline6>
        <Viewer value="your output" />
      </Cell>
    </Row>
  </Grid>
);

WrongAnswerContent.propTypes = {
  inputFile: PropTypes.string.isRequired,
  outputFile: PropTypes.string.isRequired,
};


export default WrongAnswerContent;
