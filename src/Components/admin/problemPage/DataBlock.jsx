import React from 'react';
import { Headline5, Body1 } from '@material/react-typography';

const DataBlock = () => (
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
        Description
      </Headline5>
    </div>
    <Body1 className="pa2 ma2">
      Shaggy and Scooby are in the middle of another magical mystery and apparently
      Scooby Doo’s life is in danger, he is trapped in a burning house which is
      locked by a magical door. Shaggy is trying to help Scooby.
      <br />
      <br />
      The door has a word (all alphabets are lowercase) written on it.
      To open the door, all Shaggy needs to do is to pick some alphabets
      from that word ( in any order ) and try to form the word “scooby” out of them.
      <br />
      <br />
      Your task is to find out if it is possible to save Scooby Doo.
      <br />
      <br />
    </Body1>
  </div>
);

export default DataBlock;
