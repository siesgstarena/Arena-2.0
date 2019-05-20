import React from 'react';
import { Headline6, Headline4 } from '@material/react-typography';
import { currentContestsArray, pastContestsArray } from './contestsArray';
import Table from './Table';
import './index.scss';
import 'tachyons';

const ContestsScehdule = () => (
  <div className="pa2 mw8-ns center">
    <Headline4 className="purple mt2">Contests</Headline4>
    <Headline6 className="purple mb2 mt1">Ongoing Contests</Headline6>
    <Table rows={currentContestsArray} />
    <Headline6 className="purple mb2">Past Contests</Headline6>
    <Table rows={pastContestsArray} />
  </div>
);

export default ContestsScehdule;
