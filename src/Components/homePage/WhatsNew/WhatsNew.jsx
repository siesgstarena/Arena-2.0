import React from 'react';
import { Link } from 'react-router-dom';
import {
  Headline5, Headline6, Body2, Body1,
} from '@material/react-typography';
import Card from '@material/react-card';
import './WhatsNew.css';
import { latestInfo, trendingInfo } from './info';

const WhatsNew = () => (
  <Card className="center ma0" style={{ borderRadius: '10px' }}>
    <div className="pa2 flex flex-column justify-between">
      <div className="pa1 mb2">
        <div className="flex justify-between mb1">
          <Headline5 className="ma0 flex items-center">
            Latest
            <img className="blink" alt="new" src="https://img.icons8.com/material-outlined/36/6200ee/new.png" />
          </Headline5>
          <Link
            to="/contests/"
          >
            <img alt="view" src="https://img.icons8.com/material/30/6200ee/exit.png" />
          </Link>
        </div>
        {
    latestInfo.map(
      latest => (
        <div className="flex flex-column pa2" key={latest.name}>
          <Link
            className="no-underline black pointer"
            to={latest.contestLink}
          >
            <Headline6 style={{ fontSize: '1.1rem' }} className="ma0">{latest.name}</Headline6>
          </Link>
          <Body2 style={{ fontSize: '0.9rem' }} className="ma0 mid-gray">{`Ends in ${latest.endsIn}`}</Body2>
        </div>
      ),
    )
    }
      </div>
      <div className="ba light-gray center w4 mb2" />
      <div className="pa1">
        <div className="flex justify-between mb1">
          <Headline5 className="ma0 flex items-center">
            Trending
            <img alt="fire" className="blink" src="https://img.icons8.com/emoji/24/000000/fire.png"/>
          </Headline5>
          <Link
            to="/blogs/"
          >
            <img alt="view" src="https://img.icons8.com/material/30/6200ee/exit.png" />
          </Link>
        </div>
        {
        trendingInfo.map(
          trend => (
            <div key={trend.title} className="pa2">
              <Link
                to={trend.blogLink}
                className="pointer no-underline black"
              >
                <Headline6 style={{ fontSize: '1.1rem', lineHeight:'1.4rem' }} className="ma0">{trend.title}</Headline6>
              </Link>
              <Body1 style={{ fontSize: '0.9rem' }} className="ma0 mid-gray">{trend.createdAt}</Body1>
              <div className="ba light-gray center w3" />
            </div>
          ),
        )
        }
      </div>
    </div>
  </Card>
);

export default WhatsNew;
