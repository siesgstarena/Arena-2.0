import React from 'react';
import { Link } from 'react-router-dom';
import { Headline5, Headline6, Body2, Body1 } from '@material/react-typography';
import Card from '@material/react-card';
import './WhatsNew.css';
import MaterialIcon from '@material/react-material-icon';
import { latestInfo, trendingInfo } from './info';

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6200ee"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-external-link"
    {...props}
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3L21 3 21 9" />
    <path d="M10 14L21 3" />
  </svg>
);

const WhatsNew = () => (
  <Card className="center ma0" style={{ borderRadius: '10px' }}>
    <div className="pa2 flex flex-column justify-between">
      <div className="pa1 mb2">
        <div className="flex justify-between mb1">
          <Headline5 className="ma0 flex items-center">
            Latest
            <MaterialIcon icon="fiber_new" className="blink ml2" style={{ color: '#6200ee' }} />
            {/* <img
              className="blink"
              alt="new"
              src="https://img.icons8.com/material-outlined/36/6200ee/new.png"
            /> */}
          </Headline5>
          <Link to="/contests/">
            <SvgComponent />
            {/* <img alt="view" src="https://img.icons8.com/material/30/6200ee/exit.png" /> */}
          </Link>
        </div>
        {latestInfo.map((latest) => (
          <div className="flex flex-column pa2" key={latest.name}>
            <Link className="no-underline black pointer" to={latest.contestLink}>
              <Headline6 style={{ fontSize: '1.1rem' }} className="ma0">
                {latest.name}
              </Headline6>
            </Link>
            <Body2
              style={{ fontSize: '0.9rem' }}
              className="ma0 mid-gray"
            >{`Ends in ${latest.endsIn}`}</Body2>
          </div>
        ))}
      </div>
      <div className="ba light-gray center w4 mb2" />
      <div className="pa1">
        <div className="flex justify-between mb1">
          <Headline5 className="ma0 flex items-center">
            Trending
            <img
              alt="fire"
              className="blink ml2"
              src="https://img.icons8.com/emoji/24/000000/fire.png"
            />
          </Headline5>
          <Link to="/blogs/">
            <SvgComponent />
            {/* <img alt="view" src="https://img.icons8.com/material/30/6200ee/exit.png" /> */}
          </Link>
        </div>
        {trendingInfo.map((trend) => (
          <div key={trend.title} className="pa2">
            <Link to={trend.blogLink} className="pointer no-underline black">
              <Headline6 style={{ fontSize: '1.1rem', lineHeight: '1.4rem' }} className="ma0">
                {trend.title}
              </Headline6>
            </Link>
            <Body1 style={{ fontSize: '0.9rem' }} className="ma0 mid-gray">
              {trend.createdAt}
            </Body1>
            <div className="ba light-gray center w3" />
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default WhatsNew;
