import React from 'react';
import { Link } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import tags from './tags';

const ChooseTags = () => {
  const tagsArray = tags.map(tag => (
    <Link key={tag.name} to={`/search?q=${tag.query}`} className="pointer">
      <span className="ba dib br4 pa2 f6 black-60 mt2 mr2">
        {tag.name}
      </span>
    </Link>
  ));
  return (
    <div>
      <Headline6 className="purple ma0 mb2">
        Choose By Tags
      </Headline6>
      { tagsArray }
    </div>
  );
};

export default ChooseTags;
