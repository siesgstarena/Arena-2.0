import React from 'react';
import { useHistory } from 'react-router-dom';
import { Headline4, Body2 } from '@material/react-typography';
import ContestCardsArray from './ContestCardsArray';

const Contests = () => {
  const history = useHistory();
  return (
    <div className="mw7 center pa2">
      <Headline4 className="purple mt4 mb0 ml0">Contests</Headline4>
      <Body2 className="ml0 mid-gray">
        Single Round Matches and Long Contest |
        &nbsp;
        <span className="dim pointer" role="presentation" onClick={() => history.push('/superuser/contests/create')}>Create a new contest</span>
      </Body2>
      <ContestCardsArray />
    </div>
  );
};

export default Contests;
