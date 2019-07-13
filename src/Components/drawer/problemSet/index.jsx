import React from 'react';
// import { Headline6, Body1, Body2 } from '@material/react-typography';
// import { Link } from 'react-router-dom';

const ProblemSet = ({ location, history }) => {
  const params = new URLSearchParams(location.search);

  console.log(location);
  const tags = params.get('tags');
  console.log(tags);
  console.log(params);
  console.log(params.get('newtag'));
  return (
    <div className="center pa2 mt5 mw7">
      <a className="purple mt0 mb5 tc" href="?tags=adhoc">Playlists Home</a>
      <a href="?tags=string">
        Hello
      </a>
      {
        tags === null
          ? (
            <div>
              <a href="?tags=adhoc">Adhoc</a>
              <a href="?tags=string">String</a>
            </div>
          )
          : <span />
      }
      {
        tags === 'adhoc'
          ? <p>Adhoc</p>
          : <span />
      }
      {
        tags === 'string'
          ? <p>String</p>
          : <span />
      }
    </div>
  );
};

export default ProblemSet;
