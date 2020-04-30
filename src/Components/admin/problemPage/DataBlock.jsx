import React from 'react';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import Viewer from '../../common/MarkdownEditor/Viewer';

const DataBlock = ({ title, content }) => (
  <div className="ma0 mb4" style={{ border: '1px solid purple', borderRadius: '6px' }}>
    <div
      className="pa2"
      style={{
        borderBottom: '1px solid purple',
        background: '#F0E8FF',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
      }}
    >
      <Headline6 style={{ color: 'purple' }} className="ma2">
        {title}
      </Headline6>
    </div>
    <div className="ma1">
      <Viewer value={content} />
    </div>
  </div>
);

DataBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DataBlock;
