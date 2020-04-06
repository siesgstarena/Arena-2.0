import React from 'react';
import { Headline5, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';

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
      <Headline5 style={{ color: 'purple' }} className="ma2">
        {title}
      </Headline5>
    </div>
    <Body1 className="pa2 ma2" style={{ whiteSpace: 'pre-line' }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Body1>
  </div>
);

DataBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DataBlock;
